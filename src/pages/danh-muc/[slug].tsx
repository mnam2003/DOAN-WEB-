import DishItemComponent from '@/components/DishItemComponent'
import HeadComponent from '@/components/HeadComponent'
import { appInfo } from '@/constants/appInfo'
import { CategoryModel } from '@/models/CategoryModel'
import { DishModel } from '@/models/DishModel'
import { Breadcrumb, Dropdown, Menu, Tabs } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { AiOutlineDown } from "react-icons/ai";

const CategorySlug = (pageProps: any) => {
  const data = pageProps
  const { categories, dishes }: { categories: CategoryModel[], dishes: DishModel[] } = data
  const [itemsTabs, setItemsTabs] = useState<{ key: string, label: string }[]>([]);
  const [selectedKeyTabs, setSelectedKeyTabs] = useState<string>('all');

  const router = useRouter()

  useEffect(() => {
    getItemsTabs(categories)
  }, []);

  useEffect(() => {
    if (router.query.slug) {
      setSelectedKeyTabs(router.query.slug as string)
    }
  }, [router.query.slug]);

  const getItemsTabs = (categories: CategoryModel[]) => {
    const item = [{ key: 'all', label: 'Tất cả sản phẩm' }]
    categories.forEach((elment) => item.push({ key: elment.slug, label: elment.title }))
    setItemsTabs(item)
  }
  return (
    <div>
      <HeadComponent title={`${selectedKeyTabs}-${appInfo.title}`} url={`${appInfo.baseURL}/danh-muc`} />
      <div className='container mx-auto my-5'>
        <Breadcrumb
          items={[
            {
              key: 'home',
              title: <Link href={'/'}>Trang chủ</Link>
            },
            {
              key: 'danh-muc',
              title: <Link href={'/danh-muc/all'}>Danh mục</Link>
            },
            {
              key: 'all',
              title: itemsTabs.find((element) => element.key === selectedKeyTabs)?.label
            }
          ]}
        />
        <div className='flex justify-center items-center bg-white rounded-lg p-4 mt-5 cursor-pointer lg:hidden'>
          <Dropdown
            className='w-full'
            menu={{
              items: itemsTabs,
              onClick: (val) => {
                setSelectedKeyTabs(val.key)
                router.push(`/danh-muc/${val.key}`)
              }
            }}
            placement='bottomCenter'
          >
            Danh mục sản phẩm
          </Dropdown>
          <AiOutlineDown size={20} />
        </div>
        <div className='lg:grid grid-cols-12 gap-4 mt-10'>
          <div className='col-span-3'>
            <div className='hidden lg:block'>
              <Tabs
                activeKey={selectedKeyTabs}
                items={itemsTabs}
                onChange={(key) => {
                  setSelectedKeyTabs(key)
                  router.push(`/danh-muc/${key}`)
                }}
                tabPosition='left'
                tabBarStyle={{
                  width: 200,
                }}
              />
            </div>
          </div>
          <div className='col-span-9'>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
              {
                dishes.length > 0 ? dishes.map((element, index) => (<DishItemComponent dish={element} key={index} />)) : 'Danh mục này không có sản phẩm nào'
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async ({ params }: any) => {
  try {
    const slug = params.slug
    const resCate = await fetch(`${appInfo.baseURL}/dish/get-all-categories`)
    const categories = await resCate.json()

    const resDish = await fetch(`${appInfo.baseURL}/dish/get-all-dish`)
    const allDishes = await resDish.json()

    const category = categories.data.find((c: CategoryModel) => c.slug === slug)
    const dishes = slug === 'all'
      ? allDishes.data
      : allDishes.data.filter((d: DishModel) => d.categories.includes(category._id))

    return {
      props: {
        categories: categories.data,
        dishes: dishes,
      },
    }
  } catch (error) {
    return {
      props: {
        categories: [],
        dishes: []
      },
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${appInfo.baseURL}/dish/get-all-categories`)
  const data = await res.json()

  const paths = data.data.map((category: CategoryModel) => ({
    params: { slug: category.slug },
  }))

  paths.push({ params: { slug: 'all' } })

  return { paths, fallback: false }
}

export default CategorySlug

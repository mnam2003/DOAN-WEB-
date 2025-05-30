/* eslint-disable @typescript-eslint/no-explicit-any */
import HeadComponent from '@/components/HeadComponent'
import MenuItemSwiperComponent from '@/components/MenuItemSwiperComponent'
import { appInfo } from '@/constants/appInfo'
import { DishModel } from '@/models/DishModel'
import { VND } from '@/utils/handleCurrency'
import { Breadcrumb, Button, Divider, Typography } from 'antd'
import Link from 'next/link'
import React from 'react'

const DishDetail = (pageProps: any) => {
  const data = pageProps
  const { dish, dishes }: { dish: DishModel, dishes: DishModel[] } = data
  return (
    <div>
      <HeadComponent title={`${dish.title}-${appInfo.title}`} description={dish.description} image={dish.images[0]} url={`${appInfo.baseURL}/danh-muc`} />
      <div className='container mx-auto'>
        <Breadcrumb
          className='my-5'
          items={[
            {
              key: 'home',
              title: <Link href={'/'}>Trang chủ</Link>
            },
            {
              key: 'dishItem',
              title: dish.title
            }
          ]}
        />
        <div className='md:grid grid-cols-12'>
          <div className='col-span-5 flex justify-center items-center'>
            <div className='w-2/3'>
              <img className='w-full aspect-[1/1] object-cover rounded-xl' src={dish.images[0]} alt={dish.title} />
            </div>
          </div>
          <div className='col-span-7'>
            <Typography.Title level={2}>{dish.title}</Typography.Title>
            <Typography.Paragraph>{dish.description}</Typography.Paragraph>
            <span className='text-[1.5rem] font-bold'>{VND.format(dish.price)}</span>
            <Typography.Paragraph className='mt-5'>Đặt bàn để trải nghiệm ngay:</Typography.Paragraph>
            <div className='mt-5'>
              <Button type='primary' className='p-5 rounded-[999px]'>
                <Link href={'/'}>Đặt bàn ngay</Link>
              </Button>
            </div>
          </div>
        </div>
        <Divider className='mt-10'/>
        <div className='mt-5 mb-10'>
          <h2 className='mb-8'>Bạn có sẽ thể thích</h2>
          <MenuItemSwiperComponent dishes={dishes}/>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async ({ params }: any) => {
  try {
    const slug = params.slug

    const resDish = await fetch(`${appInfo.baseURL}/dish/get-all-dish`)
    const allDishes = await resDish.json()
    const dish = allDishes.data.find((item: DishModel) => item.slug === slug)

    return {
      props: {
        dish: dish,
        dishes: allDishes.data,
      },
    }
  } catch (error) {
    console.error(error)
    return {
      props: {
        dish: {},
        dishes: [],
      },
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${appInfo.baseURL}/dish/get-all-dish`)
  const data = await res.json()

  const paths = data.data.map((dish: DishModel) => ({
    params: { slug: dish.slug },
  }))

  return { paths, fallback: false }
}

export default DishDetail

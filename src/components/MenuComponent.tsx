import handleAPI from '@/apis/handleAPI'
import {CategoryModel } from '@/models/CategoryModel'
import { DishModel } from '@/models/DishModel'
import { Button, Tabs, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import MenuItemSwiperComponent from './MenuItemSwiperComponent'
import Link from 'next/link'

interface Props {
    categoryParent: CategoryModel[]
}

const MenuComponent = (props: Props) => {
    const {categoryParent} = props
    const [selectedKeyTabs, setSelectedKeyTabs] = useState(categoryParent[1]._id);
    const [dishes, setDishes] = useState<DishModel[]>([]);

    useEffect(() => {
        if(selectedKeyTabs) {
            getDishByIdCategory(selectedKeyTabs)
        }
    }, [selectedKeyTabs]);

    const getDishByIdCategory = async (id: string) => {
        try {
            const api = `/dish/get-dish-by-id-category?id=${id}`
            const res = await handleAPI(api)
            setDishes(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div
            style={{
                width: '100%',
                aspectRatio: '1 / 0.4',
                backgroundImage: "url('https://res.cloudinary.com/dyu519e7i/image/upload/v1744341468/Section_11_ckuxt5.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="container mx-auto p-10 ">
                <Typography.Title level={1} className='text-center'>Thực đơn</Typography.Title>
                <div className='flex justify-center'>
                    <div className='w-1/2'>
                        <Tabs
                            defaultActiveKey={categoryParent[1]._id} 
                            items={categoryParent.map((cat) => ({
                                key: cat._id,
                                label: cat.title,
                            }))}
                            onChange={(key) => setSelectedKeyTabs(key)}
                            centered
                            style={{
                                fontWeight: 'bold'
                            }}
                        />
                    </div>
                </div>
                <MenuItemSwiperComponent dishes={dishes}/>
                <div className='mt-5 text-center'>
                    <Button size='large' type='primary'>
                        <Link href={'/'}>Xem thêm</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default MenuComponent

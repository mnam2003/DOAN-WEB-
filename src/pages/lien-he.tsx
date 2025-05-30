/* eslint-disable @typescript-eslint/no-explicit-any */
import handleAPI from '@/apis/handleAPI'
import HeadComponent from '@/components/HeadComponent'
import MenuItemSwiperComponent from '@/components/MenuItemSwiperComponent'
import { appInfo } from '@/constants/appInfo'
import { DishModel } from '@/models/DishModel'
import { Button, Divider, Form, Input, message, Typography } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React, { useState } from 'react'

const Contact = (pageProps: any) => {
    const data = pageProps
    const { dishes }: { dishes: DishModel[] } = data

    const [isLoading, setIsLoading] = useState(false);

    const [form] = useForm()

    const handleSendFeedback = async (values: any) => {
        try {
            setIsLoading(true)
            const api = '/feedback/add-new-feedback'
            const res = await handleAPI(api, {...values, status: 'Chưa phản hổi'}, 'post')
            if(res.data) {
                message.success('Cảm ơn bạn đã góp ý cho nhà hàng.')
            }
        } catch (error) {
            console.log(error)
            message.error('Gửi ý kiến đánh giá không thành công!!')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div>
            <HeadComponent />
            <div className='container mx-auto'>
                <div className='md:grid grid-cols-2 gap-10 mt-10'>
                    <div>
                        <h1>Liên hệ với chúng tôi</h1>
                        <h2 className='my-5'>NHÀ HÀNG HẢI DƯƠNG</h2>
                        <Typography.Paragraph>Địa chỉ: Xã Tam Quan - huyện Tam Đảo - tỉnh Vĩnh Phúc</Typography.Paragraph>
                        <Typography.Paragraph>Số điện thoại: 0395565218</Typography.Paragraph>
                        <Typography.Paragraph>Thời gian phục vụ: 10h00 đến 14h00 và 17h00 đến 22h00</Typography.Paragraph>
                    </div>
                    <div>
                        <h2 className='mb-5'>Ý KIẾN / ĐÁNH GIÁ CỦA KHÁCH HÀNG</h2>
                        <Form
                            size='large'
                            layout='vertical'
                            form={form}
                            onFinish={handleSendFeedback}
                        >
                            <Form.Item name='name' label='Tên khách hàng:' rules={[{ required: true, message: 'Vui lòng nhập tên khác hàng!!' }]}>
                                <Input placeholder='Nhập tên' allowClear />
                            </Form.Item>
                            <Form.Item name='email' label='Email:' rules={[{ required: true, message: 'Vui lòng nhập email khác hàng!!' }]}>
                                <Input placeholder='Nhập Email' allowClear />
                            </Form.Item>
                            <Form.Item name='content' label='Ý kiến / đánh giá:' rules={[{ required: true, message: 'Bạn chưa nhập nội dung!!' }]}>
                                <Input.TextArea maxLength={1000} showCount rows={5} allowClear />
                            </Form.Item>
                        </Form>
                        <Button type='primary' size='large' className='w-full mt-5' loading={isLoading} onClick={() => form.submit()}>Gửi ngay</Button>
                    </div>
                </div>
                <Divider className='mt-10' />
                <div className='mt-5 mb-10'>
                    <h2 className='mb-8'>Bạn có sẽ thể thích</h2>
                    <MenuItemSwiperComponent dishes={dishes} />
                </div>
            </div>
        </div>
    )
}

export const getStaticProps = async () => {
    try {

        const resDish = await fetch(`${appInfo.baseURL}/dish/get-all-dish`)
        const allDishes = await resDish.json()

        return {
            props: {
                dishes: allDishes.data,
            },
        }
    } catch (error) {
        console.error(error)
        return {
            props: {
                dishes: [],
            },
        }
    }
}

export default Contact

/* eslint-disable @typescript-eslint/no-explicit-any */
import handleAPI from '@/apis/handleAPI'
import { Button, DatePicker, Form, Input, message, Select, Typography } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React, { useState } from 'react'

const ReservationsComponent = () => {

    const [isLoading, setIsLoading] = useState(false);

    const [form] = useForm()

    const handleAddReservation = async (values: any) => {
        const data: any = {}
        for (const i in values) {
            data[i] = values[i] ?? ''
        }
        data.status = 'Chờ xử lý'
        try {
            setIsLoading(true)
            const api = '/reservations/add-new-reservations'
            const res: any = await handleAPI(api, data, 'post')
            if(res.data) {
                message.success('Cảm ơn bạn đã đặt bàn, chúng tôi sẽ sớm phản hồi')
            } 
            form.resetFields()
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div
            className="w-full h-[70vh] md:h-auto md:min-h-[400px] md:aspect-[1/0.4]"
            style={{
                backgroundImage: "url('https://res.cloudinary.com/dyu519e7i/image/upload/v1744255558/Section_7_udvmrv.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
            <div className="container mx-auto mt-14 h-full">
                <div className='flex justify-center items-center h-full'>
                    <Form form={form} size='large' layout='vertical' onFinish={handleAddReservation}>
                        <Typography.Title
                            level={1}
                            className="!text-white text-center"
                        >
                            Đặt bàn
                        </Typography.Title>
                        <div className='md:flex md:justify-center md:gap-7 mt-10'>
                            <div>
                                <label className='text-white'>Tên: </label>
                                <Form.Item name='name' rules={[{ required: true, message: 'Bạn chưa nhập tên!!!' }]}>
                                    <Input className='w-full lg:w-[500px]' allowClear placeholder='Vui lòng nhập tên' />
                                </Form.Item>
                                <label className='text-white'>Email: </label>
                                <Form.Item name='email' rules={[{ required: true, message: 'Bạn chưa nhập email!!!' }]}>
                                    <Input className='w-full lg:w-[500px]' allowClear placeholder='vui lòng nhập email' />
                                </Form.Item>
                                <label className='text-white'>Chọn ngày:</label>
                                <Form.Item name='reservation_date' rules={[{ message: 'Vui lòng nhập ngày kết thúc !!', required: true }]}>
                                    <DatePicker className='w-full' format={'DD/MM/YYYY'} placeholder='Chọn ngày' />
                                </Form.Item>
                            </div>
                            <div>
                                <label className='text-white'>Số điện thoại:</label>
                                <Form.Item name='phone' rules={[{ required: true, message: 'Bạn chưa nhập số điện thoại!!!' }]}>
                                    <Input className='w-full lg:w-[500px]' allowClear placeholder='Vui lòng nhập số điện thoại' />
                                </Form.Item>
                                <label className='text-white'>Thời gian:</label>
                                <Form.Item name='reservation_time' rules={[{ required: true, message: 'Bạn chưa chọn thời gian!!!' }]}>
                                    <Select
                                        className='w-full lg:w-[500px]'
                                        placeholder='Chọn thời gian'
                                        options={[
                                            { label: '10:00 - 14:00', value: '10:00 - 14:00' },
                                            { label: '17:00 - 22:00', value: '17:00 - 22:00' },
                                        ]}
                                    />
                                </Form.Item>
                            </div>
                        </div>
                        <div className='text-center mt-6'>
                            <Button
                                loading={isLoading}
                                type='primary'
                                className='py-8 px-14 rounded-[999px]'
                                onClick={() => form.submit()}
                            >
                                Đặt bàn
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default ReservationsComponent

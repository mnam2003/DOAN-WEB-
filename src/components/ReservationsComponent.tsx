import { Button, Form, Input, Select, Typography } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React from 'react'

const ReservationsComponent = () => {

    const [form] = useForm()
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
                    <Form form={form} size='large' layout='vertical'>
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
                            </div>
                            <div>
                                <label className='text-white'>Số điện thoại:</label>
                                <Form.Item name='phoneNumber' rules={[{ required: true, message: 'Bạn chưa nhập số điện thoại!!!' }]}>
                                    <Input className='w-full lg:w-[500px]' allowClear placeholder='Vui lòng nhập số điện thoại' />
                                </Form.Item>
                                <label className='text-white'>Thời gian:</label>
                                <Form.Item name='reservations_time' rules={[{ required: true, message: 'Bạn chưa chọn thời gian!!!' }]}>
                                    <Select
                                        className='w-full lg:w-[500px]'
                                        placeholder='Chọn thời gian'
                                        options={[
                                            { label: '10:00 - 12:00', value: '10:00 - 12:00' },
                                            { label: '12:00 - 14:00', value: '12:00 - 14:00' },
                                            { label: '17:00 - 19:00', value: '17:00 - 19:00' },
                                            { label: '19:00 - 22:00', value: '19:00 - 22:00' },
                                        ]}
                                    />
                                </Form.Item>
                            </div>
                        </div>
                        <div className='text-center mt-6'>
                            <Button type='primary' className='py-8 px-14 rounded-[999px]'>Đặt bàn</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default ReservationsComponent

import { Button, Form, Input, Typography } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React from 'react'

const SubscribeComponent = () => {
  const [form] = useForm()
  return (
    <div
      className="w-full h-[70vh] md:h-auto md:min-h-[400px] md:aspect-[1/0.3]"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dyu519e7i/image/upload/v1744279341/Section_9_d0u9dm.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto flex justify-center items-center h-full">
        <div
          className="w-4/5 h-[70vh] md:h-auto md:min-h-[400px] md:aspect-[1/0.3]"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dyu519e7i/image/upload/v1744279348/Section_8_ilxxck.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius: '40px'
          }}
        >
          <div className='w-full h-full flex justify-center items-center'>
            <div className='w-1/2'>
              <Typography.Title
                level={1}
                className="!text-white text-center"
              >
                Đăng ký
              </Typography.Title>
              <Typography.Paragraph
                className="!text-white text-center font-medium"
              >
                Quý khách hãy đăng ký email để nhận được những thông báo mới nhất và những ưu đãi, giảm giá, khuyến mãi của nhà hàng Hải Dương
              </Typography.Paragraph>
              <Form form={form} size='large' className='w-full'>
                <Form.Item name='email' rules={[{ required: true, message: 'Bạn chưa nhập email!!!' }]}>
                  <Input className='w-full' allowClear placeholder='vui lòng nhập email' />
                </Form.Item>
              </Form>
              <div className='text-center mt-6'>
                <Button className='py-8 px-14 rounded-[999px]'>Đăng ký</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubscribeComponent

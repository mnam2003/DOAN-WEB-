import { Image, Layout, Typography } from 'antd'
import React from 'react'
import logo from '../assets/images/logo.svg'
import { MdLocalPhone } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";

const { Footer } = Layout

const FooterComponent = () => {
    return (
        <Footer style={{ margin: '0px', padding: '0px' }}>
            <div
                className="w-full h-[40vh] md:h-auto md:min-h-[400px] md:aspect-[1/0.3] flex justify-center items-center"
                style={{
                    backgroundImage: "url('https://res.cloudinary.com/dyu519e7i/image/upload/v1744207441/Group_7_dk5jnm.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>
                <div className="container mx-auto h-full">
                    <div className='grid grid-cols-4 gap-8'>
                        <div className='mt-20'>
                            <div className='flex items-center gap-3'>
                                <img src={logo.src} />
                                <Typography.Title level={3} style={{ margin: '0px', color: '#EE284B' }}>
                                    Hải Dương
                                </Typography.Title>
                            </div>
                            <p className='mt-8 font-medium text-[1.2rem]'>Phục vụ các khung giờ:</p>
                            <div className='flex flex-col gap-4 font-bold mt-6 text-[1.2rem]'>
                                <span>10:00 - 12:00</span>
                                <span>12:00 - 14:00</span>
                                <span>17:00 - 19:00</span>
                                <span>19:00 - 22:00</span>
                            </div>
                        </div>
                        <div className='mt-20'>
                            <div className='flex items-center gap-3'>
                                <img src={logo.src} />
                                <Typography.Title level={3} style={{ margin: '0px', color: '#EE284B' }}>
                                    Danh mục
                                </Typography.Title>
                            </div>
                            <div className='flex flex-col gap-4 font-bold mt-6 text-[1.2rem]'>
                                <span>10:00 - 12:00</span>
                                <span>12:00 - 14:00</span>
                                <span>17:00 - 19:00</span>
                                <span>19:00 - 22:00</span>
                            </div>
                        </div>
                        <div className='mt-20'>
                            <div className='flex items-center gap-3'>
                                <img src={logo.src} />
                                <Typography.Title level={3} style={{ margin: '0px', color: '#EE284B' }}>
                                    Thông tin
                                </Typography.Title>
                            </div>
                            <div className='flex flex-col gap-4 font-bold mt-6 text-[1.2rem]'>
                                <span className='flex items-center gap-2'><MdLocalPhone size={26}/> 0395565218</span>
                                <span className='flex items-center gap-2'><HiLocationMarker size={26}/>Tam Quan - Tam Đảo - Vĩnh Phúc</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default FooterComponent

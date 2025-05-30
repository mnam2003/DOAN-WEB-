import { Layout, } from 'antd'
import React, { useEffect, useState } from 'react'
import { MdLocalPhone } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { CategoryModel } from '@/models/CategoryModel';
import Link from 'next/link';
import handleAPI from '@/apis/handleAPI';
import logo from '../assets/images/logo-doan.png'

const { Footer } = Layout

const FooterComponent = () => {
    const [categories, setCategories] = useState<CategoryModel[]>([]);

    useEffect(() => {
        getCategories()
    }, []);

    const getCategories = async () => {
        try {
            const api = '/dish/get-all-categories'
            const res = await handleAPI(api)
            setCategories(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Footer style={{ margin: '0px', padding: '0px' }}>
            <div
                className="w-full h-[70vh] md:h-auto md:min-h-[400px] md:aspect-[1/0.3] flex justify-center items-center"
                style={{
                    backgroundImage: "url('https://res.cloudinary.com/dyu519e7i/image/upload/v1744207441/Group_7_dk5jnm.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>
                <div className="container mx-auto h-full">
                    <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
                        <div className='mt-20'>
                            <div className='flex items-center gap-3'>
                                <h3 style={{ margin: '0px', color: '#EE284B' }}>
                                    Thông tin
                                </h3>
                            </div>
                            <p className='mt-8 font-medium text-[1.2rem]'>Phục vụ các khung giờ:</p>
                            <div className='flex flex-col gap-4 lg:font-bold mt-6 lg:text-[1.2rem]'>
                                <span>10:00 - 12:00</span>
                                <span>12:00 - 14:00</span>
                                <span>17:00 - 19:00</span>
                                <span>19:00 - 22:00</span>
                            </div>
                        </div>
                        <div className='mt-20'>
                            <div className='flex items-center gap-3'>
                                <h3 style={{ margin: '0px', color: '#EE284B' }}>
                                    Danh mục
                                </h3>
                            </div>
                            <div className='grid grid-cols-2 gap-4 lg:font-bold mt-6 lg:text-[1.2rem]'>
                                {
                                    categories.map((item, index) => (<Link href={`danh-muc/${item.slug}`} key={index} className='text-black'>{item.title}</Link>))
                                }
                            </div>
                        </div>
                        <div className='mt-5 lg:mt-20'>
                            <div className='flex items-center gap-3'>
                                <h3 style={{ margin: '0px', color: '#EE284B' }}>
                                    Lien hệ
                                </h3>
                            </div>
                            <div className='flex flex-col gap-4 lg:font-bold mt-6 lg:text-[1.2rem]'>
                                <span className='flex items-center gap-2'><MdLocalPhone size={26} /> 0395565218</span>
                                <span className='flex items-center gap-2'><HiLocationMarker size={26} />Tam Quan - Tam Đảo - Vĩnh Phúc</span>
                                <div className='flex items-center gap-4'>
                                    <img src={logo.src} width={40} height={40}/>
                                    HaiDuong
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default FooterComponent

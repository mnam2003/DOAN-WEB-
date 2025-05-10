import { Button, Carousel, Typography } from 'antd'
import Link from 'next/link'
import React from 'react'

const HeroComponent = () => {
    return (
        // <div>
        //     <div className='max-h-[80vh]'>
        //         <Carousel autoplay={true} infinite={true} autoplaySpeed={4000}>
        //             <div>
        //                 <div style={{
        //                     width: '100%',
        //                     aspectRatio: '1 / 0.4',
        //                     backgroundImage: "url('https://res.cloudinary.com/dyu519e7i/image/upload/v1744195041/image-hero-2_ckqcf0.png')",
        //                     backgroundSize: 'cover',
        //                     backgroundPosition: 'center',
        //                     backgroundRepeat: 'no-repeat',
        //                     display: 'flex',
        //                     justifyContent: 'center'
        //                 }}>
        //                     <div className='container'>
        //                         <div className='flex items-center h-full'>
        //                             <div className='md:max-w-[680px]'>
        //                                 <Typography.Title level={2}  className="!text-white font-extrabold text-3xl md:text-5xl leading-tight">
        //                                     Mỗi món ăn là một câu chuyện – Mỗi bữa ăn là một niềm vui
        //                                 </Typography.Title>
        //                                 <Typography.Paragraph className='font-semibold text-[1.2rem] text-white'>
        //                                     Từ những món cơm đậm đà hương vị quê nhà đến những phần ăn nóng hổi mang phong cách hiện đại,
        //                                     nhà hàng Hải Dương luôn sẵn sàng phục vụ mọi khẩu vị – không cần dịp đặc biệt, chỉ cần bạn đói là đủ!
        //                                 </Typography.Paragraph>
        //                                 <Button type='primary' size='large' className='rounded-[999px] p-8'>
        //                                     Đặt bàn ngay
        //                                 </Button>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div>
        //                 <div style={{
        //                     width: '100%',
        //                     aspectRatio: '1 / 0.4',
        //                     backgroundImage: "url('https://res.cloudinary.com/dyu519e7i/image/upload/v1744195013/image-hero1_gzqhfp.png')",
        //                     backgroundSize: 'cover',
        //                     backgroundPosition: 'center',
        //                     backgroundRepeat: 'no-repeat',
        //                     display: 'flex',
        //                     justifyContent: 'center'
        //                 }}>
        //                     <div className='container'>
        //                         <div className='flex items-center h-full'>
        //                             <div className='max-w-[680px]'>
        //                                 <Typography.Title level={2} className="!text-white font-extrabold text-3xl md:text-5xl leading-tight">
        //                                     Món ăn phong phú - hấp dẫn
        //                                 </Typography.Title>
        //                                 <Typography.Paragraph className='font-semibold text-[1.2rem] text-white'>
        //                                     Thưởng thức menu đa dạng, phong phú với những món ăn vô cũng hấp dẫn - không gian ấm cũng sạch sẽ,
        //                                     đội ngũ nhân viên, đầu bếp chuyên nghiệp luôn mang đến cho khách hàng những trải nhiệm tốt nhất.
        //                                 </Typography.Paragraph>
        //                                 <Button type='primary' size='large' className='rounded-[999px] p-8'>
        //                                     Đặt bàn ngay
        //                                 </Button>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </Carousel>
        //     </div>
        // </div>
        <div className="w-full">
        <Carousel autoplay autoplaySpeed={4000} className="max-h-[80vh]">
            <div>
                <div
                    className="w-full h-[40vh] md:h-auto md:min-h-[400px] md:aspect-[1/0.4] flex justify-center items-center"
                    style={{
                        backgroundImage: "url('https://res.cloudinary.com/dyu519e7i/image/upload/v1744195041/image-hero-2_ckqcf0.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className="container px-4">
                        <div className="flex items-center h-full">
                            <div className="max-w-[680px] text-white space-y-6">
                                <Typography.Title
                                    level={1}
                                    className="!text-white "
                                >
                                    Mỗi món ăn là một câu chuyện – Mỗi bữa ăn là một niềm vui
                                </Typography.Title>
                                <Typography.Paragraph className="text-white font-semibold text-base md:text-xl">
                                    Từ những món cơm đậm đà hương vị quê nhà đến những phần ăn nóng hổi mang phong cách hiện đại,
                                    nhà hàng Hải Dương luôn sẵn sàng phục vụ mọi khẩu vị – không cần dịp đặc biệt, chỉ cần bạn đói là đủ!
                                </Typography.Paragraph>
                                <Button
                                    type="primary"
                                    size="large"
                                    className="rounded-full px-8 py-8 text-base md:text-lg"
                                >
                                   <Link href={'/dat-ban'}>Đặt bàn ngay</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div
                    className="w-full h-[40vh] md:h-auto md:min-h-[400px] md:aspect-[1/0.4] flex justify-center items-center"
                    style={{
                        backgroundImage: "url('https://res.cloudinary.com/dyu519e7i/image/upload/v1744195013/image-hero1_gzqhfp.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className="container px-4">
                        <div className="flex items-center h-full">
                            <div className="max-w-[680px] text-white space-y-6">
                                <Typography.Title
                                    level={1}
                                    className="!text-white"
                                >
                                    Món ăn phong phú - hấp dẫn
                                </Typography.Title>
                                <Typography.Paragraph className="text-white font-semibold text-base md:text-xl">
                                    Thưởng thức menu đa dạng, phong phú với những món ăn vô cùng hấp dẫn - không gian ấm cúng sạch sẽ,
                                    đội ngũ nhân viên, đầu bếp chuyên nghiệp luôn mang đến cho khách hàng những trải nghiệm tốt nhất.
                                </Typography.Paragraph>
                                <Button
                                    type="primary"
                                    size="large"
                                    className="rounded-full px-8 py-8 text-base md:text-lg"
                                >
                                    Đặt bàn ngay
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    </div>
    )
}

export default HeroComponent

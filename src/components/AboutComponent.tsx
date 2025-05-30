import { Typography } from 'antd'
import React from 'react'

const AboutComponent = () => {
    return (
        <div style={{
            width: '100%',
            aspectRatio: '1 / 0.3',
            backgroundImage: "url('https://res.cloudinary.com/dyu519e7i/image/upload/v1744208322/Section_6_r2plww.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>
            <div className="container mx-auto mt-14">
                <Typography.Title className="text-center mb-8">
                    Gới thiệu
                </Typography.Title>
                <div className='flex justify-center'>
                    <div className="flex flex-col-reverse md:flex-row items-center gap-8 max-w-7xl w-full">
                        <div className="w-full md:w-1/2">
                            <Typography.Paragraph className="text-xl font-medium text-justify">
                                Tại Hải Dương, chúng tôi tin rằng mỗi bữa ăn không chỉ để no bụng, mà còn là một trải nghiệm đáng nhớ. <br /><br />
                                Ra đời từ niềm đam mê ẩm thực và mong muốn mang đến những món ăn đậm đà hương vị Việt, nhà hàng Hải Dương là nơi giao thoa giữa ẩm thực truyền thống và phong cách phục vụ hiện đại. <br /><br />
                                Với thực đơn phong phú – từ những món ăn quen thuộc như cơm nhà, canh chua, cá kho, đến các món hải sản tươi sống hấp dẫn – chúng tôi không chỉ phục vụ món ăn, mà còn trao gửi sự chăm chút, tận tâm trong từng phần ăn. <br /><br />
                                Không gian ấm cúng, thân thiện và đội ngũ nhân viên chuyên nghiệp của chúng tôi luôn sẵn sàng chào đón bạn – dù là một bữa trưa nhanh chóng, hay một buổi tiệc sum vầy cùng gia đình và bạn bè.
                            </Typography.Paragraph>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center">
                            <img
                                className="w-full max-w-md rounded-2xl shadow-lg"
                                src="https://res.cloudinary.com/dyu519e7i/image/upload/v1744209950/Image_8_fequip.png"
                                alt="Về chúng tôi"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent

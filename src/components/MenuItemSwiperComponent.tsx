import { DishModel } from '@/models/DishModel'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import { Typography } from 'antd';
import { Navigation } from 'swiper/modules';
import { VND } from '@/utils/handleCurrency';

interface Props {
    dishes: DishModel[]
}

const MenuItemSwiperComponent = (props: Props) => {
    const { dishes } = props
    return (
        <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={4}
            breakpoints={{
                1280: { slidesPerView: 4 },
                1024: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                0: { slidesPerView: 2 },
            }}
        >
            {dishes.map((dish, index) => (
                <SwiperSlide key={index}>
                    <div className="bg-white p-3 rounded-[12px]">
                        <div>
                            <img
                                src={dish.images[0]}
                                alt={dish.title}
                                style={{
                                    width: '100%',
                                    aspectRatio: '1 / 0.8',
                                    border: '1px solid #ccc',
                                    objectFit: 'cover',
                                    borderRadius: '12px',
                                }}
                            />
                        </div>
                        <div>
                            <h2 className="text-[1.2rem] md:text-[1.6rem] my-1 truncate max-w-full">{dish.title}</h2>
                            <div className="h-[48px]">
                                <Typography.Paragraph ellipsis={{ rows: 2 }}>
                                    {dish.description}
                                </Typography.Paragraph>
                            </div>
                            <div className="text-end mt-3">
                                <span className="text-[1.5rem] font-semibold">{VND.format(dish.price)}</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default MenuItemSwiperComponent

import { DishModel } from '@/models/DishModel'
import { VND } from '@/utils/handleCurrency'
import { Typography } from 'antd'
import Link from 'next/link'
import React from 'react'

interface Props {
    dish: DishModel
}

const DishItemComponent = (props: Props) => {
    const { dish } = props
    
    return (
        <Link href={`/san-pham/${dish.slug}`} style={{color: 'black'}}>
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
        </Link>
    )
}

export default DishItemComponent

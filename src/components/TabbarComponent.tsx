import { Typography } from 'antd'
import React, { ReactNode } from 'react'

interface Props {
  title: string,
  right?: ReactNode,
  level?: 1 | 2 | 5 | 3 | 4 | undefined
}

const { Title } = Typography

const TabbarComponent = (props: Props) => {
  const { title, level } = props

  return (
    <div>
      <div className='flex justify-between items-center'>
        <div>
          <Title level={level ?? 2}>{title}</Title>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default TabbarComponent

import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const Section = (props: Props) => {
    const {children} = props
  return (
    <div>
        {children}
    </div>
  )
}

export default Section

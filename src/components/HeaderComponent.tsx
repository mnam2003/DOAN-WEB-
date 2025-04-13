import { Button, Layout, Menu, MenuProps, Space } from 'antd'
import Link from 'next/link'
import React from 'react'
import logo from '../assets/images/logo.svg'

type MenuItem = Required<MenuProps>['items'][number]

const { Header } = Layout

const HeaderComponent = () => {

  const items: MenuItem[] = [
    {
      key: 'home',
      label: <Link href={'/'}>Trang chủ</Link>
    },
    {
      key: 'shop',
      label: <Link href={'/danh-muc/all'}>Danh mục</Link>,
    },
    {
      key: 'about',
      label: <Link href={'/'}>Giới thiệu</Link>
    },
    {
      key: 'contact',
      label: <Link href={'/'}>Liên hệ</Link>
    },
  ]

  return (
    <Header className='bg-white'>
      <div className='grid grid-cols-3 max-w-screen-2xl mx-auto'>
        <div className='flex items-center justify-start'>
          <img src={logo.src} className='w-24' />
        </div>
        <div className='flex items-center justify-center'>
          <Menu style={{ border: 'none', width: '100%' }} mode='horizontal' items={items} />
        </div>
        <div className='flex items-center justify-end'>
          <Button type='primary' size='large'><Link href={'/'}>Đặt bàn</Link></Button>
        </div>
      </div>
    </Header>
  )
}

export default HeaderComponent

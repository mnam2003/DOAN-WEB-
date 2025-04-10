import { appInfo } from '@/constants/appInfo'
import Head from 'next/head'
import React from 'react'

interface Props {
  title?: string,
  image?: string,
  url?:string,
  description?: string,
}

const HeadComponent = (props: Props) => {

  const {title, image, url, description} = props

  return (
    <Head>
      <title>{title ? title : appInfo.title}</title>
      <meta title='title' content={title ? title : appInfo.title}/>
      <meta title='description' content={description ? description : appInfo.description}/>
      <meta property='og:type' content='website'/>
      <meta property='og:url' content={url ? url : ' '}/>
      <meta property='og:title' content={title ? title : appInfo.title}/>
      <meta property='og:description' content={description ? description : appInfo.description}/>
      <meta property='og:site_name' content='pursuit'/>
      <meta property='fb:app_id' content=''/>
      <meta property='og:image' content={image ?? ''}/>
      <meta property='og:image:secure_url' content={image ?? ''}/>
      <meta property='og:image:width' content='420'/>
      <meta property='og:image:height' content='321'/>
      <meta property='og:image:type' content='image/png'/>
      <meta name='twitter:title ' content={title ? title : appInfo.title}/>
      <meta name='twitter:description ' content={description ? description : appInfo.description}/>
      <meta name='twitter:image ' content={image ?? ''}/>
    </Head>
  )
}

export default HeadComponent

import Layouts from '@/components/layouts/Layouts'
import '@/styles/globals.css'
import Head from 'next/head'
import logo from '../../public/images-removebg-preview.png'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>St. Ignatius</title>
      <meta name='description' content='go to church' />
      <link rel='icon' href={logo} />
    </Head>
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
    </>
  )
}

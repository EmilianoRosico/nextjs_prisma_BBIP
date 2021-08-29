import Head from 'next/head'
import Devices from '../components/Devices'
import Layout from '../components/Layout'


export default function Home() {
  return (
    <>
    <Head>
      <title>Ingeniería BBIP</title>
    </Head>
    <Layout>
      <Devices />
    </Layout>
    </>
  )
}

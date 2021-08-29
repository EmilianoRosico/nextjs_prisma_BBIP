// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ingeniería BBIP repositorio información" />
        <link rel="icon" href="/logo_claro_200px.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

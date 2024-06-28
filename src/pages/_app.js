import '@/styles/globals.css'
import { Inter_Tight } from "next/font/google"
import Head from 'next/head'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight'
})

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${interTight.variable} font-sans bg-light dark:bg-dark w-full min-h-screen`}>
        <NavBar></NavBar>
        <AnimatePresence mode='wait'>
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer></Footer>
      </main>
    </>
    
  )
}

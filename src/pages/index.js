import Head from 'next/head'
import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import profilePic from '../../public/images/profile/profile-pic-circ.png'
import AnimatedText from '@/components/AnimatedText'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Eugene Chong</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w -full min-h-screen dark:text-light">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image src={profilePic} alt="Eugene Chong" className='w-full h-auto ml-[-45px] mt-[-15px]' />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText text="Engineering Solutions, Creating Value." className="!text-6xl !text-left" />
              <p className="my-4 text-base font-medium">
                I am a soon-to-be Computer Engineering graduate, and I love solving problems 🤓, exploring the unknown 🙏, and creating value around me 💛, be it through code, design, or anything in between.
              </p>
              <p className="mb-4 text-base font-medium">
              Explore my projects which showcase the expertise I have picked up throughout my time in university! 🚀
              </p>
              <div className="flex items-center self-start mt-3">
                <Link href="/dummy.pdf" target={"_blank"} className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:border-light dark:hover:border-light"
                download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"}/>
                </Link>
                <Link href="mailto:eugene.chong@u.nus.edu" target={"_blank"} className="ml-4 bg-light text-dark p-2.5 px-6 rounded-lg text-lg font-semibold dark:bg-dark dark:text-light hover:bg-dark hover:text-light border-2 border-solid border-transparent hover:border-light dark:border-light dark:hover:border-light dark:hover:bg-light dark:hover:text-dark"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        
        {/* <HireMe /> */}

        {/* <div className="absolute right-8 bottom-16 inline-block w-24">
          <Image src={lightBulb} alt="Eugene Chong" className='w-full h-auto ' />
        </div> */}
      </main>
    </>
  )
}

import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import project1 from "../../public/images/projects/lasertag.jpg";
import project2 from "../../public/images/projects/spotify-etl.jpg";
import project3 from "../../public/images/projects/nextjs-portfolio.jpg";
import project4 from "../../public/images/projects/gocurrent.jpg";
import project5 from "../../public/images/projects/rails.jpg";
import project6 from "../../public/images/projects/cooper.jpg";
import { GithubIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, githubLink }) => {
    return (
        <article className="w-full relative flex items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-2xl rounded-br-2xl p-12 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"></div>
            <Link href={link} target="_blank"
                className="w-1/2 cursor-pointer rounded-lg lg:w-full overflow-hidden"
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
                />
            </Link>

            <div className="w-1/2 flex flex-col dark:text-light items-start justify-between pl-8 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm ">{summary}</p>
                <div className="mt-2 flex items-center ">
                    <Link href={githubLink} target="_blank" className="w-12"><GithubIcon /></Link>
                    <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base">Visit Project</Link>
                </div>
            </div>
        </article>
    )
};

const Project = ({ title, type, img, link, githubLink }) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:bg-dark dark:border-light bg-light p-6 relative xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"></div>
            <Link href={link} target="_blank"
                className="w-full cursor-pointer rounded-lg overflow-hidden"
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>

            <div className="w-full flex flex-col items-start justify-between mt-4 dark:text-light">
                <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
                </Link>
                <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={link} target="_blank" className="text-lg font-semibold underline md:text-base">Visit</Link>   
                    <Link href={githubLink} target="_blank" className="w-10 md:w-8"><GithubIcon /></Link>
                </div>
            </div>
        </article>
    )
};

const Projects = () => {
    return (
        <>
            <Head>
                <title>Projects | Eugene Chong</title>
                <meta name="description" content="Eugene's Projects page"></meta>
            </Head>
            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col items-center justify-center">
                <Layout className="pt-16">
                    <AnimatedText text="Stuff I've Worked On" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"/>
                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProject
                                type="Capstone Project"
                                title="Laser Tag++"
                                summary="A real-time multiplayer laser tag game that uses Bluetooth Low Energy (BLE) technology. The project is built in Unity, Python, and Arduino. Communication between devices is done using BLE. In-game actions are detected with the help of a lightweight neural network deployed in the cloud."
                                img={project1}
                                link="https://github.com/CG4002-Capstone-Project-B8/BleClient"
                                githubLink="https://github.com/CG4002-Capstone-Project-B8/BleClient"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project 
                                title="Spotify ETL"
                                type="Personal Project"
                                img={project2}
                                link="https://github.com/theeugenechong/SpotifyETL"
                                githubLink="https://github.com/theeugenechong/SpotifyETL"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project 
                                title="Next.js Portfolio Website"
                                type="Personal Project"
                                img={project3}
                                link="/"
                                githubLink="https://github.com/theeugenechong/personal-portfolio"
                            />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject
                                title="GoCurrent"
                                type="Academic Project"
                                summary="A web-based virtual machine implementation for a sublanguage of Go in TypeScript. Focuses mainly on concurrency constructs in Go. The project is built with Next.js, Tailwind CSS, and TypeScript."
                                img={project4}
                                link="https://gocurrent.vercel.app/"
                                githubLink={"https://www.github.com/cs4215-go-project"}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Rails Twitter Clone"
                                type="Personal Project"
                                img={project5}
                                link="https://github.com/theeugenechong/hello_app"
                                githubLink="https://github.com/theeugenechong/hello_app"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="cOOPer"
                                type="Academic Project"
                                img={project6}
                                link="https://github.com/theeugenechong/tp"
                                githubLink="https://github.com/theeugenechong/tp"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
};

export default Projects;
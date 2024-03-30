import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import project2 from "../../public/images/projects/portfolio-cover-image.jpg";
import { GithubIcon } from "@/components/Icons";

const FeaturedProject = ({ type, title, summary, img, link, githubLink }) => {
    return (
        <article className="w-full relative flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl rounded-br-2xl p-12">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark"></div>
            <Link href={link} target="_blank"
                className="w-1/2 cursor-pointer rounded-lg overflow-hidden"
            >
                <Image src={img} alt={title} className="w-full h-auto"/>
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-between pl-8">
                <span className="text-primary font-medium text-xl">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark">{summary}</p>
                <div className="mt-2 flex items-center ">
                    <Link href={githubLink} target="_blank" className="w-12"><GithubIcon /></Link>
                    <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold">Visit Project</Link>
                </div>
            </div>
        </article>
    )
};

const Project = ({ title, type, img, link, githubLink }) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark"></div>
            <Link href={link} target="_blank"
                className="w-full cursor-pointer rounded-lg overflow-hidden"
            >
                <Image src={img} alt={title} className="w-full h-auto"/>
            </Link>

            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary font-medium text-xl">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
                </Link>
                <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={link} target="_blank" className="text-lg font-semibold underline">Visit</Link>   
                    <Link href={githubLink} target="_blank" className="w-10"><GithubIcon /></Link>
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
            <main className="w-full mb-16 flex flex-col items-center justify-center">
                <Layout className="pt-16">
                    <AnimatedText text="Stuff I've Worked On" className="mb-16"/>
                    <div className="grid grid-cols-12 gap-24 gap-y-32">
                        <div className="col-span-12">
                            <FeaturedProject
                                type="Personal Project"
                                title="Crypto Screener Application"
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                                local currency."
                                img={project1}
                                link="/"
                                githubLink="https://www.github.com"
                            />
                        </div>
                        <div className="col-span-6">
                            <Project 
                                title="Crypto Screener Application"
                                type="Personal Project"
                                img={project1}
                                link="/"
                                githubLink="https://www.github.com"
                            />
                        </div>
                        <div className="col-span-6">
                            <Project 
                                title="Crypto Screener Application"
                                type="Personal Project"
                                img={project1}
                                link="/"
                                githubLink="https://www.github.com"
                            />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Next.js Portfolio Website"
                                type="Personal Project"
                                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive."
                                img={project2}
                                link="/"
                                githubLink={"https://www.github.com"}
                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                title="Next.js Portfolio Website"
                                type="Personal Project"
                                img={project2}
                                link="/"
                                githubLink="https://www.github.com"
                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                title="Next.js Portfolio Website"
                                type="Personal Project"
                                img={project2}
                                link="/"
                                githubLink="https://www.github.com"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
};

export default Projects;
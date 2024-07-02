/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useEffect } from "react";
import { useMotionValue, useSpring, useInView } from "framer-motion";
import Head from 'next/head';
import Image from 'next/image';
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import profilePic from '../../public/images/profile/profile-pic-drum.jpg';
import Statistic from "@/components/Statistic";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

export const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref);

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, motionValue, value]);

    useEffect(() => {
        springValue.on("change", (latestValue) => {
            if (ref.current && latestValue.toFixed(0) <= value) {
                ref.current.textContent = latestValue.toFixed(0);
            }
        });
    }, [springValue, value]);

    return <span ref={ref}></span>
}

const About = () => {
    return (
        <>
            <Head>
                <title>About | Eugene Chong</title>
                <meta name="description" content="Eugene's About page"></meta>
            </Head>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Who Am I?" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"/>
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">About Me</h2>
                            <p className="text-base font-medium">
                                Hello, World! 🌍 I'm Eugene.
                            </p>
                            <p className="text-base font-medium my-4">
                                I am currently in the final lap of my Computer Engineering undergrad journey, armed with a toolkit of programming languages like Go, Rust, Python, and C++. From software engineering to algorithms and distributed systems, even dabbling in a bit of machine learning, I've been on a WILD ride of discovery.
                            </p>
                            <p className="text-base font-medium my-4">
                                They say university isn't just textbooks and exams (although, let's be honest they kinda were). I dove headfirst into a bunch of awesome engineering projects with my amazing peers. These adventures not only enhanced my technical skills, but also honed my soft skills. From leading teams to sparking brainstorming sessions, I've embraced every opportunity to grow.
                            </p>
                            <p className="text-base font-medium my-4">
                            And guess what? I'm just getting started. If you’re looking for someone who’s got the technical chops, a thirst for learning, and a fun personality, I'm ready! 💪
                            </p>
                        </div>
                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light p-8 xl:col-span-4 md:order-1 md:col-span-8">
                            <div className="absolute top-0 -right-2 -z-10 w-[102%] h-[102%] rounded-2xl bg-dark dark:bg-light"></div>
                            <Image src={profilePic} alt="Eugene Chong" className="w-full h-auto rounded-2xl" priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'/>
                        </div>
                        <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                            <Statistic number={7} achievement="Programming Languages Learnt"/>
                            <Statistic number={5} achievement="Projects Completed"/>
                            <Statistic number={4} achievement="Years of Education"/>
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    );
};

export default About;
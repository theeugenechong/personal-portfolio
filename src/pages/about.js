import React, { useRef, useEffect } from "react";
import { useMotionValue, useSpring, useInView } from "framer-motion";
import Head from 'next/head';
import Image from 'next/image';
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import profilePic from '../../public/images/profile/profile-pic.jpg';
import Statistic from "@/components/Statistic";
import Skills from "@/components/Skills";

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
            <main className="flex w-full flex-col items-center justify-center">
                <Layout className="pt-16">
                    <AnimatedText text="Who Am I?" className="mb-16"/>
                    <div className="grid w-full grid-cols-8 gap-16">
                        <div className="col-span-3 flex flex-col items-start justify-start">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">About Me</h2>
                            <p className="text-base font-medium">
                                Hi, I'm Eugene, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 4 years of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life.
                            </p>
                            <p className="text-base font-medium my-4">
                                I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users. 
                            </p>
                            <p className="text-base font-medium my-4]">
                                Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                            </p>
                        </div>
                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
                            <div className="absolute top-0 -right-2 -z-10 w-[102%] h-[102%] rounded-2xl bg-dark"></div>
                            <Image src={profilePic} alt="Eugene Chong" className="w-full h-auto rounded-2xl"/>
                        </div>
                        <div className="col-span-2 flex flex-col items-end justify-between">
                            <Statistic number={50} achievement="Clients Satisfied"/>
                            <Statistic number={10} achievement="Projects Completed"/>
                            <Statistic number={4} achievement="Years of Experience"/>
                        </div>
                    </div>
                    <Skills />
                </Layout>
            </main>
        </>
    );
};

export default About;
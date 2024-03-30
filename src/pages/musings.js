import React, { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import article1 from "../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../public/images/articles/create loading screen in react js.jpg"
import simpleArticle1 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image);

const MovingImage = ({ img, title, link }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    const handleMouseMove = (e) => {
        imgRef.current.style.display = "inline-block";
        x.set(e.pageX);
        y.set(-10);
    };

    const handleMouseLeave = () => {
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    }

    return (
        <Link href={link} target="_blank"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className="capitalize text-lg font-semibold hover:underline">
                {title}
            </h2>
            <FramerImage 
                style={{ x: x, y: y }} 
                initial={{ opacity: 0 }} 
                whileInView={{ 
                    opacity: 1, 
                    transition: { 
                        duration: 0.2 
                    } 
                }} 
                ref={imgRef} 
                src={img} 
                alt={title} 
                className="z-10 w-96 h-auto hidden absolute rounded-lg" 
            />
        </Link>
    );
}

const SimpleArticle = ({ img, title, date, link }) => {
    return (
        <motion.li
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition:
                { duration: 0.5, ease: "easeInOut"}
            }}
            viewport={{ once: true }}
            className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4"
        >
            <MovingImage img={img} title={title} link={link} /> 
            <span className="text-primary font-semibold pl-4">{date}</span>
        </motion.li>
    );
};

const FeaturedArticle = ({ time, title, summary, img, link }) => {
    return (
        <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark"></div>
            <div className="p-2">
                <Link href={link} target="_blank"
                    className="w-full cursor-pointer rounded-lg inline-block overflow-hidden"
                >
                    <FramerImage src={img} alt={title} className="w-full h-auto"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    />
                </Link>
                <Link href={link} target="_blank">
                    <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">{title}</h2>
                    <p className="text-sm mb-2">{summary}</p>
                    <span className="text-primary font-semibold">{time}</span>
                </Link>
            </div>
        </li>        
    );
};

const Musings = () => {
    return (
        <>
            <Head>
                <title>Musings | Eugene Chong</title>
                <meta name="description" content="Articles written by me on various topics." />
            </Head>
            <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
                <Layout className="pt-16">
                    <AnimatedText text="Articles, Insights & Musings" className="mb-16" />
                    <ul className="grid grid-cols-2 gap-16">
                        <FeaturedArticle
                            time="9 min read"
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            summary="
                            Learn how to build a custom pagination component in ReactJS from scratch.       Follow this step-by-step guide to integrate the Pagination component in your React project."
                            img={article1}
                            link="/"
                        />
                        <FeaturedArticle
                            time="10 min read"
                            title="Create A Loading Screen In React JS"
                            summary="
                            Learn how to create a loading screen in React JS. Follow this step-by-step guide to integrate the Loading Screen component in your React project."
                            img={article2}
                            link="/"
                        />
                    </ul>
                    <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">All Articles</h2>
                    <ul>
                        <SimpleArticle
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            img={simpleArticle1}
                            date="March 30, 2024"
                            link=""
                        />
                        <SimpleArticle
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            img={simpleArticle1}
                            date="March 30, 2024"
                            link=""
                        />
                        <SimpleArticle
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            img={simpleArticle1}
                            date="March 30, 2024"
                            link=""
                        />
                        <SimpleArticle
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            img={simpleArticle1}
                            date="March 30, 2024"
                            link=""
                        />
                        <SimpleArticle
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            img={simpleArticle1}
                            date="March 30, 2024"
                            link=""
                        />
                    </ul>
                </Layout>
            </main>
        </>
    )
};

export default Musings;

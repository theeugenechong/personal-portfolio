import React, { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import article1 from "../../../public/images/articles/all-labor-is-worthwhile.jpg";
import article2 from "../../../public/images/articles/rust-ownership-borrowing.jpg"
// import simpleArticle1 from "../../../public/images/articles/wisdom.jpg";
import simpleArticle2 from "../../../public/images/articles/utility-of-consensus.jpg";
import simpleArticle3 from "../../../public/images/articles/oppenheimer.jpg";
// import simpleArticle4 from "../../../public/images/articles/a-fresh-perspective-on-schedules.jpg";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

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
                className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden" 
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
            className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light dark:bg-dark text-dark dark:text-light first:mt-0 border border-solid border-dark border-r-4 border-b-4 sm:flex-col"
        >
            <MovingImage img={img} title={title} link={link} /> 
            <span className="text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">{date}</span>
        </motion.li>
    );
};

const FeaturedArticle = ({ time, title, summary, img, link }) => {
    return (
        <li className="relative col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light"></div>
            <div className="p-2">
                <Link href={link} target="_blank"
                    className="w-full cursor-pointer rounded-lg inline-block overflow-hidden"
                >
                    <FramerImage src={img} alt={title} className="w-full h-auto"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        priority 
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
                    />
                </Link>
                <Link href={link} target="_blank">
                    <h2 className="capitalize text-3xl font-bold mb-3 mt-4 hover:underline xs:text-lg">{title}</h2>
                    <p className="font-medium mb-2">{summary}</p>
                    <span className="text-primary dark:text-primaryDark font-semibold">{time}</span>
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
            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Articles, Insights & Musings" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
                    <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
                        <FeaturedArticle
                            time="9 min read"
                            title="All Labor is Worthwhile"
                            summary="
                            A reflection on the value of all labor, no matter how menial or insignificant it may seem."
                            img={article1}
                            link="/musings/all-labor-is-worthwhile"
                        />
                        <FeaturedArticle
                            time="10 min read"
                            title="Rust Ownership and Borrowing"
                            summary="
                            An exploration of the ownership and borrowing system in Rust, how it works and how it helps ensures memory safety and fearless concurrency."
                            img={article2}
                            link="/musings/rust-ownership-borrowing"
                        />
                    </ul>
                    <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">All Articles</h2>
                    <ul>
                        <SimpleArticle
                            title="Intelligence, Rationality and Wisdom"
                            img={simpleArticle2}
                            date="March 30, 2024"
                            link="/musings/wisdom"
                        />
                        <SimpleArticle
                            title="The Utility of Distributed Consensus"
                            img={simpleArticle2}
                            date="March 30, 2024"
                            link="/musings/utility-of-consensus"
                        />
                        <SimpleArticle
                            title="Oppenheimer"
                            img={simpleArticle3}
                            date="March 30, 2024"
                            link="/musings/oppenheimer"
                        />
                        <SimpleArticle
                            title="A Fresh Perspective on Schedules"
                            img={simpleArticle3}
                            date="March 30, 2024"
                            link="/musings/a-fresh-perspective-on-schedules"
                        />
                    </ul>
                </Layout>
            </main>
        </>
    )
};

export default Musings;

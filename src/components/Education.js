import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const EducationDetails = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
            <LiIcon reference={ref}/>
            <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: 'spring' }}>
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg mb-3">
                    {type}
                </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                    {time} | {place}
                </span>
                <p className="font-medium w-full md:text-sm mt-3">
                    {info}
                </p>
            </motion.div>    
        </li>
    )
}

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        { 
            target: ref,
            offset: ["start end", "center start"]
        }
    );

    return (
        <div className="mt-48 mb-32">
            <h2 className="font-bold text-8xl mb-20 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
                Education
            </h2>
            <div className="w-[85%] lg:w-[90%] md:w-full mx-auto relative">
                <motion.div style={{ scaleY: scrollYProgress }} ref={ref} className="absolute mt-1 left-9 top-0 w-[4px] h-full bg-dark dark:bg-light  origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"/>
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <EducationDetails
                        type="Bachelor of Engineering in Computer Engineering"
                        time="2020 - 2024"
                        place="National University of Singapore (NUS)"
                        info="Relevant courses include Data Structures and Algorithms, Design and Analysis of Algorithms, Software Engineering, Machine Learning, Parallel and Concurrent Programming, Parallel and Distributed Algorithms, and Programming Language Implementation"
                    />
                </ul>
            </div>
        </div>
    )
};

export default Education;

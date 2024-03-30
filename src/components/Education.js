import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const EducationDetails = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
            <LiIcon reference={ref}/>
            <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: 'spring' }}>
                <h3 className="capitalize font-bold text-2xl">
                    {type}
                </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75">
                    {time} | {place}
                </span>
                <p className="font-medium w-full">
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
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center">
                Education
            </h2>
            <div className="w-[75%] mx-auto relative">
                <motion.div style={{ scaleY: scrollYProgress }} ref={ref} className="absolute mt-1 left-9 top-0 w-[4px] h-full bg-dark dark:bg-light  origin-top"/>
                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    <EducationDetails
                        type="Bachelor of Engineering in Computer Engineering"
                        time="2020 - 2024"
                        place="National University of Singapore (NUS)"
                        info="Relevant courses include Data Structures and Algorithms, Design and Analysis of Algorithms, Software Engineering, Machine Learning, Parallel and Concurrent Programming (ongoing), Parallel and Distributed Algorithms (ongoing), and Programming Language Implementation (ongoing)."
                    />
                </ul>
            </div>
        </div>
    )
};

export default Education;

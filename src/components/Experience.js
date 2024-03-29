import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const ExperienceDetails = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
            <LiIcon reference={ref}/>
            <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: 'spring' }}>
                <h3 className="capitalize font-bold text-2xl">
                    {position}&nbsp;<a href={companyLink} target="_blank" className="text-primary capitalize">@{company}</a>
                </h3>
                <span className="capitalize font-medium text-dark/75">
                    {time} | {address}
                </span>
                <p className="font-medium w-full">
                    {work}
                </p>
            </motion.div>
            
        </li>
    )
}

const Experience = () => {
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
                Experience
            </h2>
            <div className="w-[75%] mx-auto relative">
                <motion.div style={{ scaleY: scrollYProgress }} ref={ref} className="absolute mt-1 left-9 top-0 w-[4px] h-full bg-dark  origin-top"/>
                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    <ExperienceDetails
                        position="Software Engineer"
                        company="Google"
                        companyLink="https://www.google.com"
                        time="2019 - Present"
                        address="Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
                    />
                    <ExperienceDetails
                        position="Frontend Developer"
                        company="Facebook"
                        companyLink="https://www.facebook.com"
                        time="2017 - 2019"
                        address="Menlo Park, CA"
                        work="Developed and maintained the frontend codebase for Facebook's mobile app, including implementing new features, fixing bugs, and optimizing performance."
                    />
                    <ExperienceDetails
                        position="UI/UX Designer"
                        company="Apple"
                        companyLink="https://www.apple.com"
                        time="2015 - 2017"
                        address="Cupertino, CA"
                        work="Designed user interfaces and user experiences for Apple's mobile and desktop applications, including creating wireframes, mockups, and prototypes."
                    />
                </ul>
            </div>
        </div>
    )
};

export default Experience;

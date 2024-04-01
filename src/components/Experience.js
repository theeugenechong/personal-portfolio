import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const ExperienceDetails = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
            <LiIcon reference={ref}/>
            <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: 'spring' }}>
                <h3 className="capitalize font-bold text-2xl mb-3">
                    {position}&nbsp;<a href={companyLink} target="_blank" className="text-primary dark:text-primaryDark capitalize">@{company}</a>
                </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75">
                    {time} | {address}
                </span>
                <p className="font-medium w-full mt-3">
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
        <div className="my-48">
            <h2 className="font-bold text-8xl mb-20 w-full text-center">
                Experience
            </h2>
            <div className="w-[85%] mx-auto relative">
                <motion.div style={{ scaleY: scrollYProgress }} ref={ref} className="absolute mt-1 left-9 top-0 w-[4px] h-full bg-dark dark:bg-light  origin-top"/>
                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    <ExperienceDetails
                        position="QA Engineer Intern"
                        company="Univers"
                        companyLink="https://univers.com/"
                        time="Jan 2023 - Jun 2023"
                        address="Keppel Bay Tower, Singapore"
                        work="Worked on a team responsible for developing and conducting rigorous testing of Univers’ microservices application, employing a comprehensive approach encompassing manual and automated testing with Selenium, as well as unit and integration testing using the Java Cucumber framework"
                    />
                    <ExperienceDetails
                        position="Software Engineer Intern"
                        company="Talenox"
                        companyLink="https://www.talenox.com/"
                        time="May 2022 - Aug 2022"
                        address="North Bridge Road, Singapore"
                        work="Developed and maintained the frontend codebase for Facebook's mobile app, including implementing new features, fixing bugs, and optimizing performance."
                    />
                    {/* <ExperienceDetails
                        position="UI/UX Designer"
                        company="Apple"
                        companyLink="https://www.apple.com"
                        time="2015 - 2017"
                        address="Cupertino, CA"
                        work="Designed user interfaces and user experiences for Apple's mobile and desktop applications, including creating wireframes, mockups, and prototypes."
                    /> */}
                </ul>
            </div>
        </div>
    )
};

export default Experience;

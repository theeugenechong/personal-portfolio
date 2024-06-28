import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
    return(
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark dark:text-dark dark:bg-light text-light p-8 shadow-dark cursor-pointer absolute py-3 px-6 lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold" whileHover={{ scale: 1.05 }} initial={{ x:0, y: 0 }} whileInView={{ x: x, y: y, transition: { duration: 1.5 } }} viewport={{once: true}}>
            {name}
        </motion.div>        
    )
}

const Skills = () => {
    return (
        <>
            <h2 className="mt-48 text-8xl font-bold w-full text-center md:text-6xl md:mt-24  mb-10">Skills</h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
                <motion.div className="flex items-center justify-center rounded-full font-semibold text-lg bg-dark dark:bg-light text-light dark:text-dark p-6 shadow-dark cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2" whileHover={{ scale: 1.05 }}>
                    SWE
                </motion.div>
                <Skill name="Rust" x="-30vw" y="-5vw"/>
                <Skill name="React" x="-20vw" y="6vw"/>
                <Skill name="Go" x="14vw" y="16vw"/>
                <Skill name="C/C++" x="-5vw" y="-8vw"/>
                <Skill name="JavaScript" x="5vw" y="8vw"/>
                <Skill name="Python" x="17vw" y="-9vw"/>
                <Skill name="SQL" x="0vw" y="-18vw"/>
                <Skill name="Java" x="37vw" y="6vw"/>
                <Skill name="Git" x="30vw" y="-3vw"/>
                <Skill name="Docker" x="-15vw" y="21vw"/>
                <Skill name="Ruby on Rails" x="-25vw" y="-18vw"/>
            </div>
        </>
    );
};

export default Skills;
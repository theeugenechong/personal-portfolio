import { AnimatedNumbers } from "@/pages/about";
import React from "react";

const Statistic = ({ number, achievement }) => {
    return (
        <div className="flex flex-col items-end justify-center xl:items-center md:text-6xl sm:text-5xl xs:text-4xl">
            <span className="inline-block text-7xl font-bold">
                <AnimatedNumbers value={number}/>+
            </span>
            <h2 className="text-xl text-right font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">{achievement}</h2>
        </div>
    );
};

export default Statistic;
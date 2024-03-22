import { AnimatedNumbers } from "@/pages/about";
import React from "react";

const Statistic = ({ number, achievement }) => {
    return (
        <div className="flex flex-col items-end justify-center">
            <span className="inline-block text-7xl font-bold">
                <AnimatedNumbers value={number}/>+
            </span>
            <h2 className="text-xl font-medium capitalize text-dark/75">{achievement}</h2>
        </div>
    );
};

export default Statistic;
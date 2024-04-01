import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
    return (
        <div className='flex items-center justify-center mt-2'>
            <MotionLink href='/'
                className='w-16 h-16 border-2 border-solid border-dark dark:border-light bg-light dark:bg-dark text-dark dark:text-light flex items-center justify-center rounded-full text-2xl font-bold hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-colors duration-500 ease-in-out shadow-dark cursor-pointer'
            >
                EC
            </MotionLink>
        </div>
    );
}

export default Logo;
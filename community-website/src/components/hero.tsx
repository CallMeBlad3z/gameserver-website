'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";

interface HeroProps {
    imgData1: StaticImageData; // The first image displayed in the background
    imgData2: StaticImageData; // The second image displayed in the background
    imgAlt: string; 
    title: string;
}

// This is the Hero component. It is displayed at the top of the page and contains a title and a background image that changes every 5 seconds.
export default function Hero(props: HeroProps) { 
    const [opacity1, setOpacity1] = useState(1); // Set the opacity of the first image to 1
    const [opacity2, setOpacity2] = useState(0); // Set the opacity of the second image to 0

    useEffect(() => {
        const timer = setInterval(() => {
            if (opacity1 === 1) {                // If the first image is displayed, change the opacity of the second image to 1 and the opacity of the first image to 0
                setOpacity1(0);
                setOpacity2(1);
            } else {
                setOpacity1(1);
                setOpacity2(0);
            }
        }, 5000);                               // Change the background image every 5 seconds
        return () => clearInterval(timer);      // Clear the interval when the component is unmounted
    }, [opacity1]);

    return (
        <div className="flex mt-16 text-white items-center justify-center mx-auto">
            <div className="relative 2xl:w-3/5 lg:w-3/4 h-96 sm:h-80 md:h-96 lg:h-128 xl:h-160 2xl:h-192 rounded-2xl overflow-hidden">
                <Image
                    src={props.imgData1}
                    alt={props.imgAlt}
                    className="absolute inset-0 w-full h-full object-cover blur-[2px] transition-opacity brightness-[40%] duration-1000"
                    style={{ opacity: opacity1 }}
                />
                <Image
                    src={props.imgData2}
                    alt={props.imgAlt}
                    className="absolute inset-0 w-full h-full object-cover blur-[2px] transition-opacity brightness-[40%] duration-1000"
                    style={{ opacity: opacity2 }}
                />
                <div className="absolute inset-0 flex flex-col items-start justify-center pl-8">
                    <h1 className="text-8xl font-bold bg-gradient-to-r from-red-custom from-15% via-purple-500 via-50% to-blue-custom to-85% bg-clip-text text-transparent">{props.title}</h1>
                    <p className="text-5xl">Suomalainen peliyhteisö vuodesta 2020.</p>
                </div>
                
            </div>
        </div>
    );
}
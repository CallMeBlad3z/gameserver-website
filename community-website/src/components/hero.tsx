'use client'; 

import { useState, useEffect } from 'react';
import type { StaticImageData } from "next/image";
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
            if (opacity1 === 1) {
                setOpacity1(0);
                setOpacity2(1);
            } else {
                setOpacity1(1);
                setOpacity2(0);
            }
        }, 5000);
        return () => clearInterval(timer); // Clear the interval when the component is unmounted
    }, [opacity1]);

return (
    <div className="relative h-screen">
        <div className="absolute -z-10 inset-0">
            <div 
                style={{ 
                    transition: 'opacity 1s ease-in-out', 
                    opacity: opacity1,
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                }}
            >
                <Image 
                    src={props.imgData1}
                    alt={props.imgAlt}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div 
                style={{ 
                    transition: 'opacity 1s ease-in-out', 
                    opacity: opacity2,
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                }}
            >
                <Image 
                    src={props.imgData2}
                    alt={props.imgAlt}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900"></div>
            </div>
            <div className="pt-48 flex justify-center items-center">
                <h1 className="text-white text-6xl">{props.title}</h1>
            </div>
        </div>
    );
}
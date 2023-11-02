"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

const ImageWithFallback = (props:{src:string ,fallbackSrc:string,className?:string,alt?:string}) => {
    const { src, fallbackSrc, ...rest } = props;
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <Image            
            src={imgSrc??""}
            alt={rest.alt??""}
            onError={() => {
                setImgSrc(fallbackSrc);
            }}
            layout="fill"
            objectFit="cover"
            className={twMerge("",props.className)}
        />
    );
};

export default ImageWithFallback;
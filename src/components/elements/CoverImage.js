import React from 'react'
import Image from './Image';

export default function CoverImage({ image, alt, overlay, className, children }) {
    return (
        <div 
            className={`w-full h-full lg:min-h-screen  relative ${className} `}>
            { children }
            {overlay &&  <div className={`${overlay} w-full h-full absolute top-0 z-10`} />}   
           <Image style={{ position: "absolute" }} className="absolute  top-0 w-full h-full z-0" image={image} alt={alt}/>
        </div>
    )
}

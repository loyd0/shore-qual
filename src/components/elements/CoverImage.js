import React from 'react'
import Image from './Image';

export default function CoverImage({ image, alt, overlay }) {
    return (
        <div 
            className={`w-full h-screen lg:min-h-800 max-h-screen relative overflow-hidden -mt-24 ${overlay}`}>

            {overlay &&  <div className={`${overlay} w-full h-full absolute top-0`} />}   
           <Image className="absolute top-0 w-full h-full z-0" image={image} alt={alt}/>
        </div>
    )
}

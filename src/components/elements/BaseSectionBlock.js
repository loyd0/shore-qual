import React from 'react'

export default function BaseSectionBlock({ bgImage=false, children, className, ...restProps }) {
    return (
        <div className={`${!bgImage && 'bg-yellow-100'} bg-opacity-40 flex flex-col h-full py-24 ${className}`} {...restProps}>

            <div className="w-4/5 mx-auto relative h-full">
                 {children}
            </div>
           
        </div>
    )
}

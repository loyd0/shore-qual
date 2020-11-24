import React from 'react'

export default function BaseSectionBlock({ bgImage=false, children, className, ...restProps }) {
    return (
        <div className={`${!bgImage && 'bg-yellow-100'} w-full bg-opacity-40 flex flex-col h-full py-24 ${className}`} {...restProps}>

            <div className="lg:w-4/5 w-11/12  mx-auto relative h-full lg:px-0 pb-12">
                 {children}
            </div>
           
        </div>
    )
}

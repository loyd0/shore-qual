import React from 'react'
import DownArrow from '../../images/svgs/down-arrow';
import Linked from './Linked';

export default function PrettyLink({ children, className, ...restProps }) {
    return (
        <Linked {...restProps} className="flex items-center ">
            { children} <span className="ml-4 transform -rotate-90"><DownArrow className="animate-bounce"/></span> 
        </Linked>
    )
}

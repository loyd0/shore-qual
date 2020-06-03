import React from 'react'
import Linked from './Linked';

export const SocialIcons = ({icons, className, showText=false, itemClassName, ...restProps}) => {
    return (
        <ul className={`${className}`} {...restProps}>
            { icons && icons.map(({icon, linkTo, text}) => <li key={linkTo} className={itemClassName}><Linked linkTo={linkTo} >
                <i className={`${icon} mr-4`} />
                <span className="text-base"> { showText && text }</span></Linked >
                </li>)}
        </ul>
    )
}

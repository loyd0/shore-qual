import React from 'react'
import LinkTo from './LinkTo';

export const SocialIcons = ({icons, className, showText=false, itemClassName, ...restProps}) => {
    return (
        <ul className={`${className}`} {...restProps}>
            { icons && icons.map(({icon, linkTo, text}) => <li key={linkTo} className={itemClassName}><LinkTo linkTo={linkTo} >
                <i className={`${icon} mr-4`} />
                <span className="text-base"> { showText && text }</span></LinkTo>
                </li>)}
        </ul>
    )
}

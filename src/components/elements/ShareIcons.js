import React from 'react'
import  {   EmailShareButton, FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function ShareIcons({
    title,
    link,
    className,
    iconClassName,
    ...restProps
}) {
    return (
        <ul className={`flex ${className}`} {...restProps}>
            <li>
                <EmailShareButton
                    subject={`FWD: ${title}`}
                    url={link}
                    body={"Hey, \n Check out this article by Simon Riley on shorequal.com. \n\n"}
                >
                    <FontAwesomeIcon className={iconClassName} icon={faEnvelope} />
                </EmailShareButton>
            </li>

            <li>
            <FacebookShareButton  url={link}>
                    <FontAwesomeIcon className={iconClassName}  icon={faFacebookF} />
                </FacebookShareButton>
            </li>
            <li>
            <LinkedinShareButton  url={link}>
                    <FontAwesomeIcon className={iconClassName}  icon={faLinkedinIn} />
                </LinkedinShareButton>
            </li>
            <li >
            <TwitterShareButton  url={link}>
                    <FontAwesomeIcon className={iconClassName}  icon={faTwitter} />
                </TwitterShareButton>
            </li>
        </ul>
    )
}

import React from 'react'
import { Link }  from 'gatsby'
import { OutboundLink } from "gatsby-plugin-google-analytics"


const Linked = ({linkTo, children, style, className}) => {

    const regex = RegExp('http|wwww');
    const outward = regex.test(linkTo)
    return outward ? <OutboundLink 
    style={style}
    className={className}
    href={linkTo} target="_blank" rel="noopener noreferrer">{children}</OutboundLink> :
    <Link to={linkTo} style={style} className={className} >
        { children }
    </Link>
}

Linked.propTypes = {

}

export default Linked

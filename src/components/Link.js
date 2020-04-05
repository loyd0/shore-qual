import React from 'react'
import { Link }  from 'gatsby'

const Linked = ({linkTo, children, style, className}) => {

    const regex = RegExp('http|wwww');
    const outward = regex.test(linkTo)
    return outward ? <a 
    style={style}
    className={className}
    href={linkTo} target="_blank" rel="noopener noreferrer">{children}</a> :
    <Link to={linkTo} style={style} className={className} >
        { children }
    </Link>
}

Linked.propTypes = {

}

export default Linked

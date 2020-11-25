import React from 'react'
import { graphql } from 'gatsby';
import PrettyLink from '../elements/PrettyLink';

export default function Link({ linkText, href}) {
    return (
       <PrettyLink linkTo={href}>{linkText}</PrettyLink>
    )
}

export const LinkFragment = graphql`
fragment LinkFragment on ContentfulLink {
    linkText
    href
}
`

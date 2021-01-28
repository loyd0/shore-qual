import React from 'react'
import { graphql } from 'gatsby';
import Image from '../elements/Image';
import Linked from '../elements/Linked';

export default function SocialLink( { link, linkText, icon , ...restProps}) {
        return (
          <Linked 
            className="flex mt-2 text-primary"
            linkTo={link}
          >
            <Image image={icon} alt={icon.title} className="mr-2 mt-1 lg:mr-4 w-6 lg:w-5" />
            {linkText}
          </Linked>
        )
}


export const SocialLinkFragment = graphql`

fragment SocialLinkFragment on ContentfulSocialLink {
    link
    linkText
    icon {
        file {
            url
            contentType
        }
        fluid {
            ...GatsbyContentfulFluid_withWebp
        }
        title
    }
}
`
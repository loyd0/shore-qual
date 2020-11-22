import React from 'react'
import { graphql } from 'gatsby';

export default function AboutBlock() {
    return (
        <div>
            
        </div>
    )
}

export const AboutBlockFragment = graphql`
fragment AboutBlockFragment on ContentfulAboutBlock {
  name
  description
  linkText
  headshot {
    fluid(maxWidth: 400) {
      ...GatsbyContentfulFluid_withWebp
    }
    file {
      url
    }
    title
  }
}

`

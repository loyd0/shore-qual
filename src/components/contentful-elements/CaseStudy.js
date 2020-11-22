import React from 'react'
import { graphql } from 'gatsby';

export default function CaseStudyFragment() {
    return (
        <div>
            
        </div>
    )
}


export const CaseStudyFragmentFragment = graphql`
fragment CaseStudyFragment on ContentfulCaseStudy {
  title
  preHeader
  description
  coverImage {
    fluid(maxWidth:2600) {
      ...GatsbyContentfulFluid_withWebp
    }
    file {
      url
    }
    title
  }
  content {
    json
  }
}

`
import React from 'react'
import { graphql } from 'gatsby';

export default function CaseStudyBlock() {
    return (
        <div>
            
        </div>
    )
}


export const CaseStudyBlockFragment = graphql`
fragment CaseStudyBlockFragment on ContentfulCaseStudyBlock {
  linkText
  title
  caseStudies {
    ...CaseStudyFragment
  }
}

`
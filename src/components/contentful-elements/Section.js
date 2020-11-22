import React from 'react'
import { graphql } from 'gatsby';

export default function Section() {
    return (
        <div>
            
        </div>
    )
}

export const SectionFragment = graphql`
fragment SectionFragment on ContentfulSection {
  header
  description {
    text: description
  }
  blocks {
    ...BlogPostFragment
    ...CarouselBlockFragment
    ...TwoColumnListFragment
  }
}

`

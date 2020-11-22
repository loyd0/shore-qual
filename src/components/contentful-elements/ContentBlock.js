import React from 'react'
import { graphql } from 'gatsby';

export default function ContentBlock() {
    return (
        <div>
            
        </div>
    )
}

export const ContentBlockFragment = graphql`
fragment ContentBlockFragment on ContentfulContentBlock {
  header
  description {
    text: description
  }
  icon {
   ...ImageFragment
  }
  id
}

`

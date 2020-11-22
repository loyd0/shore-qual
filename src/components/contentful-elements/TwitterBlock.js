import React from 'react'
import { graphql } from 'gatsby';

export default function TwitterBlock() {
    return (
        <div>
            
        </div>
    )
}

export const TwitterBlockFragment = graphql`
fragment TwitterBlockFragment on ContentfulTwitterBlock {
  id
  title
  linkText
  backgroundImage {
    ...ImageFragment
  }
}

`

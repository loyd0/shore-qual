import React from 'react'
import { graphql } from 'gatsby';

export default function ServiceBlock() {
    return (
        <div>
            
        </div>
    )
}

export const ServiceBlockFragment = graphql`
fragment ServiceBlockFragment on ContentfulServiceBlock {
    id
  title
  linkText
  services {
    ...ServiceFragment
  }
  backgroundImage {
    ...ImageFragment
  }
}


`

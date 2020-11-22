import React from 'react'
import { graphql } from 'gatsby';

export default function Service() {
    return (
        <div>
            
        </div>
    )
}

export const ServiceFragment = graphql`
fragment ServiceFragment on ContentfulService {
  header
  icon {
    ...ImageFragment
  }
  description {
    json
  }
  image {
    ...ImageFragment
  }
}


`

import React from 'react'
import { graphql } from 'gatsby';

export default function MethodologyBlock() {
    return (
        <div>
            
        </div>
    )
}


export const MethodologyBlockFragment = graphql`
fragment MethodologyFragment on ContentfulMethodology {
  id
  name
  icon {
		...ImageFragment
  }
}

`

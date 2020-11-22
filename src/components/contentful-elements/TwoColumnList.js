import React from 'react'
import { graphql } from 'gatsby';

export default function TwoColumnList() {
    return (
        <div>
            
        </div>
    )
}


export const TwoColumnListFragment = graphql`
fragment TwoColumnListFragment on ContentfulTwoColumnList {
  id
  name
  items {
    ...MethodologyFragment
  }
}

`

import React from 'react'
import { graphql } from 'gatsby';
import MethodologyBlock from './MethodologyBlock';

export default function TwoColumnList({ items, title}) {

    return (
        <div id={title} className="grid grid-cols-2 gap-2 lg:gap-4 mt-8 ">
            { items.map(item => <MethodologyBlock {...item }/>)}
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

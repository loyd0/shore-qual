import React from 'react'
import { graphql } from 'gatsby';
import BaseSectionBlock from '../elements/BaseSectionBlock';
import PrettyLink from '../elements/PrettyLink';

export default function TwitterBlock({ title, linkText, backgroundImage}) {
    return (
      <BaseSectionBlock backgroundImage={backgroundImage}>
      <h3>{title} </h3>
      <PrettyLink linkTo="https://twitter.com/ShoreQual" >{linkText}</PrettyLink>
    </BaseSectionBlock>
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

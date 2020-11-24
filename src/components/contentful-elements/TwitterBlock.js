import React from 'react'
import { graphql } from 'gatsby';
import BaseSectionBlock from '../elements/BaseSectionBlock';
import PrettyLink from '../elements/PrettyLink';
import CoverImage from '../elements/CoverImage';

export default function TwitterBlock({ title, linkText, backgroundImage}) {
    return (
      <CoverImage image={backgroundImage} alt={backgroundImage.title}>
      <BaseSectionBlock className="z-front relative text-white" bgImage={true} backgroundImage={backgroundImage}>
      <h3>{title} </h3>
      <a className="twitter-timeline" data-height="400" data-dnt="true" data-theme="light" href="https://twitter.com/ShoreQual?ref_src=twsrc%5Etfw">Tweets by ShoreQual</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
      <PrettyLink className="underline text-xl bottom-0 absolute" linkTo="https://twitter.com/ShoreQual" >{linkText}</PrettyLink>
    </BaseSectionBlock>
    </CoverImage> 
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

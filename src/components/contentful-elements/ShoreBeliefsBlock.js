import React from 'react'
import { graphql } from 'gatsby';
import BaseSectionBlock from '../elements/BaseSectionBlock';
import PrettyLink from '../elements/PrettyLink';
import RichText from '../rich-text/RichText';


export default function ShoreBeliefsBlock({ header, linkText, body, backgroundImage}) {
  return (
    <BaseSectionBlock bgImage={backgroundImage} className="text-primary">
      <h3 className="font-bold mb-8">{header} </h3>
      <RichText text={body.text} />
      <PrettyLink className="underline text-xl absolute bottom-0" linkTo="/contact" >{linkText}</PrettyLink>
    </BaseSectionBlock>
  )
}

export const ShoreBeliefsBlockFragment = graphql`
fragment ShoreBeliefsBlockFragment on ContentfulShoreBeliefsBlock {
  linkText
  header
  body {
    text: json
  }
}

`
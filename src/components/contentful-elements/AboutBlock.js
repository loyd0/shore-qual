import React from 'react'
import { graphql } from 'gatsby';
import Image from '../elements/Image';
import PrettyLink from '../elements/PrettyLink';
import BaseSectionBlock from '../elements/BaseSectionBlock';

export default function AboutBlock({ name, description, linkText, headshot, backgroundImage}) {
  return (
    <BaseSectionBlock backgroundImage={backgroundImage}>
      <Image className=" w-88 rounded-full h-104" image={headshot} alt={headshot.title} />
      <h3>{name} </h3>
      <p>{description}</p>
      <PrettyLink linkTo="/services" >{linkText}</PrettyLink>
    </BaseSectionBlock>
  )
}

export const AboutBlockFragment = graphql`
fragment AboutBlockFragment on ContentfulAboutBlock {
  name
  description
  linkText
  headshot {
    fluid(maxWidth: 400) {
      ...GatsbyContentfulFluid_withWebp
    }
    file {
      url
    }
    title
  }
}

`

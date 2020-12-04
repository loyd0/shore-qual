import React from 'react'
import { graphql } from 'gatsby';
import Image from '../elements/Image';
import PrettyLink from '../elements/PrettyLink';
import BaseSectionBlock from '../elements/BaseSectionBlock';

export default function AboutBlock({ name, description, linkText, headshot, backgroundImage}) {
  return (
    <BaseSectionBlock backgroundImage={backgroundImage} className="text-center justify-center text-primary ">
      <Image className=" w-80 rounded-full h-104 mx-auto" image={headshot} alt={headshot.title} />
      <h3 className="uppercase font-bold mt-8">{name} </h3>
      <p className="max-w-sm mx-auto mb-4">{description}</p>
      <PrettyLink className="justify-center underline text-xl absolute bottom-0  w-full" linkTo="/about" >{linkText}</PrettyLink>
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

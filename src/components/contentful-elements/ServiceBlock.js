import React from 'react'
import { graphql } from 'gatsby';
import BaseSectionBlock from '../elements/BaseSectionBlock';
import PrettyLink from '../elements/PrettyLink';

export default function ServiceBlock({ title, linkText, services, backgroundImage}) {
    return (
        <BaseSectionBlock backgroundImage={backgroundImage}>
            <h3>{ title} </h3>
            {services.map( service => service.title)}
          <PrettyLink linkTo="/services" >{linkText}</PrettyLink>
        </BaseSectionBlock>
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

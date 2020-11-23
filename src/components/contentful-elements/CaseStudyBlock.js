import React from 'react'
import { graphql } from 'gatsby';
import BaseSectionBlock from '../elements/BaseSectionBlock';
import PrettyLink from '../elements/PrettyLink';


export default function CaseStudyBlock({ title, linkText, caseStudies, backgroundImage}) {
  return (
    <BaseSectionBlock backgroundImage={backgroundImage}>
      <h3>{title} </h3>
      {caseStudies.map(caseStudy => caseStudy.title)}
      <PrettyLink linkTo="/services" >{linkText}</PrettyLink>
    </BaseSectionBlock>
  )
}


export const CaseStudyBlockFragment = graphql`
fragment CaseStudyBlockFragment on ContentfulCaseStudyBlock {
  linkText
  title
  caseStudies {
    ...CaseStudyFragment
  }
}

`
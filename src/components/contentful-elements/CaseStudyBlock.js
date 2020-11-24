import React from 'react'
import { graphql } from 'gatsby';
import BaseSectionBlock from '../elements/BaseSectionBlock';
import PrettyLink from '../elements/PrettyLink';


export default function CaseStudyBlock({ title, linkText, caseStudies, backgroundImage}) {
  return (
    <BaseSectionBlock backgroundImage={backgroundImage} className="text-primary">
      <h3 className="font-bold mb-8">{title} </h3>
      {[...caseStudies,...caseStudies, ...caseStudies ].map(caseStudy => <CaseStudyPost {...caseStudy}/>)}
      <PrettyLink className="underline text-xl absolute bottom-0" linkTo="/services" >{linkText}</PrettyLink>
    </BaseSectionBlock>
  )
}


const CaseStudyPost = ({
  preHeader, 
  title, 
  description
}) => <article className="my-6 w-full max-w-full">
  <p className="text-sm font-bold">{preHeader}</p>
  <h4 className="font-bold">{title}</h4>
  <p className="hidden lg:block  ">{description}</p>
  <p className="lg:hidden truncate " >{description}</p>
</article>


export const CaseStudyBlockFragment = graphql`
fragment CaseStudyBlockFragment on ContentfulCaseStudyBlock {
  linkText
  title
  caseStudies {
    ...CaseStudyFragment
  }
}

`
import React from 'react'
import { graphql } from 'gatsby';
import Image from '../elements/Image';
import PrettyLink from '../elements/PrettyLink';
import { slugify } from '../../utils/General';

export default function CaseStudy({
  preHeader, 
  title, 
  description,
  coverImage
}) {
    return (
        <article className="grid grid-cols-2 rounded">
          <Image className="rounded-l" image={coverImage} alt={coverImage.title} />
          <div className="text-primary p-4 bg-white rounded-r">
          <h5 className="text-base ">{preHeader}</h5>
            <h2 className="font-bold">{title} </h2>
          <p className="leading-snug mt-2">{description}</p>
          <PrettyLink className="hover:text-secondary-400" linkTo={slugify(title)} >Read more</PrettyLink>
          </div>
        </article>
    )
}


export const CaseStudyFragmentFragment = graphql`
fragment CaseStudyFragment on ContentfulCaseStudy {
  title
  preHeader
  description
  coverImage {
    ...MiniImageFragment
    ...ImageFragment
  }
  content {
    json
  }
}
`
import React from 'react'
import { graphql } from 'gatsby';
import Image from '../elements/Image';
import PrettyLink from '../elements/PrettyLink';
import { slugify } from '../../utils/General';
import Linked from '../elements/Linked';

export default function CaseStudy({
  preHeader,
  title,
  description,
  coverImage,
  miniCoverImage,
  path
}) {
  return (
    <Linked linkTo={path}>
      <article className="grid grid-cols-2 rounded">
        <Image className="rounded-l" image={miniCoverImage} alt={coverImage.title} />
        <div className="text-primary p-4 bg-white rounded-r">
          <h5 className="text-base ">{preHeader}</h5>
          <h2 className="font-bold">{title} </h2>
          <p className="leading-snug mt-2">{description}</p>
          <PrettyLink className="hover:text-secondary-400" linkTo={slugify(title)} >Read more</PrettyLink>
        </div>
      </article>
    </Linked>
  )
}


export const CaseStudyFragmentFragment = graphql`
fragment CaseStudyFragment on ContentfulCaseStudy {
  title
  preHeader
  description
  coverImage {
    ...ImageFragment
  }
  miniCoverImage: coverImage {
    ...MiniImageFragment
  }
  content {
    json
  }
  path: gatsbyPath(filePath: "/case-studies/{ContentfulCaseStudy.title}")
}
`
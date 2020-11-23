import React from 'react'
import { graphql } from 'gatsby';
import { useBlocks } from '../../utils/useBlocks';
import CoverImage from '../elements/CoverImage';

export default function Section({
  header,
  description,
  blocks,
  coverImage,
  id,
  className,
  ...restProps
}) {



  const Blocks = useBlocks(blocks)


  const SectionChildren = () => 
  <div id={id} className={` flex h-full relative z-front ${className} `} {...restProps}>
    <div className="flex w-full py-12 text-center h-full  ">

      <div className="h-full">
      {header && <h2 className="uppercase font-bold">
        {header}
      </h2>
      }
      {description && <p className="max-w-3xl mx-auto text-center">
        {description.text}
      </p>}
        {Blocks.map((Block, index) => <Block key={index} />)}
      </div>
    </div>
  </div>

  return coverImage ? <CoverImage
    image={coverImage}
    alt={coverImage.title}
  >
    <SectionChildren />
  </CoverImage> :
    <SectionChildren />
}

export const SectionFragment = graphql`
fragment SectionFragment on ContentfulSection {
  header
  description {
    text: description
  }
  coverImage {
    ...ImageFragment
  }
  blocks {
    ...BlogPostFragment
    ...CarouselBlockFragment
    ...TwoColumnListFragment
  }
}

`

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
  blockClassNames,
  children,
  ...restProps
}) {

  const Blocks = useBlocks(blocks)

  const SectionChildren = ({ children }) => 
  <div id={id} className={` flex h-full relative z-front ${className} `} {...restProps}>
    <div className="flex w-full py-12 text-center h-full  ">

      <div className="h-full w-full">
      {header && <h2 className="uppercase font-bold mt-4 mb-4 px-4">
        {header}
      </h2>
      }
      {description && <p className="max-w-3xl text-lg lg:text-xl leading-normal mx-auto text-center px-4">
        {description.text}
      </p>}

      <div className={blockClassNames}>
      {Blocks && Blocks.map((Block, index) => <Block key={index} />)}
      </div>
      { children } 
      </div>
    </div>
  </div>

  return coverImage ? <CoverImage
    image={coverImage}
    alt={coverImage.title}
  >
    <SectionChildren children={children} />
  </CoverImage> :
    <SectionChildren children={children} />
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
    ...LinkFragment
  }
}

`

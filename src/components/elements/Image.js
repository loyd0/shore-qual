import React from "react"
import Img from "gatsby-image"
import { graphql } from 'gatsby'

export default function Image({ image, src, alt, ...restProps }) {
  const isFluid = !!image?.fluid || !!image?.miniFluid;
  const isFixed = !!image?.fixed 

  if (src && isFluid) return  <Img fluid={src} title={alt} {...restProps} />

  return isFluid ? (
    <Img  fluid={image.fluid} title={alt} {...restProps} />
  ) : isFixed ? (
    <Img fixed={image.fixed} title={alt} {...restProps} />
  ) :(
      <img src={image?.file?.url} alt={alt} {...restProps} />
    )
}

export const ImageFragment = graphql`
fragment ImageFragment on ContentfulAsset {
  fluid (maxWidth:1200) {
      ...GatsbyContentfulFluid_withWebp
    }
    file {
      url
    }
    title
}
fragment CoverImageFragment on ContentfulAsset {
  fluid (maxWidth:1400, quality:95) {
      ...GatsbyContentfulFluid_withWebp
    }
    file {
      url
    }
    title
}
fragment SocialCoverImageFragment on ContentfulAsset {
  fixed (width:350, quality:90) {
      src
    }
    file {
      url
    }
    title
}
fragment MiniImageFragment on ContentfulAsset {
  fluid(maxWidth: 200) {
      ...GatsbyContentfulFluid_withWebp
    }
    file {
      url
    }
    title
}

`

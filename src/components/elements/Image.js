import React from "react"
import Img from "gatsby-image"
import { graphql } from 'gatsby'

export default function Image({ image, src, alt, ...restProps }) {
  const isFluid = !!image?.fluid 
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
  fluid {
      ...GatsbyContentfulFluid_withWebp
    }
    file {
      url
    }
    title
}
fragment MiniImageFragment on ContentfulAsset {
  miniFluid: fluid(maxWidth: 200) {
      ...GatsbyContentfulFluid_withWebp
    }
    file {
      url
    }
    title
}

`

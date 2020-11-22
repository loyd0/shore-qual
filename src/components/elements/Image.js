import React from "react"
import Img from "gatsby-image"
import { graphql } from 'gatsby'

export default function Image({ image, alt, ...restProps }) {
  const isFluid = !!image.fluid
  return isFluid ? (
    <Img fluid={image.fluid} title={alt} {...restProps} />
  ) : (
    <img src={image.file.url} alt={alt} {...restProps} />
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

`

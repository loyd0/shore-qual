import React from "react"
import Img from "gatsby-image"

export default function Image({ image, alt, ...restProps }) {
  const isFluid = !!image.fluid
  return isFluid ? (
    <Img fluid={image.fluid} title={alt} {...restProps} />
  ) : (
    <img src={image.file.url} alt={alt} {...restProps} />
  )
}

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Logo(props) {
  const { contentfulSiteSettings } = useStaticQuery(graphql`
query LogoQuery {
  contentfulSiteSettings(contentful_id: {eq: "4zQ8SQMMaFCsX4P5tb14vS"}) {
    siteLogo {
      fluid {
				...GatsbyContentfulFluid
      }
      file {
        url
      }
      title
    }
    contentful_id
  }
}
  `)

  const { siteLogo } = contentfulSiteSettings

  return siteLogo.fluid ? (
    <Img {...props} alt={siteLogo.title} fluid={siteLogo.fluid} />
  ) : (
    <img {...props} src={siteLogo.file.url} alt={siteLogo.title} />
  )
}

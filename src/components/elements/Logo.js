import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Logo(props) {
  const { contentfulSiteSettings } = useStaticQuery(graphql`
    query LogoQuery {
      contentfulSiteSettings(
        id: { eq: "779e0936-ba5b-557c-89f1-f0aece47a0d2" }
      ) {
        siteLogo {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
          file {
            url
          }
          title
        }
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

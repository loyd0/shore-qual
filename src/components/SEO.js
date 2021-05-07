import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, path, title, image, article, twitterUsername }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaImage = `${image ? `${site.siteMetadata.siteUrl}${image}` : `${site.siteMetadata.siteUrl}/public/shore-meta.jpg`}` // placeholder logo here
  const metaTitle = title ? `${title}` : site.siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
    // titleTemplate={`%s | ${site.siteMetadata.title}`}
    >
      <noscript>Your browser does not support JavaScript! A London List works best with javascript ( and by best only ). </noscript>

      <meta name="description" content={metaDescription} />
      <meta name="image" content={metaImage} />

      {/* Facebook */}
      <meta 
          property="og:url" 
          content={`${site.siteMetadata.siteUrl}${path && `${path}`}`} 
      />
      <meta property="og:type" content={article ? `article` : `website`} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta 
            name="twitter:url" 
            content={`${site.siteMetadata.siteUrl}${path && `${path}`}`} 
      />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}

      <meta charSet="UTF-8" />

      <link rel="stylesheet" href="https://use.typekit.net/ugf3djc.css"></link>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO

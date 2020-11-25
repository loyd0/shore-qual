import React from "react"
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

export default function Services({ data  }) {

  const { contentfulServicesPage } = data;
  const { title, header, coverPhoto,} = contentfulServicesPage


  return <Layout
  background={coverPhoto.fluid || coverPhoto.file.url}
>
  <SEO title={title} />

  </Layout>
}


export const ServicePageQuery = graphql`
query ServicePageQuery {
  contentfulServicesPage {
    title
    header
    coverPhoto {
      fluid (maxWidth: 2600) {
        ...GatsbyContentfulFluid_withWebp
    }
      title
    }
  }
}
`
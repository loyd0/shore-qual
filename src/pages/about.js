import React from "react"
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import RichText from '../components/rich-text/RichText';
import Image from '../components/elements/Image';
import { graphql } from 'gatsby';

export default function About({
  data
}) {
  const { contentfulAboutPage: { header, title, content, headshot }, map } = data
  return <Layout
  >
    <SEO title={title} />
    <section className="relative">
      <div className="absolute top-0 w-full ">
        <Image className="w-full xl:w-5/6 ml-auto" image={map} alt="Map of Great British Isles " />
      </div>
      <div className="relative z-10 ">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2  px-4">
          <article className="my-40">
            <h1 className="uppercase font-bold text-secondary-400 mb-6">{header}</h1>
            <RichText text={content.json} className="text-primary" />
            <Image image={headshot} alt={headshot.title} />
          </article>
        </div>

      </div>
    </section>
  </Layout>
}


export const AboutPageQuery = graphql`
query AboutPageQuery {
  contentfulAboutPage {
    title
    header
    content {
      json
    }
    headshot {
      fluid(maxWidth: 400) {
      ...GatsbyContentfulFluid_withWebp
      }
      file {
        url
      }
      title
    }
  }
  map: imageSharp(id: {eq: "c912e435-b72d-57c6-b777-3b63414cafb6"}) {
    id
    fluid {
      ...GatsbyImageSharpFluid_withWebp
    }
  }
}
`
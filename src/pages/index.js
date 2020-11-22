import React from "react"
import Layout from "../components/layout/Layout"
import SEO from "../components/SEO"
import { graphql } from 'gatsby';
import CoverImage from "../components/elements/CoverImage";

const IndexPage = ({ data }) => {


  const { contentfulHomePage } = data;
  const { title, header, subHeader, scrollText, coverPhoto } = contentfulHomePage

  return (
    <Layout
      background={coverPhoto.fluid || coverPhoto.file.url}
    >
      <SEO title={title} />

      <section className="relative">
        <CoverImage image={coverPhoto} alt={coverPhoto.title} overlay="bg-gray-900 bg-opacity-10 " />

        <div className="flex absolute h-full w-full top-0 items-center px-6 text-white ">

          <div className="flex flex-col text-center w-full relative z-40">
            {header && <h2 className="text-5xl ">{header}</h2>}
            {subHeader && <h4>{subHeader}</h4>}
            {scrollText && <p>{scrollText}</p>}
          </div>


        </div>

      </section>

    </Layout>
  )
}


export const IndexPageQuery = graphql`
query IndexPageQuery {
  contentfulHomePage {
    title
    coverPhoto {
      fluid (maxWidth: 2600) {
        ...GatsbyContentfulFluid_withWebp
    }
      title
    }
    header
    scrollText
    subHeader
    testimonialsSection {
      ...SectionFragment
    }
    introContent {
      ...ContentBlockFragment
    }
    sections {
      ...AboutBlockFragment
      ...CaseStudyBlockFragment
      ...ServiceBlockFragment
      ...TwitterBlockFragment
    }
  }
}




`

export default IndexPage

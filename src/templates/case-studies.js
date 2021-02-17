import React from "react"
import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import CoverImage from '../components/elements/CoverImage';
import RichText from "../components/rich-text/RichText";
import CaseStudy from '../components/contentful-elements/CaseStudy';
import CTASection from "../components/contentful-elements/CTASection";

export default function CaseStudies({
  data
}) {


  const {
    content,
    title,
    header,
    coverImage
  } = data.contentfulCaseStudiesPage


  const {caseStudies } = data.allContentfulCaseStudy
  return <Layout background={coverImage}>

    <SEO title={title} />

    <CoverImage overlay="bg-opacity-20 bg-black" className="-mt-20" image={coverImage} alt={coverImage.title}>
      <section className="z-10 relative  max-w-5xl mx-auto flex items-center pt-40 text-white text-shadow-sm  ">

        <div className="text-center px-4 lg:px-0">
          {header && <h1 className="text-5xl lg:text-9xl font-bold mb-2 md:mb-8">{header}</h1>}
          <RichText className="" text={content.json} />
        </div>

      </section>

    </CoverImage>


    <section className="-mt-40 max-w-5xl mx-auto z-40 relative space-y-6 pb-32">
      { caseStudies && caseStudies.map(post => <CaseStudy key={post.id} {...post} />)}
    </section>

    <CTASection />
  </Layout>
}

export const CaseStudiesQuery = graphql`
query CaseStudiesQuery {
  contentfulCaseStudiesPage {
    id
    title
    content {
      json
    }
    header
    coverImage {
     ...ImageFragment
    }
  }

  allContentfulCaseStudy {
    caseStudies: nodes {
      ...CaseStudyFragment
    }
  }
}




`
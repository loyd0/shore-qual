import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../../components/layout/Layout';
import SEO from '../../components/SEO';
import CoverImage from '../../components/elements/CoverImage';
import CTASection from '../../components/contentful-elements/CTASection';
import Image from '../../components/elements/Image';
import RichText from '../../components/rich-text/RichText';

export default function CaseStudyPage({ data }) {

    const { title, coverImage, content } = data.contentfulCaseStudy

    return (
        <Layout background={coverImage}>
            <SEO title={title} description={description} />
            <Image image={coverImage} alt={coverImage.title} className="-mt-20  h-screen" />

            <div className="px-2 md:px-4 lg:px-6">
            <section 
                style={{ marginTop: "-60vh"}} 
                className="relative z-10 -top-24 md:top-0 min-h-screen bg-white py-12 lg:py-24 px-4 lg:px-12 max-w-5xl lg:mx-auto ">
                    <h1 className="mx-auto text-secondary-400 mb-4 lg:mb-12">{title}</h1>
                    < RichText text={content.json} className="text-primary" />
                </section>
            </div>
           
            <CTASection />
        </Layout>
    )

}

export const CaseStudyPageQuery = graphql`
  query ($id: String) {
    contentfulCaseStudy(id: { eq: $id }) {
        ...CaseStudyFragment
    }
  }
`
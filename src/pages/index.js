import React from "react"
import Layout from "../components/layout/Layout"
import SEO from "../components/SEO"
import { graphql } from 'gatsby';
import CoverImage from "../components/elements/CoverImage";
import DownArrow from '../images/svgs/down-arrow';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import ContentBlock from "../components/contentful-elements/ContentBlock";
import Section from '../components/contentful-elements/Section';
import { useBlocks } from '../utils/useBlocks';

const IndexPage = ({ data }) => {


  const { contentfulHomePage } = data;
  const { title, header, subHeader, scrollText, coverPhoto, introContent, testimonialsSection, sections, blogSection } = contentfulHomePage



  const SiteSections = useBlocks(sections)

  console.log('SiteSections', SiteSections)

  return (
    <Layout
      background={coverPhoto.fluid || coverPhoto.file.url}
    >
      <SEO title={title} />

      <section className="relative">
        <CoverImage image={coverPhoto} alt={coverPhoto.title} overlay="bg-gray-900 bg-opacity-20" className="-mt-20" >
          <div className="flex h-screen w-full top-0 items-center px-6 text-white  text-shadow">
            <div className="flex flex-col text-center w-full relative z-40 space-y-6 ">
              {header && <h2 className="text-5xl font-bold ">{header}</h2>}
              {subHeader && <h4>{subHeader}</h4>}
              {scrollText && <AnchorLink to="#intro" className="w-48 mx-auto ">
                <p className="leading-tight">{scrollText}</p>
                <DownArrow className="mx-auto mt-4 animate-bounce duration-100" />
              </AnchorLink>}
            </div>


          </div>
        </CoverImage>



      </section>


      <section 
        id="intro" 
        className=" flex lg:flex-row flex-col w-full justify-between h-full min-h-800  py-12 max-w-6xl mx-auto px-4 text-primary mt-32">


        <ContentBlock {...introContent[0]} className="lg:w-1/2" />

        {/* Add in the footsteps animation here. */}

        <ContentBlock {...introContent[1]} className="lg:w-1/2 lg:self-end ml-auto" />

      </section>


      <Section id="testimonials" {...testimonialsSection} className="text-secondary-400" />


      <section className="grid lg:grid-cols-2 grid-rows-2 grid-cols-1">
        {SiteSections.map( SiteSection => <SiteSection />)}
      </section>

      <Section 
        {...blogSection} 
        id="blog" 
        className="text-secondary-400" 
        blockClassNames="grid lg:grid-cols-2 gap-6  mx-auto max-w-6xl mt-8 px-4" 
        />


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
    introContent {
      ...ContentBlockFragment
    }
    testimonialsSection {
      ...SectionFragment
    }
    sections {
      ...AboutBlockFragment
      ...CaseStudyBlockFragment
      ...ServiceBlockFragment
      ...TwitterBlockFragment
    }
    blogSection {
      ...SectionFragment
    }
  }
}




`

export default IndexPage

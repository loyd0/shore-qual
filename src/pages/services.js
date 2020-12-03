import React from "react"
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import CoverImage from '../components/elements/CoverImage';
import DownArrow from '../images/svgs/down-arrow';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { useBlocks } from '../utils/useBlocks';
import Service from '../components/contentful-elements/Service';
import Section from '../components/contentful-elements/Section';
import { graphql } from 'gatsby';
import SpiderDiagram from '../images/svgs/spider-diagram';

export default function Services({ data }) {

  const { contentfulServicesPage } = data;
  const { title, header, coverPhoto, description, services, sections } = contentfulServicesPage


  return <Layout
    background={coverPhoto.fluid || coverPhoto.file.url}
  >
    <SEO title={title} />


    <CoverImage image={coverPhoto} alt={coverPhoto.title} 
    overlay="bg-gray-900 bg-opacity-20" className="-mt-20 pb-px" >
      <div className="flex lg:py-32 min-h-screen w-full top-0 items-center px-6 text-white  text-shadow max-w-xl mx-auto">
        <div className="flex flex-col text-center w-full relative z-40 space-y-6 ">
          {header && <h1 className="text-6xl font-bold ">{header}</h1>}
          <p className="text-lg">{description.text}</p>
          <AnchorLink to="#intro" className="w-48 mx-auto ">
            <p className="leading-tight">Scroll down to learn more</p>
            <DownArrow className="mx-auto mt-4 animate-bounce duration-100" />
          </AnchorLink>
        </div>
      </div>
    </CoverImage>
   


    <section id="services">

    { services.map((service, index)  => <Service key={service.header + index} reverse={index % 2 === 0} {...service} /> ) }
    
    </section>

      
    { sections.map( section => <Section className="mx-auto px-4 max-w-4xl text-primary"  {...section}  ></Section>)}
   



    <section className="pb-24 pt-12">
      <SpiderDiagram className="mx-auto max-w-3xl px-4" />
    </section>

  </Layout>
}


export const ServicePageQuery = graphql`
query ServicePageQuery {
  contentfulServicesPage {
    title
    header
    description {
      text: description
    }
    coverPhoto {
      fluid (maxWidth: 2600) {
        ...GatsbyContentfulFluid_withWebp
    }
      title
    }
    services {
      ...ServiceFragment
    }
    sections {
      ...SectionFragment
    }
  }
}
`
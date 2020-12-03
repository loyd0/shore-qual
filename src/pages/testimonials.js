import React from "react"
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import RichText from "../components/rich-text/RichText";
import CoverImage from '../components/elements/CoverImage';
import Testimonial from '../components/contentful-elements/Testimonial';
import { graphql } from 'gatsby';
import CTASection from "../components/contentful-elements/CTASection";

export default function Testimonials({ data }) {

  const { contentfulTestimonialsPage } = data;
  const { title, header, content, coverPhoto, testimonials } = contentfulTestimonialsPage

  const Header = <div>
    <div className="flex flex-col text-center w-full relative z-40 space-y-6 ">
      <div className="flex lg:py-32 w-full text-secondary-100 top-0 items-center px-6  text-shadow mx-auto">
        <div className="flex flex-col text-center w-full relative z-40 space-y-6 ">
          {header && <h1 className="uppercase text-5xl font-bold ">{header}</h1>}
          <RichText text={content.json} />
        </div>
      </div>
    </div>
  </div>
  return <Layout
  >
    <SEO title={title} />


    {coverPhoto ? <CoverImage image={coverPhoto} alt={coverPhoto.title} overlay="bg-gray-900 bg-opacity-20" children={Header} className="-mt-20 pb-px" /> : Header}





    <section className="space-y-8 pb-12">
      { testimonials.map( testimonial => <Testimonial data-aos="fade-up" data-aos-duration="1000"  key={testimonial.id} {...testimonial }/>)}
    </section>

<CTASection />
  </Layout>
}


export const TestimonialsPageQuery = graphql`
query TestimonialsPageQuery {
  contentfulTestimonialsPage {
    title
    header
    content {
      json
    }
    testimonials {
      ...TestimonialFragment
    }
  }
}
`
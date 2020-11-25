import React from "react"
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import RichText from "../components/rich-text/RichText";

export default function Testimonials({ data}) {
 
  const { contentfulTestimonialsPage } = data;
  const { title, header, content } = contentfulTestimonialsPage


  return <Layout
  >
    <SEO title={title} />

      <div className="flex lg:py-32 min-h-screen w-full text-secondary-100 top-0 items-center px-6  text-shadow max-w-xl mx-auto">
        <div className="flex flex-col text-center w-full relative z-40 space-y-6 ">
          {header && <h1 className="text-6xl font-bold ">{header}</h1>}
        <RichText text={content.json} />
        </div>
      </div>
   


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
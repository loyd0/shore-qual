import React from 'react'
import { graphql } from 'gatsby';
import Image from '../elements/Image';

export default function Testimonial({
  name,
  quote,
  image
}) {
  return (
    <article className="px-6 lg:px-12 text-primary ">
      <div className="bg-white lg:grid lg:grid-cols-5 py-4 px-6 lg:py-8 lg:pr-4 rounded max-w-4xl mx-auto">
        <div className="flex flex-row lg:flex-col w-full justify-center lg:col-span-2 items-center mb-4 lg:mb-0 ">
          <Image className="mx-auto rounded-full w-40 h-40 self-center lg:w-56 lg:h-56" image={image} alt={image.title} />
        </div>
        <div className="flex flex-col col-span-3 lg:pr-6 text-justify space-y-3">
          <p className=" leading-normal lg:leading-loose">{quote.text}</p>
          <h5 className="font-bold">{name}</h5>
        </div>
      </div>
    </article>
  )
}

export const TestimonialFragment = graphql`
fragment TestimonialFragment on ContentfulTestimonial {
  id
  name
  quote {
    text: quote
  }
  image {
    fluid(maxWidth: 400) {
      ...GatsbyContentfulFluid_withWebp
    }
    title 
    file {
      url
    }
  }
}
`
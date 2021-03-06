import React from 'react'
import { graphql } from 'gatsby';
import Image from '../elements/Image';

export default function Testimonial({
  name,
  quote,
  image,
  ...restProps
}) {
  return (
    <article {...restProps}  className="px-6 lg:px-8  text-primary ">
      <div className="bg-white lg:grid lg:grid-cols-5 py-4 px-6 lg:py-8 lg:pr-4 rounded max-w-4xl mx-auto">
        { image && <div className="flex flex-row lg:flex-col w-full justify-center lg:col-span-2 items-center mb-4 lg:mb-0 ">
          <Image className="mx-auto rounded-full w-40 h-40 self-center xl:w-56 xl:h-56" image={image} alt={image?.title} />
        </div> 
        }
        <div className={`flex flex-col ${image ? "col-span-3" : "col-span-5"} lg:pr-6 text-justify space-y-3`}>
          <p className=" leading-normal xl:leading-loose">{quote.text}</p>
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
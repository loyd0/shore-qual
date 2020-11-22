import React from 'react'
import { graphql } from 'gatsby';

export default function Testimonial() {
    return (
        <div>
            
        </div>
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
  }
}
`
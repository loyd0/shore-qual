import React from 'react'
import { graphql } from 'gatsby';

export default function CarouselBlock() {
    return (
        <div>
            
        </div>
    )
}

export const CarouselBlockFragment = graphql`
fragment CarouselBlockFragment on ContentfulCarouselBlock {
  id
  title
  slides {
    ...TestimonialFragment
  }
}


`

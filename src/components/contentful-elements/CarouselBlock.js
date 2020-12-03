import React from 'react'
import { graphql } from 'gatsby';
import InfiniteCarousel from '../elements/InfiniteCarousel';

export default function CarouselBlock({ slides, title }) {
    return (
      <div className="h-full w-screen py-12 lg:py-24">
        <InfiniteCarousel slides={slides} name={title} />
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

import React from 'react'
import { graphql } from 'gatsby';
import Image from '../elements/Image';

export default function MethodologyBlock({
  name,
  icon,
  description
}) {
    return (
        <article className="mt-4 md:mt-0 md:grid  md:grid-cols-4 gap-x-2 lg:gap-4">
          <figure className="mb-2 md:mb-0 w-12 h-12 lg:w-24 md:ml-auto lg:h-24 p-4 bg-secondary-100 flex justify-center rounded items-center">
          <Image className="w-6 lg:w-12" image={icon} alt={icon.title}/> 
          </figure>
           <div className="text-left col-span-3 ">
              <h4 className="text-base lg:text-lg font-bold">{name}</h4>
              <p className="text-base lg:text-lg">{description.text}</p>
           </div>
        </article>
    )
}


export const MethodologyBlockFragment = graphql`
fragment MethodologyFragment on ContentfulMethodology {
  id
  name
  description {
    text: description
  }
  icon {
		...ImageFragment
  }
}

`

import React from 'react'
import { graphql } from 'gatsby';
import RichText from '../rich-text/RichText';
import Image from '../elements/Image';
import CoverImage from '../elements/CoverImage';

export default function Service({
  header,
  icon,
  description,
  image,
  reverse
}) {
    return (
        <article className="grid grid-rows-1  lg:grid-cols-2 text-primary ">
            <div className={`${!reverse ? "order-2" : "order-2 lg:order-none"}    px-4 py-4 flex flex-col h-full justify-center max-w-2xl mx-auto`}>
              <Image className="w-32 mb-8" image={icon} alt={icon.title} />
              <h3 className="font-bold mb-2 ">{header}</h3>
              <RichText text={description.json}/>
            </div>
            <div className="h-88 sm:h-120 lg:h-full order-1  lg:order-none">
              <CoverImage image={image} alt={image.title}/>
            </div>
        </article>
    )
}

export const ServiceFragment = graphql`
fragment ServiceFragment on ContentfulService {
  header
  icon {
    ...ImageFragment
  }
  description {
    json
  }
  image {
    ...ImageFragment
  }
  sys {
    contentType {
      sys {
        type
      }
    }
  }
}


`

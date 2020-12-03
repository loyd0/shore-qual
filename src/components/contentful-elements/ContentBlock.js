import React from 'react'
import { graphql } from 'gatsby';

export default function ContentBlock({ header, description, id, icon, ...restProps}) {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" {...restProps}>
            <h3 className="font-bold">{header}</h3>
            <p className="text-xl leading-loose">{description.text}</p>
        </div>
    )
}

export const ContentBlockFragment = graphql`
fragment ContentBlockFragment on ContentfulContentBlock {
  header
  description {
    text: description
  }
  icon {
   ...ImageFragment
  }
  id
}

`

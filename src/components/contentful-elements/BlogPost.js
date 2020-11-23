import React from 'react'
import { graphql } from 'gatsby';
import Image from '../elements/Image';

export default function BlogPost({
  id, title, tags, description, coverImage
}) {
    return (
        <div>
           <Image image={coverImage} src={coverImage.miniFluid} alt={coverImage.title}/>
           <h5>{title}</h5>
        </div>
    )
}

export const BlogPostFragment = graphql`
fragment BlogPostFragment on ContentfulBlogPost {
  id
  title
  tags
  description {
    text: description
  }
  content {
    json
  }
  author
  coverImage {
    ...MiniImageFragment
    ...ImageFragment
  }
}

`

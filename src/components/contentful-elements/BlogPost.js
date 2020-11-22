import React from 'react'
import { graphql } from 'gatsby';

export default function BlogPost() {
    return (
        <div>
            
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
    fluid {
      src
    }
  }
}

`

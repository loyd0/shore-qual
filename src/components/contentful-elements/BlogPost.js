import React from 'react'
import { graphql } from 'gatsby';
import Image from '../elements/Image';
import Tag from '../../images/svgs/tag';
import Linked from '../elements/Linked';

export default function BlogPost({
  id, title, tags, description, coverImage, published, content, path
}) {

  const minutes = content?.fields?.readingTime?.minutes
    return (

      <Linked linkTo={path}>
        <article className="relative h-64 text-white hover:shadow-2xl transition-shadow duration-500 cursor-pointer rounded overflow-hidden ">
           <Image className="absolute z-0 top-0 w-full min-h-full rounded" 
          image={coverImage} src={coverImage.miniFluid} alt={coverImage.title}/>

           <div className="absolute z-10 top-0 w-full flex flex-col h-full justify-between text-left p-4 text-shadow-md">

            <div className="flex justify-between text-base font-bold ">
              <span className="uppercase" >{published}</span>
             {minutes && <span >{Math.floor(minutes)} mins</span> } 
            </div>

            <div>
            <ul className="flex space-x-4 w-full flex-wrap h-8 overflow-hidden">
              { tags.map( tag => <li className="flex items-center"><Tag className="mr-2"/>{tag}</li>)}
            </ul>
            <h4 className="text-xl lg:text-4xl truncate font-bold">{title}</h4>
            <p className="truncate">{description.text}</p>
            </div>
          
           </div>
          
        </article>
        </Linked>
    )
}

export const BlogPostFragment = graphql`
fragment BlogPostFragment on ContentfulBlogPost {
  id
  title
  tags
  published(formatString: "MMMM DD, YYYY")
  description {
    text: description
  }
  content {
    fields {
      readingTime {
        minutes
      }
    }
  }
  path: gatsbyPath(filePath: "/blog/{ContentfulBlogPost.title}")
  author
  coverImage {
    ...MiniImageFragment
  }
}

fragment FullBlogPostFragment on ContentfulBlogPost {
  id
  title
  tags
  published(formatString: "MMMM DD, YYYY")
  description {
    text: description
  }
  content {
    json
  }
  
  author
  coverImage {
    ...ImageFragment
  }
  path: gatsbyPath(filePath: "/blog/{ContentfulBlogPost.title}")

}

fragment BlogPostTags on ContentfulBlogPost {
  tags
}
fragment BlogPostDates on ContentfulBlogPost {
  published(formatString: "YYYY")
}

`

import React from "react"
import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import CoverImage from '../components/elements/CoverImage';
import BlogPost from "../components/contentful-elements/BlogPost";
import { convertArrayToObject } from '../utils/General';
import BlogMenu from "../components/elements/BlogMenu";
import CTASection from '../components/contentful-elements/CTASection';



export default function Blog({data}) {

  const {
    title,
    ...restBlogPage
  } = data.contentfulBlog


  const { posts, tags, dates } = data.allContentfulBlogPost


  const allTags = convertArrayToObject(tags.flatMap(tag => tag.tags))
  const allDates = convertArrayToObject(dates.flatMap(date => date.published))
  return <Layout >
    <SEO title={title} />
    <BlogCover {...restBlogPage}/>
 

{/* Menu */}
<BlogMenu title={"All posts"} tags={allTags} dates={allDates} />

{/* Posts */}
<section className="grid lg:grid-cols-2 max-w-5xl mx-auto gap-4 my-12 px-4 lg:px-0">
{posts && posts.map(post => <BlogPost key={post.id} {...post} />)}
</section>



{/* Pagination */}

  <CTASection />
  </Layout>
}

export const BlogCover = ({ coverImage, preHeader, header, subHeader}) => <CoverImage className="-mt-20" image={coverImage} alt={coverImage.title}>
<section className="z-10 relative text-primary max-w-5xl mx-auto flex items-center min-h-screen   "> 

<div className="max-w-2xl px-4 lg:px-0">
{preHeader&& <h4 className="text-secondary-400 text-xl font-bold" >{preHeader}</h4>}
  {header&& <h1 className="text-5xl lg:text-9xl font-bold mb-2 md:mb-8">{header}</h1>}
  {subHeader&& <h2 className="text-3xl font-bold leading-snug ">{subHeader}</h2>}
</div>
 
</section>

</CoverImage>


export const BlogQuery = graphql`
query BlogQuery {
  contentfulBlog {
    id
    preHeader
    subHeader
    title
    header
    coverImage {
      ...ImageFragment
    }
  }
  allContentfulBlogPost {
    posts: nodes {
      ...FullBlogPostFragment
    }
    tags: nodes {
      ...BlogPostTags
    } 
    dates: nodes {
      ...BlogPostDates
    } 
  }
}


`


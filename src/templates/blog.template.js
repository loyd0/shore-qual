import React from 'react'
import Layout from '../components/layout/Layout';
import { graphql } from 'gatsby';
import { BlogCover } from '../pages/blog';
import SEO from '../components/SEO';
import CTASection from '../components/contentful-elements/CTASection';
import BlogMenu from '../components/elements/BlogMenu';
import BlogPost from '../components/contentful-elements/BlogPost';
import { convertArrayToObject } from '../utils/General';

export default function BlogTemplate({ data, pageContext }) {


    const year = pageContext?.year
    const tag = pageContext?.tag

    const {
        title,
        ...restBlogPage
    } = data.contentfulBlog

    const { tags, dates } = data.tagsAndDates
    const { posts: yearPosts } = data.byYear || []
    const { posts: tagPosts } = data.byTag || []


    const allTags = convertArrayToObject(tags.flatMap(tag => tag.tags))
    const allDates = convertArrayToObject(dates.flatMap(date => date.published))

    return (
        <Layout>
            <SEO title={year ? `Posts from ${year} | ${title}` : `Posts under ${tag} | ${title}`} />
            <BlogCover
                {...restBlogPage}
            />


            {/* Menu */}
            <BlogMenu
                title={year ?
                    `Posts from ${year}` :
                    `Posts under #${tag}`}
                tags={allTags}
                dates={allDates}
            />


            {/* Year Posts */}
            { year &&
                <section className="grid max-w-5xl gap-4 px-4 mx-auto my-12 lg:grid-cols-2 lg:px-0">
                    {yearPosts && yearPosts.map(post => <BlogPost key={post.id} {...post} />)}
                </section>}


            {/* Tag Posts */}
            { tag && 
            <section className="grid max-w-5xl gap-4 px-4 mx-auto my-12 lg:grid-cols-2 lg:px-0">
                {tagPosts && tagPosts.map(post => <BlogPost key={post.id} {...post} />)}
            </section>
            }


            <CTASection />
        </Layout>
    )
}



export const BlogTemplateQuery = graphql`
query BlogTemplateQuery($year: Date, $tag: [String]) {
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
  byYear: allContentfulBlogPost(filter: {fields: {sorting: {year: {eq: $year}}}}) {
    posts: nodes {
        ...FullBlogPostFragment
    }
  }
  byTag: allContentfulBlogPost(filter: {fields: {sorting: {sluggedTags: {in: $tag}}}}) {
    posts: nodes {
        ...FullBlogPostFragment
    }
  }

  tagsAndDates: allContentfulBlogPost {
    tags: nodes {
        ...BlogPostTags
    } 
    dates: nodes {
        ...BlogPostDates
    } 
  }

}




`

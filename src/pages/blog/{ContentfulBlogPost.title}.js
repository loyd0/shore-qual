import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../../components/layout/Layout';
import SEO from '../../components/SEO';
import CoverImage from '../../components/elements/CoverImage';
import CTASection from '../../components/contentful-elements/CTASection';
import Image from '../../components/elements/Image';
import RichText from '../../components/rich-text/RichText';
import Tag from '../../images/svgs/tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function BlogPost({ data }) {

    const { title, tags, description, coverImage, published, content, author } = data.contentfulBlogPost

    return (
        <Layout background={coverImage}>
            <SEO title={title} />
            <Image image={coverImage} alt={coverImage.title} className="-mt-20  h-screen" />

            <div className="px-2 md:px-4 lg:px-6">
            <section 
                style={{ marginTop: "-40vh"}} 
                className="relative z-10 -top-24 md:top-0 min-h-screen bg-white py-12 lg:py-24 px-4 lg:px-12 max-w-5xl lg:mx-auto ">
                    <h5 className="text-secondary-400 font-bold">{published}</h5>
                    <h1 className="mx-auto text-secondary-400 mb-4 lg:mb-12">{title}</h1>

                    <div className="flex justify-between mb-3">
                        <h4 className="text-secondary-400 text-xl">{author}</h4>

                        <ul className="flex w-3/4 ml-auto space-x-2 self-end justify-end">
                          { tags &&  tags.map(tag => <li className="flex items-center bg-primary text-primary bg-opacity-20 px-3"><Tag className="mr-1" />{tag}</li>) }
                        </ul>
                    </div>
                    
                    < RichText text={content.json} className="text-primary" />

                    <hr className="border-2 border-secondary-400" />
                </section >


                <section>
                    <div>
                        <p>Share this article</p>
                        <ul>
                            <li><FontAwesomeIcon icon={fab} /></li>
                        </ul>
                    </div>
                </section>
            </div>
           
            <CTASection />
        </Layout>
    )

}

export const BlogPostQuery = graphql`
  query ($id: String) {
    contentfulBlogPost(id: { eq: $id }) {
        ...FullBlogPostFragment
    }
  }
`
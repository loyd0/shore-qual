import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../../components/layout/Layout';
import SEO from '../../components/SEO';
import CTASection from '../../components/contentful-elements/CTASection';
import Image from '../../components/elements/Image';
import RichText from '../../components/rich-text/RichText';
import Tag from '../../images/svgs/tag';
import ShareIcons from '../../components/elements/ShareIcons';
import TweetComment from '../../components/elements/TweetComment';
import PrettyLink from '../../components/elements/PrettyLink';
import BlogPost from '../../components/contentful-elements/BlogPost';
import { isArray } from 'underscore';
import Linked from '../../components/elements/Linked';


export default function BlogPostPage({ data }) {

    const { title,
        // tags, 
        description, coverImage, published, content, author, similarPosts, fields, path, socialCoverImage } = data.contentfulBlogPost
    const { description: aboutSimon } = data.about
    const { aboutShore } = data.shore

    const validWindow = typeof window !== "undefined" ? window : {}


    const similarPostsArray = isArray(similarPosts) ? similarPosts : [similarPosts]

    return (
        <Layout background={coverImage}>
            <SEO 
                path={path} 
                title={title} 
                article={true}
                description={description.text} 
                image={socialCoverImage?.fixed?.src} />
            <Image image={coverImage} alt={coverImage.title} className="-mt-20  h-screen" />

            <div className="px-2 md:px-4 lg:px-0 bg-white max-w-5xl lg:mx-auto mx-2" >
                <section
                    style={{ marginTop: "-40vh" }}
                    className="relative z-10 -top-24 bg-white md:top-0 min-h-screen  pt-12 pb-6 lg:pt-24 px-4  md:px-8 lg:px-12 max-w-5xl lg:mx-auto ">
                    <h5 className="text-secondary-400 font-bold">{published}</h5>
                    <h1 className="mx-auto text-secondary-400 mb-4 lg:mb-12">{title}</h1>

                    <div className="flex justify-between mb-6">
                        <h4 className="text-secondary-400 text-xl">{author}</h4>

                        <ul className="flex flex-wrap w-4/5 ml-auto justify-end">
                            {fields?.sorting.sluggedTags && fields?.sorting.sluggedTags.map((tag, index) => <Linked linkTo={`/blog/tags/${tag}`}>
                                <li key={tag + index} className="my-1 mr-1 flex leading-none py-1 items-center bg-primary text-primary bg-opacity-20 px-3"><Tag className="mr-1" />{tag}</li>
                            </Linked>)}
                        </ul>
                    </div>

                    < RichText text={content.json} className="text-primary" />

                    <hr className="border-2 border-secondary-400" />
                </section >


                <section className="px-4 md:px-8 lg:px-12 text-primary max-w-5xl mx-auto space-y-6 pb-12 lg:pb-24 ">
                    <div className="flex justify-between  ">
                        <p>Share this article:</p>
                        <ShareIcons
                            className="text-secondary-400 space-x-4"
                            iconClassName="hover:text-primary"
                            link={validWindow?.location?.href}
                            title={title}
                        />
                    </div>

                    <div>
                        <h4 className="font-bold text-secondary-400 text-4xl mb-4">Leave a comment</h4>
                        <TweetComment />
                    </div>

                    <div>
                        <h4 className="font-bold text-secondary-400 text-4xl mb-4">Written by Simon Riley</h4>
                        <p className="text-2xl mb-4">{aboutSimon}</p>
                        <PrettyLink linkTo="/about">Find out more about Simon</PrettyLink>
                    </div>

                    <div>
                        <h4 className="font-bold text-secondary-400 text-4xl mb-4">Published on Shore Qual</h4>
                        <p className="text-2xl mb-4">{aboutShore.text}</p>
                        <PrettyLink linkTo="/services">Learn more about Shore</PrettyLink>
                    </div>


                    <div>
                        <h4 className="font-bold text-secondary-400 text-4xl mb-4">Similar Posts</h4>
                        {similarPosts && similarPostsArray.map(post => <BlogPost key={post.id} {...post} />)}
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
    about: contentfulAboutBlock {
        ...AboutBlockFragment
    }
    shore: contentfulSiteSettings(id: { eq: "779e0936-ba5b-557c-89f1-f0aece47a0d2" }) {
        aboutShore {
            text: aboutShore
        }
    }
  }
`
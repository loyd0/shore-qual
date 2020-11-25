import React from 'react'
import ContentBlock from '../components/contentful-elements/ContentBlock';
import CarouselBlock from '../components/contentful-elements/CarouselBlock';
import CaseStudyBlock from '../components/contentful-elements/CaseStudyBlock';
import MethodologyBlock from '../components/contentful-elements/MethodologyBlock';
import ServiceBlock from '../components/contentful-elements/ServiceBlock';
import TwitterBlock from '../components/contentful-elements/TwitterBlock';
import AboutBlock from '../components/contentful-elements/AboutBlock';
import BlogPost from '../components/contentful-elements/BlogPost';
import Link from '../components/contentful-elements/Link';

const blocks = {
    ContentfulContentBlock: ContentBlock,
    ContentfulCarouselBlock: CarouselBlock,
    ContentfulCaseStudyBlock: CaseStudyBlock,
    ContentfulMethodologyBlock: MethodologyBlock,
    ContentfulServiceBlock: ServiceBlock,
    ContentfulTwitterBlock: TwitterBlock,
    ContentfulAboutBlock: AboutBlock,
    ContentfulBlogPost: BlogPost,
    ContentfulLink: Link
}

export const useBlocks = (blocks, props={}) => {
    return blocks ? blocks.map(block => renderBlock(block, props[block.__typename]) ) : [() => <div />]
}


const renderBlock = (block, props={}) => {
    const type = block.__typename
    const Component  = blocks[type]

    console.log(type)
    return Component ? () => <Component {...block} {...props}/> : () => <div />
}
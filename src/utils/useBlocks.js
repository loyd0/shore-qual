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
import Service from '../components/contentful-elements/Service';
import TwoColumnList from '../components/contentful-elements/TwoColumnList';
import ShoreBeliefsBlock from '../components/contentful-elements/ShoreBeliefsBlock';

const blocks = {
    ContentfulContentBlock: ContentBlock,
    ContentfulCarouselBlock: CarouselBlock,
    ContentfulCaseStudyBlock: CaseStudyBlock,
    ContentfulShoreBeliefsBlock: ShoreBeliefsBlock,
    ContentfulMethodologyBlock: MethodologyBlock,
    ContentfulServiceBlock: ServiceBlock,
    ContentfulTwitterBlock: TwitterBlock,
    ContentfulAboutBlock: AboutBlock,
    ContentfulBlogPost: BlogPost,
    ContentfulLink: Link,
    ContentfulTwoColumnList: TwoColumnList,
}

export const useBlocks = (blocks, props={}) => {
    return blocks ? blocks.map(block => renderBlock(block, props[block.__typename]) ) : [() => <div />]
}


const renderBlock = (block, props={}) => {
    const type = block.__typename
    const Component  = blocks[type]
    return Component ? () => <Component {...block} {...props}/> : () => <div />
}
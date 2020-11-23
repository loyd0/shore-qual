import React from 'react'

import ContentBlock from '../components/contentful-elements/ContentBlock';
import CarouselBlock from '../components/contentful-elements/CarouselBlock';
import CaseStudyBlock from '../components/contentful-elements/CaseStudyBlock';
import MethodologyBlock from '../components/contentful-elements/MethodologyBlock';
import ServiceBlock from '../components/contentful-elements/ServiceBlock';

const blocks = {
    contentBlock: ContentBlock,
    ContentfulCarouselBlock: CarouselBlock,
    caseStudyBlock: CaseStudyBlock,
    methodologyBlock: MethodologyBlock,
    serviceBlock: ServiceBlock
}

export const useBlocks = (blocks, props={}) => {
    return blocks ? blocks.map(block => renderBlock(block, props[block.__typename]) ) : []
}


const renderBlock = (block, props={}) => {
    console.log(block)
    const type = block.__typename
    console.log(type)
    console.log(blocks[type])

    console.log(props)

    const Component  = blocks[type]
    return Component ? () => <Component {...block} {...props}/> : []
}
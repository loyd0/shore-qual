import React from 'react'
import { graphql } from 'gatsby';
import BaseSectionBlock from '../elements/BaseSectionBlock';
import PrettyLink from '../elements/PrettyLink';
import CoverImage from '../elements/CoverImage';
import { Timeline } from 'react-twitter-widgets'


export default function TwitterBlock({ title, linkText, backgroundImage }) {

  let ref = React.useRef()

  return (
    <CoverImage image={backgroundImage} alt={backgroundImage.title}>
      <BaseSectionBlock 
        className="z-front relative text-white overflow-hidden" 
        bgImage={true} 
        backgroundImage={backgroundImage}
      >
        <h3 className="mb-8">{title} </h3>

        <div ref={ref} className="bg-gray-900 lg:bg-white bg-opacity-20 lg:bg-opacity-20 rounded">
        <Timeline
          dataChrome="transparent noheader"
          dataSource={{
            sourceType: 'profile',
            screenName: 'ShoreQual',
          }}
          ref={ref}
          options={{
            height: '420',
            theme: "dark",
            dnt: true,
            chrome: "transparent noheader noborders nofooter noscrollbar",
            color: "white"
          }} 
          // onLoad={e => console.log(ref)}
        />
        </div>
       
        <PrettyLink className="underline text-lg lg:text-xl bottom-0 absolute" linkTo="https://twitter.com/ShoreQual" >{linkText}</PrettyLink>
      </BaseSectionBlock>
    </CoverImage>
  )
}

export const TwitterBlockFragment = graphql`
fragment TwitterBlockFragment on ContentfulTwitterBlock {
  id
  title
  linkText
  backgroundImage {
    ...ImageFragment
  }
}

`

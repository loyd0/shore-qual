import React from 'react'
import { graphql } from 'gatsby';
import BaseSectionBlock from '../elements/BaseSectionBlock';
import PrettyLink from '../elements/PrettyLink';
import CoverImage from '../elements/CoverImage';
import Image from '../elements/Image';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { slugify } from '../../utils/General';

export default function ServiceBlock({ title, linkText, services, backgroundImage }) {

  console.log(services)
  return (
    <CoverImage image={backgroundImage} alt={backgroundImage.title} >
      <BaseSectionBlock bgImage={true} className="z-front relative text-white bg-none overflow-hidden  ">

        <h3 className="uppercase font-bold text-4xl mb-8">{title} </h3>

        <div className="grid grid-cols-2 gap-4 mb-8">
        {services.map((service, index) => 
          <ServiceIcon 
            key={service.header + index} 
            linkTo={`/services#${slugify(service.header)}`} 
            image={service.icon} 
            alt={service.icon.title} 
          />)}
        </div>
       
        <PrettyLink className="underline text-lg lg:text-xl bottom-0 absolute" linkTo="/services" >{linkText}</PrettyLink>
      </BaseSectionBlock>
    </CoverImage>
  )
}


const ServiceIcon = ({ image, alt, linkTo="/services" }) => {


  return <div className="bg-primary bg-opacity-50 flex items-center py-8 px-4 justify-center">
      <AnchorLink to={linkTo}>
      <Image className="w-28 mx-auto" image={image} alt={alt} />


      </AnchorLink>
  </div>

}

export const ServiceBlockFragment = graphql`
fragment ServiceBlockFragment on ContentfulServiceBlock {
    id
  title
  linkText
  services {
    ...ServiceFragment
  }
  backgroundImage {
    ...ImageFragment
  }
}


`

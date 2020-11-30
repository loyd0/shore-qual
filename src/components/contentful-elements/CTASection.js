import React from 'react'
import { graphql } from 'gatsby';
import { useStaticQuery } from 'gatsby';
import Image from '../elements/Image';
import PrettyLink from '../elements/PrettyLink';

export default function CTASection({ data }) {


    const {contentfulSiteSettings } = useStaticQuery(graphql`
    query CTASectionQuery {
      contentfulSiteSettings {
          callToActionSection {
            id
            icon {
             ...ImageFragment
            }
            link {
              href
              linkText
            }
            header
          }
      }
    }
    
    
    `)

    const CTAs = contentfulSiteSettings?.callToActionSection


    return (
        <section className="grid md:grid-cols-3 max-w-5xl mx-auto gap-4 py-24 px-4">
            { CTAs && CTAs.map( cta => <CTA key={cta.id} {...cta} />)}
        </section>
    )
}


const CTA = ({
    header,
    link,
    icon
}) => <div className="text-secondary-400 text-center flex flex-col h-full justify-between">
    <Image className="w-48 mx-auto " image={icon} alt={icon.title} />

    <div className=" mx-auto w-64 mt-4 ">
          <h3 className="font-bold text-4xl mb-4">{header}</h3>
          <PrettyLink className="text-primary justify-center hover:text-secondary-400 " linkTo={link.href}>{link.linkText}</PrettyLink>
    </div>
  

</div>



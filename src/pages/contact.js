import React from "react"
import Layout from '../components/layout/Layout';
import RichText from '../components/rich-text/RichText';
import SEO from '../components/SEO';
import SocialLink from '../components/contentful-elements/SocialLink';
import PrettyLink from '../components/elements/PrettyLink';
import { graphql } from 'gatsby';
import CurvedFeet from "../animations/CurvedFeet";

export default function Contact({
  data
}) {

  const { contentfulContactPage: { title, content, links } } = data

  return <Layout
  className="relative"
  >
    <SEO title={title} />



    <CurvedFeet className="absolute w-4/5 md:w-1/2 transform right-0 top-0 rotate-180" />

   
    <section className="relative grid md:grid-cols-2 max-w-5xl gap-x-8 mx-auto text-primary px-6 my-24 space-y-12">
      <div >
        <RichText text={content.json} className="space-y-4" />

        <div className="mt-12 ">
          {links.map(link => <SocialLink {...link} />)}
        </div>
      </div>



      <form className="bg-white rounded p-6 space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input className={inputClasses} type="text" name="name" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name">Email</label>
          <input className={inputClasses} type="email" name="email" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name">Phone</label>
          <input className={inputClasses} type="phone" name="phone" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name">Message</label>
          <textarea rows="4" className={inputClasses} type="text" name="message" />
        </div>
        <div className="flex flex-col">
        <button type="submit"><PrettyLink className="hover:text-secondary-400">Send enquiry</PrettyLink></button>
        </div>


      </form>
    </section>
    
  </Layout>
}


const inputClasses = "bg-primary bg-opacity-40 rounded border-none"

export const ContactPageQuery = graphql`
query ContactPageQuery {
  contentfulContactPage {
    title
    content {
      json
    }
    links {
      ...SocialLinkFragment
    }
  }
}
`
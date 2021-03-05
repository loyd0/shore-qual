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


  const [submitted, setSubmitted] = React.useState(false)
  const { contentfulContactPage: { title, content, links } } = data
  const inputClasses = "bg-primary bg-opacity-40 rounded border-none placeholder-blue-100"

  return <Layout
    className="relative"
  >
    <SEO title={title} />



    <CurvedFeet className="absolute w-4/5 md:w-1/2 transform right-0 top-0 rotate-180" />


    <section className="relative grid md:grid-cols-2 max-w-5xl gap-x-8 mx-auto text-primary px-6 my-24 space-y-12">
      <div >
        <RichText text={content.json} className="space-y-4" />

        <div className="mt-12 ">
          {links.map((link, key) => <SocialLink key={key} {...link} />)}
        </div>
      </div>



      <form className="bg-white rounded p-6 space-y-4 placeholder-primary" data-netlify="true" name="contact" method="POST"  >
        <input type="hidden" name="form-name" value="contact" />
        <p class="hidden">
          <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
        </p>
        {submitted &&    
   <div className="flex items-center">
          <h3>Thank you for getting in touch, I will respond shortly.</h3>
        </div> }
          <div className="flex flex-col placeholder-primary">
            <label htmlFor="full_name">Name</label>
            <input name="full_name" id="full_name" autocomplete="name" required  className={inputClasses} type="text" placeholder="First Last" />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="email">Email</label>
            <input  id="email" name="email" type="email" required autocomplete="email" className={inputClasses} placeholder="email@example.com" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone">Phone</label>
            <input className={inputClasses} type="text" name="phone" id="phone" autocomplete="tel" placeholder="+44 0000 000 000" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message">Message</label>
            <textarea rows="4" className={inputClasses} type="text" required name="message" placeholder="I just wanted to say..." />
          </div>
          <div className="flex flex-col">
            <button type="submit" onClick={() => setSubmitted(true)}>
              <PrettyLink linkTo="#" className="hover:text-secondary-400">Send enquiry</PrettyLink>
            </button>
          </div>


      </form>
    </section>

  </Layout>
}



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
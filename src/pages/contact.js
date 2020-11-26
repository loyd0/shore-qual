import React from "react"
import Layout from '../components/layout/Layout';
import RichText from '../components/rich-text/RichText';
import SEO from '../components/SEO';
import SocialLink from '../components/contentful-elements/SocialLink';

export default function Contact({
  data
}) {

  const { contentfulContactPage: { title, content, links } } = data

  return <Layout
  >
    <SEO title={title} />
    <section className="relative grid grid-cols-2 max-w-5xl mx-auto text-primary mt-24">


      <div>
        <RichText text={content.json} />

        <div className="">
          {links.map(link => <SocialLink {...link} />)}
        </div>
      </div>
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
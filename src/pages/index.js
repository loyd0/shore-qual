import React from "react"
import Layout from "../components/layout/Layout"
import SEO from "../components/SEO"
import { graphql } from 'gatsby';
import CoverImage from "../components/elements/CoverImage";
import DownArrow from '../images/svgs/down-arrow';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import ContentBlock from "../components/contentful-elements/ContentBlock";
import Section from '../components/contentful-elements/Section';
import { useBlocks } from '../utils/useBlocks';
import Lottie from 'react-lottie';
import shoreAnimation from '../animations/shore.json'
import straightFeet from '../animations/feet-straight.json'
import PrettyLink from '../components/elements/PrettyLink';
import CurvedFeet from '../animations/CurvedFeet';


const shoreAnimationOptions = {
  loop: true,
  autoplay: true,
  animationData: shoreAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const straightFeetAnimationOptions = {
  loop: true,
  autoplay: true,
  animationData: straightFeet,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};




const IndexPage = ({ data }) => {


  const { contentfulHomePage } = data;
  const { title, header, subHeader, scrollText, coverPhoto, introContent, testimonialsSection, sections, blogSection } = contentfulHomePage



  const SiteSections = useBlocks(sections)

  console.log(SiteSections)

  return (
    <Layout
      background={coverPhoto.fluid || coverPhoto.file.url}
    >
      <SEO title={title} />

      <section className="relative">
        <CoverImage
          style={{ objectPosition: "90%" }}
          image={coverPhoto} alt={coverPhoto.title} overlay="bg-gray-900 bg-opacity-20" className="-mt-20" >
          <div className="flex h-screen w-full top-0 items-center px-6 text-white  text-shadow">
            <div className="flex flex-col text-center w-full relative z-front space-y-6 ">

              <div className="max-w-2xl mx-auto mt-12">
                <Lottie
                  options={shoreAnimationOptions}
                  width={"100%"}
                />
              </div>

              {header && <h2 className="lg:text-5xl font-bold ">{header}</h2>}
              {subHeader && <h4>{subHeader}</h4>}
              {scrollText && <AnchorLink to="#intro" className="w-48 mx-auto ">
                <p className="leading-tight">{scrollText}</p>
                <DownArrow className="mx-auto mt-4 animate-bounce duration-100" />
              </AnchorLink>}
            </div>


          </div>
        </CoverImage>



      </section>

      <div className="relative">

        <section
          id="intro"
          className=" flex lg:flex-row flex-col w-full justify-between h-full min-h-800  py-12 max-w-6xl mx-auto  text-primary mt-32 mb-24">


          <ContentBlock {...introContent[0]} className="lg:w-1/2 mb-20 md:mb-0 px-4" />
          <div className="md:hidden overflow-hidden">
            <Lottie
              options={straightFeetAnimationOptions}
              width={"100%"}
              style={{
                transform: "scale(2)"
              }}
            />
          </div>

          <ContentBlock {...introContent[1]} className="lg:w-1/2 mt-20 md:mt-0 lg:self-end ml-auto px-4" />

        </section>

        <div

          // style={{ top: 40 }}

          className="hidden md:block absolute sm:top-40 lg:top-20 xl:top-0 overflow-hidden">
          <Lottie
            options={straightFeetAnimationOptions}
            width={"100%"}
          />
        </div>

      </div>

      <Section id="testimonials" {...testimonialsSection} className="text-secondary-400 overflow-x-hidden" />


      <section className="grid lg:grid-cols-2 grid-rows-2 grid-cols-1">
        {SiteSections.map((SiteSection, index) => <SiteSection key={index} />)}
      </section>



      <div className="relative">
        <Section
          {...blogSection}
          id="blog"
          className="text-secondary-400 relative z-10"
          blockClassNames="grid lg:grid-cols-2 gap-6  mx-auto max-w-5xl mt-8 px-4"
        >
          <PrettyLink linkTo="/blog" className="justify-center mt-8 hover:text-primary">See all blog posts</PrettyLink>
        </Section>

        <CurvedFeet className="absolute bottom-0 left-0 w-full lg:w-1/2 max-w-xl z-0" />
      </div>






    </Layout>
  )
}


export const IndexPageQuery = graphql`
query IndexPageQuery {
  contentfulHomePage {
    title
    coverPhoto {
      fluid (maxWidth: 2600) {
        ...GatsbyContentfulFluid_withWebp
    }
      title
    }
    header
    scrollText
    subHeader
    introContent {
      ...ContentBlockFragment
    }
    testimonialsSection {
      ...SectionFragment
    }
    sections {
      ...AboutBlockFragment
      ...ShoreBeliefsBlockFragment
      ...ServiceBlockFragment
      ...TwitterBlockFragment
    }
    blogSection {
      ...SectionFragment
    }
  }
}




`

export default IndexPage

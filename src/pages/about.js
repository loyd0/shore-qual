import React from "react"
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import RichText from '../components/rich-text/RichText';
import Image from '../components/elements/Image';
import { graphql } from 'gatsby';
import { motion } from "framer-motion"
import Pointer from '../images/svgs/pointer';
import Location from '../data/locations'

export default function About({
  data
}) {
  const { contentfulAboutPage: { header, title, content, headshot }, allImageSharp } = data


  const [animating, setAnimating] = React.useState(false)


  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 4,
        repeat: Infinity
      },
    },
    onAnimationComplete: () => console.log("0"),
  }

  const siteAnimation = {
    hidden: {
      opacity: 0
    },
    show: {
      y: [20, 0, 20],
      opacity: [0, 1, 0],
      transition: {
        duration: 8,
        ease: "easeInOut",
      },
    },
    onAnimationComplete: () => console.log("1"),
  }

  return <Layout
  >
    <SEO title={title} />
    <section className="relative">
      <div className="relative max-w-screen-xl mx-auto ">
      <div className="absolute top-0 w-full max-w-screen-xl mx-auto ">
        <Image className="w-full xl:w-5/6 ml-auto" image={allImageSharp.nodes[0]} alt="Map of Great British Isles " />
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          onAnimationComplete={() => setAnimating(!animating)}
          className="hidden md:block"
        >
          {
            Location.sort(() => Math.random() - 0.5).map(({ location, header, description }, index) => {
              return <MapLocation
                key={header + index}
                location={{ ...location }}
                variants={siteAnimation}
                header={header}
                description={description}
              />
            })
          }
        </motion.div>
      </div>
      </div>
      <div className="relative z-10 ">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2  px-4">
          <article className="my-40">
            <h1 className="uppercase font-bold text-secondary-400 mb-6">{header}</h1>
            <RichText text={content.json} className="text-primary" />
            <Image className="max-w-xs" image={headshot} alt={headshot.title} />
          </article>
        </div>

      </div>
    </section>

    <div className="lg:py-40 xl:py-32"></div>
  </Layout>
}

const InfoBox = ({ header, description }) => (
  <div className="p-2 bg-white w-48 rounded-md shadow-xl relative z-10">
    <h4 className="text-xs font-bold">{header}</h4>
    <p className="leading-tight text-xs">{description}</p>
  </div>
)

const MapLocation = ({ variants, header, description, location, animating }) =>
  <motion.div
    variants={variants}
    animate={animating ? "show" : null}
    style={location}
    onAnimationComplete={() => console.log("3")}
    className="absolute">
    <InfoBox
      header={header}
      description={description}
    />

    <div className="w-full ">
      <Pointer className="w-full -mt-2" />
    </div>


  </motion.div>


export const AboutPageQuery = graphql`
query AboutPageQuery {
  contentfulAboutPage {
    title
    header
    content {
      json
    }
    headshot {
      fluid(maxWidth: 400) {
      ...GatsbyContentfulFluid_withWebp
      }
      file {
        url
      }
      title
    }
  }
  allImageSharp(filter: {original: {src: {regex: "/British_Isles_all/g"}}}) {
    nodes {
      id
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
   
  }
}
`
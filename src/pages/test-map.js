import React from "react"
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import RichText from '../components/rich-text/RichText';
import Image from '../components/elements/Image';
import { graphql } from 'gatsby';
import { motion } from "framer-motion"
import Pointer from '../images/svgs/pointer';
import Location from '../data/locations'


export default function TestMap({
    data
}) {
    const { allImageSharp } = data

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
        <section className="relative" style={{ height: "300vh" }}>
            <div className="absolute top-0 w-full max-w-screen-xl">
                <Image className="w-full xl:w-5/6 ml-auto" image={allImageSharp.nodes[0]} alt="Map of Great British Isles " />


                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    onAnimationComplete={() => console.log("2") && setAnimating(!animating)}

                >
                    {
                        Location.sort(() => Math.random() - 0.5).map(({ location, header, description}) => {
                        return  <MapLocation
                        location={{...location}}
                        variants={siteAnimation}
                        header={header}
                        description={description}
                    />
                    })
                    }
                </motion.div>
            </div>
        </section>
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


export const TestMapQuery = graphql`
query TestMapQuery {
 
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
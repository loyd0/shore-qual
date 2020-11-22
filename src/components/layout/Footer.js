import React from "react"
import PropTypes from "prop-types"
import { SocialIcons } from "../elements/SocialIcons"
import Linked from "../elements/Linked"
import { useStaticQuery, graphql } from "gatsby"
import Logo from "../elements/Logo"
import Image from "../elements/Image"

const Footer = (props) => {
  const {
    contentfulSiteSettings,
    allContentfulCaseStudy,
  } = useStaticQuery(graphql`
    query FooterQuery {
      contentfulSiteSettings(
        id: { eq: "779e0936-ba5b-557c-89f1-f0aece47a0d2" }
      ) {
        footerText
        footerSocialLinks {
          link
          linkText
          icon {
            file {
              url
              contentType
            }
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
            title
          }
        }
      }
      allContentfulCaseStudy {
        nodes {
          title
        }
      }
    }
  `)

  const { footerText, footerSocialLinks } = contentfulSiteSettings

  const Link = (props) => (
    <Linked
      {...props}
      className={`hover:text-secondary-400 ${props.className}`}
    />
  )
  return (
    <footer className="bg-gray-200">
      <div className="max-w-screen-xl mx-auto px-5 py-8 lg:py-12 ">
        <Logo />
        <div className="lg:grid  lg:grid-cols-8 lg:gap-x-4 mt-4 space-y-8 lg:space-y-0">
          <div className="lg:col-span-3 text-secondary-400">
            {footerText && <p>{footerText}</p>}
            <h3 className=" mt-6 mb-3 text-xl">SIMON RILEY</h3>
            {footerSocialLinks.map(({ link, linkText, icon }) => {
              return (
                <Link
                  className="flex mt-2 text-primary"
                  linkTo={link}
                >
                  <Image image={icon} alt={icon.title} className="mr-4 w-5" />
                  {linkText}
                </Link>
              )
            })}
          </div>

          <ul className="text-primary">
            <li>
              <h5 className="text-secondary-400">PAGES</h5>
            </li>
            <li>
              <Link linkTo="/">Home</Link>
            </li>
            <li>
              <Link linkTo="/services">Services</Link>
            </li>
            <li>
              <Link linkTo="/case-studies">Case Studies</Link>
            </li>
            <li>
              <Link linkTo="/about">About</Link>
            </li>
            <li>
              <Link linkTo="/contact">Contact</Link>
            </li>
          </ul>
          {allContentfulCaseStudy.nodes && (
            <ul className="text-primary lg:col-span-2">
              <li>
                <h5 className="text-secondary-400">CASE STUDIES</h5>
              </li>
              {allContentfulCaseStudy.nodes.map((study) => (
                <li>
                  <Link linkTo="/contact">{study.title}</Link>
                </li>
              ))}
            </ul>
          )}
          <ul className="text-primary lg:col-span-2">
            <li>
              <h5 className="text-secondary-400">BLOG</h5>
            </li>
            <li>
              <Link linkTo="/blog">Strangers on the Shore</Link>
            </li>
          </ul>
        </div>

        <p className="mt-8 text-secondary-400 text-center lg:text-left">
          www.shorequal.com
        </p>
      </div>
    </footer>
  )
}

Footer.propTypes = {}

export default Footer

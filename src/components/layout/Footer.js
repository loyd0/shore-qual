import React from 'react'
import PropTypes from 'prop-types'
import { SocialIcons } from '../elements/SocialIcons'
import Linked from '../elements/Linked';
import { useStaticQuery, graphql } from 'gatsby';
import Logo from '../elements/Logo';

const Footer = props => {


    const { contentfulSiteSettings, allContentfulCaseStudy } = useStaticQuery(graphql`
        query FooterQuery {
            contentfulSiteSettings(id: {eq: "779e0936-ba5b-557c-89f1-f0aece47a0d2"}) {
                footerText
                footerSocialLinks {
                    link
                    icon {
                        file {
                            url
                            contentType
                        }
                        fluid {
                            ...GatsbyContentfulFluid_withWebp
                        }
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

    return (
        <footer className="max-w-screen-xl mx-auto px-6 bg-gray-100">


            <div className="grid grid-col-5">

                <h4>PAGES</h4>
                <ul className="">
                    <li>
                        <Linked linkTo="/">Home</Linked>
                    </li>
                    <li>
                        <Linked linkTo="/services">Services</Linked>
                    </li>
                    <li>
                        <Linked linkTo="/case-studies">Case Studies</Linked>
                    </li>
                    <li>
                        <Linked linkTo="/about">About</Linked>
                    </li>
                    <li>
                        <Linked linkTo="/contact">Contact</Linked>
                    </li>
                </ul>
            </div>

            <Logo />
        </footer>
    )
}

Footer.propTypes = {

}

export default Footer

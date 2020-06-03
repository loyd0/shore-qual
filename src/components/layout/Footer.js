import React from 'react'
import PropTypes from 'prop-types'
import { SocialIcons } from '../elements/SocialIcons'
import Linked from '../elements/Linked';

const Footer = props => {

    return (
        <footer className="py-12 text-center bg-gray-100 text-gray-900 ">
            <img className="w-16 mb-4 mx-auto opacity-25" src={Logo} alt="San Loyd | Freelance Developer &amp; Designer | Logo" />
            {/* <SocialIcons className="flex justify-center space-x-4 text-xl " itemClassName="hover:text-gray-800 opacity-25 hover:opacity-100" icons={footerLinks} /> */}
            <h5 className="text-lg mt-2 font-thin opacity-25 ">&copy; Sam Loyd {new Date().getFullYear()}</h5>
            <h6 className="text-base font-thin mt-2 opacity-25 hover:opacity-100"><Linked linkTo="https://antler.digital">Looking for Antler Digital? Find it <span className="underline">here</span>.</Linked></h6>
        </footer>
    )
}

Footer.propTypes = {

}

export default Footer

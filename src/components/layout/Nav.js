import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Linked from '../elements/Linked'
import UseBodyLock from '../../hooks/useBodyLock';
// import { SocialIcons } from '../elements/SocialIcons';


const Nav = (props) => {

    const pathName = typeof window !== "undefined" && window.location?.pathname

    const [menuOpen, setMenuOpen] = useState(false)

    UseBodyLock(menuOpen)



    return (
        <>
            <nav className="hidden md:flex py-4 max-w-screen-lg mx-auto font-thin px-2" >
                {/*  Desktop */}
            </nav>

            <div className="md:hidden flex relative">
                {/* Mobile */}
            </div>

            {/* Mobile Nav */}
            <div
                className="md:hidden text-black w-full transition-all duration-700 absolute z-20 top-0 shadow-xl bg-highlight "
                style={{ height: '100vh', marginTop: menuOpen ? "10vh" : "-100vh", marginLeft: menuOpen ? "0vw" : "-100vw", borderRadius: menuOpen ? "0px 0px 400px 0px" : "0px 0px 100px 0px" }}
            />

            <nav
                className="md:hidden text-black bg-gray-100 w-full transition-all duration-700 delay-75 fixed z-30 top-0 shadow-lg font-thin"
                style={{ height: '100vh', marginTop: menuOpen ? "0vh" : "-100vh", marginLeft: menuOpen ? "0vw" : "-100vw", borderRadius: "0px 0px 400px 0px" }}

            >

            </nav>
        </>
    )
}


const NavLinks = ({ links, active, className, itemClassName }) => {
    return <ul className={className}>
        {links && links.map(({ linkTo, page }) =>
            <li key={linkTo + page} className={`w-1/3 hover:font-normal ${active === linkTo ? "font-normal" : ""} text-center relative ${itemClassName}`}>
                <Linked linkTo={linkTo} >{page}  <div className={`block mx-auto w-4/5 border-b-4 ${active === linkTo ? "border-highlight" : "border-transparent"} transform -rotate-3`}></div> </Linked>
            </li>)}
    </ul>
}

Nav.propTypes = {

}

export default Nav

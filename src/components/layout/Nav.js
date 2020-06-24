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
            <nav className="hidden md:flex py-4 flex max-w-screen-lg mx-auto font-thin px-2" >
                <NavLinks className="flex w-2/5 justify-around self-center"  active={pathName} />
                <Linked linkTo="/" className="w-1/5 text-center">
                    Logo
                    {/* <img className="w-16 mx-auto" src={Logo} alt="San Loyd | Freelance Developer &amp; Designer | Logo" /> */}
                </Linked>
                <NavLinks className="flex w-2/5 justify-around self-center"  active={pathName} />
            </nav>

            <div className="md:hidden flex relative">
            <button onClick={() => setMenuOpen(!menuOpen)} className="pl-3 pt-3 text-3xl md:hidden absolute -mt-2" >
                <i className="fa text-gray-700 fa-ellipsis-v"></i>
                <i className="fa text-gray-800 fa-ellipsis-v"></i>
                <i className="fa text-gray-900 fa-ellipsis-v"></i>
            </button>
            <Linked linkTo="/" className="md:hidden w-1/5 mx-auto mb-1 ">
                    {/* <img className="w-12 mx-auto" src={Logo} alt="San Loyd | Freelance Developer &amp; Designer | Logo" /> */}
                </Linked>

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
                {/* <img className="w-16 mt-6 mx-auto" src={Logo} alt="San Loyd | Freelance Developer &amp; Designer | Logo" /> */}
                <div className="flex-col flex">
                    <NavLinks className="mx-auto space-y-6 mt-6" itemClassName="mx-auto text-2xl w-full" active={pathName} />
                </div>
                {/* <SocialIcons itemClassName="text-gray-500 hover:text-gray-800" className="flex space-x-8 mt-4 mx-auto justify-center text-2xl" icons={mobileLinks} /> */}
            </nav>
            <div className="w-full text-center justify-center flex relative z-40">
                <button onClick={() => setMenuOpen(false)} className="rounded-full mx-auto block w-16 transition-all duration-700 h-16 bg-gray-700 text-gray-100 p-5 fixed"
                    style={{ bottom: menuOpen ? 20 : -100, opacity: menuOpen ? 1 : 0 }}>
                    <i className="fa fa-times text-2xl"></i>
                </button>
            </div>

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

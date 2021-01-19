import React, { useState } from "react"
import PropTypes from "prop-types"
import Linked from "../elements/Linked"
import UseBodyLock from "../../hooks/useBodyLock"
import Logo from "../elements/Logo"
import Burger from "../../images/svgs/burger"
import Cross from '../../images/svgs/cross';

const Nav = (props) => {
    const [menuOpen, setMenuOpen] = useState(false)

    UseBodyLock(menuOpen)

    const hasBackground = props.background

    const Link = (props) => (
        <Linked
            {...props}
            className={` hover:text-secondary-100 ${props.className} ${hasBackground ? "text-secondary-400 lg:text-white lg:text-shadow-sm" : "text-secondary-400"
                }`}
        />
    )

    return (
        <>
            <nav className="hidden lg:flex py-4 max-w-screen-xl mx-auto font-thin px-6 relative z-20">
                <Linked linkTo="/">
                <Logo />
                </Linked>
               
                <ul className="uppercase flex w-full space-x-8 self-center ml-8">
                    <li>
                        <Link linkTo="/services">Services</Link>
                    </li>
                    <li>
                        <Link linkTo="/testimonials">Testimonials</Link>
                    </li>
                    {/* Removed whilst Simon Determines what he wants to use here */}
                    {/* <li>
                        <Link linkTo="/case-studies">Case Studies</Link>
                    </li> */}
                    <li>
                        <Link linkTo="/about">About</Link>
                    </li>
                    <li>
                        <Link linkTo="/contact">Contact</Link>
                    </li>
                    <li style={{ marginLeft: "auto" }}>
                        <Link className="" linkTo="/blog">
                            Blog
                        </Link>
                    </li>
                </ul>

                {/*  Desktop */}
            </nav>

            <div className="lg:hidden relative py-4 px-6 flex justify-between text-secondary-400 hover:text-secondary-100 z-20">
                <Logo />
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    <Burger />
                </button>
            </div>

            {/* Mobile Nav */}
            <div
                className="lg:hidden text-black w-full bg-secondary-100  transition-all duration-700 absolute z-20 top-0 shadow-xl"
                style={{
                    height: "100vh",
                    marginTop: menuOpen ? "10vh" : "-100vh",
                    marginLeft: menuOpen ? "0vw" : "-100vw",
                    borderRadius: menuOpen ? "0px 0px 300px 0px" : "0px 0px 100px 0px",
                }}
            />

            <div
                className="lg:hidden text-black w-full bg-primary transition-all duration-700 absolute z-20 top-0 shadow-xl"
                style={{
                    height: "100vh",
                    marginTop: menuOpen ? "10vh" : "-100vh",
                    marginLeft: menuOpen ? "0vw" : "-100vw",
                    borderRadius: menuOpen ? "0px 0px 400px 0px" : "0px 0px 100px 0px",
                }}
            />

            <nav
                className="lg:hidden text-black bg-gray-100 w-full transition-all duration-700 delay-75 fixed z-front top-0 shadow-lg font-thin"
                style={{
                    height: "100vh",
                    marginTop: menuOpen ? "0vh" : "-100vh",
                    marginLeft: menuOpen ? "0vw" : "-100vw",
                    borderRadius: "0px 0px 400px 0px",
                }}
            >


                <div className="lg:hidden relative pb-4 pt-8 px-6 flex justify-between z-40 text-secondary-400 hover:text-secondary-100">
                    <button className="ml-auto" onClick={() => setMenuOpen(!menuOpen)}><Cross /></button>
                </div>

                <ul className="text-center uppercase space-y-10 md:space-y-12 text-2xl flex flex-col md:mt-6">
                    <li>
                        <Link linkTo="/"> <Logo className="mx-auto" /></Link>

                    </li>
                    <li>
                        <Link linkTo="/">Home</Link>
                    </li>
                    <li>
                        <Link linkTo="/services">Services</Link>
                    </li>
                    <li>
                        <Link linkTo="/testimonials">Testimonials</Link>
                    </li>
                    {/* <li>
                        <Link linkTo="/case-studies">Case Studies</Link>
                    </li> */}
                    <li>
                        <Link linkTo="/about">About</Link>
                    </li>
                    <li>
                        <Link linkTo="/contact">Contact</Link>
                    </li>
                    <li >
                        <Link className="" linkTo="/blog">
                            Blog
                        </Link>
                    </li>
                </ul>

            </nav>
        </>
    )
}

const NavLinks = ({ links, active, className, itemClassName }) => {
    return (
        <ul className={className}>
            {links &&
                links.map(({ linkTo, page }) => (
                    <li
                        key={linkTo + page}
                        className={`w-1/3 hover:font-normal ${active === linkTo ? "font-normal" : ""
                            } text-center relative ${itemClassName}`}
                    >
                        <Linked linkTo={linkTo}>
                            {page}{" "}
                            <div
                                className={`block mx-auto w-4/5 border-b-4 ${active === linkTo ? "border-highlight" : "border-transparent"
                                    } transform -rotate-3`}
                            ></div>{" "}
                        </Linked>
                    </li>
                ))}
        </ul>
    )
}

Nav.propTypes = {}

export default Nav

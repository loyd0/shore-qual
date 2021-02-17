import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Nav from "./Nav"
import Footer from "./Footer"
import AOS from "aos"
import "aos/dist/aos.css"
const Layout = ({ children, background }) => {
  // Initialise the Animations for fade up and in
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <header className="">
        <Nav background={background} />
      </header>
      <main className="min-h-screen bg-gray-100 leading-loose font-thin">
        {children}
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {}

export default Layout

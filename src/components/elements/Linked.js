import React from "react"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Linked = ({ linkTo, children, style, className }) => {
  const regex = RegExp("https?|wwww")
  const mailRegex = RegExp("mailto")
  const phoneRegex = RegExp("tel")
  const outward = regex.test(linkTo)
  const mail = mailRegex.test(linkTo)
  const tel = phoneRegex.test(linkTo)

  if (mail || tel) {
    return (
      <a href={linkTo} style={style} className={className}>
        {children}
      </a>
    )
  }
  return outward ? (
    <OutboundLink
      style={style}
      className={className}
      href={`${linkTo.replace(/^\//, "")}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </OutboundLink>
  ) : (
    <Link to={linkTo} style={style} className={className}>
      {children}
    </Link>
  )
}

Linked.propTypes = {}

export default Linked

import Markdown from "markdown-to-jsx"
import React, { useRef, useEffect } from "react"
import {
  Li,
  Ul,
  Ol,
  Quote,
  Code,
  Pre,
  Hr,
  MarkDownImage,
  A,
} from "../rich-text/Components"
import hljs from "highlight.js"
import "highlight.js/styles/atom-one-dark.css"

export default function (text) {
  if (!text) return false
  const rootRef = useRef(null)
  useEffect(() => {
    const pre = rootRef.current?.querySelectorAll("pre code")
    pre &&
      pre.forEach((block) => {
        hljs.highlightBlock(block)
      })
  })

  return (
    <div ref={rootRef}>
      <Markdown
        className="text-left"
        options={
          {
            // *****
            //  Override the default components here
            // *****
            // overrides: {
            //     li: {
            //         component: Li,
            //     },
            //     ul: {
            //         component: Ul,
            //     },
            //     ol: {
            //         component: Ol,
            //     },
            //     blockquote: {
            //         component: Quote,
            //     },
            //     pre: {
            //         component: Pre
            //     },
            //     code: {
            //         component: Code
            //     },
            //     img: {
            //         component: MarkDownImage
            //     },
            //     hr: {
            //         component: Hr
            //     },
            //     a: {
            //         component: A
            //     }
            // },
          }
        }
      >
        {text}
      </Markdown>
    </div>
  )
}

import React from 'react'

export default function DownArrow(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="14" height="21" viewBox="0 0 14 21">
        <g  fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeWidth="2" transform="translate(1 1)">
          <line x1="6" x2="6" y2="18"/>
          <polyline points="0 12 6 18 12 12"/>
        </g>
      </svg>
    )
}

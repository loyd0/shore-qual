import React from 'react'

export default function Tag(props) {
  return (
    <svg  {...props} xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="12" height="12" viewBox="0 0 12 12">
      <defs>
        <path id="tag-a" d="M0,0 L0,4.20000029 L7,11.2000008 L11.2000008,7 L4.20000029,0 L0,0 Z M2.80000019,1.4000001 C3.57000024,1.4000001 4.20000029,2.03000014 4.20000029,2.80000019 C4.20000029,3.57000024 3.57000024,4.20000029 2.80000019,4.20000029 C2.03000014,4.20000029 1.4000001,3.57000024 1.4000001,2.80000019 C1.4000001,2.03000014 2.03000014,1.4000001 2.80000019,1.4000001 Z" />
      </defs>
      <use fill="currentColor" transform="translate(.7 .777)" href="#tag-a"/>
    </svg>
  )
}




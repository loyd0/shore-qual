import React from 'react'
import Lottie from 'react-lottie';
import curvedFeet from './feet-curved.json'

export default function CurvedFeet(props) {

    const curvedFeetAnimationOptions = {
        loop: true,
        autoplay: true,
        animationData: curvedFeet,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return (
        <div
       {...props} >
        <Lottie
          options={curvedFeetAnimationOptions}
          width={"100%"}
        />
      </div>
    )
}

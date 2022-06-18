import React from 'react'

import TypeWriterEffect from "react-typewriter-effect";
import data from '../../assets/data/carddata.js'


function Typewriter({delay,text,speed,style}) {
  return (
    <TypeWriterEffect
    textStyle={{
      fontFamily: "Red Hat Display",
      color: "white",
      margin:"10px 0",
      ...style
    }}
    startDelay={delay}
    cursorColor="pink"
    text={text}
    typeSpeed={speed}
    hideCursorAfterText="true"
  />
  )
}

export default Typewriter
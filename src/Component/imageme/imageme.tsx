import React from 'react'
import { Slide } from 'react-awesome-reveal'
import mepic from "../../image.Icon/InShot_۲۰۲۱۰۳۲۹_۰۰۲۳۱۱۲۶۸.png"
export default function Imageme() {
  return (
    <Slide direction="right">
    <div className="pictureMe_content">
    <img src={mepic} className='image_me'></img>
    </div>
    </Slide>
  )
}

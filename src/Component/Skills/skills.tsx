
import React from 'react'
import "./Skills.css"
import { Slide } from 'react-awesome-reveal'
import Slider from '../Carousel/Slider'
export default function Skills() {
  return (
    <div className='skills_content_container'>
    <Slide direction="down">
    <div className='titleSkills_place'>
    <div className='line1_title_skills'>
     <p className='title1_style_text'>My </p> 
     <p className='title2_style_text'>services</p>
    </div>
    <div className='line2_title_skills'>
    <p className='line2_title1_styleText'>What I Do</p>
    </div>
    </div>
    </Slide>
   
    <div className='skills_content_slider'>
    <Slider/>
    </div>
    </div>
  )
}

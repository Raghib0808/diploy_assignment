import React from 'react'
import Header from './Header'
import Hero_sec from './Hero_sec'
import Info from './Info'
import Slider_section1 from './Slider_section1'
import Label from './Label'
import List from './List'
import SliderPrevSection from './SliderPrevSection'
import Slider_r from './Slider_r'
import Logo from './Logo'
import Footer from './Footer'

const Body = () => {
  return (
    <div className='whole'>
      
      <Hero_sec/>
      <Info/>
      <Slider_section1/>
      <List/>
      <Label/>
      <SliderPrevSection/>
      <Slider_r/>
      <Logo/>
      <Footer/>
    </div>
  )
}

export default Body

import React from 'react'
import Header from './Header'
import Hero_sec from './Hero_sec'
import Info from './Info'
import Slider_section1 from './Slider_section1'
import Label from './Label'
import List from './List'

const Body = () => {
  return (
    <div className='whole'>
      
      <Hero_sec/>
      <Info/>
      <Slider_section1/>
      <List/>
      <Label/>
    </div>
  )
}

export default Body

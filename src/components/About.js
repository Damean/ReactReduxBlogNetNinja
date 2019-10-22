import React from 'react'
import Rainbow from '../HOC/Rainbow'

const About = (props) => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni perspiciatis minima, optio nemo at ea similique, blanditiis ut repellendus obcaecati fuga assumenda? Explicabo iusto voluptate expedita, nisi quo voluptatum blanditiis.</p>
    </div>
  )
}

export default Rainbow(About)
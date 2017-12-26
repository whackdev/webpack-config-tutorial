import React from 'react'
import Boog from 'images/boog'
import Title from 'components/Title'

const hello = () => (
  <div className="container">
    <Title />
    <div className="image-wrapper">
      <img src={Boog} className="image-wrapper__image" alt="" />
    </div>
  </div>
)

export default hello
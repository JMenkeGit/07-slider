import React from 'react'
import { FaQuoteRight } from 'react-icons/fa'

const Review = ({ id, name, image, quote, title, position }) => {
  return (
    <article className={position} key={id}>
      <img className='person-img' src={image} alt={name} />
      <h4>{name}</h4>
      <p className='title'>{title}</p>
      <p className='text'>{quote}</p>
      <FaQuoteRight className='icon' />
    </article>
  )
}

export default Review

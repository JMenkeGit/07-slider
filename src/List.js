import React from 'react'
import Buttons from './Buttons'
import Review from './Review'

const List = ({ people, index, setIndex }) => {
  return (
    <div className='section-center'>
      {people.map((person, personIndex) => {
        // checking the personIndex
        let position = 'nextSlide'
        if (personIndex === index) {
          position = 'activeSlide'
        }
        if (
          personIndex === index - 1 ||
          (index === 0 && personIndex === people.length - 1)
        ) {
          position = 'lastSlide'
        }
        return <Review {...person} position={position} />
      })}
      <Buttons index={index} setIndex={setIndex} />
    </div>
  )
}

export default List

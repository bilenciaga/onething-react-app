import React from 'react'
import CustomButton from './CustomButton'

const OneThing = ({thing, handleCompletedThing}) => {
  return (
    <>
      <h1 className='text-4xl sml:text-6xl font-bold text-center'>
        {thing}
      </h1>
      <CustomButton text="Mark Done" handleCompletedThing={handleCompletedThing} />

    </>
  )
}

export default OneThing
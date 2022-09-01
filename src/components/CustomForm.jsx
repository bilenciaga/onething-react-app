import React from 'react'
import { ArrowRightCircleIcon } from '@heroicons/react/20/solid'

const CustomForm = ({thing, handleInput, handleSubmit}) => {
  return ( 
  <>
    <h1 className='text-4xl sml:text-6xl font-bold text-center'>
      What is your "One Thing"?
    </h1>
    <form className='flex ring-4 rounded-md ring-slate-200  dark:ring-slate-800 focus-within:ring-teal-600 focus-within:ring-offset-4 bg-slate-200 ring-offset-slate-200 dark:ring-offset-slate-800'>
      <input type="text"
      className='bg-inherit rounded-md font-sans text-slate-800  py-2 px-6 focus:outline-none text-xl sm:text-2xl placeholder:text-slate-400 caret-teal-600 appearance-none w-full'
      placeholder='Enter One Thing'
      autoFocus
      maxLength="64"
      value={thing}
      onInput={handleInput}
      />
      <button className='flex items-center bg-inherit rounded-md font-sans text-slate-800 p-2 focus:outline-none focus:text-teal-600 hover:text-teal-600'
              onClick={handleSubmit}>
        <ArrowRightCircleIcon className="h-12 w-12" />
      </button>
    </form>
  </>
  )
}

export default CustomForm
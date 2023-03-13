import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/CSS.png';
import JavaScript from '../assets/JS.png';
import ReactImg from '../assets/react.png';
import C from '../assets/C.png';
import Cplusplus from '../assets/C++.png';
import Python from '../assets/python.png';
import Github from '../assets/github.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
        {/* <p className='py-4'>// These are the technologies I've worked with</p> */}
      </div>

      <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration0-500'>
          <img className='w-20 mx-auto' src={HTML} alt="HTML icon"/>
          <p className='my-4'>HTML</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration0-500'>
          <img className='w-20 mx-auto' src={CSS} alt="HTML icon"/>
          <p className='my-4'>CSS</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration0-500'>
          <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon"/>
          <p className='my-4'>JavaScript</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration0-500'>
          <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon"/>
          <p className='my-4'>React</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration0-500'>
          <img className='w-20 mx-auto' src={C} alt="HTML icon"/>
          <p className='my-4'>C Programming</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration0-500'>
          <img className='w-20 mx-auto' src={Cplusplus} alt="HTML icon"/>
          <p className='my-4'>C++</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration0-500'>
          <img className='w-20 mx-auto' src={Python} alt="HTML icon"/>
          <p className='my-4'>Python</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration0-500'>
          <img className='w-20 mx-auto' src={Github} alt="HTML icon"/>
          <p className='my-4'>Github</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Skills
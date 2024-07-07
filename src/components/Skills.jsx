import React from 'react'
import HtmlIcon from '../assets/skills/1.svg'
import Cmasmas from '../assets/skills/2.svg'
import Java from '../assets/skills/3.svg'
import Css from '../assets/skills/4.svg'
import Sql from '../assets/skills/5.svg'
import JavaScript from '../assets/skills/11.svg'
import ReactIcon from '../assets/skills/7.svg'
import Docker from '../assets/skills/8.svg'
import Pyhton from '../assets/skills/9.svg'
import Bash from '../assets/skills/10.svg'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#fffffd]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className=''>
          <p className='text-4xl font-bold inline border-b-4 border-[#209d5c]'>
            Skills</p>
          <p className='py-4'>Estas son las tecnologías con las que trabaje</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#fffffda9] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HtmlIcon} alt="icono HTML" />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#fffffda9] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Css} alt="icono HTML" />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#fffffda9] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt="icono HTML" />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#fffffda9] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactIcon} alt="icono HTML" />
            <p className='my-4'>React</p>
          </div>
          <div className='shadow-md shadow-[#fffffda9] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Cmasmas} alt="icono HTML" />
            <p className='my-4'>C++</p>
          </div>
          <div className='shadow-md shadow-[#fffffda9] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Java} alt="icono HTML" />
            <p className='my-4'>Java</p>
          </div>
          <div className='shadow-md shadow-[#fffffda9] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Sql} alt="icono HTML" />
            <p className='my-4'>MySql</p>
          </div>
          <div className='shadow-md shadow-[#fffffda9] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Docker} alt="icono HTML" />
            <p className='my-4'>Docker</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Skills

import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import { FlipWords } from "../assets/utils/LetrasHumo";

export function Home() {
  const words = ["Frontend", "Backend", "Fullstack"];
  return (
    <div name='home' className='w-full h-screen bg-[#fffffd]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col
         justify-center h-full'>
        <p>Hola, mi nombre es</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#209d5c]'>Andrés Dalla Rizza</h1>
        <p className='text-3xl sm:text-7xl'>Soy desarrollador<FlipWords className={'text-4xl sm:text-7xl inline-block'} words={words}/> </p>
        <p className='mt-6 mb-6'>¡Te invito a que mires mis proyectos!</p>
        <div>
          <Link to="trabajos" smooth={true} duration={500}>
            <button className='group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#209d5c] hover:border-[#209d5c]'>
              Ver proyectos
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-2 mt-1' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}


export default Home;

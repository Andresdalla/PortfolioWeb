import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#fffffd]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col
         justify-center h-full'>
        <p>Hola, mi nombre es</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#209d5c]'>Andrés Dalla Rizza</h1>
        <h2 className='text-4xl sm:text-7xl'>Full stack developer</h2>
        <p>Soy estudiante de Ingeniería en Sistemas en la Universidad
          ORT y un apasionado desarrollador full stack.
          Mi interés abarca todos los ámbitos del mundo
          de la programación, desde la algoritmia
          hasta la programación dinámica y el manejo de bases de datos.
          Mi objetivo es aprovechar cada oportunidad para aprender
          y crecer en esta emocionante disciplina, contribuyendo con soluciones
          innovadoras y eficientes a los desafíos tecnológicos.</p>
        <div>
          <button className='group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#209d5c] hover:border-[#209d5c]'>
            Ver proyectos 
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-2 mt-1' />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../assets/utils/FondoPixeles";

export function CanvasRevealEffectDemo3() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      name="sobreMi"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-white w-full gap-4 mx-auto px-8 relative"
      style={{ minHeight: '40rem' }} // Use inline style for dynamic height
    >
      <div className='flex flex-col justify-center items-center w-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8'>
          <div className='text-center pb-8'>
            <p className="md:text-4xl text-xl font-bold text-center text-black relative z-20 mx-auto inline border-b-4 border-[#209d5c]">Sobre mi</p>      
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8 px-4'>
            <div>
              <p className='text-xl md:text-3xl relative z-20 font-bold'>Soy un estudiante de ingeniería en sistemas en la Universidad ORT de Uruguay. Actualmente tengo 21 años y me encuentro en el 5to semestre de la carrera.</p>
            </div>
            <div>
              <p className="text-lg md:text-2xl font-bold relative">Soy un apasionado por la programación y la tecnología. Me especializo en áreas diversas como el análisis de datos, desarrollo de aplicaciones, y base de datos. Me encanta aprender cosas nuevas y siempre estoy en la búsqueda de nuevos desafíos.</p>
            </div>
        </div>  
      </div>
      
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName="bg-transparent"
              colors={[
                [43,112,228], //AZUL
                [233,179,0] //NARANJA AMARILLO
              ]}
              opacities={[0.6, 0 , 0.5, 0, 0, 0, 0, 0, 0, 0]}
              dotSize={7}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default CanvasRevealEffectDemo3;
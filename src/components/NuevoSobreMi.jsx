"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../assets/utils/FondoPixeles";

export function CanvasRevealEffectDemo3() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      name = "sobreMi"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="h-[40rem] flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-white w-full gap-4 mx-auto px-8 relative"
    >
    <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className="md:text-4xl text-2xl font-bold text-center text-black relative z-20 max-w-2xl mx-auto inline border-b-4 border-[#209d5c]">Sobre mi</p>      
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div>
              <p className='sm:text-right text-4xl relative z-20 font-bold'>Soy un estudiante de ingeniería en sistemas en la 
                Universidad ORT de Uruguay. Actualmente tengo 21 años y me encuentro en el 5to semestre de la carrera.
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold relative">Soy un apasionado por la programación y la tecnología. Me especializo en areas diversas como el análisis
                de datos, desarrollo de aplicaciones, y base de datos. Me encanta aprender cosas nuevas y siempre estoy en la busqueda de nuevos desafios.
              </p>
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
            //COLORES DE LOS PUNTOS
              colors={[
                // [32, 157, 92], //VERDE
                [43,112,228], //AZUL
                [233,179,0] //NARANJA AMARILLO
              ]}
              opacities={[0.6, 0 , 0.5, 0, 0, 0, 0, 0, 0, 0]}
            // OPACIDAD DE LOS PUNTOS: poner o 0 o 1
            //   opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
              dotSize={7}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Radial gradient for the cute fade */}
      {/* <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-white/50 dark:bg-white/90" /> */}
    </div>
  );
}
export default CanvasRevealEffectDemo3;
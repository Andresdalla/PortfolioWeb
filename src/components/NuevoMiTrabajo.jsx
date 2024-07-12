"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../assets/utils/LayoutGrid";
import logisimImage from "../assets/trabajos/circuito.jpg";
import javaAp from "../assets/trabajos/javaAp.png";
import dataAna from "../assets/trabajos/dataAna.png";
import sorting from "../assets/trabajos/sorting.png";
import notas from "../assets/trabajos/notas.png";

export function LayoutGridDemo() {
  return (
    
    <div className="h-screen py-20 w-full">
      <div className='ml-12 pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#209d5c]'>Proyectos</p>
                    <p className='py-6'>Estos son algunos de mis proyectos</p>
      </div>
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Juego con logisim</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base mb-10 max-w-lg text-neutral-200">
        Juego hecho con logisim, un simulador de circuitos digitales.
      </p>
      <a href="https://github.com/Andresdalla/Logisim_Game" target="_blank" rel="noopener noreferrer">
        <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Código</button>
      </a>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Aplicación de gestión de personal</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Aplicación de gestión de personal en Java, con interfaz gráfica.
      </p>
      <a href="https://github.com/Andresdalla/Java_Applicant_Management" target="_blank" rel="noopener noreferrer">
        <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Código</button>
      </a>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Análisis de datos real State Singapur</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-2 max-w-lg text-neutral-200">
        Análisis de datos de un dataset de compra y venta de propiedades en Singapur.
      </p>
      <a href="https://github.com/Andresdalla/Data_Analysis_Science/blob/main/Singapur_real_state.ipynb" target="_blank" rel="noopener noreferrer">
        <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Código</button>
      </a>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Aplicacion de visualizacion de sorting</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-2 max-w-lg text-neutral-200">
        Aplicación de visualización de algoritmos de ordenamiento en c++ con librería SFML.
      </p>
      <a href="https://github.com/Andresdalla/Sorting-Visualizator/tree/master" target="_blank" rel="noopener noreferrer">
        <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Código</button>
      </a>

    </div>
  );
};

const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Aplicación de notas</p>
      <p className="font-normal text-base text-white">Aplicación de notas con typescript y react. EN DESARROLLO</p>
      <a href="https://github.com/Andresdalla/notasAplic" target="_blank" rel="noopener noreferrer">
        <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Código</button>
      </a>
    </div>
  );
};


const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: logisimImage,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: javaAp,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: dataAna,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: sorting,
  },
  {id: 5,
  content: <SkeletonFive />,
  className: "col-span-1", // Ajusta según la necesidad
  thumbnail: notas, // Reemplaza null con skeletonFiveImage si tienes una imagen para este proyecto
  }
];
export default LayoutGridDemo;
"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../assets/utils/LayoutGrid";
import logisimImage from "../assets/trabajos/circuito.jpg";
import javaAp from "../assets/trabajos/javaAp.png";
import dataAna from "../assets/trabajos/dataAna.png";
import sorting from "../assets/trabajos/sorting.png";


export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
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
      <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Código</button>
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
      <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Código</button>
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
      <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Código</button>

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
      <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Código</button>

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
];
export default LayoutGridDemo;
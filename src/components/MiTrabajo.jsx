import React from 'react'
import Logisim from '../assets/trabajos/logisim.png'

const MiTrabajo = () => {
    return (
        <div name='trabajos' className='w-full md:h-screen bg-[#fffffd]'>
            <div className='max-w-[1000px] mx-auto p-4 px-8 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#209d5c]'>Proyectos</p>
                    <p className='py-6'>Mira los trabajos que hice paaaa</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* grid items */}
                    <div style={{ backgroundImage: `url(${Logisim})` }} className='shadow-lg shadow-[#fffffda9] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* efecto hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold tracking-wider'>
                                Juego en Logisim
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* grid items */}
                    <div style={{ backgroundImage: `url(${Logisim})` }} className='shadow-lg shadow-[#fffffda9] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* efecto hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold tracking-wider'>
                                Juego en Logisim
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* grid items */}
                    <div style={{ backgroundImage: `url(${Logisim})` }} className='shadow-lg shadow-[#fffffda9] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* efecto hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold tracking-wider'>
                                Juego en Logisim
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* grid items */}
                    <div style={{ backgroundImage: `url(${Logisim})` }} className='shadow-lg shadow-[#fffffda9] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* efecto hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold tracking-wider'>
                                Juego en Logisim
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* grid items */}
                    <div style={{ backgroundImage: `url(${Logisim})` }} className='shadow-lg shadow-[#fffffda9] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* efecto hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold tracking-wider'>
                                Juego en Logisim
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* grid items */}
                    <div style={{ backgroundImage: `url(${Logisim})` }} className='shadow-lg shadow-[#fffffda9] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* efecto hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold tracking-wider'>
                                Juego en Logisim
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiTrabajo

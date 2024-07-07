import React from 'react'

const MiTrabajo = () => {
  return (
    <div name = 'trabajos' className='w-full md:h-screen bg-[#fffffd]'>
        <div className='max-w.[1000px] mx-auto p-4 flex flex col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#209d5c]'>Proyectos</p>
                <p className='py-6'>Mira los trabajos que hice paaaa</p>
            </div>

            <div className='grid sm:gird-cols-2 md:grid-cols-3 gap-4'>
                <div className='shadow-lg shadow-[#fffffda9] group container rounded-md
                flex justify-center items-center mx-auto content-div'>
                    {/* efecto hover */}
                    <div>
                        <span>

                        </span>
                        <div>
                            <a href="/">
                                <button>

                                </button>
                            </a>
                            <a href="/">
                                <button>

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

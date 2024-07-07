import React from 'react'

const Contacto = () => {
  return (
    <div name='contacto' className  ='w-full h-screen mt-20 flex justify-center items-center p-4 bg-[#fffffd]'>
        <form method ='POST' action="https://getform.io/f/bwnggeka" className='flex flex-col max-w-[600px] w-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#209d5c]'>Contacto</p>
                <p className='py-4'>Tirame un mail padreeeeeeeee</p>
            </div>
          <input className='my-4 p-2 bg-gray-200' type="text" placeholder='Nombre' name = 'name'/>
          <input className='my-4 p-2 bg-gray-200' type="email" placeholder='Email' name = 'email'/>
          <textarea className=' bg-gray-200 p-2' name="mensaje" rows="10" placeholder='Mensaje'></textarea>
          <div> 
            <button className='border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-[#209d5c] hover:border-[#209d5c]'>Colaboremos</button>
          </div>
        </form>
      
    </div>
  )
}

export default Contacto

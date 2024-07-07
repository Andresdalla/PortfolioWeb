import React from 'react'

const SobreMi = () => {
  return (
    <div name ='sobreMi' className='w-full h-screen  bg-[#fffffd]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#209d5c]'>
              Sobre mi</p>          
          </div>
          <div></div>
        </div>  
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div>
              <p className='sm:text-right text-4xl font-bold'>Presnetacion mia, invitar a que mirenla página</p>
            </div>
            <div>
              <p>decir que hago, y en que me espcializo bla bla bla bla bla
              bla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla bla
              bla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla bla
              bla bla bla bla blabla bla bla bla blavbla bla bla bla blabla bla bla bla blabla bla bla bla bla
              bla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla bla
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default SobreMi

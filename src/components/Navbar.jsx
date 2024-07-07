import React, {useState} from 'react';
import Logo from "../assets/logos/logo8.svg";
import {FaBars,FaTimes} from "react-icons/fa"

const Navbar = () => {
    const [nav,setNav] = useState(false);
    const handleClick= () =>setNav(!nav)
    return (
    <div className='fixed w-full h-[70px] 
    flex justify-between 
    items-center px-4 bg-[#fffffd]'>
        {/* logo */}
        <div>
            <img className=" ml-0" src={Logo} alt= "Imagen nombre" width={250}/>
        </div>   
         {/*menu  */}
            <ul className='hidden md:flex text-[#209d5c] font-bold'>
                <li>Home</li>
                <li>Sobre mi</li>
                <li>Skills</li>
                <li>Contacto</li>
            </ul>
        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars color='#209d5c'/>: <FaTimes color ='#209d5c'/>}
        </div>
        
        {/* menu mobile */} 
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#fffffd] justify-center flex flex-col items-center'} >
            <li className='py-6 text-4xl text-[#209d5c]'>Home</li>
            <li className='py-6 text-4xl text-[#209d5c]'>Sobre Mi</li>
            <li className='py-6 text-4xl text-[#209d5c]'>Skills</li>
            <li className='py-6 text-4xl text-[#209d5c]'>Contacto</li>
        </ul>
    </div>
  )
}

export default Navbar

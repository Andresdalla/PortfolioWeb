import React, { useState } from 'react';
import Logo from "../assets/logos/logo8.svg";
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)
    return (
        <div className='fixed w-full h-[70px] 
    flex justify-between 
    items-center px-4 bg-[#fffffd]'>
            {/* logo */}
            <div>
                <Link to="home" smooth={true} duration={500}>
                    <img className=" ml-0" src={Logo} alt="Imagen nombre" width={250} />
                </Link>
            </div>
            {/*menu  */}
            <ul className='hidden md:flex text-[#209d5c] font-bold'>
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="sobreMi" smooth={true} duration={500}>
                        Sobre mi
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="contacto" smooth={true} duration={500}>
                        Contacto
                    </Link>
                </li>
            </ul>
            {/* hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars color='#209d5c' /> : <FaTimes color='#209d5c' />}
            </div>

            {/* menu mobile */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#fffffd] justify-center flex flex-col items-center'} >
                <li className='py-6 text-4xl text-[#209d5c]'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl text-[#209d5c]'>
                    <Link onClick={handleClick} to="sobreMi" smooth={true} duration={500}>
                        Sobre mi
                    </Link>
                </li>
                <li className='py-6 text-4xl text-[#209d5c]'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl text-[#209d5c]'>
                    <Link onClick={handleClick} to="contacto" smooth={true} duration={500}>
                        Contacto
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar

import { Link } from 'react-router-dom';
import logo from 'src/assets/png 1.png'
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import {  BsCart } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import "./navbar.styles.css"

const Navbar = () => {
  const [openNav, setNavState] = useState(false);
  return (
    <>
      
      {openNav && (
        <div className=" font-serrat py-14 fixed w-[80vw] z-20 top-0 bg-main text-white h-screen">
          <IoMdClose
            onClick={() => setNavState(false)}
            className=" absolute top-8 right-8"
          />
          <div className=" px-5">
            <ul>
              <li className=" hover:bg-yellow-400 hover:text-white px-5 py-4">
                <a className="" aria-current="page" href="#">
                  <Link to="/" onClick={() => setNavState(false)}>
                    Home
                  </Link>
                </a>
              </li>
              <li className="hover:bg-yellow-400 hover:text-white px-5 py-4">
                <a className="" href="#">
                  <Link to="/" onClick={() => setNavState(false)}>
                    About
                  </Link>
                </a>
              </li>
              
             
              <li className=" hover:bg-yellow-400 hover:text-white px-5 py-4">
                <Link to="/">Store</Link>
              </li>
              <li className="hover:bg-yellow-400 hover:text-white px-5 py-4">
                <a className="" href="#">
                  <Link to="/" onClick={() => setNavState(false)}>
                    Cart
                  </Link>
                </a>
              </li>
              <li className="hover:bg-yellow-400 hover:text-white px-5 py-4">
                <a className="" href="#">
                  <Link to="/" onClick={() => setNavState(false)}>
                   Orders
                  </Link>
                </a>
              </li>
              <li className="hover:bg-yellow-400 hover:text-white px-5 py-4">
                <a className="" href="#">
                  <Link to="/" onClick={() => setNavState(false)}>
                    Contact
                  </Link>
                </a>
              </li>
              <li className="hover:bg-yellow-400 hover:text-white px-5 py-4">
                <a className="" href="#">
                  <Link
                    to="/"
                    onClick={() => setNavState(false)}
                    className=""
                  >
                   FAQ
                  </Link>
                </a>
              </li>

              <button className='mt-6 ml-8 px-4 py-3 bg-white text-main'> Log in</button>
              <button className=' px-4 py-3 bg-white ml-4 text-main'> Sign Up</button>
            </ul>
          </div>
        </div>
      )}
      <nav className=' py-4 px-10 font-serrat text-slate-500 flex items-center justify-between'>
          <img src={logo} alt="logo" />
          <ul className=' nav-items flex gap-8'>
              <li><Link>Home</Link></li>
              <li><Link>About</Link></li>
              <li><Link>Categories</Link></li>
              <li><Link>Contact</Link></li>
          </ul>

          <ul className=' nav-items items-center text-md flex gap-2'>
              <li className=' flex items-center gap-2'><BsCart /> <span >|</span></li>
              <li className=' flex items-center gap-2'><CiSearch /> <span> ENG</span>  <span><IoIosArrowDown /></span></li>
              <button className=' ml-8 px-4 py-3 bg-main text-white'> Log in</button>
              <button className=' px-4 py-3 bg-main text-white'> Sign Up</button>
              
      </ul>
      
      <CiMenuBurger onClick={() => setNavState(true)} className='nav-menu text-2xl' />
      </nav>
      
      </>
  )
}

export default Navbar;
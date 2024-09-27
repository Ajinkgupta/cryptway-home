import React from 'react'; 
import { Link } from 'react-router-dom';  
import logo from "../images/logo.png"; 

const Navbar = () => { 
  return ( 
 <nav className="w-full  justify-between md:py-6 md:px-14 py-6 px-4">
<header class="flex z-50  fixed items-center px-2 py-2 border-b-1 navigation gap-4"><div class="flex items-center flex-grow basis-0"> 
<Link to="/"> <img  src={logo} alt="logo" className="w-12 h-12 object-contain"  /></Link>
       </div>
    <div class="justify-end">
    <a href="https://ethwallet.ajink.tech/">  <button
              type="button"
              
              className="flex px-6 py-2   flex-row justify-center items-center my-5 bg-[#eb056d]  p-3 rounded-3xl  cursor-pointer hover:bg-[#119694]"
            >
              <span className="font-poppins font-bold text-lg text-white">
                Launch App  
              </span>
            </button> </a>
            </div>
  
          </header>  
    </nav>
  );
};

export default Navbar;

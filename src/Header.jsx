import React, { useState } from 'react'
import {Link,Route,Routes} from "react-router-dom"
import Elections from './Pages/Elections';
import Home from './Pages/Home';
import NewElection from './Pages/New Election';
function Header() {
    let [open,setOpen]=useState(false);
  return (
    <>
   <div className=' w-full fixed '>
    
    <div className='md:flex bg-black py-6 md:px-10 px-8  text-yellow-100 items-center justify-between'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-yellow-100'>
            E-Elective
        </div>
        <div onClick={()=>setOpen(!open)} className='text-xl absolute  right-3 top-5 cursor-pointer md:hidden'>
        <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-5 py-5 absolute md:static bg-black 
        md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20':'top-[-50px]'}`}>
                <li className='space-x-9'>
                   
                    <Link className='text-yellow-100 hover:text-yellow-400 duration-200'  to="/">Home</Link>
                    <Link className='text-yellow-100 hover:text-yellow-400 duration-200'  to="/NewElection">New Election</Link>
                    <Link className='text-yellow-100 hover:text-yellow-400 duration-200'  to="/Elections">Elections</Link>
                    
                </li>
            </ul>  
    </div>
    
    <Routes >
            <Route  path="/" element={<Home/>}/>
            <Route path="/NewElection" element={<NewElection/>}/>
            <Route path="/Elections" element={<Elections/>}/>
    </Routes>
  
   </div>
   </>
  )
}

export default Header
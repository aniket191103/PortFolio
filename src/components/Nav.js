import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'
import {FaBars,FaTimes} from "react-icons/fa";
import { useState } from 'react';
// import { flushSync } from 'react-dom';

const Nav = () => {

const [click , setClick] = useState(false);
const handleClick=()=>{
    setClick(!click);
}
const[color,setcolor]=useState(false);

const changeColor=()=>{
if(window.scrollY>=100){
    setcolor(true);
}
else{
     setcolor(false);
}
}
window.addEventListener("scroll",changeColor)

  return (
    <div className={color?"header header-bg":"header"}>
      <Link to="/"> 
    <h1>Portfolio</h1>
      </Link>
      <ul className={click?"nav-menu active" :"nav-menu"}>
        <li>
            <Link to="/" >Home</Link>
        </li>
        <li>
            <Link to="/project" >Project</Link>
        </li>
        <li>
            <Link to="/about" >About</Link>
        </li>
        <li>
            <Link to="/contact" >Contact</Link>
        </li>

      </ul>
      <div className='hamburger' onClick={handleClick}>

        {click?(<FaTimes size={20} style={{color:"#fff"}}/>
        ):
        (<FaBars size={20} style={{color:"#fff"}}/>
    )}
        
      </div>
    </div>
  );
};

export default Nav


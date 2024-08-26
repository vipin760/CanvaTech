import React, { useEffect, useState } from 'react'
import Container from '../../Container/Container'
import logo from "/logo.png"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import "./Header.css"

const navItem = [ {path:"/",name:"home"},{path:"/about",name:"about"},{path:"/service",name:"service"},{path:"/contact",name:"contact"} ]
const Header = () => {
    const [ toggle,setToggle ] = useState(false)

    useEffect(()=>{
       const handleWidth=()=>{
        if(window.innerWidth===640){
            setToggle(false)
        }
       }
       window.addEventListener('resize',handleWidth)
    },[window.innerWidth])
    
    const handleToggle=()=>{
        setToggle(!toggle)
    }
    const path= useLocation()    
    
  return (
    <div className=''>
    <div className='fixed z-50 left-0 right-0 w-full box_shadow h-10 sm:h-16 flex justify-between items-center'>
     <div className='m-6'>
        <img src={logo} className='w-40 h-16 sm:w-26 sm:h-20' alt="" />
     </div>

     <div className='hidden sm:block mx-32'> 
        <ul className='flex gap-8'>
            {
                navItem.map((item,idx)=>(
                    <li key={idx} className=''><Link to={item.path} className={`${path.pathname===item.path?"font-bold":""}` } >{item.name}</Link></li>
                ))
            }
        </ul>
     </div>

     <i className={`fas fa-times sm:hidden mx-10 ${toggle?"":"hidden"}`} onClick={handleToggle}></i>
     <i className={`fas fa-bars sm:hidden mx-10 ${toggle?"hidden":""}`} onClick={handleToggle}></i>


    </div>
    <div className='h-10 sm:h-16'></div>
     {/* navbar small device */}
      <div className={`box_shadow p-8 m-1 fixed z-50 left-0 right-0  flex-wrap text-center rounded-lg ${toggle?"":"hidden"}`}>
        <ul>
            {
                navItem.map((item,idx)=>(
                    <li key={idx} className='my-1'><Link to={item.path} className={`${path.pathname===item.path?"font-bold":""}`} onClick={handleToggle}>{item.name}</Link></li>
                ))
            }
        </ul>
      </div>

      </div>
  )
}

export default Header

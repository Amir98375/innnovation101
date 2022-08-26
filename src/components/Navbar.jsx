import React from 'react'
import { useNavigate } from 'react-router'
import './Navbar.css'
import {BsFillHeartFill} from 'react-icons/bs'
export const Navbar = () => {
    const navigate=useNavigate()
    const fav=JSON.parse(localStorage.getItem('fav'))

  return (
    <div>
       <div className='container'>
       <div className='main'onClick={()=>navigate('/')}>Home</div>
       <div className='mainfav' onClick={()=>navigate('/fav')}><BsFillHeartFill/><span className='spanclass'></span></div>
       </div>
    </div>
  )
}

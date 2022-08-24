import React from 'react'
import { useNavigate } from 'react-router'
import './Navbar.css'
export const Navbar = () => {
    const navigate=useNavigate()
  return (
    <div>
       <div className='container'>
       <div className='main'onClick={()=>navigate('/')}>Home</div>
       <div className='main'>Favoriate</div>
       </div>
    </div>
  )
}

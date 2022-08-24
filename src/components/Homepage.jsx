import React from 'react'
import { useState } from 'react'
import './Homepage.css'
import axios from "axios"
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
export const Homepage = () => {
    const navigate=useNavigate()
    const [data,setdata]=useState([])
    const Fetchdata=()=>{
       axios.get(`https://run.mocky.io/v3/5ff1e1a8-b652-40c4-8c1f-5fb701ece088`)
       .then((res)=>setdata(res.data))
       .catch((err)=>console.log(err))
    }
    useEffect(()=>{
        Fetchdata()
    },[])
  return (
    <div >
       {data?.map((el)=>{
        return(
            <div className='containerhome' onClick={()=>navigate(`/detail/${el.Id}`)}>
            <div className='homeshow' onClick={()=>navigate(`/detail/${el.Id}`)}>{el.Menu_Category}</div>
            <div className='homeshow' onClick={()=>navigate(`/detail/${el.Id}`)}>{el.Menu_Items}</div>
           </div>
            
       )
       })}
    </div>
  )
}

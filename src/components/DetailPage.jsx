import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'
import './Detaillpage.css'
export const DetailPage = () => {
    
    const {id}=useParams()
    const [single,setsingle]=useState([])
   
    const getData=(id)=>{
        axios.get(`https://run.mocky.io/v3/5ff1e1a8-b652-40c4-8c1f-5fb701ece088/${id}`,{
            params:{
                _limit:10
            }
        })
        .then((res)=>setsingle(res.data))
    }
    useEffect(()=>{
       getData(id)
    },[id])

    console.log(single,"data")
  return (
    <div className='containerDetails'>
        <div className='detailshow'>{single.Id}</div>
        <div className='detailshow'>2</div>
        <div className='detailshow'>3</div>
    </div>
  )
}

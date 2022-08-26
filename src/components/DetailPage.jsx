import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import './Detaillpage.css'
export const DetailPage = () => {
    const [arrlength,setarrlength]=useState(0)
    // const {el}=useParams()
    const [single,setsingle]=useState([])
   
      const getData=()=>{
        axios.get(`https://apnastore123.herokuapp.com/add`)
        .then((res)=>{setsingle(res.data)
          setarrlength(res.data.length-1)
        })
        .catch((err)=>console.log(err))
      }
      useEffect(()=>{
        getData()
        // if(single){
        //   // setarrlength(single.length)
        // }
        
        //   console.log(single,"use")
      },[])

      const AddToFav=(item)=>{
      // console.log(item,"itme")
        const fav=JSON.parse(localStorage.getItem('fav'))||[]
        localStorage.setItem("fav",JSON.stringify(fav) )
        const dupliactes=fav.filter((cartItem)=>cartItem.Id===item.Id)
        if(dupliactes.length===0){
          fav.push(item);
          localStorage.setItem("fav",JSON.stringify(fav) )
          alert("added succefully")
         
      }
     
    }
      // axios.post(`https://apnastore123.herokuapp.com/fav`,single[arrlength-1]) 
     
 
    
  return (
    <div className='containerDetails'>
        <div className='detailshowno'>
          <img className='imageshow' src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt="" />
        </div>
        <div className='detailshow'>
       
         <div className='datashow'>
           <div>{single[arrlength-1]?.Menu_Category}</div>
          <div>{single[arrlength-1]?.Menu_Items}</div>
          </div>
          {/* style={{display:"flex" , flexWrap:"wrap",width:"80%",border:"1px solid black",margin:"auto"}} */}
         <div className='datashow'>
         <div>Sugar:{single[arrlength-1]?.Added_Sugars_g}</div>
          <div>Cholestrole:{single[arrlength-1]?.Cholesterols_mg}</div>
          <div>Energy:{single[arrlength-1]?.Energy_kCal}</div>
         </div>
         <div className='datashow'>
         <div>Sodium:{single[arrlength-1]?.Sodium_mg}</div>
          <div>TSugar{single[arrlength-1]?.Total_Sugars_g}</div>
          <div>Tcarb{single[arrlength-1]?.Total_carbohydrate_g}</div>
         </div>
         <div className='datashow'>
         <div>Serve:{single[arrlength-1]?.Per_Serve_Size}</div>
          <div>Protien:{single[arrlength-1]?.Protein_g}</div>
          <div>Sat:{single[arrlength-1]?.Sat_Fat_g}</div>
         </div>
         
         <div className='datashow'>
         <div>Id:{single[arrlength-1]?.Id}</div>
         <div>TFat{single[arrlength-1]?.Total_fat_g}</div>
          <div>transFat{single[arrlength-1]?.Trans_fat_g}</div>
       
         </div>
         <button className='buttonclass' onClick={()=>AddToFav(single[arrlength])}>addtofav</button>
        </div>
       
      
    </div>
  )
}

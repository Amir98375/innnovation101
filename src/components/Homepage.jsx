import React from 'react'
import { useState } from 'react'
import './Homepage.css'
import axios from "axios"
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { DetailPage} from './DetailPage'
export const Homepage = () => {
    const navigate=useNavigate()
    const [data,setdata]=useState([])
    const [change,setchange]=useState(null)
   const [order,setorder]=useState('asc')
    const Fetchdata=()=>{
       axios.get(`https://run.mocky.io/v3/5ff1e1a8-b652-40c4-8c1f-5fb701ece088`)
       .then((res)=>setdata(res.data))
       .catch((err)=>console.log(err))
    }
    useEffect(()=>{
        Fetchdata()
    },[])
console.log(data)
    const handleclick=(el)=>{
    
     axios.post(`https://apnastore123.herokuapp.com/add`,el)
     navigate('/detail')
         
    }
    
    const handleChange=(e)=>{
    setchange(e.target.value)
    }
    console.log(change)
const handleOrder=(e)=>{
  setorder(e.target.value)
}
// console.log(order)
const handleSort=()=>{
console.log(order,change,"run")
if(order=="desc" && change=="Energy_kCal"){
  console.log(order,change,"runa")
   data.sort((a,b)=>
a.Energy_kCal-b.Energy_kCal)
}else if(order=="asc" && change=="Energy_kCal"){ 
  console.log(order,change,"runb")
   data.sort((a,b)=>
b.Energy_kCal-a.Energy_kCal)
}
else if(order=="desc" && change=="Protein_g"){ 
  console.log(order,change,"runb")
   data.sort((a,b)=>
b.Protein_g-a.Protein_g)
}
else if(order=="asc" && change=="Protein_g"){ 
  console.log(order,change,"runb")
   data.sort((a,b)=>
b.Protein_g-a.Protein_g)
}
else if(order=="desc" && change=="Total_Sugars_g"){ 
  console.log(order,change,"runb")
   data.sort((a,b)=>
b.Total_Sugars_g-a.Total_Sugars_g)
}
else if(order=="asc" && change=="Total_Sugars_g"){ 
  console.log(order,change,"runb")
   data.sort((a,b)=>
b.Total_Sugars_g-a.Total_Sugars_g)
}
else if(order=="desc" && change=="Total_Sodium_mg"){ 
  console.log(order,change,"runb")
   data.sort((a,b)=>
b.Total_Sodium_mg-a.Total_Sodium_mg)
}
else if(order=="asc" && change=="Total_Sodium_mg"){ 
  console.log(order,change,"runb")
   data.sort((a,b)=>
b.Total_Sodium_mg-a.Total_Sodium_mg)
}
}
  return (
    <div >
      <div><select name="" id="" value={change} onChange={handleChange}>
      <option value="">sortby</option>
      <option value="Energy_kCal" >sortby_Energy_kCal</option>
      <option value="Protein_g" >sortby_Protein_g,</option>
      <option value="Total_Sugars_g">sortby_Total_Sugars_g</option>
      <option value="Total_Sodium_mg">sortby_Total_Sodium_mg
</option>
<option value="Menu_Items">sortby_Menu_Items
</option></select>
<select name="" id="" onChange={handleOrder}>

  <option value="">order</option>
  <option value="asc">high to low</option>
  <option value="desc">low to high</option>
  </select>
  <button onClick={handleSort}>sort</button></div>
       {data?.map((el)=>{
        return(
            <div className='containerhome' onClick={()=>handleclick(el)}>
            <div className='homeshow' >{el.Energy_kCal}</div>
            <div className='homeshow'>{el.Menu_Items}</div>
           
           </div>
            
       )
       })}
        
    </div>
  )
}

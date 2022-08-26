import React from 'react'
import './Wishlist.css'
export const Wishlist = () => {

  const fav=JSON.parse(localStorage.getItem('fav'))
 
  return (
    <div className='favContainer'>
      {fav?.map((el)=>{
       return(
       <div  className='favshowcon' >
             <div className='favshow' >Menu_Category:{el.Menu_Category}</div>
             <div className='favshow' >Menu_Items:{el.Menu_Items}</div>
         <div className='favshow' >Energy_kCal:{el.Energy_kCal}</div>
        <div className='favshow'>Total_fat_g:{el.Total_fat_g}</div>
        <div className='favshow' >Energy_kCal:{el.Energy_kCal}</div>
        <div className='favshow'>Added_Sugars_g:{el.Added_Sugars_g}</div>
       </div>
       )
      })}
    </div>
  )
}

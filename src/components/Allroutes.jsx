import React from 'react'
import {Route, Routes} from 'react-router'
import { DetailPage } from './DetailPage'
import { Homepage } from './Homepage'
import { Navbar } from './Navbar'
import { Wishlist } from './Wishlist'
export const Allroutes = () => {
  return (
    <div>
       <Navbar/>
        <Routes>
       
           <Route path='/' element={<Homepage/>}/>
           <Route path='/detail' element={<DetailPage/>}/>
           <Route path='/fav' element={<Wishlist/>}/>
        </Routes>
    </div>
  )
}

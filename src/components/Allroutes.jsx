import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { DetailPage } from './DetailPage'
import { Homepage } from './Homepage'
import { Wishlist } from './Wishlist'
export const Allroutes = () => {
  return (
    <div>
        <Routes>
           <Route path='/' element={<Homepage/>}/>
           <Route path='detail' element={<DetailPage/>}/>
           <Route path='fav' element={<Wishlist/>}/>
        </Routes>
    </div>
  )
}

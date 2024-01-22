import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePages from '../components/HomePages'
import AddBooks from '../components/AddBooks'
import EditBooks from '../components/EditBooks'
import BookProductList from '../components/BookProductList'

const MainRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePages />} />
      <Route path='/add' element={<AddBooks />} />
      <Route path='/edit/:id' element={<EditBooks />} />
      <Route path='/product' element={<BookProductList />} />
    </Routes>
  )
}

export default MainRouter

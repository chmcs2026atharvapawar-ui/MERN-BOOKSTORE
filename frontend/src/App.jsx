import React from 'react'
import { Route,Routes } from 'react-router'
import CreatePage from './pages/CreatePage'
import HomePage from './pages/HomePage'
import BookDetailsPage from './pages/BookDetailsPage'


const App = () => {
  return (
    <div>
   <Routes>
    <Route path="/"element={<HomePage />}></Route>
    <Route path="/create" element={<CreatePage/>}></Route>
    <Route path="/book/:id" element={<BookDetailsPage/>}></Route>
   </Routes>
    </div>
  )
}
export default App
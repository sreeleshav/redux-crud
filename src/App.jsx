import React from 'react'
import './App.css'
import './bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import ContactList from './components/Update'
import Landing from './pages/Landing';



function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/contact" element={<ContactList />} />
      </Routes>

    </>
  )
}

export default App
import { Button } from '@chakra-ui/react'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import AuthPage from './pages/AuthPage/Authpage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>,
        <Route path='/auth' element={<AuthPage />}/>
      </Routes>
    </>
  )
}

export default App

import React from 'react'
import { CssBaseline } from '@mui/material'
import Iconbar from './components/Iconbar'
import ConversationList from './components/ConversationList'
import { Grid } from '@mui/material'
import ChatWindow from './components/ChatWindow'
import UserInfoSidebar from './components/UserInfoSidebar'

import HomePage from './scenes/HomePage'

import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import RegisterPage from './scenes/RegisterPage'
import LoginPage from './scenes/LoginPage'
import FBConnectPage from './scenes/FBConnectPage'


function App() {

  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/fb-connect" element={<FBConnectPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

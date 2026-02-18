import { useState } from 'react'
import './App.css'  
import HomePage from './pages/HomePage.jsx'
import SubmitComplaintPage from './pages/SubmitComplaintPage.jsx'
import AdminComplaintsPage from './pages/AdminComplaintsPage.jsx'
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/submit" element={<SubmitComplaintPage />} />
        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminComplaintsPage />
          </ProtectedRoute> 
        } />
      </Routes>
    </div>
  )
}

export default App

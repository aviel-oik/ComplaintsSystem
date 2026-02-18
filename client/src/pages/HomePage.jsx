import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";



function HomePage() {

    const { login } = useContext(AuthContext);

  const [inputValue, setInputValue] = useState("")
  const [incorrectPassword, setIncorrectPassword] = useState(false)

  const navigate = useNavigate()

  const goSubmit = () => {
    navigate("/submit")
  }

  const goAdmin = async () => {
    const result = await fetch("http://localhost:8080/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ password: inputValue })
      })
    const {token} = await result.json()
    localStorage.setItem("token", token);
    if (result.ok) {
      login();
      navigate("/admin")
    }
    else 
      setIncorrectPassword(true)
  }

  return (
    <section className="home-page">
      <h1 className="header">Home Page</h1>
      <section className='home-box'>
        <h2>תיבת תלונות הנוימיות בבסיס צבאי</h2>
        <button className='home-btn' onClick={goSubmit} >שליחת תלונה</button>
      </section>
      <section className="home-box">
        <h2>מפקדים בלבד</h2>
        <input type="text" placeholder='password...' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button className='home-btn' onClick={goAdmin}>כניסה לאדמין</button>
        {incorrectPassword && <p>incorrect password</p>}
      </section>
    </section>
  )
}

export default HomePage
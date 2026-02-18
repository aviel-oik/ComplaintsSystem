import React from 'react'
import { Link } from "react-router-dom";

function SubmitComplaintPage() {

  const insertMessage = () => {
    const category = document.getElementById("category").value
    const message = document.getElementById("message").value
    console.log(category, message)
    fetch("http://localhost:8080/api/complaints", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({ category, message })
    })
    .then(response => {
      if (response.ok) {
        alert("complaint sent successfully");
        document.getElementById("message").value = "";
      } else {
        alert("Error !");
      }
    })  
    .catch(error => {
      console.error("Error:", error);
      alert("Error !");
    });
  }

  return (
    <section className="submit-complaint-page">
      <h1 className="header">Submit Complaint Page</h1>
      <Link to="/">Back to Home</Link>
      <section className="submit-box">
        <h2>שליחת תלונות אנונימית</h2>
        <div>
          <label htmlFor="category">קטגוריה:</label>
          <select id="category">
            <option value="אוכל">אוכל</option>
            <option value="פקודות">פקודות</option>
            <option value="ציוד">ציוד</option>
            <option value="אחר">אחר</option>
          </select>
        </div>
        <div>
          <label htmlFor="message">תוכן התלונה: </label>
          <textarea id="message" placeholder='כתוב את התלונה שלך כאן...'></textarea>
        </div>
        <button onClick={insertMessage}>שליחה</button>
      </section>
    </section>
  )
}

export default SubmitComplaintPage
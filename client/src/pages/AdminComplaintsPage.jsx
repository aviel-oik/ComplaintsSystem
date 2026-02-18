import React from 'react'
import { useEffect } from 'react'


function AdminComplaintsPage() {

  const [complaints, setComplaints] = React.useState([])

  const token = localStorage.getItem("token")
  // if (!token) {
  //   return (
  //     <section className='admin-complains-page'>
  //       <h1 className='header'>AdminComplaintsPage</h1>
  //       <h2>רשימת התלונות</h2>
  //       <p>Unauthorized</p>
  //     </section>
  //   )
  // }

  useEffect(() => {
    fetch("http://localhost:8080/api/complaints", {
      headers: { "Authorization": `Bearer ${token}` }
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("Unauthorized");
      }
    })
    .then(data => {
      console.log(data.data)
      setComplaints(data.data)
    }
    )
    .catch(error => {
      console.error("Error:", error);
      alert("zed");
    });
  }, [])








  return (
    <section className='admin-complains-page'>
      <h1 className='header'>AdminComplaintsPage</h1>
      <h2>רשימת התלונות</h2>
      {complaints.length === 0 ? (
        <p>אין תלונות</p>
      ) : (
        <ul>
          {complaints.map(complaint => (
            <li key={complaint.id}>
              <p><strong>תאריך:</strong> {complaint.created_at}</p>
              <p><strong>קטגוריה:</strong> {complaint.category}</p>
              <p><strong>תוכן התלונה:</strong> {complaint.message}</p>
            </li>
          ))}
        </ul>
      )}

    </section>
  )
}

export default AdminComplaintsPage
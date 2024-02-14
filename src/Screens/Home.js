import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Carousel from '../Components/Carousel'
import { Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  let navigate = useNavigate()
  const handleLogout = async () => {
    const response = await fetch('http://127.0.0.1:5000/logout',{
      method : "POST",
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : localStorage.getItem("auth"),
      },
      body : JSON.stringify({"firstname":localStorage.getItem("name"),"patientname":localStorage.getItem("patientname")})
    });

    const json = await response.json();

    if (!json.success) {
      alert("Check your Email or Password");
    }
    else{
      console.log("Successful");
    }
    localStorage.removeItem("auth")
    localStorage.removeItem("name")
    localStorage.removeItem("patientname")
    navigate('/login')
  };
  return (
    <div>
      {localStorage.getItem("auth") ? (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <div className="navbar-brand fs-1 fst-italic text-white">Welcome {localStorage.getItem("name")}!</div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
              <button type="button" className="btn btn-danger mx-3" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </nav>
          <div className='buttons mx-3'>
            <div class="mt-4 pt-2">
              <h4>Book an appointment: <Link className="btn bg-primary text-white my-4" to="/appointment">Here</Link></h4>
            </div>
            <div class="mt-4 pt-2">
              <h4>Contact us: <Link className="btn bg-primary text-white my-4" to="/contact">Here</Link></h4>
            </div>
            <div class="mt-4 pt-2">
              <h4>Predict your test results: <Link className="btn bg-primary text-white my-4" to="/patient">Here</Link></h4>
            </div>
          </div>
          <Footer />
        </div>
      ) :
        (<div>
          <Navbar />
          <Carousel />
          <Footer />
        </div>)}
    </div>
  )
};

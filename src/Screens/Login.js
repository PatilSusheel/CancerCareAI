import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Register.css'

function Login() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  let navigate = useNavigate()

  const handleLogin = async () => {
    // Implement your login logic here
    const response = await fetch('http://127.0.0.1:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "email": email, "password": password })
    })
    const json = await response.json();

    if (!json.success) {
      alert("Check your Email or Password")
    }
    if (json.success) {
      localStorage.setItem('name', json.firstname)
      localStorage.setItem('auth', json.auth)
      console.log(json.success)
      console.log(json.auth)
      navigate('/appointment')
    }
  };

  const cardStyle = {
    borderRadius: '15px',
  };
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand btn bg-warning text-white" to="/">Home</Link>
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
        <div className='bars'>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <form className="d-flex">
              <Link className="btn bg-success text-white mx-5 " to="/register">Register</Link>
            </form>
          </div>
        </div>
      </nav>
      <section class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
          <div class="row justify-content-center align-items-center h-100">
            <div class="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration" style={cardStyle}>
                <div class="card-body p-4 p-md-5">
                  <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Login Form</h3>
                  <form>


                    <div class="row">
                      <div class="col-md-6 mb-4 pb-2">

                        <div class="form-outline">
                          <input type="email" id="emailAddress" class="form-control form-control-lg" placeholder='Email address'value={email} onChange={(e) => setemail(e.target.value)} />
                        </div>

                      </div>
                      <div class="col-md-6 mb-4 pb-2">

                        <div class="form-outline">
                          <input type="password" id="password" class="form-control form-control-lg" placeholder='Password' value={password} onChange={(e) => setpassword(e.target.value)}/>
                        </div>

                      </div>
                    </div>

                    <div class="mt-4 pt-2">
                    <button type="button" className="btn btn-primary btn-block" onClick={handleLogin}>
                        Login
                      </button>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="fr">
        <span className="ft"> CancerCareAI © 2023</span>
      </div>
    </div>
  );
}

export default Login;

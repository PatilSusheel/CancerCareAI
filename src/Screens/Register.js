import React from 'react'
import { useState } from 'react';
import './Register.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Register() {
  const [firstname, setfirstname] = useState('');
  const [surname, setsurname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [gender, setgender] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  let navigate = useNavigate()

  const handleLogin = async () => {
  // Implement your login logic here
  const response = await fetch('http://127.0.0.1:5000/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "firstname": firstname,
      "surname": surname,
      "email": email,
      "password": password,
      "gender": gender,
      "PhoneNumber": phonenumber
    })
  });

  if (response.ok) {
    navigate('/login');
    console.log("Registered Successfully");
  } else {
    console.log("Error");
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
              <Link className="btn bg-success text-white mx-5 " to="/login">Login</Link>
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
                  <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                  <form>

                    <div class="row">
                      <div class="col-md-6 mb-4">

                        <div class="form-outline">
                          <input type="text" id="firstName" class="form-control form-control-lg" placeholder='First name' value={firstname} onChange={(e) => setfirstname(e.target.value)} />
                        </div>

                      </div>
                      <div class="col-md-6 mb-4">

                        <div class="form-outline">
                          <input type="text" id="lastName" class="form-control form-control-lg" placeholder='Surname' value={surname} onChange={(e) => setsurname(e.target.value)} />
                        </div>

                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4 d-flex align-items-center">

                        <div class="form-outline datepicker w-100">
                          <input type="email" class="form-control form-control-lg" id="birthdayDate" placeholder='Email address' value={email} onChange={(e) => setemail(e.target.value)} />
                        </div>

                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <h6 class="mb-2 pb-1">Gender: </h6>

                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="femaleGender"
                          value="female"
                          checked={gender === 'female'}
                          onChange={(e) => setgender(e.target.value)}
                        />
                        <label class="form-check-label" for="femaleGender">
                          Female
                        </label>
                      </div>

                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="maleGender"
                          value="male"
                          checked={gender === 'male'}
                          onChange={(e) => setgender(e.target.value)}
                        />
                        <label class="form-check-label" for="maleGender">
                          Male
                        </label>
                      </div>

                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="otherGender"
                          value="other"
                          checked={gender === 'other'}
                          onChange={(e) => setgender(e.target.value)}
                        />
                        <label class="form-check-label" for="otherGender">
                          Other
                        </label>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4 pb-2">

                        <div class="form-outline">
                          <input type="password" id="password" class="form-control form-control-lg" placeholder='Password' value={password} onChange={(e) => setpassword(e.target.value)} />
                        </div>

                      </div>
                      <div class="col-md-6 mb-4 pb-2">

                        <div class="form-outline">
                          <input type="tel" id="phoneNumber" class="form-control form-control-lg" placeholder='Phone number' value={phonenumber} onChange={(e) => setphonenumber(e.target.value)} />
                        </div>

                      </div>
                    </div>

                    <div class="mt-4 pt-2">
                      <button type="button" className="btn btn-primary btn-block" onClick={handleLogin}>
                        Register
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
export default Register
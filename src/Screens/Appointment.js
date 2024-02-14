import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Appointment() {
  const [patientname, setpatientname] = useState('');
  const [docname, setdocname] = useState('');
  const [hosname, sethosname] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const [slot, setSlot] = useState(new Date());
  let navigate = useNavigate();

  const handleLogin = async () => {
    const response = await fetch('http://127.0.0.1:5000/appointment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "patientname": patientname,
        "docname": docname,
        "hosname": hosname,
        "PhoneNumber": phonenumber,
        "slot": slot,
      })
    });

    if (response.ok) {
      navigate('/');
      console.log("Appointment done");
    } else {
      console.log("Error");
    }
  };

  const cardStyle = {
    borderRadius: '15px',
  };

  return (
    <div>
      {localStorage.getItem("auth") ?
        (<div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{height:"50px"}}>
            <div className="container-fluid">
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
          </nav>

          <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
              <div className="row justify-content-center align-items-center h-100">
                <div className="col-12 col-lg-9 col-xl-7">
                  <div className="card shadow-2-strong card-registration" style={cardStyle}>
                    <div className="card-body p-4 p-md-5">
                      <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Book an Appointment</h3>
                      <form>

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input type="text" id="patientname" className="form-control form-control-lg" placeholder='Patient name' value={patientname} onChange={(e) => setpatientname(e.target.value)} />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input type="text" id="docname" className="form-control form-control-lg" placeholder='Doctor`s name' value={docname} onChange={(e) => setdocname(e.target.value)} />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-4 pb-2">
                            <div className="form-outline">
                              <input type="text" id="hosname" className="form-control form-control-lg" placeholder='Hospital name' value={hosname} onChange={(e) => sethosname(e.target.value)} />
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-6 mb-4">
                              <h6 className="mb-2 pb-1">Book a slot:</h6>
                              <div className="form-outline datepicker w-100">
                                <DatePicker
                                  selected={slot}
                                  onChange={(date) => setSlot(date)}
                                  showTimeSelect
                                  dateFormat="Pp"
                                />
                              </div>
                            </div>
                          </div>


                          <div className="col-md-6 mb-4 pb-2">
                            <div className="form-outline">
                              <input type="tel" id="phoneNumber" className="form-control form-control-lg" placeholder='Phone number' value={phonenumber} onChange={(e) => setphonenumber(e.target.value)} />
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 pt-2">
                          <Link className="back btn bg-danger text-white mx-3" to="/">Back</Link>
                          <button type="button" className="btn btn-primary btn-block" onClick={handleLogin}>
                            Book
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
        </div>) : ""}
    </div>
  );
}

export default Appointment;

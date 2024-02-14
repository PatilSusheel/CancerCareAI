import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function PatientName() {
    let navigate = useNavigate();
    const [patientname, setpatientname] = useState(null);
    const handlefeature = () => {
        if(patientname===null){
            alert("Please Enter a Name")
        }
        else{
            localStorage.setItem("patientname", patientname);
            navigate('/import');
        }
    }

    const cardStyle = {
        borderRadius: '15px',
    };

    return (
        <div>
            <section class="vh-100 gradient-custom">
                <div class="container py-5 h-100">
                    <div class="row justify-content-center align-items-center h-100">
                        <div class="col-12 col-lg-9 col-xl-7">
                            <div className="card shadow-2-strong card-registration" style={cardStyle}>
                                <div class="card-body p-4 p-md-5">
                                    <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Patient Detials</h3>
                                    <form>


                                        <div class="row">
                                            <div class="col-md-6 mb-4 pb-2">

                                                <div class="form-outline">
                                                    <input type="text" id="patientname" class="form-control form-control-lg" placeholder='Enter patient`s name' value={patientname} onChange={(e) => setpatientname(e.target.value)} />
                                                </div>

                                            </div>
                                        </div>

                                        <div class="mt-4 pt-2">
                                            <button type="button" className="btn btn-primary btn-block" onClick={handlefeature}>
                                                Try the feature
                                            </button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PatientName
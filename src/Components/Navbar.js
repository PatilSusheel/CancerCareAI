import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic text-primary" to="/">CancerCare AI</Link>
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
                            <Link className="btn bg-success text-white mx-1 " to="/login">Login</Link>
                        </form>
                    </div>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <form className="d-flex">
                            <Link className="btn bg-success text-white mx-1 " to="/register">Register</Link>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

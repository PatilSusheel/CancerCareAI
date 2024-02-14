import React from 'react';
import './Carousel.css';

export default function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ objectFit: "contain !important" }}
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-item active" data-bs-interval="2000">
            <img
              src="https://secureservercdn.net/198.71.233.229/oka.430.myftpupload.com/wp-content/uploads/2021/03/breastcancer-info-2.jpg"
              style={{ filter: "brightness(90%)" }}
              className="d-block w-100 carousel-img"
              alt="breast-cancer-1"
            />
          </div>

          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://www.iaff.org/wp-content/uploads/BreastCancer_2020_poster_v1-01-1024x805.jpg"
              style={{ filter: "brightness(90%)" }}
              className="d-block w-100 carousel-img"
              alt="breast-cancer-2"
            />
          </div>

          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://oncoshotdata.blob.core.windows.net/images/image-26c20559ce1647b58aa9ca57d499f318.png"
              style={{ filter: "brightness(90%)" }}
              className="d-block w-100 carousel-img"
              alt="breast-cancer-3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

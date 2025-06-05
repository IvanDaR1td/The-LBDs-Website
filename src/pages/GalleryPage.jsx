// src/pages/GalleryPage.jsx
import React, { useEffect } from 'react';
import { galleryCarListArray, carArchivesData } from '../data'; // Import data

const GalleryPage = () => {
  // For Bootstrap Carousel, ensure jQuery and Bootstrap JS are loaded (done in main.jsx)
  // If issues persist, consider using a React-specific carousel library or react-bootstrap.

  // This useEffect is to manually initialize carousels if needed,
  // though Bootstrap's data-attributes usually handle this.
  useEffect(() => {
    const imageCarousel = document.getElementById('imageCarousel');
    if (imageCarousel && window.bootstrap && window.bootstrap.Carousel) {
      new window.bootstrap.Carousel(imageCarousel);
    }
    const imageCarousel2 = document.getElementById('imageCarousel2');
    if (imageCarousel2 && window.bootstrap && window.bootstrap.Carousel) {
      new window.bootstrap.Carousel(imageCarousel2);
    }

    // Logic for current slide display (can be improved with React state)
    const setupCarouselSlideCounter = (carouselId, displayId) => {
      const carouselElement = document.getElementById(carouselId);
      const currentSlideElement = document.getElementById(displayId);
      if (carouselElement && currentSlideElement) {
        carouselElement.addEventListener('slid.bs.carousel', function (event) {
          const totalItems = carouselElement.querySelectorAll('.carousel-item').length;
          currentSlideElement.textContent = `${event.to + 1} / ${totalItems}`;
        });
      }
    };
    setupCarouselSlideCounter('imageCarousel', 'currentSlide1Display');
    setupCarouselSlideCounter('imageCarousel2', 'currentSlide2Display');


  }, []);


  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>JDMC gallery</h1>
        <p>Lovely cars hand picked by the author.</p>
      </div>
      <header><br /></header> {/* Navbar handled by Layout */}

      <br />
      <center><img src="/img/22B STI.jpg" alt="1" width="1600" height="1080" /></center>
      <p style={{ textAlign: 'center' }}>Subaru 22B STI, a legendary vehicle.</p>
      {carArchivesData.find(car => car.elementIdSuffix === '0') && (
        <div id={`archive-info-${carArchivesData.find(car => car.elementIdSuffix === '0').elementIdSuffix}`} className="Array-font" style={{ textAlign: 'center' }}>
          <p>ID: {carArchivesData.find(car => car.elementIdSuffix === '0').id}</p>
          <p>Model: {carArchivesData.find(car => car.elementIdSuffix === '0').model}</p>
        </div>
      )}

      <center><img src="/img/RWB.jpeg" alt="2" width="1600" height="1000" /></center>
      <p style={{ textAlign: 'center' }}>Ah, RWB, Part of representing part of Japanese custom industry.</p>
      {carArchivesData.find(car => car.elementIdSuffix === '1') && (
        <div id={`archive-info-${carArchivesData.find(car => car.elementIdSuffix === '1').elementIdSuffix}`} className="Array-font" style={{ textAlign: 'center' }}>
          <p>ID: {carArchivesData.find(car => car.elementIdSuffix === '1').id}</p>
          <p>Model: {carArchivesData.find(car => car.elementIdSuffix === '1').model}</p>
        </div>
      )}
      <br />
      <center>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/otjDNWewH-U?si=FisTs2DlBovlgip7" // Replace if placeholder
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </center>
      <h1 style={{ textAlign: 'center' }}>NAKAI SAN THE GOAT!!!!!!</h1>
      <br /><br />
      <h1 style={{ textAlign: 'center' }}>Probably the rarest skyline R33 ever: the 400R.</h1>
      {carArchivesData.find(car => car.elementIdSuffix === '2') && (
        <div id={`archive-info-${carArchivesData.find(car => car.elementIdSuffix === '2').elementIdSuffix}`} className="Array-font" style={{ textAlign: 'center' }}>
          <p>ID: {carArchivesData.find(car => car.elementIdSuffix === '2').id}</p>
          <p>Model: {carArchivesData.find(car => car.elementIdSuffix === '2').model}</p>
        </div>
      )}
      <br /><br /><br /><br /><br /><br />

      {/* Carousel 1 */}
      <div className="container">
        <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel"> {/* Use data-bs-ride */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/img/400R-1.jpg" className="d-block w-100" alt="400R-1" />
            </div>
            <div className="carousel-item">
              <img src="/img/400R-1.5.jpg" className="d-block w-100" alt="400R-1.5" />
            </div>
            <div className="carousel-item">
              <img src="/img/400R-2.jpg" className="d-block w-100" alt="400R-2" />
            </div>
            <div className="carousel-item">
              <img src="/img/400R-3.5.avif" className="d-block w-100" alt="400R-3.5" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="text-center mt-4">
          <span id="currentSlide1Display">1 / 4</span>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br />

      <h1 style={{ textAlign: 'center' }}>Still a rare GTR : Skyline GTR R34 Nür (Represents Nürburgring Edition) , only 1000 of them was made.</h1>
      {carArchivesData.find(car => car.elementIdSuffix === '3') && (
         <div id={`archive-info-${carArchivesData.find(car => car.elementIdSuffix === '3').elementIdSuffix}`} className="Array-font" style={{ textAlign: 'center' }}>
          <p>ID: {carArchivesData.find(car => car.elementIdSuffix === '3').id}</p>
          <p>Model: {carArchivesData.find(car => car.elementIdSuffix === '3').model}</p>
        </div>
      )}
      <br /><br /><br /><br /><br />

      {/* Carousel 2 */}
      <div className="container">
        <div id="imageCarousel2" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#imageCarousel2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#imageCarousel2" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#imageCarousel2" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/img/R34-0.jpg" className="d-block w-100" alt="R34-0" />
            </div>
            <div className="carousel-item">
              <img src="/img/R34-1.jpg" className="d-block w-100" alt="R34-1" />
            </div>
            <div className="carousel-item">
              <img src="/img/R34-2.jpg" className="d-block w-100" alt="R34-2" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#imageCarousel2" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#imageCarousel2" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
         <div className="text-center mt-4">
          <span id="currentSlide2Display">1 / 3</span>
        </div>
      </div>
      <br /><br /><br /><br /><br />
      <center>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pfaDYkeHd-4?si=AAlSFToDGtEfEtpl" // Replace if placeholder
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </center>
      <br /><br /><br /><br /><br />
      <h2 style={{ textAlign: 'center' }}>Let me know what car U wanna add to the Gallery</h2>
      <br />
      <h2 style={{ textAlign: 'center' }}>Here's some cars I beloved either and add to the Gallery later:</h2>
      <ul id="myList" className="Array-font" style={{ textAlign: 'center', listStylePosition: 'inside' }}>
        {galleryCarListArray.map((car, index) => (
          <li key={index}>{car}</li>
        ))}
      </ul>
    </>
  );
};

export default GalleryPage;
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Tour() {
  const navigate = useNavigate();

  // We will handle the "Odisha" button click natively in React now 
  // because tour.js global variables struggle with React Router's SPA navigation.
  const handleOdishaClick = () => {
    if (window.showDistricts) {
      window.showDistricts();
    } else {
      console.warn("showDistricts not found on window");
    }
  };

  useEffect(() => {
    // Load original CSS
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = '/tour.css';
    document.head.appendChild(cssLink);

    // Load original JS
    const script = document.createElement('script');
    script.src = '/tour.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(cssLink);
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Hook up the button manually since tour.js might load before or after React renders
  useEffect(() => {
    const bindOdishaButton = () => {
      const btn = document.getElementById('odishaBtn');
      // If the button exists and the global init() function from tour.js is ready
      if (btn && typeof window.init === 'function' && !btn.dataset.bound) {
        btn.dataset.bound = 'true';
        window.init();
      }
    };

    // Try immediately
    bindOdishaButton();
    // And set up an interval to keep trying just in case tour.js is slow to load
    const interval = setInterval(bindOdishaButton, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      <div className="container">
        {/* Back to Home Button with Link */}
        <a 
          href="/" 
          className="home-btn"
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
        >
          <i className="fas fa-home"></i> Home
        </a>

        {/* Back Button - Always visible but hidden on home page */}
        <button id="backBtn" className="back-btn" onClick={() => {
          if (window.goBack) {
            window.goBack();
          } else {
            navigate(-1);
          }
        }}>
          <i className="fas fa-arrow-left"></i>
        </button>

        {/* Home Page Layout from user's legacy code */}
        <div id="homePage" className="page active">
          <h1 className="title">__iclicks___ Nature Tour</h1>
          <h2 style={{ textAlign: 'center', color: 'red' }}>ODISHA</h2>
          <p>Discover the best of Odisha's tourism! Get instant access to top attractions, nearby hotels,famous food, local cuisine, and precise location guides. Plan your dream trip with ease,</p><br />
          <p>Uncover Odisha's treasures! Visit ancient temples, golden beaches, wildlife sanctuaries, and experience the state's unique culture. From spiritual hubs to nature escapes, Odisha has something for every traveler</p>
          <h3 style={{ textAlign: 'center', color: 'rgb(32, 29, 187)' }}>click below to know more</h3>
          <div className="main-btn-container">
            <button id="odishaBtn" className="main-btn" onClick={handleOdishaClick}>
              <img src="/images/tourl.jpg" alt="Odisha" className="btn-image" />
              <span>Odisha</span>
            </button>
          </div>
          <p style={{ fontFamily: 'sans-serif', lineHeight: 1.6, margin: 'auto' }}>Odisha is the land of famed forests, mountains, valleys, waterfalls, gorges, soaring peaks with stunning wildlife in their own natural habitats. The important wildlife in State are Elephants, Tigers, Leopards,Hyena, Sambar, Spotted Deer, Wild Boar, Giant Squirrel, Crocodile, Jungle Cats, Hornbills, many migratory birds etc. A total of 110 species of reptiles including three crocodilian species, 20 species of amphibians, 479 species of birds, 86 species of mammals have been recorded so far in the State. For Nature tourists looking to experience wild landscapes in a sustainable way, from Camping to Eco-Resorts,from trekking to birding, from sightseeing to boating,Odisha offers something for everyone and the only thing surpasses the beauty of the State...is the experience of being here..</p>
          <p style={{ fontFamily: 'sans-serif', lineHeight: 1.6, margin: 'auto' }}>Odisha is a state located on the eastern coast of India along with the Bay of Bengal. It is a land of visitors paradise. Odisha is a land of Hindu Temples, is also known as Temple City. The state has made it a unique tourism attraction for tourists, scholars, Indologists and others. Buddha is still found now in the Relics of Ratnagiri, Lalitgiri, Udayagiri, Khandagiri. Odisha has a long coastal area of 480 km with beautiful sea beaches like Gopalpur, Puri, Paradeep, Chandbali, Satabhaya. Odisha Tour promises wonderful experiences of rich Wildlife Sanctuaries, Rivers, Lakes, creeks, Waterfalls, Hot springs, hill Stations, National Park, Nature Camp, forests, sea beaches.</p>
          <p style={{ fontFamily: 'sans-serif', lineHeight: 1.6, margin: 'auto' }}>The Odisha is an old antiquities magnificent monuments exquisite art of handicrafts. Moreover, the rich tradition of excellent hand looms works, enchanting music, graceful dance, colorful fairs, famous festivals makes Odisha alluring Indians and foreign tourists. The woodland of Odisha is full of a wonderful Wildlife Sanctuary. The government has built many wildlife sanctuaries and parks. Odisha was once called Utkala, which means the land of wonderful art. The weavers of Odisha are world-famous for the lovely weaves they create. Visit Odisha to visit the beautiful tourist places of Odisha.</p>
        </div>

        {/* Districts Page */}
        <div id="districtsPage" className="page">
          <h2 className="page-title">Districts of Odisha</h2>
          {/* Add this search container */}
          <div className="search-container">
            <input type="text" id="districtSearch" placeholder="Search districts..." className="search-input" />
            <i className="fas fa-search search-icon"></i>
          </div>
          <div id="districtsContainer" className="grid-container">
            <div className="loading-spinner"></div>
          </div>
        </div>

        {/* Tourist Places Page */}
        <div id="touristPlacesPage" className="page">
          <h2 id="touristPlacesTitle" className="page-title"></h2>
          <div id="touristPlacesContainer" className="grid-container"></div>
        </div>

        {/* Tourist Place Detail Page */}
        <div id="placeDetailPage" className="page">
          <h2 id="placeDetailTitle" className="page-title"></h2>
          
          {/* Image Slider */}
          <div className="slider-container">
            <div id="imageSlider" className="slider"></div>
            <button className="slider-btn prev" onClick={() => window.moveSlide && window.moveSlide(-1)}>&#10094;</button>
            <button className="slider-btn next" onClick={() => window.moveSlide && window.moveSlide(1)}>&#10095;</button>
            <div className="slider-dots"></div>
          </div>
          
          {/* Video Section */}
          <div id="videoSection" className="video-container">
            <h3>Explore More</h3>
            <div className="videos">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/example1" frameBorder="0" allowFullScreen></iframe>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/example2" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
          
          {/* Simple Description */}
          <div id="placeDescription" className="description"></div>

          {/* Info Buttons */}
          <div className="info-buttons">
            <button id="locationBtn" className="info-btn">
              <i className="fas fa-map-marker-alt"></i> Location
            </button>
            <button id="foodsBtn" className="info-btn">
              <i className="fas fa-utensils"></i> Foods
            </button>
            <button id="hotelsBtn" className="info-btn">
              <i className="fas fa-hotel"></i> Hotels
            </button>
          </div>
          
          {/* Additional Info */}
          <div id="additionalInfo" className="additional-info"></div>
        </div>
      </div>
    </>
  );
}

export default Tour;

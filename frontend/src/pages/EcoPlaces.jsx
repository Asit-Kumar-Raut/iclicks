import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Leaf } from 'lucide-react';

function EcoPlaces() {
  const navigate = useNavigate();

  const ecoPlaces = [
    { title: 'Simlipal National Park', img: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=800&q=80', location: 'https://maps.google.com/?q=Simlipal+National+Park' },
    { title: 'Bhitarkanika Mangroves', img: 'https://images.unsplash.com/photo-1621204215707-167823f669db?w=800&q=80', location: 'https://maps.google.com/?q=Bhitarkanika+National+Park' },
    { title: 'Chilika Lake', img: 'https://images.unsplash.com/photo-1588611139433-2ba879ba8809?w=800&q=80', location: 'https://maps.google.com/?q=Chilika+Lake' },
    { title: 'Debrigarh Wildlife Sanctuary', img: 'https://images.unsplash.com/photo-1624838421873-455b6e4e0472?w=800&q=80', location: 'https://maps.google.com/?q=Debrigarh+Wildlife+Sanctuary' },
    { title: 'Satkosia Gorge', img: 'https://images.unsplash.com/photo-1605333796593-3b1eb73752e5?w=800&q=80', location: 'https://maps.google.com/?q=Satkosia+Gorge' },
    { title: 'Daringbadi Hill Station', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80', location: 'https://maps.google.com/?q=Daringbadi' },
  ];

  return (
    <div className="page-container animate-fade-in">
      <nav className="nav-bar">
        <button onClick={() => navigate(-1)} className="btn btn-secondary">
          <ArrowLeft size={18} /> Back
        </button>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Leaf size={24} color="var(--secondary)" /> Eco Places
        </h2>
        <div style={{ width: '100px' }}></div>
      </nav>

      <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
        {ecoPlaces.map((place, idx) => (
          <div key={idx} className="photo-card" style={{ aspectRatio: '16/9' }}>
            <img 
              src={place.img} 
              alt={place.title} 
              onError={(e) => {
                // fallback if image not correctly moved or named
                e.target.src = `https://source.unsplash.com/random/800x600/?nature,forest,${idx}`;
              }}
            />
            <div className="photo-card-overlay">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{place.title}</h3>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                  Explore Camp
                </button>
                <a href={place.location} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem', textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  📍 View Location
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EcoPlaces;

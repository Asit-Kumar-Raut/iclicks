import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase/config';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';

const photoData = {
  nature: [
    { src: 'nature2.jpg', filename: 'nature2.jpg', keywords: ['flower', 'white', 'trees'] },
    { src: 'nature3.jpg', filename: 'nature3.jpg', keywords: ['river', 'mountains', 'sky'] },
    { src: 'nature6.jpg', filename: 'nature6.jpg', keywords: ['river', 'mountains', 'sky'] },
    { src: 'nature7.png', filename: 'nature7.png', keywords: ['tree', 'mountains', 'sky'] },
    { src: 'nature8.jpg', filename: 'nature8.jpg', keywords: ['flower', 'orange', 'sky'] },
    { src: 'nature9.jpg', filename: 'nature9.jpg', keywords: ['flower', 'pink', 'sky'] }, 
    { src: 'nature10.png', filename: 'nature10.png', keywords: ['mountain', 'mountains', 'sky'] },
    { src: 'nature11.jpg', filename: 'nature11.jpg', keywords: ['fields', 'mountains', 'sky'] },
    { src: 'nature12.jpg', filename: 'nature12.jpg', keywords: ['flower', 'mountains', 'sky'] },
    { src: 'nature13.jpg', filename: 'nature13.jpg', keywords: ['tree', 'moon', 'sky'] },
    { src: 'nature14.jpg', filename: 'nature14.jpg', keywords: ['flower', 'yellow', 'sky'] },
    { src: 'nature15.jpg', filename: 'nature15.jpg', keywords: ['tree', 'dark', 'night'] },
    { src: 'nature16.jpg', filename: 'nature16.jpg', keywords: ['mountain', 'river', 'stone'] },
    { src: 'nature17.jpg', filename: 'nature17.jpg', keywords: ['leves', 'mountain', 'sky'] },
    { src: 'nature18.jpg', filename: 'nature18.jpg', keywords: ['mountain', 'nature', 'sky'] },
    { src: 'nature19.jpg', filename: 'nature19.jpg', keywords: ['sunset', 'river', 'sky'] },
    { src: 'nature20.jpg', filename: 'nature20.jpg', keywords: ['tree', 'mountains', 'sky'] },
    { src: 'nature21.jpg', filename: 'nature21.jpg', keywords: ['tree', 'mountains', 'sky'] },
    { src: 'nature22.png', filename: 'nature22.png', keywords: ['sunset', 'mountains', 'sky'] },
    { src: 'nature23.jpg', filename: 'nature23.jpg', keywords: ['sunrise', 'field', 'sky'] },
    { src: 'nature24.png', filename: 'nature24.png', keywords: ['river', 'mountains', 'tree'] },
  ],
  natureMore: [
    { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop', filename: 'forest_1.jpg', keywords: ['forest', 'nature', 'trees', 'green'] },
    { src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop', filename: 'mountain_valley.jpg', keywords: ['mountains', 'valley', 'landscape'] },
    { src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop', filename: 'national_park.jpg', keywords: ['national park', 'trees', 'scenic'] },
    { src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1974&auto=format&fit=crop', filename: 'waterfall_nature.jpg', keywords: ['waterfall', 'river', 'nature'] }
  ],
  animals: [
    { src: 'animal1.jpg', filename: 'animal1.jpg', keywords: ['animals', 'butterfly', 'bird'] },
    { src: 'animal2.jpg', filename: 'animal2.jpg', keywords: ['animals', 'pigons', 'bird'] },
    { src: 'animal3.png', filename: 'animal3.png', keywords: ['river', 'crow', 'wildlife'] },
    { src: 'animal4.jpg', filename: 'animal4.jpg', keywords: ['parrot', 'bird', 'puppy'] },
    { src: 'animal5.jpg', filename: 'animal5.jpg', keywords: ['butterfly', 'bird', 'puppy'] },
    { src: 'animal6.jpg', filename: 'animal6.jpg', keywords: ['butterfly', 'bird', 'puppy'] },
    { src: 'animal7.jpg', filename: 'animal7.jpg', keywords: ['butterfly', 'bird', 'puppy'] },
  ],
  architecture: [
    { src: 'other1.jpg', filename: 'other1.jpg', keywords: ['mountain', 'grasses', 'blue'] },
    { src: 'other2.jpg', filename: 'other2.jpg', keywords: ['black', 'sun', 'city'] },
    { src: 'other4.jpg', filename: 'other4.jpg', keywords: ['hand', 'flower', 'sky'] },
    { src: 'other3.jpg', filename: 'other3.jpg', keywords: ['boy', 'father', 'love'] },
    { src: 'other5.jpg', filename: 'other5.jpg', keywords: ['boy bike', 'mother', 'love nature'] },
  ],
};

function Home() {
  const navigate = useNavigate();

  // Auth & Avatar State
  const [currentUser, setCurrentUser] = useState(null);
  const [showAvatarModal, setShowAvatarModal] = useState(true);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [authError, setAuthError] = useState('');

  // Form State
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  // UI State
  const [showYouPage, setShowYouPage] = useState(false);
  
  // App Pages State
  const [activePage, setActivePage] = useState('home'); // can be home, gallery, contact, tour
  const [activeGalleryCategory, setActiveGalleryCategory] = useState('nature');
  const [gallerySearch, setGallerySearch] = useState('');
  const [fullscreenImage, setFullscreenImage] = useState(null);
  
  // New States for Blog & Showcase
  const [showMoreNature, setShowMoreNature] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [newBlogText, setNewBlogText] = useState('');

  // Fetch Blogs
  useEffect(() => {
    const q = query(collection(db, 'reviews'), orderBy('createdAt', 'desc'));
    const unsubscribeBlogs = onSnapshot(q, (snapshot) => {
      setBlogs(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    }, (error) => {
      console.warn("Could not fetch blogs. Make sure Firebase rules allow reading.", error);
    });
    return () => unsubscribeBlogs();
  }, []);

  // Load tour.js dynamically only when needed
  useEffect(() => {
    if (activePage === 'tour') {
      const script = document.createElement('script');
      script.src = '/tour.js';
      script.async = true;
      document.body.appendChild(script);

      const cssLink = document.createElement('link');
      cssLink.rel = 'stylesheet';
      cssLink.href = '/tour.css';
      // add custom class to apply global background
      cssLink.id = 'tour-css-link';
      document.head.appendChild(cssLink);

      return () => {
        if (document.body.contains(script)) document.body.removeChild(script);
        if (document.head.contains(cssLink)) document.head.removeChild(cssLink);
      };
    }
  }, [activePage]);

  // Hook up the button manually since tour.js might load before or after React renders
  useEffect(() => {
    if (activePage !== 'tour') return;
    
    const bindOdishaButton = () => {
      const btn = document.getElementById('odishaBtn');
      if (btn && typeof window.init === 'function' && !btn.dataset.bound) {
        btn.dataset.bound = 'true';
        window.init();
      }
    };

    bindOdishaButton();
    const interval = setInterval(bindOdishaButton, 500);
    return () => clearInterval(interval);
  }, [activePage]);

  const handleOdishaClick = () => {
    if (window.showDistricts) {
      window.showDistricts();
    }
  };

  const avatars = [
    { id: 'avatar1.jpg', src: 'images/a1.jpg' },
    { id: 'avatar2.jpg', src: 'images/a2.jpeg' },
    { id: 'avatar3.jpg', src: 'images/a3.jpeg' },
    { id: 'avatar4.jpg', src: 'images/a4.jpeg' },
    { id: 'avatar5.jpg', src: 'images/a5.jpeg' },
    { id: 'avatar6.jpg', src: 'images/a7.jpeg' }
  ];

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setCurrentUser({
          email: user.email,
          name: user.displayName || 'User',
          avatar: localStorage.getItem('user_avatar') || 'images/a1.jpg'
        });
        setShowAvatarModal(false);
        setShowAuthModal(false);
      } else {
        setCurrentUser(null);
        setShowAvatarModal(true);
      }
    });

    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = '/home.css';
    document.head.appendChild(cssLink);

    // Initial floating logo
    setTimeout(() => {
      const logo = document.querySelector('.logo');
      if (logo) logo.classList.add('floating');
    }, 100);

    return () => {
      unsubscribe();
      document.head.removeChild(cssLink);
    };
  }, []);

  const handleAvatarSelect = (avatarSrc) => {
    setSelectedAvatar(avatarSrc);
  };

  const handleConfirmAvatar = () => {
    if (!selectedAvatar) {
      alert('Please select an avatar first');
      return;
    }
    localStorage.setItem('user_avatar', selectedAvatar);
    setShowAvatarModal(false);
    setShowAuthModal(true);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthError('');
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    } catch (err) {
      setAuthError(err.message.replace('Firebase: ', ''));
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setAuthError('');
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, signupEmail, signupPassword);
      await updateProfile(userCredential.user, { displayName: signupName });
      setCurrentUser(prev => ({ ...prev, name: signupName }));
    } catch (err) {
      setAuthError(err.message.replace('Firebase: ', ''));
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setShowYouPage(false);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
  };

  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    if (!newBlogText.trim() || !currentUser) return;
    try {
      await addDoc(collection(db, 'reviews'), {
        text: newBlogText,
        authorName: currentUser.name || currentUser.email,
        authorAvatar: currentUser.avatar || 'images/a1.jpg',
        createdAt: serverTimestamp()
      });
      setNewBlogText('');
    } catch (err) {
      console.error("Error adding document: ", err);
      alert("Failed to post blog. Your Firebase security rules must allow write access to 'blogs'.");
    }
  };

  // Gallery filtering
  let displayPhotos = [];
  if (activeGalleryCategory === 'nature') {
    displayPhotos = showMoreNature ? [...(photoData.nature || []), ...(photoData.natureMore || [])] : (photoData.nature || []);
  } else if (activeGalleryCategory !== 'blogs') {
    displayPhotos = photoData[activeGalleryCategory] || [];
  }
  
  if (gallerySearch && activeGalleryCategory !== 'blogs') {
    displayPhotos = displayPhotos.filter(photo => 
      photo.keywords.some(keyword => keyword.toLowerCase().includes(gallerySearch.toLowerCase()))
    );
  }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />

      {showAvatarModal && !currentUser && (
        <div id="avatar-modal" className="modal" style={{ display: 'flex' }}>
          <div className="modal-content">
            <h2>Welcome to __iclicks___</h2>
            <p>First, choose your avatar</p>
            <div className="avatar-grid">
              {avatars.map((av, idx) => (
                <div 
                  key={idx} 
                  className={`avatar-option ${selectedAvatar === av.src ? 'selected' : ''}`} 
                  onClick={() => handleAvatarSelect(av.src)}
                >
                  <img src={av.src} alt={`Avatar ${idx + 1}`} />
                </div>
              ))}
            </div>
            <button id="confirm-avatar" className="auth-btn" onClick={handleConfirmAvatar}>Continue</button>
          </div>
        </div>
      )}

      {showAuthModal && !currentUser && (
        <div id="auth-modal" className="modal" style={{ display: 'flex' }}>
          <div className="modal-content">
            {authError && <div style={{ color: 'red', marginBottom: '10px' }}>{authError}</div>}
            <div className="auth-tabs">
              <button className={`tab-btn ${activeTab === 'login' ? 'active' : ''}`} onClick={() => setActiveTab('login')}>Login</button>
              <button className={`tab-btn ${activeTab === 'signup' ? 'active' : ''}`} onClick={() => setActiveTab('signup')}>Sign Up</button>
            </div>
            
            {activeTab === 'login' && (
              <div id="login" className="auth-form active">
                <h2>Welcome Back!</h2>
                <form id="login-form" onSubmit={handleLogin}>
                  <div className="form-group">
                    <input type="email" placeholder="Email" required value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <input type="password" placeholder="Password which has been signup" required value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
                  </div>
                  <button type="submit" className="auth-btn">Login</button>
                </form>
              </div>
            )}
            
            {activeTab === 'signup' && (
              <div id="signup" className="auth-form active">
                <h2>Create Account</h2>
                <form id="signup-form" onSubmit={handleSignup}>
                  <div className="form-group">
                    <input type="text" placeholder="Full Name" required value={signupName} onChange={(e) => setSignupName(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Email" required value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <input type="password" placeholder="Password for __iclicks___" required value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} />
                  </div>
                  <button type="submit" className="auth-btn">Sign Up</button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main App Content */}
      {currentUser && (
        <div id="app-content" style={{ display: 'block' }}>
          <header>
            <a href="https://www.instagram.com/__iclicks___/?hl=en">
              <img src="/images/iclilogo.png" alt="Website Logo" className="logo" />
            </a>
            <h1>__iclicks___</h1>
            <div id="you-btn" className="you-button" onClick={() => setShowYouPage(true)}>
              <i className="fas fa-user"></i>
            </div>
          </header>

          <div id="you-page" className="you-page-overlay" style={{ display: showYouPage ? 'flex' : 'none' }}>
            <div className="you-page-content">
              <button id="close-you-page" className="close-btn" onClick={() => setShowYouPage(false)}>
                <i className="fas fa-times"></i>
              </button>
              <div className="you-profile">
                <img id="user-avatar" src={currentUser.avatar} alt="Your Avatar" />
                <h3 id="user-name">{currentUser.name || currentUser.email}</h3>
                <div className="live-viewers">
                  <i className="fas fa-users"></i>
                  <span id="viewer-count">1</span> live viewers
                </div>
                <button id="logout-btn" className="logout-button" onClick={handleLogout}>
                  <i className="fas fa-sign-out-alt"></i> Logout
                </button>
              </div>
            </div>
          </div>

          <main id="content">
            {/* HOME TABS */}
            <section id="home" className={`page ${activePage === 'home' ? 'active' : ''}`}>
              <div className="content-wrapper">
                <h1 className="welcome-title pulse">WELCOME TO NATURE TURE</h1>
                <div className="simple-definition">
                  <p>Nature tourism connects you with Earth's stunning landscapes and wildlife. Explore diverse destinations for adventure or peaceful retreats. Click below for more.</p>
                </div>
                <button onClick={() => setActivePage('tour')} className="explore-button" style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '1rem', padding: '10px 20px', borderRadius: '5px' }}>
                  Plan Your Trip
                </button>
              </div>
              <div className="simple-definition">
                <p style={{ color: 'white' }}>we are working on it so you can only see the places name and other not the view we are working on it</p>
              </div>
            </section>

            {/* GALLERY TAB */}
            <section id="gallery" className={`page ${activePage === 'gallery' ? 'active' : ''}`}>
              <div className="content-wrapper">
                <h1 className="gallery-title">Gallery</h1>
                <div className="search-container">
                  <input 
                    type="text" 
                    id="search" 
                    placeholder="Search photos..." 
                    value={gallerySearch}
                    onChange={(e) => setGallerySearch(e.target.value)}
                  />
                </div>
                <div id="categories">
                  <button className={activeGalleryCategory === 'nature' ? 'active' : ''} onClick={() => setActiveGalleryCategory('nature')}>🌿 Nature</button>
                  <button className={activeGalleryCategory === 'animals' ? 'active' : ''} onClick={() => setActiveGalleryCategory('animals')}>🐾 Animals</button>
                  <button className={activeGalleryCategory === 'architecture' ? 'active' : ''} onClick={() => setActiveGalleryCategory('architecture')}>🏛 Others</button>
                  <button className={activeGalleryCategory === 'blogs' ? 'active' : ''} onClick={() => setActiveGalleryCategory('blogs')}>📝 Blogs</button>
                </div>
                
                {activeGalleryCategory === 'blogs' ? (
                  <div className="blogs-container" style={{ width: '100%', maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
                    {currentUser ? (
                      <form onSubmit={handleBlogSubmit} style={{ marginBottom: '30px', padding: '20px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px' }}>
                        <h3 style={{color: 'white', marginBottom: '10px'}}>Share your nature experience</h3>
                        <textarea 
                          value={newBlogText} 
                          onChange={(e) => setNewBlogText(e.target.value)}
                          placeholder="Write your blog post here..." 
                          required 
                          style={{ width: '100%', padding: '15px', borderRadius: '5px', border: '1px solid var(--secondary)', background: 'rgba(255,255,255,0.9)', color: '#333', resize: 'vertical', minHeight: '100px' }}
                        ></textarea>
                        <button type="submit" className="explore-button" style={{ marginTop: '10px', padding: '10px 20px', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Post Blog</button>
                      </form>
                    ) : (
                       <div style={{ color: 'white', background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '10px', marginBottom: '30px', textAlign: 'center' }}>
                         Please log in from the top left corner (<i className="fas fa-user"></i>) to post a blog.
                       </div>
                    )}
                    <div className="blogs-list">
                      {blogs.map(blog => (
                        <div key={blog.id} style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '10px', marginBottom: '20px', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}>
                          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                            <img src={blog.authorAvatar || 'images/a1.jpg'} alt="Avatar" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '15px', border: '2px solid var(--primary)', objectFit: 'cover' }} />
                             <div>
                               <h4 style={{ margin: 0, color: 'var(--accent)' }}>{blog.authorName || 'User'}</h4>
                               <small style={{ color: '#ccc' }}>
                                 {blog.createdAt?.toDate ? blog.createdAt.toDate().toLocaleDateString() : 'Just now'}
                               </small>
                             </div>
                          </div>
                          <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>{blog.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div id="photos">
                    {displayPhotos.map((photo, idx) => {
                      const isExternal = photo.src.startsWith('http');
                      const imageSrc = isExternal ? photo.src : `/images/${photo.src}`;
                      
                      return (
                        <div key={idx} style={{ animation: `fadeIn 0.5s ease ${idx * 0.1}s forwards`, background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '10px' }}>
                          <img 
                            src={imageSrc} 
                            alt={photo.filename} 
                            loading="lazy" 
                            onClick={() => setFullscreenImage(imageSrc)} 
                            style={{ cursor: 'pointer', borderRadius: '8px', width: '100%', height: '200px', objectFit: 'cover' }}
                          />
                          <a href={imageSrc} download={photo.filename} title="Download" style={{ display: 'block', marginTop: '10px', color: '#ff6b6b', textDecoration: 'none', textAlign: 'center' }}>
                            <i className="fas fa-download"></i> Download
                          </a>
                        </div>
                      );
                    })}
                  </div>
                )}
                
                {activeGalleryCategory === 'nature' && !showMoreNature && (
                   <div style={{ textAlign: 'center', margin: '30px 0', width: '100%', gridColumn: '1 / -1' }}>
                     <button onClick={() => setShowMoreNature(true)} className="explore-button" style={{ padding: '10px 20px', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1.1rem' }}>
                       Show More Photos
                     </button>
                   </div>
                )}
              </div>
            </section>

            {/* TOUR TAB */}
            <section id="tour-section" className={`page ${activePage === 'tour' ? 'active' : ''}`} style={{ width: '100%' }}>
              <div className="container" style={{ minHeight: 'auto', padding: '0 20px', background: 'transparent' }}>
                <button id="backBtn" className="back-btn" onClick={() => window.goBack ? window.goBack() : setActivePage('home')}>
                  <i className="fas fa-arrow-left"></i>
                </button>

                <div id="homePage" className="page active" style={{ background: 'transparent' }}>
                  <h1 className="title" style={{ color: 'var(--text-primary)' }}>Nature Tour</h1>
                  <h2 style={{ textAlign: 'center', color: '#ff6b6b' }}>ODISHA</h2>
                  <p style={{ color: '#e2e8f0', textAlign: 'center', maxWidth: '800px', margin: '0 auto 20px' }}>Discover the best of Odisha's tourism! Get instant access to top attractions, nearby hotels, famous food, local cuisine, and precise location guides. Plan your dream trip with ease.</p>
                  
                  <div className="main-btn-container">
                    <button id="odishaBtn" className="main-btn" onClick={handleOdishaClick} style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                      <img src="/images/tourl.jpg" alt="Odisha" className="btn-image" />
                      <span>Odisha</span>
                    </button>
                  </div>
                </div>

                <div id="districtsPage" className="page" style={{ background: 'transparent' }}>
                  <h2 className="page-title" style={{ color: 'white' }}>Districts of Odisha</h2>
                  <div className="search-container">
                    <input type="text" id="districtSearch" placeholder="Search districts..." className="search-input" />
                    <i className="fas fa-search search-icon"></i>
                  </div>
                  <div id="districtsContainer" className="grid-container">
                    <div className="loading-spinner"></div>
                  </div>
                </div>

                <div id="touristPlacesPage" className="page" style={{ background: 'transparent' }}>
                  <h2 id="touristPlacesTitle" className="page-title" style={{ color: 'white' }}></h2>
                  <div id="touristPlacesContainer" className="grid-container"></div>
                </div>

                <div id="placeDetailPage" className="page" style={{ background: 'transparent' }}>
                  <h2 id="placeDetailTitle" className="page-title" style={{ color: 'white' }}></h2>
                  
                  <div className="slider-container">
                    <div id="imageSlider" className="slider"></div>
                    <button className="slider-btn prev" onClick={() => window.moveSlide && window.moveSlide(-1)}>&#10094;</button>
                    <button className="slider-btn next" onClick={() => window.moveSlide && window.moveSlide(1)}>&#10095;</button>
                    <div className="slider-dots"></div>
                  </div>
                  
                  <div id="videoSection" className="video-container" style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}>
                    <h3 style={{ color: 'white' }}>Explore More</h3>
                    <div className="videos">
                      <iframe width="560" height="315" src="" frameBorder="0" allowFullScreen></iframe>
                      <iframe width="560" height="315" src="" frameBorder="0" allowFullScreen></iframe>
                    </div>
                  </div>
                  
                  <div id="placeDescription" className="description" style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}></div>

                  <div className="info-buttons">
                    <button id="locationBtn" className="info-btn"><i className="fas fa-map-marker-alt"></i> Location</button>
                    <button id="foodsBtn" className="info-btn"><i className="fas fa-utensils"></i> Foods</button>
                    <button id="hotelsBtn" className="info-btn"><i className="fas fa-hotel"></i> Hotels</button>
                  </div>
                  
                  <div id="additionalInfo" className="additional-info" style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}></div>
                </div>
              </div>
            </section>

            {/* CONTACT TAB */}
            <section id="contact" className={`page ${activePage === 'contact' ? 'active' : ''}`}>
              <div className="content-wrapper">
                <h1 className="contact-title">Get In Touch</h1>
                <p className="contact-subtitle">We'd love to hear from you!</p>
                
                <div className="contact-container">
                  <div className="contact-form">
                    <form id="message-form" onSubmit={handleContactSubmit}>
                      <div className="form-group">
                        <input type="text" id="contact-name" placeholder="Your Name" required />
                      </div>
                      <div className="form-group">
                        <input type="email" id="contact-email" placeholder="Your Email" required />
                      </div>
                      <div className="form-group">
                        <textarea id="contact-message" placeholder="Your Message" rows="5" required></textarea>
                      </div>
                      <button type="submit" className="submit-btn" style={{ padding: '10px 20px' }}>Send Message</button>
                    </form>
                  </div>
                  
                  <div className="contact-info">
                    <div className="info-card">
                      <i className="fas fa-envelope"></i>
                      <h4>Email Us</h4>
                      <p></p>
                    </div>
                    <div className="info-card">
                      <i className="fas fa-phone"></i>
                      <h4>Call Us</h4>
                      <p></p>
                    </div>
                    <div className="info-card">
                      <i className="fas fa-map-marker-alt"></i>
                      <a href="https://maps.app.goo.gl/MqAR1iVci5Gy8ZrR6"><h4>Visit Us</h4></a>
                      <p></p>
                    </div>
                  </div>
                </div>
                
                <div className="team-section">
                  <h2>Our Team</h2>
                  <div className="team-grid">
                    <div className="team-member">
                      <img src="/images/iclilogo.png" alt="Team Member" />
                      <h3>__iclicks___</h3>
                      <p>Photography</p>
                      <a href="https://www.instagram.com/__iclicks___/?hl=en" className="social-link">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                    <div className="team-member">
                      <img src="/images/friend.jpg" alt="Team Member" />
                      <h3>ALOK KUMAR MISHRA</h3>
                      <p>Photographer</p>
                      <a href="https://www.instagram.com/__aaalok/?hl=en" className="social-link">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                    <div className="team-member">
                      <img src="/images/me22.jpg" alt="Team Member" />
                      <h3>ASIT KUMAR RAUT</h3>
                      <p>Developer</p>
                      <a href="https://www.instagram.com/_asit.0.__/?hl=en" className="social-link">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <nav>
            <button className={activePage === 'home' ? 'active' : ''} onClick={() => setActivePage('home')}><i className="fas fa-home"></i> Home</button>
            <button className={activePage === 'tour' ? 'active' : ''} onClick={() => setActivePage('tour')}><i className="fas fa-map-marked-alt"></i> Tour</button>
            <button className={activePage === 'gallery' ? 'active' : ''} onClick={() => setActivePage('gallery')}><i className="fas fa-images"></i> Gallery</button>
            <button className={activePage === 'contact' ? 'active' : ''} onClick={() => setActivePage('contact')}><i className="fas fa-phone-alt"></i> Contact</button>
          </nav>
          
          <div id="fullscreen-overlay" style={{ display: fullscreenImage ? 'block' : 'none' }}>
            {fullscreenImage && <img id="fullscreen-image" src={fullscreenImage} alt="Fullscreen" />}
            <button id="close-fullscreen" onClick={() => setFullscreenImage(null)}>✕</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;

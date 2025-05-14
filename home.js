document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const navButtons = document.querySelectorAll('nav button');
    const categoryButtons = document.querySelectorAll('#categories button');
    const photosDiv = document.getElementById('photos');
    const searchInput = document.getElementById('search');
    const starRating = document.getElementById('star-rating');
    const ratingThankYou = document.getElementById('rating-thank-you');
    const fullscreenOverlay = document.getElementById('fullscreen-overlay');
    const closeFullscreenButton = document.getElementById('close-fullscreen');
    const header = document.querySelector('header');

    // Floating animation for logo
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.classList.add('floating');
    }

    // Header scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            header.classList.remove('scrolled');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scrolled')) {
            header.classList.add('scrolled');
        } else if (currentScroll < lastScroll && header.classList.contains('scrolled')) {
            header.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    });

    // Photo data
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
            { src: 'nature23.jpg', filename: 'nature24.jpg', keywords: ['river', 'mountains', 'tree'] },
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

    // Navigation function
    function navigate(pageId) {
        pages.forEach(page => {
            page.classList.remove('active');
            if (page.id === pageId) {
                setTimeout(() => {
                    page.classList.add('active');
                }, 50);
            }
        });
        
        // Update active nav button
        navButtons.forEach(button => {
            button.classList.toggle('active', button.dataset.page === pageId);
        });

    
        if (pageId === 'gallery') {
            const firstCategoryButton = categoryButtons[0];
            if (firstCategoryButton) {
                firstCategoryButton.classList.add('active');
                displayPhotos(firstCategoryButton.dataset.category);
            }
        }
    }


    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navigate(button.dataset.page);
            
           
            button.classList.add('pulse');
            setTimeout(() => {
                button.classList.remove('pulse');
            }, 1000);
        });
    });

  
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            displayPhotos(button.dataset.category);
            
    
            button.style.transform = 'scale(0.9)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 300);
        });
    });


    function displayPhotos(category) {
    let photos = photoData[category] || [];
    const searchTerm = searchInput.value.toLowerCase();

    if (searchTerm) {
        photos = photos.filter(photo => 
            photo.keywords.some(keyword => keyword.includes(searchTerm))
        );
    }

    photosDiv.innerHTML = '';
    
    photos.forEach((photo, index) => {
        const photoContainer = document.createElement('div');
        photoContainer.style.opacity = '0';
        photoContainer.style.transform = 'translateY(20px)';
        photoContainer.style.transition = `all 0.5s ease ${index * 0.1}s`;
        
        const img = document.createElement('img');
        img.src = photo.src;
        img.alt = photo.filename;
        img.loading = 'lazy';

        const downloadLink = document.createElement('a');
        downloadLink.href = photo.src;
        downloadLink.download = photo.filename;
        downloadLink.innerHTML = '⬇️ Download';
        downloadLink.title = 'Download';

        photoContainer.appendChild(img);
        photoContainer.appendChild(downloadLink);
        photosDiv.appendChild(photoContainer);

        setTimeout(() => {
            photoContainer.style.opacity = '1';
            photoContainer.style.transform = 'translateY(0)';
        }, 50);

        img.addEventListener('click', () => {
            const fullscreenImage = document.getElementById('fullscreen-image');
            fullscreenImage.src = photo.src;
            fullscreenOverlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
}

  
    searchInput.addEventListener('input', () => {
        const activeCategoryButton = document.querySelector('#categories button.active');
        if (activeCategoryButton) {
            displayPhotos(activeCategoryButton.dataset.category);
        }
    });

  
    if (starRating && ratingThankYou) {
        const stars = starRating.querySelectorAll('span');
        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
           
                stars.forEach((s, i) => {
                    if (i <= index) {
                        s.style.transform = 'scale(1.5)';
                        s.style.color = '#FFD700';
                    } else {
                        s.style.transform = 'scale(1)';
                        s.style.color = '#FFD700';
                    }
                });
                
           
                setTimeout(() => {
                    starRating.style.display = 'none';
                    ratingThankYou.style.display = 'block';
                    
               
                    createConfetti();
                }, 800);
            });
            
            star.addEventListener('mouseover', () => {
                stars.forEach((s, i) => {
                    if (i <= index) {
                        s.style.transform = 'scale(1.3)';
                    }
                });
            });
            
            star.addEventListener('mouseout', () => {
                stars.forEach(s => {
                    if (!starRating.classList.contains('rated')) {
                        s.style.transform = 'scale(1)';
                    }
                });
            });
        });
    }


    if (fullscreenOverlay && closeFullscreenButton) {
        closeFullscreenButton.addEventListener('click', () => {
            fullscreenOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
   
        fullscreenOverlay.addEventListener('click', (e) => {
            if (e.target === fullscreenOverlay) {
                fullscreenOverlay.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

 
    function createConfetti() {
        const confettiCount = 100;
        const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722'];
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = '50%';
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.top = '-10px';
            confetti.style.opacity = '0';
            confetti.style.transform = 'translateY(0) rotate(0deg)';
            confetti.style.zIndex = '1002';
            
            document.body.appendChild(confetti);
            
          
            setTimeout(() => {
                confetti.style.opacity = '1';
                confetti.style.transition = `all ${1 + Math.random() * 3}s ease-out`;
                confetti.style.transform = `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`;
                confetti.style.left = `${parseFloat(confetti.style.left) + (Math.random() - 0.5) * 200}px`;
            }, 0);
            
        
            setTimeout(() => {
                confetti.remove();
            }, 4000);
        }
    }


    navigate('home');
    

    const welcomeText = document.querySelector('#home h1');
    if (welcomeText) {
        welcomeText.classList.add('pulse');
        setTimeout(() => {
            welcomeText.classList.remove('pulse');
        }, 2000);
    }
});

let users = JSON.parse(localStorage.getItem('iclicks_users')) || [];
let currentUser = JSON.parse(localStorage.getItem('iclicks_currentUser')) || null;
let selectedAvatar = '';


const avatarModal = document.getElementById('avatar-modal');
const avatarOptions = document.querySelectorAll('.avatar-option');
const confirmAvatarBtn = document.getElementById('confirm-avatar');
const authModal = document.getElementById('auth-modal');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginTab = document.querySelector('[data-tab="login"]');
const signupTab = document.querySelector('[data-tab="signup"]');
const loginSection = document.getElementById('login');
const signupSection = document.getElementById('signup');
const appContent = document.getElementById('app-content');


const avatars = [
    'a1.jpg',
    'a2.jpeg',
    'a3.jpeg',
    'a4.jpeg',
    'a5.jpeg',
    'a7.jpeg',
    
   
];


function initApp() {
    if (currentUser) {
     
        avatarModal.style.display = 'none';
        authModal.style.display = 'none';
        appContent.style.display = 'block';
        updateProfileDisplay();
    } else {
      
        avatarModal.style.display = 'flex';
        authModal.style.display = 'none';
    }
}


avatarOptions.forEach((option, index) => {
    option.addEventListener('click', () => {
        avatarOptions.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        selectedAvatar = avatars[index];
    });
});

confirmAvatarBtn.addEventListener('click', () => {
    if (!selectedAvatar) {
        alert('Please select an avatar first');
        return;
    }
    

    avatarModal.style.display = 'none';
    authModal.style.display = 'flex';
});


loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    loginSection.classList.add('active');
    signupSection.classList.remove('active');
});

signupTab.addEventListener('click', () => {
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
    loginSection.classList.remove('active');
    signupSection.classList.add('active');
});

// Login form
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
   
        user.avatar = selectedAvatar;
        currentUser = user;
        localStorage.setItem('iclicks_currentUser', JSON.stringify(currentUser));
        

        const userIndex = users.findIndex(u => u.email === email);
        if (userIndex !== -1) {
            users[userIndex].avatar = selectedAvatar;
            localStorage.setItem('iclicks_users', JSON.stringify(users));
        }
        

        authModal.style.display = 'none';
        appContent.style.display = 'block';
        updateProfileDisplay();
    } else {
        alert('Invalid email or password');
    }
});


signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    

    if (users.some(u => u.email === email)) {
        alert('User with this email already exists');
        return;
    }
    

    const newUser = {
        name,
        email,
        password,
        avatar: selectedAvatar
    };
    
    users.push(newUser);
    localStorage.setItem('iclicks_users', JSON.stringify(users));
 
    currentUser = newUser;
    localStorage.setItem('iclicks_currentUser', JSON.stringify(newUser));
    

    authModal.style.display = 'none';
    appContent.style.display = 'block';
    updateProfileDisplay();
    
  
    signupForm.reset();
});


function updateProfileDisplay() {
    if (currentUser) {
        const userName = document.getElementById('user-name');
        const userAvatar = document.getElementById('user-avatar');
        
        if (userName && userAvatar) {
            userName.textContent = currentUser.name;
            userAvatar.src = currentUser.avatar;
        }
    }
}


function setupLogout() {
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            currentUser = null;
            localStorage.removeItem('iclicks_currentUser');
            
  
            selectedAvatar = '';
            avatarOptions.forEach(opt => opt.classList.remove('selected'));
            

            appContent.style.display = 'none';
            avatarModal.style.display = 'flex';
            authModal.style.display = 'none';
            
   
            loginTab.click();
            loginForm.reset();
            signupForm.reset();
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    initApp();
    setupLogout();
    
    if (currentUser) {

    }
});

let onlineUsers = JSON.parse(localStorage.getItem('iclicks_onlineUsers')) || [];
let viewerCount = 0;

function updateOnlineUsers() {
    if (currentUser) {
 
        const userExists = onlineUsers.some(user => user.email === currentUser.email);
        if (!userExists) {
            onlineUsers.push({
                email: currentUser.email,
                lastActive: Date.now()
            });
            localStorage.setItem('iclicks_onlineUsers', JSON.stringify(onlineUsers));
        }
        
    
        const now = Date.now();
        const activeUsers = onlineUsers.filter(user => now - user.lastActive < 300000);
        viewerCount = activeUsers.length;
        document.getElementById('viewer-count').textContent = viewerCount;
    }
}


function initApp() {
    if (currentUser) {

        const userIndex = onlineUsers.findIndex(user => user.email === currentUser.email);
        if (userIndex !== -1) {
            onlineUsers[userIndex].lastActive = Date.now();
            localStorage.setItem('iclicks_onlineUsers', JSON.stringify(onlineUsers));
        }
        
        updateOnlineUsers();
        setInterval(updateOnlineUsers, 60000); // Update every minute
        
        avatarModal.style.display = 'none';
        authModal.style.display = 'none';
        appContent.style.display = 'block';
        updateProfileDisplay();
    } else {
        avatarModal.style.display = 'flex';
        authModal.style.display = 'none';
    }
}


const youBtn = document.getElementById('you-btn');
const youPage = document.getElementById('you-page');
const closeYouPage = document.getElementById('close-you-page');

youBtn.addEventListener('click', () => {
    youPage.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

closeYouPage.addEventListener('click', () => {
    youPage.style.display = 'none';
    document.body.style.overflow = 'auto';
});


function setupLogout() {
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
      
            onlineUsers = onlineUsers.filter(user => user.email !== currentUser.email);
            localStorage.setItem('iclicks_onlineUsers', JSON.stringify(onlineUsers));
            
            currentUser = null;
            localStorage.removeItem('iclicks_currentUser');
            
            youPage.style.display = 'none';
            appContent.style.display = 'none';
            avatarModal.style.display = 'flex';
            authModal.style.display = 'none';
            
            loginTab.click();
            loginForm.reset();
            signupForm.reset();
        });
    }
}


const messageForm = document.getElementById('message-form');
if (messageForm) {
    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;
        

        console.log('Message received:', { name, email, message });
        
  
        alert('Thank you for your message! We will get back to you soon.');
        messageForm.reset();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initApp();
    setupLogout();
    
   
});

document.addEventListener('DOMContentLoaded', () => {

    if (!localStorage.getItem('iclicks_visited')) {
        totalVisitors++;
        localStorage.setItem('iclicks_totalVisitors', totalVisitors);
        localStorage.setItem('iclicks_visited', 'true');
    }
    
    if (currentUser) {
        initVisitorTracking();
    }
});

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

    const photoData = {
        nature: [
           
            { src: 'nature2.jpg', filename: 'nature2.jpg', keywords: ['nature', 'forest', 'trees'] },
            { src: 'nature3.jpg', filename: 'nature3.jpg', keywords: ['nature', 'mountains', 'sky'] },
            { src: 'nature6.jpg', filename: 'nature6.jpg', keywords: ['nature', 'mountains', 'sky'] },
            { src: 'nature7.png', filename: 'nature7.png', keywords: ['nature', 'mountains', 'sky'] },
            { src: 'nature8.jpg', filename: 'nature8.jpg', keywords: ['nature', 'mountains', 'sky'] },
            { src: 'nature9.jpg', filename: 'nature9.jpg', keywords: ['nature', 'mountains', 'sky'] }, 
            { src: 'nature10.png', filename: 'nature10.png', keywords: ['nature', 'mountains', 'sky'] },
            { src: 'nature11.jpg', filename: 'nature11.jpg', keywords: ['nature', 'mountains', 'sky'] },
            { src: 'nature12.jpg', filename: 'nature12.jpg', keywords: ['nature', 'mountains', 'sky'] },
            { src: 'nature13.jpg', filename: 'nature13.jpg', keywords: ['nature', 'mountains', 'sky'] },
            { src: 'nature14.jpg', filename: 'nature14.jpg', keywords: ['nature', 'mountains', 'sky'] },
            { src: 'nature15.jpg', filename: 'nature15.jpg', keywords: ['nature', 'mountains', 'sky'] },
            { src: 'nature16.jpg', filename: 'nature16.jpg', keywords: ['nature', 'mountains', 'sky'] },
            { src: 'nature17.jpg', filename: 'nature17.jpg', keywords: ['nature', 'mountains', 'sky'] },
            { src: 'nature18.jpg', filename: 'nature18.jpg', keywords: ['nature', 'mountains', 'sky'] },
            { src: 'nature19.jpg', filename: 'nature19.jpg', keywords: ['nature', 'mountains', 'sky'] },
            { src: 'nature20.jpg', filename: 'nature20.jpg', keywords: ['nature', 'mountains', 'sky'] },
            { src: 'nature21.jpg', filename: 'nature21.jpg', keywords: ['nature', 'mountains', 'sky'] },
            { src: 'nature22.png', filename: 'nature22.png', keywords: ['nature', 'mountains', 'sky'] },
            { src: 'nature23.jpg', filename: 'nature24.jpg', keywords: ['nature', 'mountains', 'sky'] },
            { src: 'nature23.jpg', filename: 'nature24.jpg', keywords: ['nature', 'mountains', 'sky'] },
        ],
        animals: [
            { src: 'animal1.jpg', filename: 'animal1.jpg', keywords: ['animals', 'butterfly', 'pet'] },
            { src: 'animal2.jpg', filename: 'animal2.jpg', keywords: ['animals', 'dog', 'puppy'] },
            { src: 'animal3.png', filename: 'animal3.png', keywords: ['animals', 'bird', 'wildlife'] },
            { src: 'animal4.jpg', filename: 'animal4.jpg', keywords: ['animals', 'dog', 'puppy'] },
            { src: 'animal5.jpg', filename: 'animal5.jpg', keywords: ['animals', 'dog', 'puppy'] },
            { src: 'animal6.jpg', filename: 'animal6.jpg', keywords: ['animals', 'dog', 'puppy'] },
            { src: 'animal7.jpg', filename: 'animal7.jpg', keywords: ['animals', 'dog', 'puppy'] },
        ],
        architecture: [
            { src: 'other1.jpg', filename: 'other1.jpg', keywords: ['architecture', 'building', 'city'] },
            { src: 'other2.jpg', filename: 'other2.jpg', keywords: ['architecture', 'building', 'city'] },
            { src: 'other4.jpg', filename: 'other4.jpg', keywords: ['architecture', 'building', 'city'] },
            { src: 'other3.jpg', filename: 'other3.jpg', keywords: ['architecture', 'building', 'city'] },
            { src: 'other5.jpg', filename: 'other5.jpg', keywords: ['architecture', 'building', 'city'] },
        ],
    };

    function navigate(pageId) {
        pages.forEach(page => page.classList.remove('active'));
        document.getElementById(pageId).classList.add('active');
        if (pageId === 'gallery') {
            categoryButtons[0].classList.add('active');
            displayPhotos(categoryButtons[0].dataset.category);
        }
    }

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navigate(button.dataset.page);
        });
    });

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            displayPhotos(category);
        });
    });

    function displayPhotos(category) {
        let photos = photoData[category] || [];
        const searchTerm = searchInput.value.toLowerCase();

        if (searchTerm) {
            photos = photos.filter(photo => photo.keywords.some(keyword => keyword.includes(searchTerm)));
        }

        photosDiv.innerHTML = '';
        photos.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo.src;

            const downloadLink = document.createElement('a');
            downloadLink.href = photo.src;
            downloadLink.download = photo.filename;
            downloadLink.innerHTML = '⬇️dowload'; 
            downloadLink.title = 'Download';

            const photoContainer = document.createElement('div');
            photoContainer.appendChild(img);
            photoContainer.appendChild(downloadLink);
            photosDiv.appendChild(photoContainer);

            img.addEventListener('click', () => {
                const fullscreenImage = document.getElementById('fullscreen-image');
                fullscreenImage.src = photo.src;
                fullscreenOverlay.style.display = 'block';
            });
        });
    }

    searchInput.addEventListener('input', () => {
        const activePage = document.querySelector('.page.active').id;
        if (activePage === 'gallery') {
            const activeCategoryButton = document.querySelector('#categories button.active');
            const activeCategory = activeCategoryButton ? activeCategoryButton.dataset.category : null;
            displayPhotos(activeCategory);
        }
    });

    if (starRating && ratingThankYou) {
        starRating.addEventListener('click', (event) => {
            if (event.target.tagName === 'SPAN') {
                starRating.style.display = 'none';
                ratingThankYou.style.display = 'block';
            }
        });
    }

    if (fullscreenOverlay && closeFullscreenButton) {
        closeFullscreenButton.addEventListener('click', () => {
            fullscreenOverlay.style.display = 'none';
        });
    }

    navigate('home');
});
document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('track');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close-btn');
    let currentAngle = 0;
    let autoRotate;

    const artworks = [
        { 
            image: './src/assets/images/gallery/vangogh.jpg', 
            title: 'Starry Night', 
            artist: 'Vincent Van Gogh',
            description: 'A masterpiece of post-impressionism featuring swirling skies over a quiet town. The painting demonstrates Van Gogh\'s unique brushwork and emotional intensity...',
            fullDescription: 'A masterpiece of post-impressionism featuring swirling skies over a quiet town. The painting demonstrates Van Gogh\'s unique brushwork and emotional intensity. Created in 1889, this work is considered one of his finest achievements and resides in the Museum of Modern Art in New York.'
        },
        { 
            image: './src/assets/images/gallery/dp.jpg', 
            title: 'Modern Abstract', 
            artist: 'Digital Artist',
            description: 'A vibrant digital artwork showcasing bold colors and geometric shapes. This piece represents the fusion of traditional art with modern technology...',
            fullDescription: 'A vibrant digital artwork showcasing bold colors and geometric shapes. This piece represents the fusion of traditional art with modern technology. Created using advanced digital tools, it explores the relationship between form and color in the digital age.'
        },
        { 
            image: './src/assets/images/gallery/images.jpeg', 
            title: 'Urban Landscape', 
            artist: 'Street Photographer',
            description: 'A captivating photograph of a bustling cityscape at night. The image captures the energy and movement of urban life...',
            fullDescription: 'A captivating photograph of a bustling cityscape at night. The image captures the energy and movement of urban life. Taken with a long exposure, the lights of the city create a mesmerizing effect, highlighting the contrast between stillness and motion.'
        }
    ];

    artworks.forEach((art, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `<img src="${art.image}" alt="${art.title}">`;
        item.addEventListener('click', () => showModal(art));
        track.appendChild(item);
    });

    function updateLayout() {
        const items = track.children;
        const radius = 400;
        Array.from(items).forEach((item, i) => {
            const angle = currentAngle + (i * (360 / items.length));
            const radian = angle * (Math.PI / 180);
            item.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
        });
    }

    function rotateGallery(angle) {
        currentAngle += angle;
        updateLayout();
    }

    prevBtn.addEventListener('click', () => rotateGallery(360 / artworks.length));
    nextBtn.addEventListener('click', () => rotateGallery(-360 / artworks.length));

    function startAutoRotate() {
        autoRotate = setInterval(() => rotateGallery(-360 / artworks.length), 3000);
    }
    startAutoRotate();

    function showModal(art) {
        modal.classList.add('active');
        document.getElementById('modalImage').src = art.image;
        document.getElementById('imageTitle').textContent = art.title;
        document.getElementById('artistName').textContent = art.artist;
    }

    function closeModal() {
        modal.classList.remove('active');
    }

    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

    updateLayout();

    function createImageGrid() {
        const gridContainer = document.createElement('div');
        gridContainer.className = 'grid-container';
        gridContainer.id = 'imageGrid';
        
        artworks.forEach(art => {
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
            gridItem.innerHTML = `
                <button class="like-btn"><i class="fas fa-heart"></i></button>
                <img src="${art.image}" alt="${art.title}" class="grid-image">
                <div class="image-info">
                    <h3>${art.title}</h3>
                    <p class="artist">By ${art.artist}</p>
                    <div class="image-description">
                        ${art.description}
                    </div>
                </div>
            `;
            gridItem.addEventListener('click', () => showFullDescription(art));
            gridContainer.appendChild(gridItem);
        });

        document.querySelector('main').appendChild(gridContainer);
    }

    const descriptionModal = document.createElement('div');
    descriptionModal.className = 'full-description-modal';
    descriptionModal.innerHTML = `
        <span class="modal-close">&times;</span>
        <div class="modal-content"></div>
    `;
    document.body.appendChild(descriptionModal);

    function showFullDescription(art) {
        descriptionModal.querySelector('.modal-content').innerHTML = `
            <img class="modal-image" src="${art.image}" alt="${art.title}">
            <div class="modal-text">
                <h2>${art.title}</h2>
                <p class="artist">By ${art.artist}</p>
                <p>${art.fullDescription}</p>
            </div>
        `;
        descriptionModal.classList.add('active');
    }

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-close') || e.target === descriptionModal) {
            descriptionModal.classList.remove('active');
        }

        if (e.target.closest('.like-btn')) {
            const btn = e.target.closest('.like-btn');
            btn.classList.toggle('liked');
        }
    });

    createImageGrid();
});
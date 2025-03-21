document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('track');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close-btn');
    let currentAngle = 0;
    let autoRotate;

    // Sample artwork data
    const artworks = [
        { image: './src/assets/images/gallery/vangogh.jpg', title: 'Starry Night', artist: 'Vincent Van Gogh' },
        { image: './src/assets/images/gallery/dp.jpg', title: 'Modern Abstract', artist: 'Digital Artist' },
        { image: './src/assets/images/gallery/images.jpeg', title: 'Urban Landscape', artist: 'Street Photographer' }
    ];

    // Create gallery items
    artworks.forEach((art, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `<img src="${art.image}" alt="${art.title}">`;
        item.addEventListener('click', () => showModal(art));
        track.appendChild(item);
    });

    // Cylindrical layout calculations
    function updateLayout() {
        const items = track.children;
        const radius = 400;
        Array.from(items).forEach((item, i) => {
            const angle = currentAngle + (i * (360 / items.length));
            const radian = angle * (Math.PI / 180);
            item.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
        });
    }

    // Navigation controls
    function rotateGallery(angle) {
        currentAngle += angle;
        updateLayout();
    }

    prevBtn.addEventListener('click', () => rotateGallery(360 / artworks.length));
    nextBtn.addEventListener('click', () => rotateGallery(-360 / artworks.length));

    // Auto-rotate function
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
});

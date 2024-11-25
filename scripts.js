// Lightbox functionality for gallery
document.querySelectorAll('.lightbox').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const img = document.createElement('img');
        img.src = event.target.src;
        img.classList.add('lightbox-image');
        document.body.appendChild(img);
        img.addEventListener('click', () => img.remove());
    });
});

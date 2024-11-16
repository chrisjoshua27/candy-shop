document.addEventListener('DOMContentLoaded', () => {
    // Alert para adicionar ao carrinho
    const buttons = document.querySelectorAll('.add-to-cart');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Produto adicionado ao carrinho!');
        });
    });

    // Carousel logic
    const carouselImages = document.querySelector('.carousel-images');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');

    let currentIndex = 0;

    const updateCarousel = () => {
        const offset = -currentIndex * 100; // Move o carousel
        carouselImages.style.transform = `translateX(${offset}%)`;
    };

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : 2; // Volta para a última imagem
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < 2) ? currentIndex + 1 : 0; // Vai para a primeira imagem
        updateCarousel();
    });

    // Muda automaticamente a cada 5 segundos
    setInterval(() => {
        currentIndex = (currentIndex < 2) ? currentIndex + 1 : 0;
        updateCarousel();
    }, 5000);
});

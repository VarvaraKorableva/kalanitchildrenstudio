import React, { useState, useEffect } from 'react';
import first from '../../images/sliderannouncement/1.png';
import second from '../../images/sliderannouncement/2.png';
import third from '../../images/sliderannouncement/3.png';
import './Slider.css';

function Slider() {
    const images = [
        { id: 1, src: first, link: 'https://forms.gle/QHtvJQ8v4ugrE5ui7', text: NaN, trigger: false },
        
        { id: 3, src: third, link: 'https://forms.gle/VRC1ttzDtnQuENNQ7', text: NaN, trigger: false },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [startX, setStartX] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);

    // Для отслеживания изменения размера окна
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 780);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Переход к следующему слайду
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    // Переход к предыдущему слайду
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    // Переход на конкретный слайд
    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Начало прокрутки слайдов
    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
    };

    // Двигаем слайды при свайпе
    const handleTouchMove = (e) => {
        if (startX === null) return;
        const currentX = e.touches[0].clientX;
        const diffX = startX - currentX;

        if (diffX > 50) {
            nextSlide();
            setStartX(null);
        } else if (diffX < -50) {
            prevSlide();
            setStartX(null);
        }
    };

    const handleTouchEnd = () => {
        setStartX(null);
    };

    // Автоматический слайдшоу для не мобильных устройств
    useEffect(() => {
        if (isMobile) return;
        const interval = setInterval(nextSlide, 6000);
        return () => clearInterval(interval);
    }, [isMobile]);

    return (
        <div
            className="slider"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {images.map((image, index) => (
                    <devicePixelRatio 
                        key={image.id}
                        className={`slide ${currentSlide === index ? 'active' : ''}`}
                    >
                        <a href={image.link} target='_blank'>
                            <img src={image.src} alt={`Slide ${image.id + 1}`} />
                        </a>
                    </devicePixelRatio>
                ))}
            </div>
            <div className="dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentSlide === index ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Slider;

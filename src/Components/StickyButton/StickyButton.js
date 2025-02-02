import './StickyButton.css';
import React, { useState, useEffect } from 'react';

function StickyButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

  return (
    <button onClick={scrollToTop} className={`sticky-button ${isVisible ? 'visible' : ''}`}>
      Наверх
    </button>
  );
}

export default StickyButton;
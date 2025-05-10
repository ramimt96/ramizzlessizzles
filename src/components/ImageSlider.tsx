'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface ImageSliderProps {
  images: { src: string; alt: string }[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      resetTimeout();
    };
  }, [currentIndex, images.length]);

  const goToPrevious = () => {
    resetTimeout();
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    resetTimeout();
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div 
      className="max-w-3xl mx-auto relative overflow-hidden rounded-lg"
      style={{
        maxWidth: '48rem',
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '8px',
        boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
        border: '1px solid #333'
      }}
    >
      {/* Left Arrow */}
      <button 
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10"
        style={{
          position: 'absolute',
          left: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'rgba(0,0,0,0.5)',
          color: '#e8c39e',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: 'none',
          cursor: 'pointer'
        }}
        aria-label="Previous slide"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button 
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10"
        style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'rgba(0,0,0,0.5)',
          color: '#e8c39e',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: 'none',
          cursor: 'pointer'
        }}
        aria-label="Next slide"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
      
      {images.map((image, index) => (
        <div
          key={index}
          className={`transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
          }`}
          style={{
            transition: 'opacity 500ms',
            opacity: index === currentIndex ? 1 : 0,
            position: index === currentIndex ? 'relative' : 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={800}
            height={600}
            className="w-full h-auto object-cover"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              display: 'block'
            }}
          />
        </div>
      ))}
      
      <div 
        className="absolute bottom-4 left-0 right-0 flex justify-center gap-2"
        style={{
          position: 'absolute',
          bottom: '16px',
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          gap: '8px'
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-amber-500' : 'bg-gray-400'
            }`}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: index === currentIndex ? '#e8c39e' : 'rgba(255,255,255,0.3)',
              border: 'none',
              cursor: 'pointer',
              padding: 0
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider; 
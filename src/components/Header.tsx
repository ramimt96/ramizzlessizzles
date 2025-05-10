'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Cart from './Cart';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className="flex justify-between items-center p-5 bg-black text-white relative z-50"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        background: '#121212',
        color: '#fff',
        position: 'relative',
        zIndex: 50,
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
      }}
    >
      <div 
        className="flex items-center font-bold text-xl"
        style={{
          display: 'flex',
          alignItems: 'center',
          fontWeight: 'bold',
          fontSize: '24px'
        }}
      >
        <Image 
          src="/images/logo.jpg" 
          alt="Logo" 
          width={40} 
          height={40} 
          className="mr-2 rounded-full"
          style={{
            width: '40px',
            height: 'auto',
            marginRight: '10px',
            borderRadius: '50%'
          }}
        />
        <span style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)', color: '#e8c39e' }}>Ramizzle&apos;s Sizzles</span>
      </div>
      
      <nav 
        className="flex items-center"
        style={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <ul 
          className="hidden md:flex flex-row items-center"
          style={{
            listStyle: 'none',
            display: isMobile ? 'none' : 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <li className="mx-4" style={{ margin: '0 16px' }}>
            <Link href="/" className="hover:text-amber-200 transition-colors" style={{ color: '#e8c39e', textDecoration: 'none', transition: 'color 0.2s' }}>Home</Link>
          </li>
          <li className="mx-4" style={{ margin: '0 16px' }}>
            <Link href="/menu" className="hover:text-amber-200 transition-colors" style={{ color: '#e8c39e', textDecoration: 'none', transition: 'color 0.2s' }}>Menu</Link>
          </li>
          <li className="mx-4" style={{ margin: '0 16px' }}>
            <Link href="/about" className="hover:text-amber-200 transition-colors" style={{ color: '#e8c39e', textDecoration: 'none', transition: 'color 0.2s' }}>About</Link>
          </li>
          <li className="mx-4" style={{ margin: '0 16px' }}>
            <Link href="/contact" className="hover:text-amber-200 transition-colors" style={{ color: '#e8c39e', textDecoration: 'none', transition: 'color 0.2s' }}>Contact</Link>
          </li>
        </ul>
        
        {isMenuOpen && (
          <ul 
            className="md:hidden flex flex-col absolute top-16 right-5 w-48 bg-black p-4 rounded-md shadow-lg z-50"
            style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              position: 'absolute',
              top: '70px',
              right: '20px',
              width: '200px',
              background: '#121212',
              padding: '16px',
              borderRadius: '6px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
              zIndex: 50
            }}
          >
            <li className="my-2">
              <Link href="/" className="hover:text-amber-200 transition-colors" style={{ color: '#e8c39e', textDecoration: 'none' }}>Home</Link>
            </li>
            <li className="my-2">
              <Link href="/menu" className="hover:text-amber-200 transition-colors" style={{ color: '#e8c39e', textDecoration: 'none' }}>Menu</Link>
            </li>
            <li className="my-2">
              <Link href="/about" className="hover:text-amber-200 transition-colors" style={{ color: '#e8c39e', textDecoration: 'none' }}>About</Link>
            </li>
            <li className="my-2">
              <Link href="/contact" className="hover:text-amber-200 transition-colors" style={{ color: '#e8c39e', textDecoration: 'none' }}>Contact</Link>
            </li>
          </ul>
        )}
        
        <Cart />
        
        <div 
          className="flex flex-col cursor-pointer md:hidden ml-4" 
          onClick={toggleMenu}
          style={{
            display: isMobile ? 'flex' : 'none',
            flexDirection: 'column',
            cursor: 'pointer',
            marginLeft: '16px'
          }}
        >
          <span className="h-0.5 w-6 bg-white mb-1 rounded" style={{ height: '2px', width: '24px', background: '#e8c39e', marginBottom: '6px', borderRadius: '5px', transition: 'transform 0.3s' }}></span>
          <span className="h-0.5 w-6 bg-white mb-1 rounded" style={{ height: '2px', width: '24px', background: '#e8c39e', marginBottom: '6px', borderRadius: '5px', transition: 'opacity 0.3s' }}></span>
          <span className="h-0.5 w-6 bg-white rounded" style={{ height: '2px', width: '24px', background: '#e8c39e', borderRadius: '5px', transition: 'transform 0.3s' }}></span>
        </div>
      </nav>
    </header>
  );
};

export default Header; 
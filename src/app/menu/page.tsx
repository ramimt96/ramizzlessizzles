'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export default function Menu() {
  const { items: cartItems, setItemQuantity } = useCart();
  const [mounted, setMounted] = useState(false);
  const [itemQuantities, setItemQuantities] = useState<Record<string, number>>({
    burger: 0,
    fries: 0,
    hotdog: 0
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const newQuantities = {...itemQuantities};
    
    Object.keys(newQuantities).forEach(key => {
      newQuantities[key] = 0;
    });
    
    cartItems.forEach(item => {
      if (newQuantities.hasOwnProperty(item.id)) {
        newQuantities[item.id] = item.quantity;
      }
    });
    
    setItemQuantities(newQuantities);
  }, [cartItems, mounted]);

  const menuItems = [
    {
      id: 'burger',
      name: 'Ramizzle Burger',
      description: 'Classic flame-grilled burger topped with fresh ingredients and our secret sauce.',
      price: 7.99,
      image: '/images/image1.jpg'
    },
    {
      id: 'fries',
      name: 'Sizzle Fries',
      description: 'Crispy golden fries with a hint of spice to get your taste buds fired up.',
      price: 4.99,
      image: '/images/image2.jpg'
    },
    {
      id: 'hotdog',
      name: 'Rizzle Dog',
      description: 'A gourmet hotdog bursting with bold flavors and condiments for that extra kick.',
      price: 4.99,
      image: '/images/image3.jpg'
    }
  ];

  const handleDecreaseQuantity = (id: string, name: string, price: number) => {
    const currentQuantity = itemQuantities[id];
    if (currentQuantity > 0) {
      const newQuantity = currentQuantity - 1;
      setItemQuantity(id, name, price, newQuantity);
    }
  };

  const handleIncreaseQuantity = (id: string, name: string, price: number) => {
    const currentQuantity = itemQuantities[id];
    const newQuantity = currentQuantity + 1;
    setItemQuantity(id, name, price, newQuantity);
  };

  if (!mounted) {
    return (
      <section 
        className="py-12 px-4 bg-black"
        style={{ 
          padding: '48px 20px', 
          textAlign: 'center',
          background: '#0a0a0a',
          minHeight: '100vh'
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-3xl font-bold text-center mb-2"
            style={{ 
              fontSize: '2.25rem', 
              fontWeight: 'bold',
              color: '#e8c39e',
              marginBottom: '8px',
              textShadow: '0 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            Loading...
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section 
      className="py-12 px-4 bg-black"
      style={{ 
        padding: '48px 20px', 
        textAlign: 'center',
        background: '#0a0a0a',
        minHeight: '100vh'
      }}
    >
      <div 
        className="max-w-6xl mx-auto"
        style={{
          maxWidth: '72rem',
          margin: '0 auto'
        }}
      >
        <h2 
          className="text-3xl font-bold text-center mb-2"
          style={{ 
            fontSize: '2.25rem', 
            fontWeight: 'bold',
            color: '#e8c39e',
            marginBottom: '8px',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)'
          }}
        >
          Our Menu
        </h2>
        <p 
          className="text-gray-400 mb-12 max-w-2xl mx-auto" 
          style={{ 
            color: '#ccc', 
            marginBottom: '48px',
            maxWidth: '36rem',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          Enjoy our selection of delicious food made with fresh ingredients and love.
        </p>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '32px',
            justifyContent: 'center'
          }}
        >
          {menuItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-black rounded-lg overflow-hidden shadow-lg transition-shadow"
              style={{
                background: 'rgba(10,10,10,0.85)',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                transition: 'box-shadow 0.3s, transform 0.3s',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid #333'
              }}
            >
              <div
                className="relative h-48"
                style={{
                  position: 'relative',
                  height: '192px'
                }}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  style={{
                    objectFit: 'cover'
                  }}
                />
              </div>
              
              <div 
                className="p-5 flex-grow" 
                style={{ 
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1
                }}
              >
                <div 
                  className="flex justify-between items-center mb-3"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '12px'
                  }}
                >
                  <h3 
                    className="text-xl font-bold" 
                    style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: 'bold',
                      color: '#e8c39e'
                    }}
                  >
                    {item.name}
                  </h3>
                  <span 
                    className="text-amber-200 font-semibold"
                    style={{ 
                      color: '#e8c39e', 
                      fontWeight: '600'
                    }}
                  >
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                
                <p 
                  className="text-gray-400 mb-5"
                  style={{ 
                    color: '#aaa', 
                    marginBottom: '20px',
                    fontSize: '0.95rem',
                    lineHeight: '1.5',
                    textAlign: 'left'
                  }}
                >
                  {item.description}
                </p>
                
                <div 
                  className="mt-auto"
                  style={{
                    marginTop: 'auto'
                  }}
                >
                  <div 
                    className="flex justify-center items-center mb-4"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: '16px',
                      flexDirection: 'column',
                      gap: '10px'
                    }}
                  >
                    <div 
                      className="flex items-center"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <button 
                        onClick={() => handleDecreaseQuantity(item.id, item.name, item.price)}
                        className="bg-amber-900 text-white w-8 h-8 rounded-full flex items-center justify-center"
                        style={{
                          background: '#78350f',
                          color: 'white',
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: 'none',
                          cursor: 'pointer',
                          fontWeight: 'bold',
                          fontSize: '18px'
                        }}
                      >
                        -
                      </button>
                      
                      <span 
                        className="mx-2 text-lg font-medium"
                        style={{
                          margin: '0 8px',
                          fontSize: '1.1rem',
                          fontWeight: '500',
                          color: '#e8c39e',
                          minWidth: '20px',
                          textAlign: 'center'
                        }}
                      >
                        {itemQuantities[item.id]}
                      </span>
                      
                      <button 
                        onClick={() => handleIncreaseQuantity(item.id, item.name, item.price)}
                        className="bg-amber-900 text-white w-8 h-8 rounded-full flex items-center justify-center"
                        style={{
                          background: '#78350f',
                          color: 'white',
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: 'none',
                          cursor: 'pointer',
                          fontWeight: 'bold',
                          fontSize: '18px'
                        }}
                      >
                        +
                      </button>
                    </div>
                    
                    <div 
                      className="text-sm text-amber-200"
                      style={{
                        color: '#e8c39e',
                        fontSize: '0.95rem',
                        fontWeight: '500'
                      }}
                    >
                      {itemQuantities[item.id] > 0 
                        ? `$${(item.price * itemQuantities[item.id]).toFixed(2)}` 
                        : ''}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
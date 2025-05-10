'use client';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items, total, itemCount, addItem, removeItem, clearCart } = useCart();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <div 
        className="cursor-pointer mr-5 relative flex items-center text-white" 
        onClick={toggleCart}
        style={{ 
          marginRight: '20px', 
          cursor: 'pointer',
          position: 'relative'
        }}
      >
        {/* Modern Shopping Cart Icon */}
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
          style={{ color: '#e8c39e' }}
        >
          <circle cx="8" cy="21" r="1"></circle>
          <circle cx="19" cy="21" r="1"></circle>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
        </svg>
        
        <span 
          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1.5 py-0.5"
          style={{ 
            position: 'absolute',
            top: '-8px', 
            right: '-8px',
            background: '#e53e3e',
            borderRadius: '50%',
            padding: '2px 6px',
            fontSize: '0.8em',
            fontWeight: 'bold',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}
        >
          {itemCount}
        </span>
      </div>

      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-[1999]" 
          onClick={toggleCart}
          style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1999,
            backdropFilter: 'blur(2px)'
          }}
        >
          <div 
            className="fixed right-0 top-0 h-full w-[300px] bg-white p-5 pt-20 shadow-lg overflow-y-auto z-[2000]"
            onClick={(e) => e.stopPropagation()}
            style={{ 
              position: 'fixed',
              right: 0,
              top: 0,
              width: '300px',
              height: '100%',
              background: '#1a1a1a',
              padding: '20px',
              paddingTop: '80px',
              boxShadow: '-2px 0 15px rgba(0, 0, 0, 0.5)',
              overflowY: 'auto',
              zIndex: 2000,
              color: '#e8c39e',
              borderLeft: '1px solid #333'
            }}
          >
            <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#e8c39e' }}>
              Your Cart
              <span className="ml-auto text-sm bg-gray-200 px-2 py-1 rounded-full" style={{ fontSize: '0.875rem', backgroundColor: '#333', borderRadius: '9999px', padding: '4px 8px', color: '#e8c39e' }}>
                {itemCount} {itemCount === 1 ? 'item' : 'items'}
              </span>
            </h2>
            
            <div className="space-y-3" id="cart-items">
              {items.length === 0 ? (
                <div className="text-gray-500 text-center py-6" style={{ padding: '24px 0', textAlign: 'center', color: '#999' }}>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="48" 
                    height="48" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    style={{ margin: '0 auto 12px', color: '#777' }}
                  >
                    <circle cx="8" cy="21" r="1"></circle>
                    <circle cx="19" cy="21" r="1"></circle>
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                  </svg>
                  <p>Your cart is empty</p>
                </div>
              ) : (
                items.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex justify-between items-center py-3 border-b cart-item"
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '12px 0',
                      borderBottom: '1px solid #333'
                    }}
                  >
                    <div className="cart-item-info" style={{ flex: 1 }}>
                      <div className="cart-item-name font-medium" style={{ fontWeight: 500, color: '#e8c39e', fontSize: '1rem' }}>
                        {item.name}
                      </div>
                      <div className="cart-item-price text-gray-600" style={{ color: '#999', fontSize: '0.9em' }}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                    <div 
                      className="cart-item-controls flex items-center gap-2"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}
                    >
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="remove-item bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                        style={{
                          background: '#333',
                          border: 'none',
                          padding: '5px 10px',
                          borderRadius: '3px',
                          cursor: 'pointer',
                          transition: 'background-color 0.2s',
                          color: '#e8c39e'
                        }}
                      >
                        -
                      </button>
                      <span 
                        className="item-quantity font-medium min-w-[20px] text-center"
                        style={{
                          fontWeight: 500,
                          minWidth: '20px',
                          textAlign: 'center',
                          color: '#e8c39e'
                        }}
                      >
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => addItem(item.id, item.name, item.price)}
                        className="add-item bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                        style={{
                          background: '#333',
                          border: 'none',
                          padding: '5px 10px',
                          borderRadius: '3px',
                          cursor: 'pointer',
                          transition: 'background-color 0.2s',
                          color: '#e8c39e'
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            <div 
              className="mt-5 py-3 border-t text-lg font-semibold cart-total"
              style={{
                marginTop: '20px',
                padding: '12px 0',
                borderTop: '2px solid #333',
                fontSize: '1.25rem',
                color: '#e8c39e',
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <span>Total:</span> <span id="cart-total">${total.toFixed(2)}</span>
            </div>
            
            <div className="flex flex-col gap-3 mt-6 cart-buttons">
              <button 
                onClick={clearCart}
                className="clear-cart bg-red-500 hover:bg-red-600 text-white py-2 rounded"
                style={{
                  background: '#b91c1c',
                  color: 'white',
                  border: 'none',
                  padding: '10px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  marginTop: '10px',
                  transition: 'background-color 0.2s',
                  fontWeight: '500'
                }}
              >
                Clear Cart
              </button>
              <button 
                onClick={() => alert('Checkout functionality coming soon!')}
                className="checkout-btn bg-green-600 hover:bg-green-700 text-white py-2 rounded"
                style={{
                  background: '#16a34a',
                  color: 'white',
                  border: 'none',
                  padding: '10px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  marginTop: '10px',
                  transition: 'background-color 0.2s',
                  fontWeight: '500'
                }}
              >
                Checkout
              </button>
              <button 
                onClick={toggleCart}
                className="close-cart bg-gray-200 hover:bg-gray-300 py-2 mt-2 rounded"
                style={{
                  width: '100%',
                  padding: '10px',
                  background: '#333',
                  color: '#e8c39e',
                  border: 'none',
                  borderRadius: '5px',
                  marginTop: '10px',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart; 
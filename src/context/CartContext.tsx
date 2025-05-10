'use client';
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (id: string, name: string, price: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  setItemQuantity: (id: string, name: string, price: number, quantity: number) => void;
  total: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  // Load cart from localStorage on initial load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        setItems(JSON.parse(savedCart));
      }
    }
  }, []);

  useEffect(() => {
    const newTotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const newCount = items.reduce((sum, item) => sum + item.quantity, 0);
    
    setTotal(newTotal);
    setItemCount(newCount);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(items));
    }
  }, [items]);

  const addItem = (id: string, name: string, price: number) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === id);
      if (existingItem) {
        return prevItems.map(item => 
          item.id === id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prevItems, { id, name, price, quantity: 1 }];
      }
    });
  };

  const removeItem = (id: string) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === id);
      if (existingItem && existingItem.quantity > 1) {
        return prevItems.map(item => 
          item.id === id 
            ? { ...item, quantity: item.quantity - 1 } 
            : item
        );
      } else {
        return prevItems.filter(item => item.id !== id);
      }
    });
  };

  const setItemQuantity = (id: string, name: string, price: number, quantity: number) => {
    if (quantity <= 0) {
      setItems(prevItems => prevItems.filter(item => item.id !== id));
    } else {
      setItems(prevItems => {
        const existingItem = prevItems.find(item => item.id === id);
        if (existingItem) {
          return prevItems.map(item => 
            item.id === id 
              ? { ...item, quantity } 
              : item
          );
        } else {
          return [...prevItems, { id, name, price, quantity }];
        }
      });
    }
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider 
      value={{ 
        items, 
        addItem, 
        removeItem, 
        clearCart,
        setItemQuantity, 
        total,
        itemCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}; 
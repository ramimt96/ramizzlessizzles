'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section 
      className="py-12 px-4 bg-black"
      style={{ 
        background: '#0a0a0a',
        color: '#ccc',
        padding: '48px 24px',
        minHeight: '100vh'
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 
          className="text-4xl font-bold text-center mb-8"
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '32px',
            color: '#e8c39e',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}
        >
          Contact Us
        </h1>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div 
            className="md:w-1/2"
            style={{
              flex: '1 1 50%',
              padding: '20px',
              background: 'rgba(10,10,10,0.7)',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
              border: '1px solid #333'
            }}
          >
            <h2 
              className="text-2xl font-bold mb-4"
              style={{
                fontSize: '1.75rem',
                fontWeight: 'bold',
                marginBottom: '16px',
                color: '#e8c39e'
              }}
            >
              Send us a message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label 
                  htmlFor="name" 
                  className="block mb-1 font-medium"
                  style={{
                    color: '#e8c39e',
                    marginBottom: '4px',
                    display: 'block'
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  style={{
                    width: '100%',
                    padding: '8px 16px',
                    backgroundColor: '#1a1a1a',
                    border: '1px solid #333',
                    borderRadius: '6px',
                    color: '#fff',
                    outline: 'none'
                  }}
                />
              </div>
              <div>
                <label 
                  htmlFor="email" 
                  className="block mb-1 font-medium"
                  style={{
                    color: '#e8c39e',
                    marginBottom: '4px',
                    display: 'block'
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  style={{
                    width: '100%',
                    padding: '8px 16px',
                    backgroundColor: '#1a1a1a',
                    border: '1px solid #333',
                    borderRadius: '6px',
                    color: '#fff',
                    outline: 'none'
                  }}
                />
              </div>
              <div>
                <label 
                  htmlFor="subject" 
                  className="block mb-1 font-medium"
                  style={{
                    color: '#e8c39e',
                    marginBottom: '4px',
                    display: 'block'
                  }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  style={{
                    width: '100%',
                    padding: '8px 16px',
                    backgroundColor: '#1a1a1a',
                    border: '1px solid #333',
                    borderRadius: '6px',
                    color: '#fff',
                    outline: 'none'
                  }}
                />
              </div>
              <div>
                <label 
                  htmlFor="message" 
                  className="block mb-1 font-medium"
                  style={{
                    color: '#e8c39e',
                    marginBottom: '4px',
                    display: 'block'
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  style={{
                    width: '100%',
                    padding: '8px 16px',
                    backgroundColor: '#1a1a1a',
                    border: '1px solid #333',
                    borderRadius: '6px',
                    color: '#fff',
                    outline: 'none',
                    minHeight: '120px'
                  }}
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-amber-900 text-amber-100 rounded-lg font-medium hover:bg-amber-800 transition-colors"
                style={{
                  padding: '10px 24px',
                  backgroundColor: '#78350f',
                  color: '#e8c39e',
                  fontWeight: '500',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div 
            className="md:w-1/2"
            style={{
              flex: '1 1 50%',
              padding: '20px',
              background: 'rgba(10,10,10,0.7)',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
              border: '1px solid #333'
            }}
          >
            <h2 
              className="text-2xl font-bold mb-4"
              style={{
                fontSize: '1.75rem',
                fontWeight: 'bold',
                marginBottom: '16px',
                color: '#e8c39e'
              }}
            >
              Location
            </h2>
            <div 
              className="mb-4"
              style={{
                marginBottom: '16px',
                color: '#ccc'
              }}
            >
              <p className="mb-2" style={{ marginBottom: '8px' }}><strong style={{ color: '#e8c39e' }}>Address:</strong> 123 Main St, New York, NY 10001</p>
              <p className="mb-2" style={{ marginBottom: '8px' }}><strong style={{ color: '#e8c39e' }}>Phone:</strong> (555) 123-4567</p>
              <p className="mb-2" style={{ marginBottom: '8px' }}><strong style={{ color: '#e8c39e' }}>Email:</strong> info@ramizzlessizzles.com</p>
            </div>
            
            <div 
              className="aspect-video bg-gray-800 rounded-lg overflow-hidden"
              style={{
                aspectRatio: '16/9',
                backgroundColor: '#1a1a1a',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid #333'
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304614!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1696854456646!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
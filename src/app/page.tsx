import ImageSlider from '@/components/ImageSlider';
import Image from 'next/image';

export default function Home() {
  const galleryImages = [
    { src: '/images/image1.jpg', alt: 'Food 1' },
    { src: '/images/image2.jpg', alt: 'Food 2' },
    { src: '/images/image3.jpg', alt: 'Food 3' },
    { src: '/images/image4.jpg', alt: 'Interior 1' },
    { src: '/images/image5.jpg', alt: 'Interior 2' },
    { src: '/images/image6.jpg', alt: 'Restaurant' },
  ];

  return (
    <>
      {/* Hero Section with Hero Banner Image */}
      <section 
        className="relative py-24 bg-black"
        style={{ 
          position: 'relative',
          padding: '96px 0',
          background: '#0a0a0a',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}
      >
        {/* Hero Background Image */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0.5
          }}
        >
        <Image
            src="/images/hero-banner.jpg"
            alt="Hero Banner"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          priority
        />
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8))',
              mixBlendMode: 'multiply'
            }}
          ></div>
        </div>

        <div 
          className="container mx-auto px-6 z-10 text-center"
          style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px'
          }}
        >
          <h1 
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 'bold',
              marginBottom: '24px',
              color: '#e8c39e',
              textShadow: '0 2px 10px rgba(0,0,0,0.5)'
            }}
          >
            Welcome to Ramizzle&apos;s Sizzles!
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-gray-200 mb-10"
            style={{
              fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
              color: 'rgba(232,195,158,0.9)',
              marginBottom: '40px',
              maxWidth: '700px',
              margin: '0 auto 40px'
            }}
          >
            Fire food, Fire life.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}
          >
            <a 
              href="/menu" 
              className="px-8 py-3 bg-amber-900 text-amber-100 rounded-lg font-medium hover:bg-amber-800 transition-colors"
              style={{
                padding: '12px 32px',
                background: '#78350f',
                color: '#e8c39e',
                borderRadius: '8px',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
              }}
            >
              View Menu
          </a>
          <a
              href="/contact" 
              className="px-8 py-3 border-2 border-amber-800 text-white rounded-lg font-medium hover:bg-amber-900 hover:text-white transition-colors"
              style={{
                padding: '12px 32px',
                background: 'transparent',
                color: '#e8c39e',
                border: '2px solid #92400e',
                borderRadius: '8px',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section 
        className="py-16 px-4 bg-neutral-900"
        style={{
          padding: '64px 24px',
          background: '#171717',
          borderTop: '1px solid #333',
          borderBottom: '1px solid #333'
        }}
      >
        <div 
          className="container mx-auto"
          style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          <h2 
            className="text-3xl font-bold text-center mb-12 text-amber-200"
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '48px',
              color: '#e8c39e'
            }}
          >
            Our Delicious Offerings
          </h2>
          
          <div 
            className="bg-black rounded-lg shadow-md p-6 mx-auto"
            style={{
              background: '#0a0a0a',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
              padding: '24px',
              maxWidth: '900px',
              margin: '0 auto',
              border: '1px solid #333'
            }}
          >
            <ImageSlider images={galleryImages} />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section 
        className="py-16 px-4 bg-neutral-950"
      >
        <div 
          className="container mx-auto"
          style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px'
            }}
          >
            <div 
              className="text-center p-6 bg-black bg-opacity-70 rounded-lg"
              style={{
                textAlign: 'center',
                padding: '32px',
                background: 'rgba(10,10,10,0.7)',
                borderRadius: '8px',
                backdropFilter: 'blur(4px)',
                border: '1px solid #333'
              }}
            >
              <div 
                className="mb-4 mx-auto bg-amber-900 rounded-full p-4 w-16 h-16 flex items-center justify-center"
                style={{
                  marginBottom: '16px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  background: '#78350f',
                  borderRadius: '9999px',
                  padding: '16px',
                  width: '64px',
                  height: '64px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
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
                  style={{color: '#e8c39e'}}
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 
                className="text-xl font-bold mb-2 text-amber-200"
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  marginBottom: '8px',
                  color: '#e8c39e'
                }}
              >
                Fresh Ingredients
              </h3>
              <p 
                className="text-gray-300"
                style={{
                  color: '#ccc'
                }}
              >
                We source the freshest ingredients to ensure every dish is perfect.
              </p>
            </div>
            
            <div 
              className="text-center p-6 bg-black bg-opacity-70 rounded-lg"
              style={{
                textAlign: 'center',
                padding: '32px',
                background: 'rgba(10,10,10,0.7)',
                borderRadius: '8px',
                backdropFilter: 'blur(4px)',
                border: '1px solid #333'
              }}
            >
              <div 
                className="mb-4 mx-auto bg-amber-900 rounded-full p-4 w-16 h-16 flex items-center justify-center"
                style={{
                  marginBottom: '16px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  background: '#78350f',
                  borderRadius: '9999px',
                  padding: '16px',
                  width: '64px',
                  height: '64px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
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
                  style={{color: '#e8c39e'}}
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 
                className="text-xl font-bold mb-2 text-amber-200"
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  marginBottom: '8px',
                  color: '#e8c39e'
                }}
              >
                Fast Service
              </h3>
              <p 
                className="text-gray-300"
                style={{
                  color: '#ccc'
                }}
              >
                Quick service without compromising on quality.
              </p>
            </div>
            
            <div 
              className="text-center p-6 bg-black bg-opacity-70 rounded-lg"
              style={{
                textAlign: 'center',
                padding: '32px',
                background: 'rgba(10,10,10,0.7)',
                borderRadius: '8px',
                backdropFilter: 'blur(4px)',
                border: '1px solid #333'
              }}
            >
              <div 
                className="mb-4 mx-auto bg-amber-900 rounded-full p-4 w-16 h-16 flex items-center justify-center"
                style={{
                  marginBottom: '16px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  background: '#78350f',
                  borderRadius: '9999px',
                  padding: '16px',
                  width: '64px',
                  height: '64px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
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
                  style={{color: '#e8c39e'}}
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 
                className="text-xl font-bold mb-2 text-amber-200"
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  marginBottom: '8px',
                  color: '#e8c39e'
                }}
              >
                Friendly Staff
              </h3>
              <p 
                className="text-gray-300"
                style={{
                  color: '#ccc'
                }}
              >
                Our team is dedicated to making your visit enjoyable.
              </p>
            </div>
          </div>
    </div>
      </section>
    </>
  );
}

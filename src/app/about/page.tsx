import Image from 'next/image';

export default function About() {
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
            color: '#e8c39e',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}
        >
          About Us
        </h1>
        
        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
          <div className="md:w-1/2">
            <div
              style={{ 
                borderRadius: '8px', 
                overflow: 'hidden',
                boxShadow: '0 6px 12px rgba(0,0,0,0.4)',
                border: '1px solid #333'
              }}
            >
              <Image
                src="/images/image6.jpg"
                alt="Our Restaurant"
                width={500}
                height={400}
                className="rounded-lg shadow-md"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </div>
          </div>
          <div 
            className="md:w-1/2"
            style={{
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
                color: '#e8c39e'
              }}
            >
              The Izzle Journey
            </h2>
            <p 
              className="mb-4"
              style={{
                color: '#ccc'
              }}
            >
              What&apos;s up homies? Welcome to Ramizzle&apos;s Sizzles—where every bite comes with a side of fun, flavor, and a whole lotta izzles. Born in the heart of NY, we bring that unmistakable Big Apple swagger to every dish.
            </p>
            <p
              style={{
                color: '#ccc'
              }}
            >
              Our journey started on humble city sidewalks, and now we&apos;re serving up style, taste, and a little bit of mischief in every meal. Here, we believe that if it ain&apos;t got that izzle, it ain&apos;t really sizzlin&apos;!
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
          <div className="md:w-1/2">
            <div
              style={{ 
                borderRadius: '8px', 
                overflow: 'hidden',
                boxShadow: '0 6px 12px rgba(0,0,0,0.4)',
                border: '1px solid #333'
              }}
            >
              <Image
                src="/images/image5.jpg"
                alt="Our Team"
                width={500}
                height={400}
                className="rounded-lg shadow-md"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </div>
          </div>
          <div 
            className="md:w-1/2"
            style={{
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
                color: '#e8c39e'
              }}
            >
              Our Fo Shizzle Philosophy
            </h2>
            <p 
              className="mb-4"
              style={{
                color: '#ccc'
              }}
            >
              From our signature Ramizzle Burger to our Sizzle Fries and Rizzle Dog, we mix classic NY vibes with a modern twist that&apos;ll have you saying, &quot;Fo shizzle!&quot; Whether you&apos;re a local or just cruisin&apos; through, pull up a chair and join us for a flavor explosion.
            </p>
            <p
              style={{
                color: '#ccc'
              }}
            >
              So come on in—experience the best of NY dining with our playful spirit and undeniable izzle. We promise you&apos;ll leave with a full belly and a smile. That&apos;s just how we roll at Ramizzle&apos;s!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 
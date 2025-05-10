import Link from 'next/link';

const Footer = () => {
  return (
    <footer 
      className="bg-black text-white p-5 text-center"
      style={{
        background: '#121212',
        color: '#ccc',
        padding: '20px',
        textAlign: 'center',
        borderTop: '1px solid #333',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.2)'
      }}
    >
      <div 
        className="mb-2"
        style={{
          marginBottom: '12px'
        }}
      >
        <Link 
          href="https://facebook.com" 
          target="_blank" 
          className="mx-2 hover:text-amber-200"
          style={{
            margin: '0 8px',
            color: '#e8c39e',
            textDecoration: 'none',
            transition: 'color 0.2s'
          }}
        >
          Facebook
        </Link>
        <Link 
          href="https://instagram.com" 
          target="_blank" 
          className="mx-2 hover:text-amber-200"
          style={{
            margin: '0 8px',
            color: '#e8c39e',
            textDecoration: 'none',
            transition: 'color 0.2s'
          }}
        >
          Instagram
        </Link>
      </div>
      <div 
        className="business-hours"
        style={{
          color: '#999'
        }}
      >
        <p style={{ margin: '4px 0' }}>Mon-Fri: 11am - 10pm</p>
        <p style={{ margin: '4px 0' }}>Sat-Sun: 9am - 11pm</p>
      </div>
    </footer>
  );
};

export default Footer; 
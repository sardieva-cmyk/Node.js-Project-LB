import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{
      background: 'rgba(139, 0, 0, 0.8)',
      padding: '1.5rem',
      textAlign: 'center',
      borderBottom: '4px solid #ff0000',
      boxShadow: '0 0 20px #ff0000'
    }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
        <h1 style={{ fontSize: '3rem', textShadow: '0 0 15px #ff0000' }}>
          ⚡ RED ALERT 3 DATABASE ⚡
        </h1>
      </Link>
    </header>
  );
}
import { units } from '../data/units';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>
        Выберите юнит
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        {units.map(unit => (
          <Link
            key={unit.id}
            to={`/unit/${unit.id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{
              background: 'rgba(30, 30, 60, 0.8)',
              border: '2px solid #4444aa',
              borderRadius: '15px',
              overflow: 'hidden',
              transition: 'all 0.3s',
              boxShadow: '0 0 15px rgba(0,100,255,0.5)'
            }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              
              <img 
                src={unit.image} 
                alt={unit.name}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/300x200/221133/ffffff?text=' + unit.name;
                }}
              />
              
              <div style={{ padding: '1rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: '#ff3366' }}>{unit.name}</h3>
                <p style={{ color: '#aaa' }}>{unit.faction} • {unit.role}</p>
                <p>Стоимость: ${unit.cost}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
import { useParams, Link } from 'react-router-dom';
import { units } from '../data/units';

export default function UnitDetail() {
  const { id } = useParams();
  const unit = units.find(u => u.id === Number(id));

  if (!unit) {
    return <div>Юнит не найден</div>;
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <Link to="/" style={{ color: '#88f', textDecoration: 'none' }}>← Назад к списку</Link>
      
      <div style={{
        marginTop: '2rem',
        background: 'rgba(20,20,50,0.9)',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 0 30px rgba(255,0,100,0.4)'
      }}>
        <img 
          src={unit.image} 
          alt={unit.name}
          style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
          onError={(e) => {
            e.currentTarget.src = 'https://via.placeholder.com/800x400/330044/ffffff?text=' + unit.name;
          }}
        />

        <div style={{ padding: '2rem' }}>
          <h1 style={{ fontSize: '3.5rem', color: '#ff3366' }}>{unit.name}</h1>
          <p style={{ fontSize: '1.5rem', color: '#88f' }}>{unit.faction}</p>
          
          <div style={{ margin: '2rem 0' }}>
            <p><strong>Роль:</strong> {unit.role}</p>
            <p><strong>Стоимость:</strong> ${unit.cost}</p>
            <p><strong>Здоровье:</strong> {unit.health}</p>
            <p><strong>Скорость:</strong> {unit.speed}</p>
          </div>

          <div style={{ lineHeight: '1.8', fontSize: '1.2rem' }}>
            <p>{unit.description}</p>
          </div>

          <h3 style={{ margin: '2rem 0 1rem', color: '#ff9966' }}>Особые способности:</h3>
          <ul style={{ listStyle: 'inside', fontSize: '1.2rem' }}>
            {unit.abilities.map((ability, i) => (
              <li key={i} style={{ margin: '0.5rem 0' }}>{ability}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
'use client';

import { useEffect, useState } from 'react';

type Game = {
  id: number;
  name: string;
  poster: string;
  releaseYear: string;
  developer: string;
  category: string;
};

export default function Home() {
  const [games, setGames] = useState<Game[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/games')
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  const categories = ['Action', 'Drama', 'History', 'Horror', 'Fantasy'];

  // 🧩 GameCard Component Inline
  const GameCard = ({ game }: { game: Game }) => {
    const isHovered = hoveredCard === game.id;

    return (
      <div
        onMouseEnter={() => setHoveredCard(game.id)}
        onMouseLeave={() => setHoveredCard(null)}
        style={{
          backgroundColor: '#1f2937',
          padding: '1rem',
          borderRadius: '0.75rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.3s ease',
        }}
      >
        <div style={{ overflow: 'hidden', borderRadius: '0.5rem' }}>
          <img
            src={game.poster}
            alt={game.name}
            style={{
              width: '100%',
              height: '160px',
              objectFit: 'cover',
              borderRadius: '0.5rem',
              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 0.3s ease',
            }}
          />
        </div>
        <h2
          style={{
            marginTop: '0.75rem',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          {game.name}
        </h2>
        <p style={{ fontSize: '0.9rem', color: '#d1d5db' }}>Developer: {game.developer}</p>
        <p style={{ fontSize: '0.9rem', color: '#d1d5db' }}>Released: {game.releaseYear}</p>
      </div>
    );
  };

  return (
    <main style={{ backgroundColor: '#111827', minHeight: '100vh', color: 'white' }}>
      {/* Top NavBar */}
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 2rem',
          backgroundColor: '#1f2937',
          color: 'white',
        }}
      >
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>🎮 GameZone</div>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
          {['Home', 'Contact', 'About', 'Logout'].map((item) => (
            <li key={item}>
              <a
                style={{
                  cursor: 'pointer',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#facc15')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              style={{
                backgroundColor: '#3b82f6',
                padding: '6px 12px',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#3b82f6')}
            >
              Login
            </a>
          </li>
          <li>
            <a
              style={{
                backgroundColor: '#10b981',
                padding: '6px 12px',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              Signup
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div style={{ padding: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}>
          🎮 Explore Games by Category
        </h1>
        {categories.map((cat) => (
          <div key={cat} style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#facc15' }}>{cat}</h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {games
                .filter((g) => g.category === cat)
                .map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

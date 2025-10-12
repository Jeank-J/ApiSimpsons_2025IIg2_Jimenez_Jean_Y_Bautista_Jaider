import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CharacterId.css'; // Importa los estilos

function CharacterId() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://thesimpsonsapi.com/api/characters/${id}`)
      .then(res => res.json())
      .then(data => setCharacter(data))
      .catch(err => console.error("Error cargando personaje:", err));
  }, [id]);

  if (!character) {
    return <p className="loading">Cargando información del personaje...</p>;
  }

  return (
    <div className="character-container">
      <div className="character-card">
        <img
          className="character-image"
          src={`https://cdn.thesimpsonsapi.com/500${character.portrait_path}`}
          alt={character.name}
        />

        <h1 className="character-name">{character.name}</h1>

        <div className="character-info">
          <p><strong>Edad:</strong> {character.age}</p>
          <p><strong>Estado:</strong> {character.status}</p>
          <p><strong>Ocupación:</strong> {character.occupation}</p>
        </div>

        {character.description && (
          <p className="character-description">{character.description}</p>
        )}

        <div className="phrases-section">
          <h2>Frases más icónicas</h2>
          <ul>
            {character.phrases && character.phrases.length > 0 ? (
              character.phrases.map((frase, index) => (
                <li key={index}>"{frase}"</li>
              ))
            ) : (
              <li>No hay frases disponibles</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CharacterId;

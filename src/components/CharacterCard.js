import React from 'react';
import './CharacterCard.css';

const CharacterCard = ({ character }) => {
  return (
    <div className="card">
      <img src={character.image} alt={character.name} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{character.name}</h3>
        <p className="card-status">
          <span className={`status ${character.status.toLowerCase()}`}></span> 
          {character.status} - {character.species}
        </p>
        <p><strong>Origem:</strong> {character.origin.name || 'Desconhecida'}</p>
        <p><strong>Localização:</strong> {character.location.name || 'Desconhecida'}</p>
      </div>
    </div>
  );
};

export default CharacterCard;

import React, { useState, useEffect } from 'react';
import CharacterCard from './components/CharacterCard';

const App = () => {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [characterId, setCharacterId] = useState(2);

  useEffect(() => {
    setLoading(true);
    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados do personagem:', error);
        setLoading(false);
      });
  }, [characterId]);

  const handleChange = (event) => {
    setCharacterId(event.target.value);
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!character) {
    return <p>Não foi possível carregar os dados do personagem.</p>;
  }

  return (
    <div>
      <h1>Selecione um personagem</h1>
      <input
        type="number"
        value={characterId}
        onChange={handleChange}
        placeholder="Digite o ID do personagem"
      />
      <CharacterCard character={character} />  { }
    </div>
  );
};

export default App;

import React from 'react';

async function createCard(data) {
    try {
      const response = await fetch('https://localhost:7048/WeatherForecast/addCard', {
        method: 'POST',
        headers: {
        'Accept': '*/*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "nameCard": "string",
            "cost": 0,
            "attackDamage": 0,
            "hp": 0
        }),
      });
  
      if (!response.ok) {
        // Jeśli serwer zwrócił błąd (np. status 500), rzucamy wyjątek
        throw new Error('Network response was not ok');
      }
  
      // Opcjonalnie: Odbieranie i przetwarzanie odpowiedzi JSON o
      const responseData = await response.json();
      console.log(responseData); // Wyświetl odpowiedź w konsoli
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  const cardData = {
    nameCard: "Example Card",
    cost: 10,
    attackDamage: 5,
    hp: 20,
  };
const Home = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    await createCard(data);
  };

  return (
    <div>
      <div>
        <h1>Add new card admin</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="NameCard">Name:</label>
            <input
              type="text"
              id="NameCard"
              name="NameCard"
              maxLength="128"
            />
          </div>
          <div>
            <label htmlFor="Cost">Cost:</label>
            <input
              type="number"
              id="Cost"
              name="Cost"
            />
          </div>
          <div>
            <label htmlFor="AttackDamage">Attack Damage:</label>
            <input
              type="number"
              id="AttackDamage"
              name="AttackDamage"
            />
          </div>
          <div>
            <label htmlFor="Hp">HP:</label>
            <input
              type="number"
              id="Hp"
              name="Hp"
            />
          </div>
          <button type="submit">Submit Card</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
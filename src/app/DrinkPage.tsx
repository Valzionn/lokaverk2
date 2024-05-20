import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOrder } from './OrderContext';

const DrinkPage = () => {
  const [drinks, setDrinks] = useState<any[]>([]);
  const [selectedDrink, setSelectedDrink] = useState<any>(null);
  const navigate = useNavigate();
  const { setOrder } = useOrder();

  useEffect(() => {
    fetchDrinks();
  }, []);

  const fetchDrinks = async () => {
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
      const data = await response.json();
      setDrinks(data.drinks);
    } catch (error) {
      console.error('Error fetching drinks:', error);
    }
  };

  const handleSelectDrink = (drink: any) => {
    setSelectedDrink(drink);
  };

  const handleContinue = () => {
    if (selectedDrink) {
      setOrder((prevOrder) => ({
        ...prevOrder,
        drinks: [{
          id: selectedDrink.idDrink,
          name: selectedDrink.strDrink,
          description: selectedDrink.strInstructions,
          imageSource: selectedDrink.strDrinkThumb,
          price: 50, // Set a default price
          category: selectedDrink.strCategory,
          brewer: selectedDrink.strAlcoholic
        }]
      }));
      navigate('/order');
    }
  };

  return (
    <div>
      <h1>Select a Drink</h1>
      <div>
        {drinks.map((drink) => (
          <div key={drink.idDrink} onClick={() => handleSelectDrink(drink)}>
            <h2>{drink.strDrink}</h2>
            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
          </div>
        ))}
      </div>
      <button onClick={handleContinue} disabled={!selectedDrink}>Continue</button>
    </div>
  );
};

export default DrinkPage;

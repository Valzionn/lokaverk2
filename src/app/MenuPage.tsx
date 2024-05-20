import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOrder } from './OrderContext';

const MenuPage = () => {
  const [meal, setMeal] = useState<any>(null);
  const navigate = useNavigate();
  const { setOrder } = useOrder();

  useEffect(() => {
    fetchRandomMeal();
  }, []);

  const fetchRandomMeal = async () => {
    try {
      const response = await fetch('https://themealdb.com/api/json/v1/1/random.php');
      const data = await response.json();
      setMeal(data.meals[0]);
    } catch (error) {
      console.error('Error fetching random meal:', error);
    }
  };

  const handleContinue = () => {
    if (meal) {
      setOrder((prevOrder) => ({
        ...prevOrder,
        dish: {
          id: meal.idMeal,
          name: meal.strMeal,
          description: meal.strInstructions,
          imageSource: meal.strMealThumb,
          price: 100, // Set a default price
          category: meal.strCategory,
          cousine: meal.strArea
        }
      }));
      navigate('/drink');
    }
  };

  return (
    <div>
      {meal && (
        <div>
          <h1>{meal.strMeal}</h1>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <button onClick={fetchRandomMeal}>Choose Another</button>
          <button onClick={handleContinue}>Continue</button>
        </div>
      )}
    </div>
  );
};

export default MenuPage;



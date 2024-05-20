import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useOrder } from '../context/OrderContext';

const MenuPage = () => {
  const [meal, setMeal] = useState<any>(null);
  const router = useRouter();
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
      router.push('/drink');
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

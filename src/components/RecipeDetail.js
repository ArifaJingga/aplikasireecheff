// src/components/RecipeDetail.js
import React, { useEffect, useState } from 'react';
import { getRecipe } from '../services/recipeService';

const RecipeDetail = ({ recipeId }) => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const recipeData = await getRecipe(recipeId);
      setRecipe(recipeData);
    };
    fetchRecipe();
  }, [recipeId]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.instructions}</p>
      <p>Bahan: {recipe.ingredients.join(', ')}</p>
    </div>
  );
};

export default RecipeDetail;

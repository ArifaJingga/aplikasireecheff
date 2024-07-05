// src/pages/RecipeDetailPage.js
import React from 'react';
import RecipeDetail from '../components/RecipeDetail';
import { useParams } from 'react-router-dom';

const RecipeDetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Detail Resep</h1>
      <RecipeDetail recipeId={id} />
    </div>
  );
};

export default RecipeDetailPage;

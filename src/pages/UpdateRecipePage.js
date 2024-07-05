// src/pages/UpdateRecipePage.js
import React from 'react';
import UpdateRecipe from '../components/UpdateRecipe';
import { useParams } from 'react-router-dom';

const UpdateRecipePage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Perbarui Resep</h1>
      <UpdateRecipe recipeId={id} />
    </div>
  );
};

export default UpdateRecipePage;

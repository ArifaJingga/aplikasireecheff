// src/components/RecipeList.js
import React, { useEffect, useState } from 'react';
import { getRecipes, deleteRecipe } from '../services/recipeService';
import styles from '../styles/RecipeList.module.css';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipesData = await getRecipes();
      setRecipes(recipesData);
    };
    fetchRecipes();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus resep ini?')) {
      await deleteRecipe(id);
      setRecipes(recipes.filter(recipe => recipe.id !== id));
      alert('Resep berhasil dihapus!');
    }
  };

  return (
    <div className={styles.container}>
      <h2>Daftar Resep</h2>
      <ul className={styles.recipeList}>
        {recipes.map(recipe => (
          <li key={recipe.id} className={styles.recipeItem}>
            <h3>{recipe.title}</h3>
            <p>{recipe.instructions}</p>
            <p>Bahan: {recipe.ingredients.join(', ')}</p>
            <button onClick={() => handleDelete(recipe.id)} className={styles.deleteButton}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;

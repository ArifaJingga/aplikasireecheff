// src/components/UpdateRecipe.js
import React, { useState, useEffect } from 'react';
import { getRecipe, updateRecipe } from '../services/recipeService';
import styles from '../styles/AddRecipe.module.css';

const UpdateRecipe = ({ recipeId }) => {
  const [recipe, setRecipe] = useState({});
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  useEffect(() => {
    const fetchRecipe = async () => {
      const recipeData = await getRecipe(recipeId);
      setRecipe(recipeData);
      setTitle(recipeData.title);
      setIngredients(recipeData.ingredients.join(', '));
      setInstructions(recipeData.instructions);
    };
    fetchRecipe();
  }, [recipeId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedRecipe = {
      title,
      ingredients: ingredients.split(',').map(item => item.trim()),
      instructions
    };
    await updateRecipe(recipeId, updatedRecipe);
    alert('Resep berhasil diperbarui!');
  };

  return (
    <form onSubmit={handleUpdate} className={styles.form}>
      <h2>Perbarui Resep</h2>
      <input
        type="text"
        placeholder="Judul"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className={styles.input}
      />
      <textarea
        placeholder="Bahan (pisahkan dengan koma)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        required
        className={styles.textarea}
      ></textarea>
      <textarea
        placeholder="Instruksi"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        required
        className={styles.textarea}
      ></textarea>
      <button type="submit" className={styles.button}>Perbarui Resep</button>
    </form>
  );
};

export default UpdateRecipe;

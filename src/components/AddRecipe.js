// src/components/AddRecipe.js
import React, { useState } from 'react';
import { addRecipe } from '../services/recipeService';
import styles from '../styles/AddRecipe.module.css';

const AddRecipe = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecipe = {
      title,
      ingredients: ingredients.split(',').map(item => item.trim()),
      instructions,
      createdAt: new Date()
    };
    await addRecipe(newRecipe);
    setTitle('');
    setIngredients('');
    setInstructions('');
    alert('Resep berhasil ditambahkan!');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Tambah Resep Baru</h2>
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
      <button type="submit" className={styles.button}>Tambah Resep</button>
    </form>
  );
};

export default AddRecipe;

// src/services/recipeService.js
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

const recipeCollection = collection(db, 'resep');

export const addRecipe = async (recipe) => {
  await addDoc(recipeCollection, recipe);
};

export const getRecipes = async () => {
  const querySnapshot = await getDocs(recipeCollection);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getRecipe = async (id) => {
  const recipeDoc = doc(db, 'resep', id);
  const recipeSnapshot = await getDoc(recipeDoc);
  return recipeSnapshot.exists() ? { id, ...recipeSnapshot.data() } : null;
};

export const updateRecipe = async (id, updatedRecipe) => {
  const recipeDoc = doc(db, 'resep', id);
  await updateDoc(recipeDoc, updatedRecipe);
};

export const deleteRecipe = async (id) => {
  const recipeDoc = doc(db, 'resep', id);
  await deleteDoc(recipeDoc);
};

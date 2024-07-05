// src/routes.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AddRecipePage from './pages/AddRecipePage';
import UpdateRecipePage from './pages/UpdateRecipePage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import NotFoundPage from './pages/NotFoundPage';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/add-recipe" component={AddRecipePage} />
      <Route path="/update-recipe/:id" component={UpdateRecipePage} />
      <Route path="/recipe/:id" component={RecipeDetailPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;

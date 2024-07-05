// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AddRecipePage from './pages/AddRecipePage';
import UpdateRecipePage from './pages/UpdateRecipePage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add-recipe" component={AddRecipePage} />
          <Route path="/update-recipe/:id" component={UpdateRecipePage} />
          <Route path="/recipe/:id" component={RecipeDetailPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

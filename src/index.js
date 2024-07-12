import { fetchRecipes } from './api';
import { displayRecipes, getSearchQuery } from './ui';
import './styles.css';

document.getElementById('search-button').addEventListener('click', async () => {
  const query = getSearchQuery();
  const recipes = await fetchRecipes(query);
  displayRecipes(recipes);
});

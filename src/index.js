import { fetchRecipes } from './api';
import { showRecipes, getSearchQuery, setSearchButtonHandler } from './ui';
import './styles.css';

async function searchRecipes() {
  const query = getSearchQuery();
  const recipes = await fetchRecipes(query);
  showRecipes(recipes);
}

setSearchButtonHandler(searchRecipes);

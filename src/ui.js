export function getSearchQuery() {
    return document.getElementById('search-input').value;
  }
  
  export function displayRecipes(recipes) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
  
    recipes.forEach(recipe => {
      const recipeDiv = document.createElement('div');
      recipeDiv.className = 'recipe';
  
      const img = document.createElement('img');
      img.src = recipe.image;
      img.alt = recipe.title;
  
      const title = document.createElement('h2');
      title.textContent = recipe.title;
  
      recipeDiv.appendChild(img);
      recipeDiv.appendChild(title);
  
      resultsDiv.appendChild(recipeDiv);
    });
  }
  
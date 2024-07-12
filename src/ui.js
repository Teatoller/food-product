export function showRecipes(recipes) {
    const container = document.getElementById('recipes-container');
    container.innerHTML = '';
    recipes.forEach(recipe => {
      const card = document.createElement('div');
      card.className = 'recipe-card';
      card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}">
        <h3>${recipe.title}</h3>
      `;
      container.appendChild(card);
    });
  }
  
  export function getSearchQuery() {
    return document.getElementById('search-input').value;
  }
  
  export function setSearchButtonHandler(handler) {
    document.getElementById('search-button').addEventListener('click', handler);
  }
  
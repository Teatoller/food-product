export async function fetchRecipes(query) {
    const apiKey = process.env.API_KEY;
    const response = await fetch(`https://api.spoonacular.com/food/products/search?apiKey=${apiKey}&query=${query}`);
    const data = await response.json();
    return data.results;
  }
  
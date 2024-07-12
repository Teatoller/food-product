export async function fetchRecipes(query) {
    try {
      const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
      const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}`;
      const headers = { 'Content-Type': 'application/json' };
  
      const response = await fetch(url, { headers });
      const status = response.status;
      const body = await response.json();
  
      if (status === 200) {
        console.log('Success');
        return body.results;
      } else {
        console.log('Error');
        return [];
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  
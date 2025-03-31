// Create a function fetchData(url) that fetches data from a given URL using fetch().
// It should handle errors properly and return the JSON response.

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

fetchData("https://jsonplaceholder.typicode.com/todos/1")
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
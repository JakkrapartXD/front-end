export async function getAllMovies() {
  try {
    const response = await fetch("https://api.se-rmutl.net/api/movie/all");
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function createMovie(data) {
  const formData = new FormData();
  formData.append("title", data.title);
  formData.append("genre", data.genre);
  formData.append("director", data.director);
  formData.append("release_year", data.releaseYear);
  formData.append("Image_name", data.image); 
  console.log(formData);
  const response = await fetch(`https://api.se-rmutl.net/api/movie/insert`, {
    method: "POST",
    body: formData,
  });

  return await response.json();
}

export async function searchMovie(search_text) {
  const response = await fetch(
    `https://api.se-rmutl.net/api/movie/search?search_text=${search_text}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  return await response.json();
}

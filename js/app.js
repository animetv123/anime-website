const grid = document.getElementById("animeGrid");

if (grid) {
  animeData.forEach(anime => {
    const card = document.createElement("div");
    card.className = "anime-card";
    card.innerHTML = `
      <img src="${anime.poster}">
      <h3>${anime.title}</h3>
      <p>${anime.year}</p>
      <p>${anime.genre}</p>
    `;
    grid.appendChild(card);
  });
}

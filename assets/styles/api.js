// url Destaque => https://api.themoviedb.org/3/movie/popular?api_key=712327c9b489c9d07121785a686b81db&region=pt-BR
// url Lançamentos => https://api.themoviedb.org/3/movie/upcoming?api_key=712327c9b489c9d07121785a686b81db&language=pt-BR
const TMDB_ENDPOINT = "https://api.themoviedb.org/3";
const APIKEY = "712327c9b489c9d07121785a686b81db";
const IMG_PREFIX = "https://image.tmdb.org/t/p/w500";
let xhr;
function carregaFilmes() {
  xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    TMDB_ENDPOINT + "/movie/popular" + "?api_key=" + APIKEY,
    true
  );
  xhr.onload = exibeFilmes;
  xhr.send();
}
function pesquisaFilmes() {
  xhr = new XMLHttpRequest();

  query = document.getElementById("inputPesquisa").value;
  if (query.length > 0) {
    xhr.open(
      "GET",
      TMDB_ENDPOINT +
        "/search/movie" +
        "?api_key=" +
        APIKEY +
        "&query=" +
        query,
      true
    );
    xhr.onload = exibeFilmesPesquisa;
    xhr.send();
  } else {
    alert("Digite o nome de um filme");
  }
}
function exibeFilmes() {
  let data = JSON.parse(xhr.responseText);
  let textoHTML = "";
  console.log(data);

  for (let i = 0; i < data.results.length; i++) {
    let nomeFilme = data.results[i].title;
    let sinopse = data.results[i].overview;
    let info = "https://www.themoviedb.org/movie/" + data.results[i].id;
    let imagem = IMG_PREFIX + data.results[i].poster_path;
    console.log(data.results);
    textoHTML += `<div class="card col-md-4">
          <img src="${imagem}" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${nomeFilme}</h5>
              <p class="card-text">${sinopse}</p>
              <a href="${info}" class="btn btn-primary">Go somewhere</a>
          </div>
      </div>`;
  }

  document.getElementById("tela").innerHTML = textoHTML;
}
function exibeFilmesPesquisa() {
  let data = JSON.parse(xhr.responseText);
  let textoHTML = "";
  console.log(data);

  for (let i = 0; i < data.results.length; i++) {
    let nomeFilme = data.results[i].title;
    let sinopse = data.results[i].overview;
    let info = "https://www.themoviedb.org/movie/" + data.results[i].id;
    let imagem = IMG_PREFIX + data.results[i].poster_path;
    console.log(data.results);
    textoHTML += `<div class="card col-md-4">
          <img src="${imagem}" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${nomeFilme}</h5>
              <p class="card-text">${sinopse}</p>
              <a href="${info}" class="btn btn-primary">Go somewhere</a>
          </div>
      </div>`;
  }
  document.getElementById("telaPesquisa").innerHTML = textoHTML;

  document.getElementById("main").style.display = "none";

}



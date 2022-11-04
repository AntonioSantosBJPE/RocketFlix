const btnSearchMovie = document.querySelector(".button-search-movie")
const movieTitle = document.querySelector(".box-movies-infos-title")
const movieResum = document.querySelector(".box-movies-infos-resum")
const imgPosterMovie = document.querySelector(".poster-movie")
const containerMovie = document.querySelector(".box-movie")
const imgUrl = 'https://image.tmdb.org/t/p/w500'
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTk0ZTFhMDZhM2VlOGUxM2QzNTlkYzc0MTIyYTRlNyIsInN1YiI6IjYzNjNmNTVjMDdlMjgxMDA3YTlkYThlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WXcFSFHdga1iuVQendlr965GjwQdVPCSKro0bZIcPzI" 
const keyApi = "d194e1a06a3ee8e13d359dc74122a4e7"
let numRandomPage
let numRandomVetor

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


btnSearchMovie.addEventListener("click",async (e)=>{
  

if(!containerMovie.classList.contains("show")){
    setTimeout(()=>{
        containerMovie.classList ="box-movie show"
    },500)
}

numRandomPage  =getRandomIntInclusive(1, 500)
numRandomVetor = getRandomIntInclusive(0, 19)

const data = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${keyApi}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${numRandomPage}&with_watch_monetization_types=flatrate`)
const dataJson = await data.json()

movieTitle.innerText = dataJson.results[numRandomVetor].title
if(dataJson.results[numRandomVetor].overview.length !== 0){
    movieResum.innerText = dataJson.results[numRandomVetor].overview
}else{
    movieResum.innerText = "O filme não contém resumo disponível"
}

imgPosterMovie.src = `${imgUrl}${dataJson.results[numRandomVetor].poster_path}`


})

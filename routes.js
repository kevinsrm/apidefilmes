const express = require('express');
const routes = express.Router();

let catalogo = {
  movies: [
    { "id": 1, "title": "Inception", "genre": "Sci-Fi", "year": 2010, "director": "Christopher Nolan", "type": "movie" },
    { "id": 2, "title": "The Dark Knight", "genre": "Action", "year": 2008, "director": "Christopher Nolan", "type": "movie" },
    { "id": 3, "title": "Interstellar", "genre": "Sci-Fi", "year": 2014, "director": "Christopher Nolan", "type": "movie" },
    { "id": 4, "title": "The Matrix", "genre": "Sci-Fi", "year": 1999, "director": "The Wachowskis", "type": "movie" },
    { "id": 5, "title": "The Dark Knight Rises", "genre": "Action", "year": 2012, "director": "Christopher Nolan", "type": "movie" },
    { "id": 6, "title": "Inglourious Basterds", "genre": "War", "year": 2009, "director": "Quentin Tarantino", "type": "movie" },
    { "id": 7, "title": "Pulp Fiction", "genre": "Crime", "year": 1994, "director": "Quentin Tarantino", "type": "movie" },
    { "id": 8, "title": "Fight Club", "genre": "Drama", "year": 1999, "director": "David Fincher", "type": "movie" },
    { "id": 9, "title": "The Shawshank Redemption", "genre": "Drama", "year": 1994, "director": "Frank Darabont", "type": "movie" },
    { "id": 10, "title": "The Godfather", "genre": "Crime", "year": 1972, "director": "Francis Ford Coppola", "type": "movie" },
    { "id": 11, "title": "Forrest Gump", "genre": "Drama", "year": 1994, "director": "Robert Zemeckis", "type": "movie" },
    { "id": 12, "title": "The Prestige", "genre": "Drama", "year": 2006, "director": "Christopher Nolan", "type": "movie" },
    { "id": 13, "title": "Memento", "genre": "Thriller", "year": 2000, "director": "Christopher Nolan", "type": "movie" },
    { "id": 14, "title": "Gladiator", "genre": "Action", "year": 2000, "director": "Ridley Scott", "type": "movie" },
    { "id": 15, "title": "The Silence of the Lambs", "genre": "Thriller", "year": 1991, "director": "Jonathan Demme", "type": "movie" },
    { "id": 16, "title": "Schindler's List", "genre": "Biography", "year": 1993, "director": "Steven Spielberg", "type": "movie" },
    { "id": 17, "title": "Goodfellas", "genre": "Crime", "year": 1990, "director": "Martin Scorsese", "type": "movie" },
    { "id": 18, "title": "Star Wars: A New Hope", "genre": "Sci-Fi", "year": 1977, "director": "George Lucas", "type": "movie" },
    { "id": 19, "title": "Jurassic Park", "genre": "Sci-Fi", "year": 1993, "director": "Steven Spielberg", "type": "movie" },
    { "id": 20, "title": "Terminator 2: Judgment Day", "genre": "Action", "year": 1991, "director": "James Cameron", "type": "movie" },
    { "id": 21, "title": "Titanic", "genre": "Drama", "year": 1997, "director": "James Cameron", "type": "movie" },
    { "id": 22, "title": "Avatar", "genre": "Sci-Fi", "year": 2009, "director": "James Cameron", "type": "movie" },
    { "id": 23, "title": "Back to the Future", "genre": "Sci-Fi", "year": 1985, "director": "Robert Zemeckis", "type": "movie" }
  ],
  series: [
    { "id": 1, "title": "Breaking Bad", "genre": "Crime", "year": 2008, "director": "Vince Gilligan", "type": "series" },
    { "id": 2, "title": "Stranger Things", "genre": "Sci-Fi", "year": 2016, "director": "The Duffer Brothers", "type": "series" },
    { "id": 3, "title": "The Crown", "genre": "Drama", "year": 2016, "director": "Peter Morgan", "type": "series" },
    { "id": 4, "title": "Game of Thrones", "genre": "Fantasy", "year": 2011, "director": "David Benioff", "type": "series" },
    { "id": 5, "title": "The Mandalorian", "genre": "Sci-Fi", "year": 2019, "director": "Jon Favreau", "type": "series" },
    { "id": 6, "title": "The Witcher", "genre": "Fantasy", "year": 2019, "director": "Lauren Schmidt Hissrich", "type": "series" },
    { "id": 7, "title": "Dark", "genre": "Sci-Fi", "year": 2017, "director": "Baran bo Odar", "type": "series" },
    { "id": 8, "title": "Friends", "genre": "Comedy", "year": 1994, "director": "David Crane", "type": "series" },
    { "id": 9, "title": "The Office", "genre": "Comedy", "year": 2005, "director": "Greg Daniels", "type": "series" },
    { "id": 10, "title": "Narcos", "genre": "Crime", "year": 2015, "director": "Chris Brancato", "type": "series" },
    { "id": 11, "title": "Money Heist", "genre": "Crime", "year": 2017, "director": "Álex Pina", "type": "series" },
    { "id": 12, "title": "The Boys", "genre": "Action", "year": 2019, "director": "Eric Kripke", "type": "series" },
    { "id": 13, "title": "The Walking Dead", "genre": "Horror", "year": 2010, "director": "Frank Darabont", "type": "series" },
    { "id": 14, "title": "Westworld", "genre": "Sci-Fi", "year": 2016, "director": "Jonathan Nolan", "type": "series" },
    { "id": 15, "title": "Chernobyl", "genre": "Drama", "year": 2019, "director": "Craig Mazin", "type": "series" },
    { "id": 16, "title": "Fargo", "genre": "Crime", "year": 2014, "director": "Noah Hawley", "type": "series" },
    { "id": 17, "title": "True Detective", "genre": "Crime", "year": 2014, "director": "Nic Pizzolatto", "type": "series" },
    { "id": 18, "title": "Black Mirror", "genre": "Sci-Fi", "year": 2011, "director": "Charlie Brooker", "type": "series" },
    { "id": 19, "title": "Peaky Blinders", "genre": "Crime", "year": 2013, "director": "Steven Knight", "type": "series" },
    { "id": 20, "title": "Sherlock", "genre": "Mystery", "year": 2010, "director": "Mark Gatiss", "type": "series" },
    { "id": 21, "title": "Better Call Saul", "genre": "Crime", "year": 2015, "director": "Vince Gilligan", "type": "series" },
    { "id": 22, "title": "The Umbrella Academy", "genre": "Sci-Fi", "year": 2019, "director": "Steve Blackman", "type": "series" },
    { "id": 23, "title": "The Haunting of Hill House", "genre": "Horror", "year": 2018, "director": "Mike Flanagan", "type": "series" }
  ]
};

//create
//postar uma serie ou filme
routes.post("/",(req,res)=>{
  catalogo.push(req.body)
});


//read
routes.get("/",(req,res)=>{
console.log(req.method);
res.status(200).send(catalogo);
})

//rota de movies
routes.get("/movies",(req,res)=>{
  res.status(200).send(catalogo.movies);
})

routes.get("/series",(req,res)=>{
  res.status(200).send(catalogo.series);
})

routes.get("/movies/:id",(req,res)=>{
  let params = req.params;
  const result = catalogo.movies.filter((item) => item.id === parseInt(params.id))
  if(result.length > 0){
    res.status(200).send(result)
  }
  else{
    res.status(404).send("filme não encontrado")
  }
})

routes.get("/series/:id",(req,res)=>{
  let params = req.params;
  const result = catalogo.series.filter((item) => item.id === parseInt(params.id))
  if(result.length > 0){
    res.status(200).send(result)
  }
  else{
    res.status(404).send("serie não encontrada")
  }
})
//update
routes.put("/movies/:id",(req,res)=>{
  let params = req.params;
  let body = req.body;
  const movie = catalogo.movies.find((item) => item.id === parseInt(params.id))
  if(movie){
    movie.title = body.title || movie.title;
    movie.genre = body.genre || movie.genre;
    movie.year = body.year || movie.year;
    movie.director = body.director || movie.director;
    movie.type = body.type || movie.type;
    
    res.status(201).send(movie)
  }
  else{
    res.status(404).send("filme não encontrado")
  }
})

routes.put("/series/:id",(req,res)=>{
  let params = req.params;
  let body = req.body;
  const serie = catalogo.series.find((item) => item.id === parseInt(params.id))
  if(serie){
    serie.title = body.title || serie.title;
    serie.genre = body.genre || serie.genre;
    serie.year = body.year || serie.year;
    serie.director = body.director || serie.director;
    serie.type = body.type || serie.type;
    
    res.status(201).send(serie)
  }
  else{
    res.status(404).send("filme não encontrado")
  }
})

// Delete
routes.delete("/movies/:id", (req, res) => {
  let params = req.params;
  
  // Encontrar o índice do filme com base no ID
  const index = catalogo.movies.findIndex((item) => item.id === parseInt(params.id));
  
  if (index !== -1) {
    // Remover o item do array usando o índice
    catalogo.movies.splice(index, 1);
    
    res.status(200).send({ message: "Filme deletado com sucesso" });
  } else {
    res.status(404).send("Filme não encontrado");
  }
});





module.exports = routes;

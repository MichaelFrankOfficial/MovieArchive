var listMovies = document.getElementById("list-movie-button"),
    addMovie = document.getElementById("add-movie"),
    userMovieTitle = document.getElementById("movie-title"),
    userMovieGenre = document.getElementById("movie-genre"),
    userMovieDescription = document.getElementById("movie-description"),
    userMovieSection = document.getElementById("user-movie-sec"),
    printArea = document.getElementById("print-area");

var movies = [];

var Movie = function Movie(movieName, movieGenre, movieDescription){
    this.movieName = movieName;
    this.movieGenre = movieGenre;
    this.movieDescription = movieDescription;
    this.getFormat = function getFormat(){
        return "Movie Title : " + movieName + "<br>" + "Genre : " + movieGenre + "<br>" + "Details: " + "<br>" + movieDescription; 
    }
}
var userMovies = function userMovies(){
    movieName = userMovieTitle.value;
    movieGenre = userMovieGenre.value;
    movieDescription = userMovieDescription.value;
    return new Movie(movieName, movieGenre, movieDescription);
}

addMovie = addMovie.addEventListener("click", function(){
    movieName = userMovieTitle;
    movieGenre = userMovieGenre;
    movieDescription = userMovieDescription;
    return new Movie(movieName, movieGenre, movieDescription);
});

var renderMovies = function renderMovies(){
    printArea.innerText="";
    for(var i = 0; i < movies.length;i++){

    }
}

listMovies = listMovies.addEventListener("click", function(){
    printArea.innerText = movies[i];
});

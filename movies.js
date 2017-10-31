var listMovies = document.getElementById("list-movie-button"),
    addMovie = document.getElementById("add-movie"),
    userMovieTitle = document.getElementById("movie-title"),
    userMovieGenre = document.getElementById("movie-genre"),
    userMovieDescription = document.getElementById("movie-description"),
    userMovieSection = document.getElementById("user-movie-sec"),
    confirmationBox = document.getElementById("confirmation-box"),
    printArea = document.getElementById("print-area");


var movies = [];

var Movie = function Movie(movieName, movieGenre, movieDescription){
    this.movieName = movieName;
    this.movieGenre = movieGenre;
    this.movieDescription = movieDescription;
    this.getFormat = function getFormat(){
        return "<p>Movie Title : " + movieName + "<br>" + "Genre : " + movieGenre + "<br>" + "Details: " + "<br>" + movieDescription + "</p>"; 
    }
}

addMovie = addMovie.addEventListener("click", function(){
    var newMovie = new Movie(userMovieTitle.value, userMovieGenre.value, userMovieDescription.value);
    movies.push(newMovie);
    confirmationBox.innerHTML = "<p><strong>" + userMovieTitle.value + " Has Been Added To List!</strong></p>";
    userMovieTitle.value = "";
    userMovieGenre.value = "";
    userMovieDescription.value = "";
});

var renderMovies = function renderMovies(){
    printArea.innerText="";
    for(var i = 0; i < movies.length;i++){
        printArea.innerHTML += movies[i].getFormat();
    }
}

listMovies = listMovies.addEventListener("click", function(){
    renderMovies();
    confirmationBox.innerHTML = "";
});

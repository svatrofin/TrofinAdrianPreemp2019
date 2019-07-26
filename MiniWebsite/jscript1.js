async function getMovies() {
    let movieId = window.location.search;
    let rawResponse = await fetch('https://swapi.co/api/films/');
    let response = await rawResponse.json();
    console.log(response);
    let firstinfo = response.results;

    for (let i=0;i<firstinfo.length;i++)
    {
        console.log(response.title)
    }


    let moviesId = idtonumber(movieId);
    console.log(moviesId)
}
getMovies();

function idtonumber(movieId){

     movieId = movieId.replace( /^\D+/g, '');
    return movieId;


}

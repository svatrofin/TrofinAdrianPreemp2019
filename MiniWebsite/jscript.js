// async function showMovies() {
//     let response = await fetch('https://swapi.co/api/films/');
//     let user = await response.json();
// 
//     for (let i=0;i<response.count[i];i++){
//         console.log(response.count)
//     }
// 
//     let movieResponse = await fetch(`https://swapi.co/api/films/${response.count}`);
//     let movieUser = await movieResponse.json();
// 
// 
//     return user;
// }
//     showMovies();


// var request = new XMLHttpRequest()
// 
// request.open('GET','https://swapi.co/api/films/',true)
// 
// request.onload = function() {
// 
//     var data = JSON.parse(this.response)
// 
//     data.forEach(movie =>{
//         console.log(movie.title)
//     })
// }
// request.send()

// fetch('https://swapi.co/api/films/')
// .then(function(response){
//     return response.json();
// })
// .then(function (data) {
//     appendData(data);
// })
// .catch(function (err) {
//     console.log('error: ' + err);
// });
// function appendData(data) {
// var mainContainer = document.getElementById("myTitle");
// for (var i = 0; i < data.length; i++) {
//     var div = document.createElement("div");
//     div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
//     mainContainer.appendChild(div);
// }
// }
async function getMovies() {

    let rawResponse = await fetch('https://swapi.co/api/films/');
    let response = await rawResponse.json();
    // await console.log(response);
    for await (let movie of response.results) {
        var uri = document.createElement("a");
        let node = document.createTextNode(`${ movie.title }`);
        uri.appendChild(node);
        document.body.appendChild(uri);
        uri.setAttribute("href", `moviesdetails.html?id=${ movie.episode_id }`);
        uri.setAttribute("class", "block-class");
    }
}
getMovies();
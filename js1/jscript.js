//var promise = new Promise(function(resolve,reject){
//    resolve(1);
//});
//promise.then(
//    function(val){
//        console.log(val);
//    return val +2;
//}
//).then(
//    function(val){console.log(val);}
//)
//
//
//
//
//const getFirstUserData = async() => {
//
//let response= await fetch('https://my-json-server.typicode.com/typicode/demo/comments')
//let comments= await response.json();
//let firstComment= comments[0];
//
//let commentData= await fetch(`https:///my-json-server.typicode.com/typicode/demo/comments/${firstComment.id}`)
//let parsedComment=await commentData.json();
//
//console.log(parsedComment);
//return parsedComment;
//    
//}
//getFirstUserData().catch;


const getNameData = async () => {

    const response = await fetch('https://pokeapi.co/api/v2/pokedex/1/')
    const something = await response.json();
    const firstComment = something.pokemon_entries;

   for (let i=0;i<something.pokemon_entries.length;i++)
    {
        console.log(something.pokemon_entries)
    }

    let commentData = await fetch(`https://pokeapi.co/api/v2/pokedex/1/${name}`)
    let parsedComment = await commentData.json();

    await console.log(firstComment);
    return parsedComment;
    
}

getNameData();
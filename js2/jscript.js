

// function outerFunction(){
//     let somevar = "something";
//     console.log('called from out' +somevar);
// 
//     function innerFunction(){
//         somevar= "inner";
//     console.log('call from inside' +somevar);
// 
//     }
// 
//     innerFunction();
//     console.log('called from inside' +somevar);
// }
// outerFunction();



 // console.log(b);
 // 
 // var a;
 // var b;
 // 
 // a=10000;
 // b=69;



// function sumClosure(a){
//     return function closureSum(b){
//         console.log(a+b);
//     }
// }
// sumClosure(6)(10);

 // let NameAgeArr= [
 // {
 //     name:"Adrian",
 //     age:25
 // },
 // 
 // {
 // 
 //     name:"Adrian",
 //     age:25
 // },
 // 
 // {
 // 
 //     name:"Adrian",
 //     age:25
 // },
 // 
 // {
 // 
 //     name:"Adrian",
 //     age:25
 // },
 // 
 // {
 // 
 //     name:"Adrian",
 //     age:25
 // },
 // 
 // {
 // 
 //     name:"Adrian",
 //     age:25
 // },
 // 
 // {
 // 
 //     name:"Adrian",
 //     age:25
 // },
 // 
 // {
 // 
 //     name:"Adrian",
 //     age:25
 // },
 // 
 // {
 // 
 //     name:"Adrian",
 //     age:25
 // },
 // 
 // {
 // 
 //     name:"Adrian",
 //     age:26
 // }]
 // 
 // function average(input){
// 
 //     let sum = 0;
// 
// input.forEach(element => {
 //    sum = sum+input[0].age
// );
// 
 //     // for (let i=0;i<NameAgeArr.length;i++){
 //        // sum = sum + input[i].age
 //     //}
 //     return sum/input.length;
 // }
 // 
 // console.log(average(NameAgeArr));


// 
// let personobj=[
// {
//     name:"a",
//     age:25,
//     id:1,
//     fullName: function(name){
// 
//         return this.name;
//        }
// 
// },
// {
//     name:"b",
//     age:25,
//     id:2,
//     fullName: function(name){
// 
//      return this.name;
//     }
// },
// {
//     name:"c",
//     age:25,
//     id:3,
//     fullName: function(name){
// 
//         return this.name;
//        }
// }]
// 
// 
// personobj.forEach(element => {
//     console.log(element.fullName());
//     
// });




let calculator = {
    
read : function () {
    this.nr1 = prompt("enter first number");
    console.log(this.nr1);


    this.nr2 = prompt("enter second number");
    console.log(this.nr2);
},
    sum : function() {
        return parseInt(this.nr1)+parseInt(this.nr2);
    }
    

}

calculator.read();
alert (calculator.sum());





    


 


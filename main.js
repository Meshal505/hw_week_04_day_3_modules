

// function sayHello(name){
//     console.log(`Hi, ${name}!`)
// }
//first task
let sayHello =( name1) => `Hi , ${name1}`

console.log(sayHello("meshal"));
//second task
var getOlder = (age) => {
   
    return age+50
}
console.log(getOlder(11));

//debugging 

const multiply = (num1, num2) => console.log(num1 * num2); 
multiply(2,2);

const subtractFive = (num) => {
    num = num - 5; 
    console.log(num);}
    subtractFive(10);


const printName = function(name) {
    console.log(name);}
    printName("Mescal");

    module.exports = {
        funSayHi: sayHello,
        funAge: getOlder
    }

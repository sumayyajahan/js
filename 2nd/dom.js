Array.prototype.myPush = function(...a){
   this.push(a[0]);
   init();
}

const display = document.getElementById("fruits");
const button = document.querySelector("#button");

let fruits = ['mango', 'guava', 'apple', 'orange'];

const init = function(){
    
}
// let number = 0;

// const button = document.querySelector("#button");
// const display = document.querySelector("#display");

// button.addEventListener("click", ()=>{
//     number++;

//     display.textContent = number;
// });

// for(let ele of document.all){
//     console.log(ele);
// }

//console.log(document.links);
// console.log(document.getElementById('button'));

// let headerEle = document.getElementById('header');
//headerEle.textContent = 'Tumi';
//headerEle.innerText = 'Sumi';
//headerEle.innerHTML = 'Sumi';

// headerEle.style.fontSize = '50px';

// console.log(headerEle.textContent)
// console.log(headerEle.innerText)
// console.log(headerEle.innerHTML)

// console.dir(headerEle)

// let items = document.getElementsByClassName("item");
// items.style.color = 'red';

// for(let i=0; i < items.length; i++){
//    items[i].style.color = 'red';
// }

//let lastItems = document.querySelectorAll('.item:last-child');

// for(let item of lastItems){
//     item.style.color = 'red';
// }

//lastItem.style.color = 'red';

//let itemLi = document.querySelector('#main').querySelector('.item:nth-child(3)');
// let itemLi = document.querySelectorAll('.item:nth-child(3)');

// for(let k of itemLi){
//     k.style.color = 'red';
// }
//itemLi.style.color = 'red';
//const divStart = document.querySelector('.start');
//const ul = divStart.children;
//const li = ul[0].children;
//const li = divStart.querySelectorAll('.item');

// const child = document.querySelector('.item');
// const parent = child.parentElement;

// console.log(parent);
//console.log(li);

const divEle = document.createElement('div');
//console.dir(divEle);

divEle.className = 'red';

divEle.setAttribute('id', 'red');
divEle.setAttribute('title', 'Red Div');

const container = document.querySelector('.row');
//const h1 = container.querySelector('#header');

//container.insertBefore(divEle, h1);

//container.appendChild(divEle);

//const a = container.append("Hello World");
//const a = container.appendChild(divEle);
//const b = container.append(divEle, document.createElement('p'), 'Hello World');

//const b = container.appendChild(divEle, document.createElement('p'), 'Hello World');
//console.log(b);
//console.log(a);

// const headerElement = document.querySelector('.colorHeader');

// headerElement.addEventListener('mousemove', (event)=>{
//     console.log(event);
// });

const formElement = document.querySelector('form');
const inputElement = document.querySelector('input[type="text"]')

inputElement.addEventListener('keydown', (event)=>{
    //event.preventDefault();
    console.log(event.target.value);
});




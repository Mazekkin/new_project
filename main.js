/*function foo(b) {
    const a = 15;
    return a + b + 10;
}

function bar(x) {
    const y = 3;
    return foo(x*y);
}

const baz = bar(7);*/

/*
setTimeout(()=>{
    console.log("write massage 1")
});

setTimeout(()=>{
    console.log("write massage 2")
}, 3000);

setTimeout(()=>{
    console.log("write massage 3")
}, 1000);

let a = 5;

console.log(a);


let myPromise = new Promise(function(myResolve, myReject){    
    let x = 0;
    if (x===0){
        myResolve("done");
    }else{
        myReject("error");
    }
});

myPromise.then(
    console.log(myResolve, myReject)
);*/


/*setTimeout(()=>{
    console.log("Hello user");
  }, 0)

setTimeout(()=>{
    console.log("Hello another user");
  },0)

document.addEventListener("click",()=>{
    console.log("click");
});

let start = new Date().getTime();
let end = start;

while(end<start+3000){
    end = new Date().getTime();
}

console.log("This is a text from console");*/

/*Задача №1
  function NumFunc() { //назва функції
    let n = 1; //початкове число
    let numbers = setTimeout(function a() {   
        console.log(n); 
        if (n < 20) setTimeout(a, 100);
        n++;        
      }, 100);
    }
    
    NumFunc(); //виклик функції
/*Задача №1*/

/*Задача №2
function search(e) {
	let searched = document.getElementById("search").value.trim();
  if (searched !== "") {
  	let text = document.getElementById("sometext").innerHTML;
  	let repl = new RegExp(searched,"g"); // search for all instances
		let newText = text.replace(repl, `<mark>${searched}</mark>`);
		document.getElementById("sometext").innerHTML = newText;
  }
}

function highlight(text) {
    var inputText = document.getElementById("someText");
    var innerHTML = inputText.innerHTML;
    var index = innerHTML.indexOf(text);
    if (index >= 0) { 
     innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
     inputText.innerHTML = innerHTML;
    }
  };
/*
let timer = setInterval (function highlight('fox') {
    if (text) highlight();
    else clearInterval(timer);
    }, 10);*/
/*Задача №2*/

/*Задача №3
console.log('start');

const promise1 = new Promise((resolve, reject)=>{
    console.log(1);
    });

console.log('end');
/*Задача №3*/

/*Задача №4
   console.log("start");

   const promise2 = new Promise((resolve,regect)=>{
    console.log(1)
    resolve(2)
   });

   promise2.then(res=>{
    console.log(res)
   });

   console.log('end');
/*Задача №4*/



/*Объекты 28.04.2023*/
let car = {
    color: 'red',
    size: 1000,
    work: false,
    year: 1997
};
console.log(car.color);

/*HTML - id*/
let text = document.getElementById('text'); 
console.log(text);

let block = document.querySelectorAll('.block');
console.log(block);


/*setTimeout*/
// let i = 0;
// let j = 1;
// //setTimeout(()=>(i),100);
// setTimeout(()=>console.log(i),100);
// for(let j=0; j<1000; j++){
//     i++;
// }

/*
let start = Date.now();
let times = [];
setTimeout(function run(){
    times.push(Date.now() - start);
    if(start+100<Date.now()) alert(times);
    else setTimeout(run);
}, 100);*/

/*
const timeoutId = setTimeout(function(){
    console.log("Hello World");
},2000);
clearTimeout(timeoutId);
console.log(`TimeoutId ${timeoutId} has been cleared`);


function greeting(name, role){
    console.log(`Hello my name is ${name}`)
    console.log(`I am ${role}`)
};

setTimeout(greeting,3000, 'Olga', 'Software Engineer');*/

/*
setTimeout(function() {
	console.log('delayed play for 1 second');
}, 5000);


const Array = ['zero', 'one', 'two', 'three'];

Array.reverse = function(sProperty){
    console.log(arguments.length>0 ?this[sProperty] :this);
}
Array.reverse();
*/

/*
let last = 0;
let iterations = 10;

function timeout() {
  // записываем время этого вызова
  logline(new Date().getMilliseconds());

  // если мы не закончили, планируем следующий звонок
  if (iterations-- > 0) {
    setTimeout(timeout, 0);
  }
}

function run() {
  // очищаем журнал
  const log = document.querySelector("#log");
  while (log.lastElementChild) {
    log.removeChild(log.lastElementChild);
  }

  // инициализируем счетчик итераций и начальную временную метку
  iterations = 10;
  last = new Date().getMilliseconds();

  // запускаем таймер
  setTimeout(timeout, 0);
}

function pad(number) {
  return number.toString().padStart(3, "0");
}

function logline(now) {
  // записываем последнюю метку времени, новую метку времени и разницу
  const newLine = document.createElement("pre");
  newLine.textContent = `${pad(last)}${pad(now)}${now - last}`;
  document.getElementById("log").appendChild(newLine);
  last = now;
}

document.querySelector("#run").addEventListener("click", run);
*/


let last = 0;
let iterations = 10;
function timeout(){
    logline(new Date().getMilliseconds());

    if (iterations-- >0){
        setTimeout(timeout, 0);
    }
};

function run(){
    const log = document.querySelector("#log");
    while(log.lastElementChild){
        log.removeChild(log.lastElementChild);
    };

iterations = 10;
last = new Date().getMilliseconds();
setTimeout(timeout,0);

function logline(now){
const tableBody = document.getElementById("log");
const logRow = tableBody.insertRow();
logRow.insertCell().textContent = last;
logRow.insertCell().textContent = now;
}

};

document.querySelector("#run").addEventListener("click", run);

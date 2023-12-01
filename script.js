//variable,constant and comments
// var a=10;
// var a=20;
// console.log(a);
//can be redeclared and re assigned as well
 
// let b=10;
// console.log(b);
//can be re assigned but cant be re declared 

// const c=10;
// console.log(c);
//cant be re assigned or redeclared;

//Data types;
//number 1,2,3,1.1,1.23 etc any number not like int float

//String "Rishabh",'sahani'

//Boolean True/False;

// let string="Rish abh";
// let arr=string.split(' ');

// let s="Sah ani";
// let arr1=s.split(' ');

// const res=arr.concat(arr1);
// res.push("king")


// for(let i=0;i<res.length;i++){
//     console.log(res[i]);
// }
// for(let a=0;a<=10;a++){
//     if(a==3)
//     continue;
//     else{
//     console.log(a);
// }
// }

// function a(b){
//     return b();
// }
// function b(){
// console.log("Kya be");
// }
// let res=document.querySelectorAll('p')
// //res.textContent="Namaste"
// console.log(res)
// res.forEach(elements=>{
//     console.log(elements);
// })
// let a=document.getElementsByTagName('p');
// console.log(a);
// a.forEach(element => {
//     console.log(element)
// });

// let r=document.querySelector('#coder')
// console.log(r);
// let a=document.getElementsByTagName('p');
// console.log(p);
// let a=document.querySelector('a');
// console.log(a.href)
// a.setAttribute("href","google.com")
// console.log(a.href)
 
//let x=document.querySelector('#one');
 //x.classList.remove("hello")
// console.log(a.className);

// function css(){
    

// let a=document.querySelector('h1');
// a.classList.replace("hello",'none')
// console.log(a.className)
// }

// let element=document.querySelectorAll('li');
// element.forEach(function(element){
//     element.addEventListener('click',function(e){
//         console.log(e.target)
//        // e.target.style.textDecoration="line-through"
// e.target.remove();
//     })
// })



// function css(){
// let task=document.getElementById("input").value;

// let add=document.querySelector('ul');
// let item=document.createElement('li');
// item.innerText=task;
// let b=document.createElement('button');
// b.classList.add("button");
// b.innerHTML="Done"
// item.appendChild(b);
// add.append(item)
// b.addEventListener('click',function(){
//     item.remove();
    
// })

// }
// const rem=document.querySelector('ul');
// rem.addEventListener("click",function(e){
    
//     if(e.target.nodeName=="LI"){
//         e.target.remove();
//     }
// })
// let arr=[2,4,-1,4,9,0,-99];
// arr.sort((a,b)=>{
//     return a-b;
// })
// console.log(arr);


// let newArr=arr.filter(e=>{
//     if(e%2==0){
//     return e;
//      }
// })
// let a=arr.reduce(function(sum,num){
//    return  sum=sum+num;
// });
// console.log(a);
//  let date=new Date();
// console.log(date.getMonth());

// localStorage.setItem('name','Rishabh');
// localStorage.setItem('hobby','coding');
// console.log(localStorage);
// let vehicles=[
//     {
//         company:"Mercedez",
//         price:"30 Lakh"
//     }
//     ,
//     {
//         company:"BMW",
//         price:"40 Lakh"
//     }
// ]

// let string=JSON.stringify(vehicles);
// localStorage.setItem("vehicle",string);



// let a=localStorage.getItem("vehicle")
// let b=JSON.parse(a);
// b.map(e=>{
//     console.log(e.company);
// })
//let obj=[{name:"Rishabh",course:"Btech"},{name:"Gaurav",course:"B.Pharama"},{name:"Umang",course:"PolyTechnique"}]

// let b=JSON.stringify(obj);
// localStorage.setItem("student",b);
// sessionStorage.setItem("st",b);
// let item=JSON.parse(localStorage.getItem("student"));
// var m=1;
// function content(){
    
// item.map(e=>{
//     let element=document.getElementById("box");
//     let x=document.createElement("div");
//     x.classList.add("div");
//     console.log(e.name)
//     x.innerText=e.name+" "+e.course;
//     m++;
//     element.append(x);
// })
//}

// class Car{
//     constructor(color,model){
//         this.color=color;
//         this.model=model;
//     }
//     startEngine(){
//         console.log("Hello")
//     }
//     set fun(color){
//         this.color=color;
//     }
//     get fun(){
//         console.log("Hi");
//     }
// }
// class Bike extends Car{
//     constructor(color,model,engine){
//        super(color,model);
//         this.engine=engine;

//     }
// }

// let a = new Bike("Red",2002,'125cc');

// console.log(a,new Car);
// a.fun="white"
// console.log(a);

//a.startEngine()
//Asynchronous Java Script
// console.log("Hello");
// setTimeout(()=>{
//     console.log("Call Back");
// },100);
// console.log("End");

//Making HTTP Request
//Using CallBack
// let todos=(callback)=>{
// let request=new XMLHttpRequest();

// request.open("Get","https://jsonplaceholder.typicode.com/todos")

// request.send()
// request.addEventListener("readystatechange",()=>{
//     if(request.readyState==4&&request.status==200){
//         callback(undefined,request.responseText);  
//     }
//     else if (request.readyState==4){
//         callback("Unable to fetch data",undefined)
//     }
//   })
// }
// todos((error,data)=>{
//     if(error){
//         console.log(error);
//     }
//     else {
//         console.log(data)
//     }
// })

//Using Promise Function
// let todos=()=>{
// return new Promise((resolve,reject)=>{
//     let request=new XMLHttpRequest();

// request.open("Get","db.json")

// request.send()
// request.addEventListener("readystatechange",()=>{
//     if(request.readyState==4&&request.status==200){
//         let data=request.responseText;
//        resolve(data)
//     }
//     else if (request.readyState==4){
//        reject("Not fetching");
//     }
// }
// )
// }
// )
// }
// todos().then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error);
// })

// fetch("db.json").then((response)=>{
//    return response.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// let todo = async()=>{
//     let a=await fetch("db.json")
//     let b=a.json();
//     return b;
// }

// todo().then((data)=>{
//     data.forEach(element => {
//        console.log(element.name);
//     });
// })
// .catch((error)=>{
//     console.log(error)
// })
// let obj={
//     name:'Rishabh',
//     age:'25',
//     result:['pass','promoted','fail']
// }
// let [first,,third]=obj.result;
// console.log(first,third);
//Array destructuring
//let set=new Set();
//let map=new Map();
//Javacript learning over
//Now get on to the React JS
// let set=new Set()
// set.add(1);
// set.add(5);
// set.add(5);
// set.add(2);
// console.log(set);
// let obj=[{name:'Rishabh',result:"Pass"},
// {name:"Gaurav",result:'pass'},
// {name:'k',result:'fail'}]
// let n=1;
// obj.map((elemnt)=>{
//     let m=document.querySelector('.tb')
//     let tr=document.createElement('tr')
//     let k=document.createElement('td')
//     k.innerText=n;
//     tr.append(k);
//     n++;
//     let td=document.createElement('td')
//     td.innerHTML=elemnt.name;
//     tr.append(td);
//     let td1=document.createElement('td')
//     td1.innerHTML=elemnt.result;
//     tr.append(td1);
//     m.append(tr);
// })




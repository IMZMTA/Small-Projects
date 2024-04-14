let range=prompt("Enter the max range");

const random=Math.ceil(Math.random()*range);
console.log(random);

let guess=prompt("Enter guessing number");

while(true){
    if(guess=='quit'){
        console.log('User quit');
        break;
    }
    if(guess==random){
        console.log("Congrats! You are able to guess the correct number");
        break;
    }
    else if(guess>random){
        guess=prompt(`Guess number is large.\nHint :  Try small number than previous\nOR\nType 'quit' to exit`);
    }
    else{
        guess=prompt(`Guess number is small.\nHint :  Try large number than previous \nOR\n Type 'quit' to exit`);
    }
}

//-----//

// let sum = function(a,b){
//     return a+b;
// };

// sum(4,5);

//---------//

// function Big(fun,count){
//     for(let i=1;i<=count;i++){
//         fun();
//     }
// }

// function Small(){
//     console.log("High order Function");
// }

// Big(Small,10);

//-----//

//Methods
// const meth ={
//     num: 60,
//     add:function(a,b){
//         return a+b;
//     },
//     sub:function(a,b){
//         return a-b;
//     },
//     mul:function(a,b){
//         return a*b;
//     },
//     quot:function(a,b){
//         return a/b;
//     }
// };

//OR//

// const meth ={
//     num: 60,
//     add(a,b){
//         return a+b;
//     },
//     sub(a,b){
//         return a-b;
//     },
//     mul(a,b){
//         return a*b;
//     },
//     quot(a,b){
//         return a/b;
//     }
// };

// //meth["num"]=70;
// meth.num=70
// let v=meth["num"];
// console.log(v);

// console.log(meth.num);
// console.log(meth.sub(3,4));

//----//

// const meth ={
//         num: 60,
//         bum:90,
//         add(a,b){
//             return a+b;
//         },
//         sub(a,b){
//             return a-b;
//         },
//         mul(a,b){
//             return a*b;
//         },
//         quot(a,b){
//             return a/b;
//         },
//         getavg(){
//             let avg=(meth.num+meth.bum)/2;
//             return avg;
//         }
//     };

//---//
//Arrow Function

// try{

// let cube = n =>{
//     console.log("Cube");
//     return n*n*n;
// };

// let sum = (a,b) =>{
//     console.log("Sum");
//     return a+b;
// };

// let print = () =>{
//     console.log("Hello Arrow Function");
// };

// cube(13);
// sum(2,8);
// print(3);

// const cube1 = (a,b) => (
//     a+b
// );

// cube(4);
// cube1(5);

// } catch(e){
//     console.log(e);
// }

// const guess=prompt("Enter your name");

// console.log("Hi there");

// setTimeout(()=>{
//     console.log(guess);
// },4000);

// setInterval(()=>{
//     console.log(guess);
// },2000);

// console.log("Welcome To");

//---//
//This with Arrow Function

// const student={
//     name:"Aadil",
//     marks:99,
//     prop:this, //global scope
//     getName: function(){
//         console.log(this);
//         return this.name;
//     },
//     getMarks:()=>{
//         console.log(this);//parent's scope -> window
//         return this.marks;
//     },
//     getInfo1:function(){
//         setTimeout(()=>{
//         console.log(this);//student arrow sees parent object i.e lexical scope
//         },2000);
//     },
//     getInfo2:function(){
//         setTimeout(function(){
//         console.log(this);//window
//         },2000);
//     },
// }


//Array Methods
// let arr=[1,2,3,4,5];

// arr.forEach((el)=>{ 
//     console.log(el);
// })
// console.log("\n");

// let ar=arr.map((el)=>(el*2));
// ar.forEach((el)=>{
//     console.log(el);
// })

// let a=arr.filter((el)=>(el%2==0));
// let b=arr.filter((el)=>(!(el%2==0)));
// console.log(a);
// console.log(b);

// let evr=arr.every((el)=>(el>=1));
// console.log(evr); //true

// let som=arr.some((el)=>(el<=1));
// console.log(som); //true

// let red=arr.reduce((acc,el)=>(acc+el));
// console.log(red);
// let redu=arr.reduce((acc,el)=>(acc*el));
// console.log(redu);

// let max=arr.reduce((acc,el)=>{
//     return acc>el ? acc : el;
// });
// console.log(max);

// console.log(...arr); //=>spread iterate through each element

// // const w=[[2,3],[4,5]];
// // console.log(w);


// // w[2]=10;
// // console.log(w);

// for(w of arr){
//     console.log(w);
// }


//CU
//--> mca,bca,bsc,b.tech,
//----->  mca--->
//          mca1,mca2,mca3
//-------------function mca1(){
    //           this----->mca,bca,bsc,b.tech,
// }
// ------------mca1()=>{
    //       this---->mca1,mca2,mca3
//}


//---spread and rest--//

// let arr=[1,2,3,4,5];
// let ar=[6,7,8,9,10];

// let nums=[...arr,...ar];
// console.log(...nums);

// let data ={
//     email:"mta@gmail.com",
//     password:"abcd",
// };

// const cnums={...nums};

// const copydata={
//     ...data,
//     id:123,
//     ...nums,
// }

// console.log(copydata.nums);

// function sum(...arg){   //rest---->opposite of spread
//     for(let i=0;i<arg.length;i++){
//         console.log("You gave us : "+arg[i]);
//     }
//     console.log(arg);
// }

// function sum(...args){
//     return args.reduce((acc,el)=>acc+el);
// }

// function min(msg,...args){
//     console.log(msg);
//     return args.reduce((a,el)=>a<el?a:el);
// }

//destructuring
// let names=[1,2,3,4,5,6,7];

// let [a0,y,z,...c]=names;//destruct

// let stud={
//     name:"shoeb",
//     pass:"xyz",
//     class:23,
//     sex:"yes",
//     city:"Delhi",
// };
// stud.sex="y";
// let {pass,sex="n0",city="Odisha",...x}=stud;

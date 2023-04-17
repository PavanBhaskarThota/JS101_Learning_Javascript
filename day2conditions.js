// day2

//Problem 1



let num = 133;

if (num%3===0)
  console.log("multiple of 3");
else
  console.log("No");


// Problem 2


let age = 11;

if (age>18)
 console.log("Apply for license");
else 
 console.log("NA");


// Problem 3


let a = 5 ;
let b = 5 ;


if (a>b)
 console.log(a,"is Greater ");
else if (b>a)
  console.log(b,"is Greater");
else 
  console.log("both are Equal");


// Problem 4



let signup_username = "Naruto";
let signup_password = "Hinata";


let username = "naruto";
let password = "Hinata";

if (signup_username == username){
    if(signup_password == password){
      console.log("loged in");
    }
  else{
    console.log("please check your password");
  }
}
else{
  console.log("User name does not exist");
}



// Problem 5



let birthYear = 2008;

let presentYear = 2023;

let age = presentYear-birthYear;

console.log(age);

if ( (age>13) && (age<19) ){
  console.log("Teenage");
}
else if( (age>20) && (age<29) ){
  console.log("Twenties");
}


//problem 6



let num1 = 12;
let num2 = 23;
let num3 = 3;


if((num1>num2) && (num1>num3)){
    console.log(num1,"is Greater");
}
 else if ((num2>num1) && (num2>num3)){
   console.log(num2,"is Greater");
 }   
  else {
    console.log(num3,"is Greater");
  }

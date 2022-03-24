function sum(x,y){
    var res=0;
    res=x+y
    console.log(res);
return res;

}
function FullName(firstname, middlename, lastname) {
  var firstname = prompt('Enter the first name ');
  var middlename =prompt('Enter the midell name ');
  var lastname =prompt('Enter the last name ');
     if (firstname != undefined && lastname != undefined && middlename != undefined)
         console.log(`Name: ${firstname} ${middlename} ${lastname}`);
     if (firstname != undefined && middlename != undefined)
         console.log(`Name: ${firstname} ${middlename}`);
     if (firstname != undefined)
         console.log(`Name: ${firstname}`);
 }
 
 
 function fact(){
    var i,fact=1;  
  var number=5;   
  for(i=1;i<=number;i++){    
      fact=fact*i;    
  }    
  console.log(fact);
}



function Operation(operator, num1, num2) {
var operator = parseInt(prompt('Enter the operator '));
var num1 = parseInt(prompt('Enter the first number '));
var num2 = parseInt(prompt('Enter the second number '));
var res;
if (operator = undefined && operator =="+") {res=num1+num2
console.log(res);
return num1+num2;

}
}
function Operation(operator,number1,number2){
var operator = prompt('Enter the operator');
var number1 = parseFloat(prompt('Enter first number: '));
var number2 = parseFloat(prompt('Enter second number: '));
var result;
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}
alert(console.log(`${number1} ${operator} ${number2} = ${result}`));
}

function Degree(){
var msg = prompt('enter the percentage of student:');
var res = msg;
if(res>85){
     console.log("Excellent");}
else if(res<=85 && res>75)
    {
        console.log("Very good");}
else if(res>75 && res<=65){
        console.log("Good");}
else if(res>65 && res<=50)
    {
        console.log("accepted");}
else if(res<50)
    {
        console.log("failed");}
else 
        console.log("enter positive number");
    }
    x=10;
    var x=70;
    function Test(x,y) {
        console.log("Scope1 before intializton", x);
        console.log("Scope1 before intializton", y);
        x=50;
        var x = 20;
        var y= 30;
        console.log("after intializton", x);
    }
    console.log("Scope1 before intializton", x);


    function ReturrnCode(){
    var Str= new String("my name is ahmed");
    console.log(Str.charCodeAt(0));
    }


      function TheLongestWord(str) {
        var strSplit = str.split(" ");
        var resultt;
        var i;
        for( i = 0; i < strSplit.length; i++){
          if(strSplit[i].length > resultt){
            
           }
           return strSplit[i];
        }
        
      
      }

      function uniqueChar(str1)
{
 var str=str1;
 var res="";
 for (var i=0;i < str.length;i++)
 {
 if(res.indexOf(str.charAt(i))==-1)
  {
  res += str[i];  
   }
  }
  return res;  
}
document.write("<h1>Heading </h1><Hr></hr>");
var x = prompt("enter your massage");
for(var num = 1; num < 6; num++) {
    document.write("<h"+num+">" + x + "</h"+num+">");
  }


 function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

  

      
      
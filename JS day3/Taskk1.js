var NewArray = [];
        var size = 5; 

        for(var i=0; i<size; i++) {
	

	NewArray[i] = prompt('Enter Element ' + (i+1));
}
document.write("<h1>Sorting </h1><Hr></hr>");
document.write("<h2>you have enter the value is" + (eval (NewArray)));

NewArray.sort(function (a, b) {
     if (a < b)
        return -1;
    else if (a > b)
        return 1;
     else 0;
    return a - b;
});
console.table(NewArray);
document.write("<h2>your Value after being sorted des" + (eval (NewArray)));
NewArray.sort(function (a, b) {
    if (a < b)
       return 1;
   else if (a > b)
       return -1;
    else 0;
   return a - b;
});
document.write("<h2>your Value after being sorted ase" + (eval (NewArray)));
console.table(NewArray);
function filterr(NewArray){
    if (NewArray>5)
    return NewArray;
}
var greaterThanFive = NewArray.filter(function(NewArray) {
    return NewArray > 5;
  });
  console.log(greaterThanFive);
  document.write("<h2>your Value after being filtered" + (eval (greaterThanFive)));
  document.write("<h2>The max of the valus" + (eval (Math.max(...NewArray))));
  document.write("<h2>The min of the valus" + (eval (Math.min(...NewArray))));
  var RemoveDuplicat = [...new Set(NewArray)];

console.log(RemoveDuplicat);
document.write("<h2>your Value after remove duplicat" + (eval (RemoveDuplicat)));
document.write("<h2>your Value after concatenat value"+ NewArray.join('*'));
var _MyDate=new Date();
console.log(_MyDate);
alert(_MyDate.getMonth());
alert(_MyDate.getDate());





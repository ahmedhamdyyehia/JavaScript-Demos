        var NewArray = [];
        var size = 3; 

        for(var i=0; i<size; i++) {
	

	NewArray[i] = prompt('Enter Element ' + (i+1));
}
document.write("<h1>Adding-- mul--div 3 value </h1><Hr></hr>");
console.log(NewArray);
 function Summ() {
    var Sum = 0;
    for (var i = 0; i < arguments.length; i++) {
          Sum += arguments[i];
      }
      return Sum;
      
    }
    
    console.log(NewArray);
    document.write( "<h3>sum of tree number is :</h3>" + eval(  NewArray.join("+")));


 function Mulll() {
   Mull = 1;
    for (var i = 0; i < arguments.length; i++) {
          Mull *= arguments[i];
      }
      return Mull;
    }
    console.log(NewArray);
    document.write( "<h3>mul of tree number is :</h3>" + eval( NewArray.join("*")));

    function Division() {
        Div = 1;
         for (var i = 0; i < arguments.length; i++) {
               Div *= arguments[i];
           }
           return Div;
         }
         console.log(NewArray);
         document.write( "<h3>Div of tree number is :</h3>" + eval( NewArray.join("/")));
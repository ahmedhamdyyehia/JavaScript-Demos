
	

length = prompt("Enter the length of array ");
function randomArray(length, max) {
    return Array.apply(null, Array(length)).map(function() {
        return Math.round(Math.random() * max);
    });
}
console.log(randomArray(10,10));



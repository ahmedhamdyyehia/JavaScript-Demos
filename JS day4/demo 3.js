var _Timer;
function StartSlider() {
    //1- get image from html documnte
    //html collection selector 
    console.log(document.images);//Array of html object collection
    _Myimage = document.images[0];//image Object (all attributes at html ===>property )
    //all html attributes trabnsfer at js properties (stter and getter)
    console.log(_Myimage.src);//getter
    var AllImages = ["images/1.jpg", "images/2.jpg"];
    Counter = 0;
    if (!_Timer) {
        _Timer = setInterval(function () {
            Counter++;
            if (Counter > 8) {
                Counter = 1;
            }
            _Myimage.src = `images/${Counter}.jpg`;
        }, 1000);
    }

    //2-change src for this image
    //make this change every scond 
    //get all images 
}

function StopSlider() {
    clearInterval(_Timer);
}
function nextIamge(){
      //html collection selector 
    console.log(document.images);//Array of html object collection
    _Myimage = document.images[0];//image Object (all attributes at html ===>property )
    //all html attributes trabnsfer at js properties (stter and getter)
    console.log(_Myimage.src);//getter
    var AllImages = ["images/1.jpg", "images/2.jpg"];
}
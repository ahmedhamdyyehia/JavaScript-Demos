        var URLData = location.search.split("&");
        var _Data = [];
        for (var i = 0; i < URLData.length; i++) {
            _Data.push(URLData[i].split("=")[1] + " ");
        }
        console.log(_Data);
        document.write(`
        <div style="background-color: lightgreen; color:black;text-align: center;">
        <p>
            Welcome 
            <span style="display: inline-block;">${_Data[0]}</span>
        </p>

    </div>
        `);
   

        function validateform(){  
            var name=document.myform.name.value;  
            var age=document.myform.age.value;  
            var username=document.myform.username.value;
            var emaill=document.myform.emaill.value;  
            var kind=document.myform.kind.value;  
            if (name==null || name==""){  
              alert("please enter name");  
              return false;  
            }
            if (name.length<8){  
                alert("name at least 8 character");  
                log.innerText = "name at least 8 character";
                return false;  
              }
              
            if (username==null || username==""){  
                alert("please enter filter");  
                return false;  
              }
              if (emaill==null || emaill==""){  
                alert("please enter name");  
                return false;  
              }
              
            
             if(age.length>2){  
              alert("age must be at  2 numbers");  
              return false;  
              }  
              
            }  






            
            window.addEventListener("load", function () {

            function Checkchecked() {
                var AllCheck = document.getElementsByName("hoppy");//html Collection
                for (var i = 0; i < AllCheck.length; i++) {
                    if (AllCheck[i].checked == true) {
                        log.innerText = "";
                        break;
                    }
                    else {
                        log.innerText = "plz choose at least one hoppy";
                    }
                }
            }
            keyy.addEventListener("click", Checkchecked);
           _Courses.addEventListener("change", function () {//this ddl
        if (this.selectedIndex == 0) {
            log.innerText = "plz choose ur course";
        }
        else {
            log.innerText = "";
        }
    })
            function Checkchecked() {
                var AllCheck = document.getElementsByName("hoppy");
                for (var i = 0; i < AllCheck.length; i++) {
                    if (AllCheck[i].checked == true) {
                        log.innerText = "";
                        break;
                    }
                    else {
                        log.innerText = "plz choose at least one hoppy";
                    }
                }
            }
            hi.addEventListener("blur", function () {
                if (this.value == "") {
                    log.innerText = "this field is required";
                    this.style.backgroundColor = "red";
                    this.focus();
                }
                else {
                    this.style.backgroundColor = "white";
                    log.innerText = "this field is required";
                }
            })
            
            
            
        




        
      });
   
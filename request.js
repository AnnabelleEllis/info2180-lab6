window.onload = function(){
  
var allDef = document.getElementById("allDef");
var message = document.getElementById("search");
var demo2 = document.getElementById("demo2");

allDef.addEventListener("click",function(){
    console.log(" All Definitions Button CLicked!");
    
    
      var xhttp = new XMLHttpRequest();
       xhttp.open("GET", "request.php?q=&all=true", true);
       
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
             var response = xhttp.responseXML;
             console.log(response);
             
             var storeResults = document.querySelector('#demo2');
             var storeAllDef = response.getElementsByTagName('definition');
            
            var results = document.createElement('ol');
            for(var i = 0; i < storeAllDef.length; i++){
            var defList = document.createElement('li');
            
            console.log(storeAllDef[i]);
            // console.log(storeAllDef[i].childNodes[0]);
            
            var text = document.createTextNode(storeAllDef[i].childNodes[0].nodeValue);
              defList.appendChild(text);
              results.appendChild(defList);
               storeResults.appendChild(results);
            }
        
        }
      };
     
      xhttp.send();
});

message.addEventListener("click", function(e){
    e.preventDefault();
    var textField = document.getElementById("getText").value;
    console.log("Button CLicked!");
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("demo").innerHTML = this.responseText;
        }
      };
      xhttp.open("GET", "request.php?q="+ textField, true);
      xhttp.send();
});

};
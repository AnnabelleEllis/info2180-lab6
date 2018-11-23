window.onload = function(){
  
var allDef = document.getElementById("allDef");
var message = document.getElementById("search");

allDef.addEventListener("click",function(){
    console.log(" All Definitions Button CLicked!");
    
    
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
             var response = xhttp.responseXML;
             var storeResults = document.querySelector('#demo2');
             var storeAllDef = response.getElementsByTagName('definition');
            
            var results = document.createElement('ol');
            allDef.appendChild(storeResults);
            for(var i = 0; i < storeAllDef.length; i++){
            var defList = document.createElement('li');
            var text = document.creatTextNode(storeAllDef[i].children[0].childNode[0].nodeValues);
              defList.appendChild(text);
              results.append(defList);
            }
        
        }
      };
      xhttp.open("GET", "request.php?q=&all=true", true);
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
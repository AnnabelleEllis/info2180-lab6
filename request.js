window.onload = function(){
var message = document.getElementById("search");

message.addEventListener("click", function(e){
    e.preventDefault();
    var textField = document.getElementById("getText").value;
    console.log("Button CLicked!")
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("demo").innerHTML = this.responseText;
        }
      };
      xhttp.open("GET", "request.php?q="+ textField, true);
      xhttp.send();
})

}
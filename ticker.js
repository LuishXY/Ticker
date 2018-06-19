// script goes here

var request = new XMLHttpRequest();
var x = "";
request.open('GET', 'https://wrapapi.com/use/devera2g0/pokernewsdaily/titles/0.0.1?wrapAPIKey=3K63CIKYRlpfuyuoVOcSJgf2tOY5uPxp', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    console.log(request.statusText);
    var myObj = data.data;
    for(var i in myObj.output){
      x+= "&#9671;"+myObj.output[i].title;
    }
    document.getElementById("news").innerHTML = x;
  } else {
    console.log('error');
  }
};

request.send();

function getDocHeight() {
    var D = document;
    return Math.max(
        Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
        Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
        Math.max(D.body.clientHeight, D.documentElement.clientHeight)
    );
  }
//https://gist.github.com/theskumar/3447654/
var cvmodal = document.getElementById("CV");
let screen = document.getElementById("screen");

let btn1 = document.getElementById("box1btn");

const tp = document.getElementById("tp");
var about = document.getElementById("About");
var contact = document.getElementById("Contact_Box");

var topbtn = document.getElementById("topbtn");
var aboutbtn = document.getElementById("aboutbtn");
var contactbtn = document.getElementById("contactbtn");

var winheight = document.body.clientHeight;
var docheight = window.scrollY;

alert(docheight);
var trackLength = docheight - winheight;


if(trackLength < 600){
  topbtn.style.backgroundColor = "rgb(4, 42, 64)";
}
else{
  topbtn.style.backgroundColor = "rgb(5, 68, 103)";
}
//if(trackLength > 600){
//  aboutbtn.style.backgroundColor = "rgb(4, 42, 64)";
//}
//else{
//  aboutbtn.style.backgroundColor = "rgb(5, 68, 103)";
//  
//}


topbtn.onclick = function() {
  tp.scrollIntoView({behavior: "smooth"});
}
aboutbtn.onclick = function() {
  about.scrollIntoView({block: 'start',  behavior: 'smooth'});
}
contactbtn.onclick = function() {
  contact.scrollIntoView({block: 'start',  behavior: 'smooth'});
}


btn1.onclick = function() {
  cvmodal.style.display = "block";
  screen.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == cvmodal) {
        cvmodal.style.display = "none";
        screen.style.display = "none";
    }
}

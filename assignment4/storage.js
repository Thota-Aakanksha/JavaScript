function manageStorage(){
var localButton=document.querySelector('#local');
var localCount=document.querySelector('#localCount');

var sessionButton=document.querySelector('#session');
var sessionCount=document.querySelector('#sessionCount');
  
if(!localStorage.getItem('localScore')){
    localStorage.setItem('localScore',0);
}

if(!sessionStorage.getItem('sessionScore')){
    sessionStorage.setItem('sessionScore',0);
}

localCount.innerHTML = localStorage.getItem('localScore');
sessionCount.innerHTML = sessionStorage.getItem('sessionScore');

localButton.onclick=()=>{
    var currentValue=1+parseInt(localStorage.getItem('localScore'));
    localStorage.setItem('localScore',currentValue);
    localCount.innerHTML=currentValue;
}
sessionButton.onclick=()=>{
    var currentValue=1+parseInt(sessionStorage.getItem('sessionScore'));
    sessionStorage.setItem('sessionScore',currentValue);
    sessionCount.innerHTML=currentValue;
}

window.onstorage=()=>{
    localCount.innerHTML = parseInt(localStorage.getItem('localScore'));
}
}
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function report(){

$("report").click(function(){
var db = firebase.firestore();
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '_' + mm + '_' + yyyy;

document.getElementById("adate").value=today;

const list = document.querySelector('#list');
function render(collection){
     var colid = collection.id;
let li = document.createElement('li');
let li2 = document.createElement('span');

li2.textContent = colid;
li.appendChild(li2);

list.appendChild(li);
 
};


const ref = db.collection("Vehicle_Registration").doc(today);
    ref.getCollections().then(collections => {
        collections.forEach(collection => {
            render(collection);
        })
    })

})
};


module.exports = {
report: report,
};
},{}]},{},[1]);

var count = 9;
var count2= 12;
var count3 = 9;

var countElement = document.querySelector("#likes-counter");
console.log(countElement);

var countElement2 = document.querySelector("#likes-counter-2");
console.log(countElement2);

var countElement =document.querySelector("#likes-counter-3");
console.log(countElement3);

function add1like() {
    console.log(document.querySelector(".likes-counter").innerText);
    count++;
    document.querySelector(".likes-counter").innerText = count + " like(s)";
}

function add1like2() {
    console.log(document.querySelector(".likes-counter-2").innerText);
    count2++;
    document.querySelector(".likes-counter-2").innerText = count2 + " like(s)";
}

function add1like3() {
    console.log(document.querySelector(".likes-counter-3").innerText);
    count3++;
    document.querySelector(".likes-counter-3").innerText = count3 + " like(s)";
}
// fill in javascript code here





document.querySelector("form").addEventListener("submit",myfunction)
function myfunction(event){
    event.preventDefault()
    console.log("inside")
let name=document.querySelector("#name").value
let id= document.querySelector("#employeeID").value
let dept= document.querySelector("#department").value
let ex1= document.querySelector("#exp").value
let email= document.querySelector("#email").value
let mob= document.querySelector("#mbl").value
let rol= document.querySelector("#role").value

let tr= document.createElement("tr")


let td1=document.createElement("td")
td1.innerText=name
let td2=document.createElement("td")
td2.innerText=id
let td3=document.createElement("td")
td3.innerText=dept
let td4=document.createElement("td")
td4.innerText=ex1
let td5=document.createElement("td")
td5.innerHTML=email
let td6=document.createElement("td")
td6.innerText=mob

let td7= document.createElement("td")
if(ex1>5){
    td7.innerText="Seniour"
}
else if(ex1>=2 && ex1<=5){
    td7.innerText="Juniour"
}
else if(ex1<=1){
    td7.innerText="Fresher"
}

let td8=document.createElement("button")
td8.addEventListener("click", delet)
td8.innerText="delet"
function delet(){
    
    event.target.parentNode.remove("tr")
}


tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
document.querySelector("tbody").append(tr)
}

// All the Code for the Rejected page goes here
let selectedstudents=JSON.parse(localStorage.getItem("admission-rejected"))
rejectedstudents.forEach(function(element){

    let tr=document.createElement("tr")

let td1=document.createElement("td")
td1.innerText=element.name

let td2=document.createElement("td")
td2.innerText=element.email

let td3=document.createElement("td")
td3.innerText=element.course

let td4=document.createElement("td")
td4.innerText=element.gender

let td5=document.createElement("td")
td5.innerText=element.phone

tr.append(td1,td2,td3,td4,td5)
document.querySelector("tbody").append(tr)
})
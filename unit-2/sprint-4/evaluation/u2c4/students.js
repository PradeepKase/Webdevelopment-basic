// All the Code for All Students Page Goes Here
let studentarrList=JSON.parse(localStorage.getItem("admission"))
document.querySelector("#filter").addEventListener("change", coursefilter)
function coursefilter(){
    let selected=document.querySelector("#filter").value
    let filteredList=studentarrList.filter(function(element){
        return element.course==selected
    })
    displaycollumn(filteredList)
}


let acceptedarr=JSON.parse(localStorage.getItem("admission-accepted"))||[]
let rejectedarr=JSON.parse(localStorage.getItem("admission-rejected"))||[]
displaycollumn(studentarrList)
function displaycollumn(studentarrList){
    studentarrList.forEach(function(element){
        
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

let td6=document.createElement("td")
td6.innerText="Accept"
td6.addEventListener("click",function(){
    accepted(element)
})

let td7=document.createElement("td")
td7.innerText="Reject"
td7.addEventListener("click",function(){
    rejected(element)
});


tr.append(td1,td2,td3,td4,td5,td6,td7)
document.querySelector("tbody").append(tr)

    
}
)}

function accepted(element){
   localStorage.setItem("admission-accepted",JSON.stringify(acceptedarr))
   console.log(acceptedarr)
   acceptedarr.push(element)
}

function rejected(element){
    localStorage.setItem("admission-rejected",JSON.stringify(rejectedarr))
    console.log(rejectedarr)
    rejectedarr.push(element)
 }
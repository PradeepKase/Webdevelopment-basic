// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit",myfunction)

function myfunction(event){
event.preventDefault()
let avatar= document.querySelector("#image").value
let nam= document.querySelector("#name").value
let batch=document.querySelector("#batch").value
let dsa= document.querySelector("#dsa").value
let skillothon= document.querySelector("#cs").value
let coding=document.querySelector("#coding").value
// console.log(avatar,nam,batch, dsa, skillothon,coding)

let tr= document.createElement("tr")

    let td1= document.createElement("td")
    let td2= document.createElement("td")
    td2.innerText=nam
    let td3= document.createElement("td")
    td3.innerText=batch
    let td4= document.createElement("td")
    td4.innerText=dsa
    let td5= document.createElement("td")
    td5.innerText=skillothon
    let td6= document.createElement("td")
    td6.innerText=coding

    let obtained_score=Number(dsa)+Number(skillothon)+Number(coding)
    
    let percentage=(obtained_score/30)*100
    console.log(percentage)
    let td7= document.createElement("td")
    td7.innerText=percentage.toFixed(3)



    let td8= document.createElement("td")

    if (percentage>50){
        td8.innerText="Regular"
    }
    else{
        td8.innerText="Async"
        td8.style.backgroundColor="red"
    }
    
    let td9= document.createElement("td")
    td9.innerText="DELET"
    td9.style.backgroundColor="teal"
    td9.addEventListener("click", uncut)
    function uncut(){
        event.target.parentNode.remove("tbody>tr>td")
    }
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9)
    document.querySelector("tbody").append(tr)



}
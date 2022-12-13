
document.querySelector("form").addEventListener("submit",myfunction)

let queArr= []

function myfunction(event){
event.preventDefault()
console.log("inside")


let queObj={
    QuestionTitle:document.querySelector("#title").value,  
    QuestionLink:document.querySelector("#link").value,
    QuestionDif:document.querySelector("#difficulty").value
}
queArr.push(queObj)

 display(queArr);
 localStorage.setItem("localquearr",queArr)

}

function display(queArr){
    document.querySelector("tbody").innerHTML=""

    queArr.forEach(function(element){
        tr=document.createElement("tr")
    
    let td1=document.createElement("td")
    td1.innerText=element.QuestionTitle
    
    let td2= document.createElement("td")
    td2.innerText=element.QuestionLink
    
    let  td3= document.createElement("td")
    td3.innerText=element.QuestionDif
    
    let td4= document.createElement("td")
    
    if(td3=="Easy"){
        td4.innerText="No"
    }
    else{
        td4.innerText="Yes"
    }
    
    
    tr.append(td1,td2,td3,td4)
    
        document.querySelector("tbody").append(tr)
    })
}



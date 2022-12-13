document.querySelector("form").addEventListener("submit",myfunction)
function myfunction(event){
   event.preventDefault()
   console.log("inside")
   let name= document.querySelector("#name").value 
   let h1=document.createElement("h1")
    h1.innerText=name
    let age= document.querySelector("#age").value
    let h2=document.createElement("h2")
    h2.innerText=age
    let gender= document.querySelector("#gender").value
    let h3=document.createElement("h3")
    h3.innerText=gender
    let email=document.querySelector("#email").value
    let h4= document.createElement("h4")
    h4.innerText=email
    let number= document.querySelector("#number").value
    let h5=document.createElement("h5")
    h5.innerText=number

    document.querySelector("body").append(h1,h2,h3,h4,h5)
}

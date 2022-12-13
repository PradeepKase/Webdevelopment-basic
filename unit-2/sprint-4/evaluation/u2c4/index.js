// All the JS Code for the Add Students Page Goes Here
document.querySelector("form").addEventListener("submit",myfunction)
let studentarr=[]
function myfunction(event){
    event.preventDefault()
//    console.log("inside")
let studentdata ={
    name:document.querySelector("#name").value,
    email:document.querySelector("#email").value,
    phone:document.querySelector("#phone").value,
    gender:document.querySelector("#gender").value,
    course:document.querySelector("#course").value
    }
    studentarr.push(studentdata)
    // console.log(studentarr)
localStorage.setItem("admission",JSON.stringify(studentarr))


}

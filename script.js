var current = document.querySelector("h5")

var btn = document.querySelector("#add")
var check = 0

btn.addEventListener("click",function(){
    if (check == 0){
        current.innerHTML = "Friends"
        current.style.color = "green"
        btn.innerHTML = "Remove friend"
     
        check = 1
 }
 else{
    current.innerHTML = "stranger"
        current.style.color = "red"
        btn.innerHTML = "Add friend"
        check = 0
 }
})


//Caitlin's Counter Clicker App
let count = 0
let saves = "Previous entries: "

document.getElementById("saves").innerHTML = saves
document.getElementById("count-el").innerHTML = count

function increment(){
    count = count +1;
    document.getElementById("count-el").innerText = count
}

function save(){ 
    saves += count + " - "
    document.getElementById("saves").innerHTML = saves
}


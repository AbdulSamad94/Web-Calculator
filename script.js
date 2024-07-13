let toDisplay = document.getElementById("input")

function operations(e){
    toDisplay.innerText += e
}
function toClear(){
    toDisplay.innerText = ""
}
function toCalculate(){
    try {
        toDisplay.innerText = eval(toDisplay.innerText)
    } catch (error) {
        toDisplay.innerText = "Error!"
    }   
}
function toDelete(){
    let afterspliting = toDisplay.innerText.split("").slice(0,-1)
    let afterJoining = afterspliting.join("")
    toDisplay.innerText = afterJoining
}
if(toDisplay.innerText === "undefined"){
    toDisplay.innerText = ""
}

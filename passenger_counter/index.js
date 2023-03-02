// document.getElementById("count-el").innerText = 5
 
let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

console.log(saveEl)
function increment()
{
    console.log("Clicked!")
    count = count + 1
    countEl.textContent = count
}

function save()
{
    let savedCount = count + " - "
    saveEl.textContent += savedCount
    count = countEl.textContent = 0
    
}

// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

let count=0;
const incrementBtn=document.getElementById("increment-btn");
const countEl=document.getElementById("count-el");
const saveEl=document.getElementById("save-el");
incrementBtn.addEventListener("click", function(){
    count += 1;
    countEl.innerText = count;
})

function save() {
    let countStr = count + " - ";
    // saveEl.innerText += countStr
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;

}
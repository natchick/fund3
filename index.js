const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
const itemsStikedThrough = localStorage.getItem('strikes') ? JSON.parse(localStorage.getItem('strikes')) : []
console.log(itemsArray);
console.log(itemsStikedThrough);

document.querySelector('#push').addEventListener("click", () =>{
    const item = document.querySelector('#item');
    createItem(item);
});

function createItem(item){
    itemsArray.push(item.value);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    itemsStikedThrough.push(false);
    localStorage.setItem("strikes", JSON.stringify(itemsStikedThrough));
    location.reload();
}

function displayTasks(item){  
    let tasks = "";
    for (let i=0; i < itemsArray.length; i++){
        tasks += `
            <div class="task">
                <button class='crossOutButton'>✔️</button>
                <span id="taskname">${itemsArray[i]}</span>
                <button class="delete">🗑️</button>
            </div>
        `;
    }
    document.querySelector('#tasks').innerHTML = tasks
    activateDeleteButtons()
    activateCrossOutButtons()
}

function activateDeleteButtons(){
    let delButton = document.querySelectorAll(".delete")
    delButton.forEach((button, i) => {
        button.addEventListener("click", () => { deleteItem(i) })
    })
}

function deleteItem(i){
    itemsArray.splice(i, 1)
    itemsStikedThrough.splice(i, 1)
    localStorage.setItem("items", JSON.stringify(itemsArray))
    localStorage.setItem("strikes", JSON.stringify(itemsStikedThrough))
    location.reload()
}

function activateCrossOutButtons(){
    let CrossOutButton = document.querySelectorAll(".crossOutButton")
    CrossOutButton.forEach((button, i) => {
        button.addEventListener("click", () => { saveItemCrossed(i) })
    })
}
function saveItemCrossed(i){
    if (!itemsStikedThrough[i]) itemsStikedThrough[i] = true
    else itemsStikedThrough[i] = false
    localStorage.setItem("strikes", JSON.stringify(itemsStikedThrough))
    location.reload()
}
function crossOutItems(){
    for (let i=0; i < itemsStikedThrough.length; i++){
        if (itemsStikedThrough[i]){
        document.querySelectorAll(".crossOutButton")[i].parentNode.children[1].style.textDecoration = ('line-through')
        }       
    }
}

window.onload = function(){
    displayTasks()
    crossOutItems()
}
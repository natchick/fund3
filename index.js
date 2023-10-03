document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <button class='crossOutButton'>✔️
                    <i class="crossOutButton"></i>
                </button>
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">🗑️
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        var crossout_tasks = document.querySelectorAll(".crossOutButton");
        for(var i=0; i<crossout_tasks.length; i++){
            crossout_tasks[i].onclick = function(){
                if (this.parentNode.children[1].style.textDecoration === ('line-through')) {
                    this.parentNode.children[1].style.textDecoration = ('none')
                } else {
                    this.parentNode.children[1].style.textDecoration = ('line-through');
                }
            }
        }
    }
}

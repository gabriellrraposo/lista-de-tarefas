let createTask = () => {
    let txtTask = document.querySelector('#txtTask').value
    let taskList = document.querySelector('#taskList')

    if (txtTask == '') {
        alert('You must enter a task to confirm')
    } else {
        taskList.innerHTML += `<li><span>${txtTask}</span><div class='buttonGroup'><button><i class='fa-solid fa-check' id='btnCheck'></i></button><button><i class='fa-solid fa-trash' id='btnDelete'></i></button></div></li>`
    }
}

let completeTask = () => {
    let task = this
    console.log(task)
}

// let deleteTask = () => {
//     let task = this
//     task.innerHTML = ''
// }



let createTask = () => {
    let txtTask = document.querySelector('#txtTask').value
    let taskList = document.querySelector('#taskList')

    if (txtTask == '') {
        alert('You must enter a task to confirm')
    } else {
        taskList.innerHTML += `<li><span>${txtTask}</span><div class='buttonGroup'><button><i class='fa-solid fa-check' id='btnCheck'></i></button><button><i class='fa-solid fa-trash' id='btnDelete'></i></button></div></li>`
    }
}

let completeTask = (e) => {
    let task = e.target.parentElement.parentElement.parentElement
    let doneList = document.querySelector("#doneList")
    let doneTask = task.innerHTML
    
    doneList.lastElementChild.innerHTML += `<li>${doneTask}</li>`
    console.log(doneList)
    task.remove()
}

let deleteTask = (e) => {
    let task = e.target.parentElement.parentElement.parentElement
    task.remove()
}

let btnDelete = document.querySelectorAll('#btnDelete').forEach(item => {
    item.addEventListener('click', deleteTask)
})

let btnCheck = document.querySelectorAll("#btnCheck").forEach(item => {
    item.addEventListener('click', completeTask)
})

// let deleteTask = () => {
//     let task = this
//     task.innerHTML = ''
// }



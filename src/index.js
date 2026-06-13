const TextInput = document.getElementById("TextInput1");
const taskContainer = document.getElementById("contentContainer")

var WorkList = JSON.parse(localStorage.getItem('tasks')) || [];
var Taskfinished = JSON.parse(localStorage.getItem('tasks'));

renderTasks();

function AddTask(){
    if (TextInput.value === ''){
        alert("Veillez saisir une tâche");
    }
    else{
        WorkList.push(TextInput.value)
        localStorage.setItem("tasks", JSON.stringify(WorkList)); //sauvegarde dans le localstorage
        renderTasks();
        TextInput.value = '';
    }
}

function renderTasks(){
    taskContainer.innerHTML = ''; // vider l'affichage
    WorkList.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = task;
        taskContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    });

    taskContainer.addEventListener('click', (e)=>{
    if (e.target.tagName === 'LI'){
        var lI = e.target.classList;
        lI.toggle('checked');

        if (lI.value === "checked" && e.target.tagName === 'LI')
            alert(1234)
            let value = e.target.firstChild.textContent
            Taskfinished.push(value)

    }else if(e.target.tagName === 'SPAN'){
        // Récuperation de la tache
        const li = e.target.parentElement;
        const taskText = li.firstChild.textContent;

        //  Rétrouver le même texte/tache pour le supprimer de la liste
        WorkList = WorkList.filter(task => task !== taskText);
        Taskfinished = Taskfinished.filter(task => task !== taskText)

        // Mise à jour du localStorage
        localStorage.setItem("tasks", JSON.stringify(WorkList));


        // Supprimer la tache du DOM
        li.remove()

        //ajouter le nombre de taches terminées et celles en cours

        
    }
})
}

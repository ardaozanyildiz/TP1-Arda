//creer 3 constante
const taskInput = document.getElementById("taskInput") ;
const addTaskBtn = document.getElementById("addTask") ;
const taskList = document.getElementById("taskList") ;

addTaskBtn.addEventListener("click", addTask);


//creation de la fonction pour rajouter des taches dans la listes
//trim() sert a enlever les espaces, tabulations, etc
//si le input n'est pas vide 
//creer une liste 
   function addTask() {

      const taskText = taskInput.value.trim();  

      if (taskText !==""){

         const listItem = document.createElement("li");
         
         listItem.textContent = taskText;
     
         taskList.appendChild(listItem);

         taskInput.value = "";



//creation de la fonction pour MARQUER la tache
//avec une image pour cliquer dessus
         const doneBtn = document.createElement("img");

         doneBtn.setAttribute("src", "./Images/chekmark.png");
         doneBtn.setAttribute('height', '19px');
         doneBtn.setAttribute('width', '19px');

         listItem.appendChild(doneBtn);

             doneBtn.addEventListener("click", () => {

        listItem.id = "taskDone"});

//creer une fonction pour SUPPRIMER les taches     
//avec une image pour cliquer dessus
         const deleteBtn = document.createElement("img");
         deleteBtn.setAttribute("src", "./Images/delete.png")
         deleteBtn.setAttribute('height', '19px');
         deleteBtn.setAttribute('width', '19px');

         listItem.appendChild(deleteBtn);
         deleteBtn.addEventListener("click", () => {
         listItem.remove();
});


//creation de la fonction pour MODIFIER la tache
//avec une image pour cliquer dessus
         const editBtn = document.createElement("img");

         editBtn.setAttribute("src", "./Images/echange.jpeg");
         editBtn.setAttribute('height', '19px');
         editBtn.setAttribute('width', '19px');

         listItem.appendChild(editBtn);

         editBtn.addEventListener("click", () => {
            taskInput.value = listItem.textContent
            listItem.remove()
         });



      }else{
     
         alert("Vous avez rentré aucune tâche. Veuillez entrer une tâche valide.");
     
      }

     
      }
//code pour le sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
 
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

   



   











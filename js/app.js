var btnAdd = document.querySelector('#addTask button');
var incompleteTaskHolder = document.getElementById('incomplete-tasks');
var completeTaskHolder = document.getElementById('completed-tasks');
var newTask = document.getElementById('new-task');
var btnDelete = document.getElementsByClassName('delete');
var btnEdit = document.getElementsByClassName('edit');
var btnMove = document.getElementsByClassName('move');

var addTask = function () {
  var value = newTask.value;

//if there is a text inside the newtask, add an li to the to do section
  if (value) createItem(value);
};

//funzione per creare un li e inserirlo nella lista todo, dopo il click
 var createItem = function(text) {
     //creo un elemento li
    var todoElement = document.createElement("li");
       //input: checkbox
    var buttonMove = document.createElement("button");
       //label: testo del #new-task
    var label = document.createElement("label");
       //input: text
    var editInput = document.createElement("input");
       //button: edit
    var buttonEdit = document.createElement("button");
       //button: delete
    var buttonDelete = document.createElement("button");

      //inserire tutti gli elementi nell'elementi li
    todoElement.appendChild(buttonMove);
    todoElement.appendChild(label);
    todoElement.appendChild(editInput);
    todoElement.appendChild(buttonEdit);
    todoElement.appendChild(buttonDelete);

    //modificare questi elementi
    buttonMove.className = "move";
    buttonMove.innerHTML = '<svg id="Livello_1" data-name="Livello 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.16 18.81"><title>Senza titolo-5</title><polyline class="move-1" points="2 8.41 9.18 16.8 21.16 2"/></svg>';
    editInput.type = "text";
    buttonEdit.innerHTML = '<svg id="Layer_3" data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236.2 236"><title>1478049980_flat-style-circle-edit</title><path class="edit-1" d="M142.9,329l-5,45,45-5,144-144-40-40Z" transform="translate(-137.9 -138)"/><path class="edit-1" d="M337.1,138a12.12,12.12,0,0,0-8.6,3.6L307.9,164l40,40,22.6-20.5a12.07,12.07,0,0,0,0-17.2l-24.7-24.7a12.89,12.89,0,0,0-8.7-3.6h0Z" transform="translate(-137.9 -138)"/></svg>';
    buttonEdit.className = "edit";
    buttonDelete.innerHTML = '<svg id="Livello_2" data-name="Livello 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.17 19.17"><title>Senza titolo-5</title><line class="delete-1" x1="2" y1="2" x2="17.17" y2="17.17"/><line class="delete-1" x1="17.17" y1="2" x2="2" y2="17.17"/></svg>';
    buttonDelete.className = "delete";
    label.innerText = text;

    //iserire l'elemento creato nella lista to do
     incompleteTaskHolder.appendChild(todoElement);
    
    //per collegare il click anche agli elementi creati
    makeButtonsWork(btnDelete, deleteTask);
    makeButtonsWork(btnEdit, editTask);
    makeButtonsWork(btnMove, moveTask);



    //far tornare vuota la casella newTask
     newTask.value = "";

    };

btnAdd.onclick = addTask;

newTask.addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
       addTask();
    }
});

//funz generale per associare il click a i vari pulsanti
 function makeButtonsWork(bottone, task) {
  for (var i = 0; i < bottone.length; i++)  {
    bottone[i].onclick = task;
  }
};

//add click event for removing items
 var deleteTask = function() {
 var elToRemove = this.parentNode;
 var parentEltoRemove = elToRemove.parentNode;
 parentEltoRemove.removeChild(elToRemove);

}

makeButtonsWork(btnDelete, deleteTask);


//add click event for editing items
var editTask = function() {

  var listItem = this.parentNode;
  var hasClass = listItem.classList.contains("editMode");
  var editInput = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");

  //if ha gia edit
  if (hasClass) {
    //gli tolgo la classe edit
    //mettere come label il valore dell'input
    label.innerText = editInput.value;
    } else {
  // else
   //gli metto la class edit
   //mettere come input il testo del label
   editInput.value = label.innerText;
   }

 //toggle la class edit
 listItem.classList.toggle("editMode");
};

makeButtonsWork(btnEdit, editTask);

 
//add click event for editing items
var moveTask = function() {
  var listItem = this.parentNode;
  var parent = listItem.parentNode;

if (parent.id === 'incomplete-tasks') {
  completeTaskHolder.appendChild(listItem);
} else  if (parent.id ==='completed-tasks') {
   incompleteTaskHolder.appendChild(listItem);
};


   
}

makeButtonsWork(btnMove, moveTask);







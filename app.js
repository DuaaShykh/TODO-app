function addItem(){
   var list = document.getElementById("list");
   var todo =  document.getElementById("add_Item");
   var li = document.createElement("li");
   var liText = document.createTextNode(todo.value);
   li.appendChild(liText);
   list.appendChild(li);





//delete button
var delBtn = document.createElement("span");


delBtn.innerHTML = '<i class="fa fa-minus-square" aria-hidden="true"></i>';
delBtn.setAttribute("onclick", "deleteBtn(this)");

li.appendChild(delBtn).style.marginLeft= "200px";


//edit button
var edBtn = document.createElement("span");
edBtn.innerHTML = '<i class="fa fa-pencil-square" aria-hidden="true"></i>';
edBtn.setAttribute("onclick", "editBtn(this)");
li.appendChild(edBtn).style.marginLeft= "5px";



todo.value = " ";
}

function deleteAll(){
    var list = document.getElementById("list");
    list.parentNode.parentNode.remove();
}

function deleteBtn(d){
   d.parentNode.remove();
}

function editBtn(e){
 var val = e.parentNode.firstChild.nodeValue;
var editValue = prompt("Enter edit value", val);
e.parentNode.firstChild.nodeValue = editValue;

}
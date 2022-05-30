var list =[];
var inp = document.getElementById('inp');
var todoList = document.getElementById('todoList');


document.getElementById('btn').addEventListener("click",function () {
list.unshift(inp.value);
inp.value="";
showList();
});

function showList(){
    todoList.innerHTML = '';
    list.forEach(function(n,i){
        todoList.innerHTML += "<li> " + "<a onclick='deleteItem("+i+")' >&times;</a>" + n + "<a onclick='editItem("+i+")'>Edit</a>" + "</li>";
    })
}

function deleteItem(i){
    if(confirm("Do You really want to delete?") == true){
        list.splice(i,1);
        showList();
    }else{
        return false;
    }        
}

function editItem(i){
    var newValue = prompt("Please Insert your new value.");
     list.splice(i,1,newValue)
     showList();
}
var itemNumber = 1;
var removeButton = document.getElementById("removeButton");
//removeButton.disabled = true;
var row;

function addToList () {
     let item = document.getElementById("itemId").value;
     let listTable = document.getElementById("shoppingListTableId");

     let row = listTable.insertRow(0);
     let id = itemNumber++;

 //    number = row.insertCell(0);
     value = row.insertCell(0);
//     number.innerHTML = id;
     value.innerHTML =  item;

     row.id = id;
     row.addEventListener("click", onItemClick, false);
     document.getElementById("itemId").value = "";   
}

//very twisted approach. read more and change logic!!!!!
function onItemClick (e) {
    row = e.target.parentNode;  

    if (row.className === "table-warning")
        row.className = "";
    else
    {
        resetOtherRows();
        row.className = "table-warning";
    }   

    
//    console.log(row);
//    removeButton.disabled = false;
}

function resetOtherRows() {
    let items = document.getElementsByClassName("table-warning");
    if (items.length === 0)
    {
    }
    else
    {
        for (let i = 0; i < items.length; i++) {
            console.log(items.item(i));
            items.item(i).className = "";
        }
    }

}
function removeFromList() {

    let items = document.getElementsByClassName("table-warning");
    console.log(items.length);
    if (items.length === 0)
    {
        alert ("Select atleast one item in the list");
    }
    else
    {
        for (let i = 0; i < items.length; i++) {
            console.log(items.item(i));
            let id = items.item(i).id;
            removeItem(id);
        }
    }
}

function removeItem(id) {
    console.log(id);
    document.getElementById(id).remove();

}
//document.getElementsById("shoppingListTableId").addEventListener("click", modifyTable);

//function modifyTable() {

//}
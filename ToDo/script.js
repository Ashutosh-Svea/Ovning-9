var itemNumber = 1;
var removeButton = document.getElementById("removeButton");
//removeButton.disabled = true;
var row;

function addToList () {
     let item = document.getElementById("itemId").value;
     let listTable = document.getElementById("shoppingListTableId");

     if (item == "")
     {
         alert ("No item added in the textbox");
         return;
     }
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
//using table class as way to find which is selected row by click event
function onItemClick (e) {
    row = e.target.parentNode;  

    if (row.className.includes("table-warning"))
        row.className = row.className.replace("table-warning", "");
    else
    {
        resetOtherRows();
        row.className = row.className.concat(" table-warning");
    }   

    
//    console.log(row.className);
//    removeButton.disabled = false;
}

//investigate later why this is needed. 
//since only one row is able to be deleted so reset other than the clicked row

function resetOtherRows() {
    let items = document.getElementsByClassName("table-warning");
    if (items.length === 0)
    {
    }
    else
    {
        for (let i = 0; i < items.length; i++) {
            console.log(items.item(i));
            items.item(i).className = items.item(i).className.replace("table-warning", "");
        }
    }

}

function markDone() {

    let items = document.getElementsByClassName("table-warning");
//    console.log(items.length);
    if (items.length === 0)
    {
        alert ("Select atleast one item in the list");
    }
    else
    {
        for (let i = 0; i < items.length; i++) {
            //console.log(items.item(i));
            let id = items.item(i).id;

            strikeThrough(id);
        }
    }
}

function markUnDone() {

    let items = document.getElementsByClassName("table-warning");
//    console.log(items.length);
    if (items.length === 0)
    {
        alert ("Select atleast one item in the list");
    }
    else
    {
        for (let i = 0; i < items.length; i++) {
            //console.log(items.item(i));
            let id = items.item(i).id;

            unstrikeThrough(id);
        }
    }
}

function unstrikeThrough (id) {

    console.log(id);
    let item = document.getElementById(id);
    if (item.className.includes("text-decoration-line-through"))
    {
        item.className = item.className.replace("text-decoration-line-through", "").replace("table-secondary", "");

    }
    else
        alert ("First mark the item completed/bought");

//    item.className = item.className.replace ("text-decoration-line-through", "");

}

function strikeThrough (id) {

    console.log(id);
    let item = document.getElementById(id);
    if (item.className.includes("text-decoration-line-through"))
        alert ("Item already completed/bought");
    else
    {
        item.className = item.className.concat (" text-decoration-line-through").concat(" table-secondary");
        row.className = row.className.concat();

    }

//    item.className = item.className.replace ("text-decoration-line-through", "");

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
            //console.log(items.item(i));
            let id = items.item(i).id;
            removeItem(id);
        }
    }
}

function removeItem(id) {
    //console.log(id);
    document.getElementById(id).remove();

}
//document.getElementsById("shoppingListTableId").addEventListener("click", modifyTable);

//function modifyTable() {

//}
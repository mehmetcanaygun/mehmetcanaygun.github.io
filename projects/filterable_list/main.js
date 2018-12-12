var inputBox = document.getElementById('contactNameInput');
var itemsArray = document.getElementsByClassName('listItem');
var itemContent = "";

//itemsArray[0].classList.add("hideItem");

//console.log(itemsArray[0].style.display = "none");

inputBox.onkeyup = function(){
    var contactName = inputBox.value;

    for(var i = 0; i < itemsArray.length; i++) {
      itemContent = itemsArray[i].textContent;
      if((itemContent.toLowerCase()).includes(contactName.toLowerCase())) {
        itemsArray[i].hidden = false;
      } else {
        itemsArray[i].hidden = true;
      }
    }
}

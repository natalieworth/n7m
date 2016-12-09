var inputElement = document.querySelector(".input-element");
var shareButton = document.querySelector(".share-button");
inputElement.addEventListener("input", function(event){
  console.log(event);
  shareButton.href = "share.html?name="+inputElement.value;
});

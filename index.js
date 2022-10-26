const button = document.getElementById("button");
function clickAlert() {
  alert("I was clicked!");
}
function addingEventListener() {
  button.addEventListener("click", clickAlert);
}

function hide(id) {
  var boxToRemove = document.getElementById(id);
  boxToRemove.remove();
}

function increment(element) {
  var counter = parseInt(element.innerText) + 1;
  element.innerText = counter;
}

function message() {
  alert('The Ninjas have won!');
}

setTimeout(message, 3000);

function getColor(element) {
  // i) Array of <p> tags (In excercise 5 <p> tags elements)
  var pTags = document.querySelectorAll('p');

  // ii) Color selected by User
  var colorToUpdate = element.value;

  // iii) Update color of each paragrapgh font text
  for (var i = 0; i < pTags.length; i++) {
    pTags[i].style.color = colorToUpdate;
  }
}

function changeText(id) {
  var element = document.querySelector('#' + id);
  element.innerHTML = 'Hello World';
}

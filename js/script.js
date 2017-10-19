//user Interface Logic
$(document).ready(function() {
  console.log("ready");
  $("#userInput").submit(function(event){
    console.log("submit");
    var userLetters = $("input#userLetters").val();
    console.log("userInput: " + userLetters);
    countLetter(userLetters);
    event.preventDefault();
  });
});

//business logic
var countLetter = function(userLetters) {
  var noSpace = userLetters.replace(/\s+/g, '');
  var count = 0;
  for (i = 0; i < noSpace.length; i++) {
    if (noSpace[i]) {
      count++
    }
    console.log(count);
  }
  console.log(count);
  $("#output").append("We have: " + count + " letters!!!");
  return count;
}

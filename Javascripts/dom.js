var i = 0;
function change() {
  var doc = document.getElementById("title");
  var color = ["blue", "brown", "green"];
  doc.style.color = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 1000);


function change() {
  let doc = document.getElementById("completed");
  let color = ["green"];
  doc.style.backgroundColor = color[j];

}

// var k = 0;
// function change() {
//   var doc = document.getElementById("ongoing");
//   var color = ["yellow"];
//   doc.style.backgroundColor = color[k];

// }
// var m = 0;
// function change() {
//   var doc = document.getElementById("coming");
//   var color = ["red"];
//   doc.style.backgroundColor = color[m];

// }

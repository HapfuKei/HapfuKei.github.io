function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("aside1").style.display = "none";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("aside1").style.display = "";
}
var t;
function up() {
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
    window.scrollBy(0,-170);
    t = setTimeout('up()',20);
  } else clearTimeout(t);
  return false;
}
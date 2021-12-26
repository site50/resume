function openMenu() {
	document.getElementById("menu").style.width = "100%";
}
function closeMenu() {
	document.getElementById("menu").style.width = "0%";
}
document.getElementById("show-menu").innerHTML =
'<div id="menu" class="overClass">'
+'<a href="javascript:void(0)" class="closebtn" onclick="closeMenu()">&times;</a>'
+'<div class="overClass-content">'
+'<a href="Home.html">Home</a>'
+'<a href="About.html">About me</a>'
+'<a href="Experience.html">Experience</a>'
+'<a href="Work.html">My work</a>'
+'</div>'
+'</div>'
+'<span  id="span1"  onclick="openMenu()">&#9776; </span>';
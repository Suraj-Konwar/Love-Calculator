function calculateLove(){
	var name = document.getElementById("name").value;
	var partner = document.getElementById("partner").value;
    if (name === "") {
		alert("Please enter your name");
	}
	else if (partner === ""){
		alert("Please enter your partner name")
	}
	else if (name.length <3) {
		alert("Your name too Short");
	}
	else if (partner.length <3){
		alert("Partner name too Short");
	}
    else {
		var loveScore =Math.random() * 100;
		loveScore = Math.floor(loveScore);

		document.getElementById("final").innerHTML = "Your LoveScore is " + "95" + "%";
	}
}
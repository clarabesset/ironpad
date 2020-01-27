
var kick1 = new Tone.Player("./Kick/Kick001.wav").toMaster();
var kick2 = new Tone.Player("./Kick/Kick002.wav").toMaster();
var kick3 = new Tone.Player("./Kick/Kick003.wav").toMaster();
var kick4 = new Tone.Player("./Kick/Kick004.wav").toMaster();
var kick5 = new Tone.Player("./Kick/Kick005.wav").toMaster();
var kick6 = new Tone.Player("./Kick/Kick006.wav").toMaster();
var kick7 = new Tone.Player("./Kick/Kick007.wav").toMaster();
var kick8 = new Tone.Player("./Kick/Kick008.wav").toMaster();
var kick9 = new Tone.Player("./Kick/Kick009.wav").toMaster();

document.getElementById("kick1").onclick = () => kick1.start();
document.getElementById("kick2").onclick = () => kick2.start();
document.getElementById("kick3").onclick = () => kick3.start();
document.getElementById("kick4").onclick = () => kick4.play();
document.getElementById("kick5").onclick = () => kick5.play();
document.getElementById("kick6").onclick = () => kick6.play();
document.getElementById("kick7").onclick = () => kick7.play();
document.getElementById("kick8").onclick = () => kick8.play();
document.getElementById("kick9").onclick = () => kick9.play();



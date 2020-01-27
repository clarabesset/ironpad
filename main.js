import * as Tone from "Tone";

var kick1 = new Tone.Player("https://dl.dropboxusercontent.com/s/q9ffbq1esfufado/kick3.wav?dl=0");
var kick2 = new Tone.Player("kick2","https://dl.dropboxusercontent.com/s/fx62nliy7zgv0rg/kick1.wav?dl=0");
const kick3 = new Tone.Player("./sounds/Chants/ChantBreath001.wav").toMaster();
var clap1 = new Tone.Player("clap1","https://dl.dropboxusercontent.com/s/xlv8x19wvg9ynh8/clap1.wav?dl=0");
var clap2 = new Tone.Player("clap2","https://dl.dropboxusercontent.com/s/og84e9s5g4z8wyx/clap2.wav?dl=0");
var clap3 = new Tone.Player("clap3","https://dl.dropboxusercontent.com/s/4741pvdfsv5x82b/clap3.wav?dl=0");
var bass1 = new Tone.Player("bass1","https://dl.dropboxusercontent.com/s/oc7yrdrk64w66ck/bass1.wav?dl=0");
var bass2 = new Tone.Player("bass2","https://dl.dropboxusercontent.com/s/73ejwnwpcxlxte9/distor.wav?dl=0");
var hoover1 = new Tone.Player("hoover1","https://dl.dropboxusercontent.com/s/x5oc2av9xoqfydq/hoover.wav?dl=0");
var fx = new Tone.Player("fx","https://dl.dropboxusercontent.com/s/nd79xe2s83jg4sh/fxs.wav?dl=0");

document.getElementById("kick1").onclick = () => kick1.start();
document.getElementById("kick2").onclick = () => kick2.start();
document.getElementById("kick3").onclick = () => kick3.start();
document.getElementById("clap1").onclick = () => clap1.play();
document.getElementById("clap2").onclick = () => clap2.play();
document.getElementById("clap3").onclick = () => clap3.play();
document.getElementById("bass1").onclick = () => bass1.play();
document.getElementById("bass2").onclick = () => bass2.play();
document.getElementById("hoover1").onclick = () => hoover1.play();
document.getElementById("fx").onclick = () => fx.play();



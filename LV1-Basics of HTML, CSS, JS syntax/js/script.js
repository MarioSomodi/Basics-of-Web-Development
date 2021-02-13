function generirajBoju()
{
var sZnakovi = '0123456789ABCDEF';
var sBoja = '#';
for (var i = 0; i < 6; i++)
{
sBoja += sZnakovi[Math.floor(Math.random() * 16)];
}
return sBoja;
}

var god1 = document.getElementById("godina-1");
var god2 = document.getElementById("godina-2");
var god3 = document.getElementById("godina-3");

god1.style.color = generirajBoju();
god2.style.color = generirajBoju();
god3.style.color = generirajBoju();

var oPredmeti = document.getElementsByClassName('predmet');
for (var i = 0; i < oPredmeti.length; i++)
{
	oPredmeti[i].style.marginLeft = '20px';
}

divElement = document.getElementById("racunarstvo")
function PrikaziRacunarstvo()
{
	divElement.style.display = "block";
}
function SakrijRacunarstvo()
{
	divElement.style.display = "none";
}
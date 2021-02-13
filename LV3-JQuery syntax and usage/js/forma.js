function InitializeGodinaElements()
{
	var oSelect = $('#dpGodinaRodjenja');
	for(var i=1975; i<2021; i++)
	{
		console.log(i);
		oSelect.append('<option value="'+i+'">'+i+'</option>');
	}
}
function Spremi()
{
	$(document).ready(function()
	{
		var imeStudenta = $("#inptIme").val();
		var prezimeStudenta = $("#inptPrezime").val();
		var oibStudenta = $("#inptOIB").val();
		var godinaRodjenjaStudenta = $("#dpGodinaRodjenja").val();
		var poruka = "Polja ne smiju biti prazna:";
		var pogreska = false;
		if(imeStudenta.trim() == "")
		{
			poruka += " ime ";
			pogreska = true;
		}
		if(prezimeStudenta.trim() == "")
		{
			poruka += " prezime ";
			pogreska = true;
		}
		if(oibStudenta.trim() == "")
		{
			poruka += " oib ";
			pogreska = true;
		}
		if(godinaRodjenjaStudenta == -1)
		{
			poruka += " datum rodenja ";
			pogreska = true;
		}
		if(pogreska)
		{
			alert(poruka);
		}
		else
		{
			console.log(imeStudenta + ", " + prezimeStudenta + ", " + oibStudenta + ", " + godinaRodjenjaStudenta);
		}
	});
}

$(document).ready(function()
{
	InitializeGodinaElements();
});
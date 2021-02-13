function UcitajVijestiNaslovnice()
{
	$.ajax({
			url: 'http://localhost/Mario_Somodi/LV5/json.php',
			type: 'GET',
			dataType: 'json',
			success: function(sOdgovorPosluzitelja)
			{
				$(sOdgovorPosluzitelja).each(function(i, item)
				{
					$("#sve-vijesti").append
					(
						'<div class="media">'+
						'<div class="media-body">' +
						'<h4 class="media-heading"><span class="label label-info">' + item.datum + '</span>' + ' ' + item.post_naziv + '</h4>' +
						'<div class="desc">' + item.post_tekst + '</div>' +
						'</div>' +
						'</div>'
					);
				});
			},
			error: function(XMLHttpRequest, textStatus, exception)
			{
				console.log('Doslo je do pogreske');
			},
	});
}

function UcitajTablicuAdministracija()
{
	$.ajax({
			url: 'http://localhost/Mario_Somodi/LV5/json.php',
			type: 'GET',
			dataType: 'json',
			success: function(sOdgovorPosluzitelja)
			{
				$("#tablica-postovi").find("tbody").empty();
				$(sOdgovorPosluzitelja).each(function(i, item)
				{
					$("#tablica-postovi").find("tbody").prepend
					(
						'<tr>' +
						'<td>' + item.post_id + '</td>' +
						'<td>' + item.datum + '</td>' +
						'<td>' + item.post_naziv + '</td>' +
						'<td><button class="btn btn-sm btn-primary" onclick="ObrisiVijest(' + item.post_id + ')"><span class="glyphicon glyphicon-trash"></span></button></td>'
					);
				});
			},
			error: function(XMLHttpRequest, textStatus, exception)
			{
				console.log('Doslo je do pogreske');
			},
	});
}

function ObrisiVijest(nTrenutniIdVijesti)
{
	$.ajax({
			url: 'http://localhost/Mario_Somodi/LV5/action.php',
			type: 'POST',
			dataType: 'html',
			data:
			{	
				akcija: 'obrisi_vijest',
				vijest_id: nTrenutniIdVijesti
			},
			success: function(sOdgovorPosluzitelja)
			{
				alert("Uspijesno ste obrisali vijest sa rednim brojem: " + nTrenutniIdVijesti);
				UcitajTablicuAdministracija();
			},
			error: function(XMLHttpRequest, textStatus, exception)
			{
				console.log('Doslo je do pogreske');
			},
	});
}
function DodajVijest()
{
	var sVijestNaziv = $("#inptNazivVijesti").val().replace(/^\s+|\s+$/g, "");
	var sVijestTekst = $("#txtTekstVijesti").val().replace(/^\s+|\s+$/g, "");
	if(sVijestNaziv.length != 0 && sVijestTekst.length != 0)
	{
		$.ajax({
			url: 'http://localhost/Mario_Somodi/LV5/action.php',
			type: 'POST',
			dataType: 'html',
			data:
			{	
				akcija: 'dodaj_vijest',
				vijest_naziv: sVijestNaziv,
				vijest_tekst: sVijestTekst
			},
			success: function(sOdgovorPosluzitelja)
			{
				UcitajTablicuAdministracija();
			},
			error: function(XMLHttpRequest, textStatus, exception)
			{
				console.log('Doslo je do pogreske');
			},
	});
	}
	else
	{
		alert("Ostavili ste jedno od polja praznim pokusajte ponovno.");
	}
}
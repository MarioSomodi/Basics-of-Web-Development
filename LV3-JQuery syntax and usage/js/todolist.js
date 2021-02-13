$(document).ready(function () 
{
	var listaZadataka = $("#listaZadataka");
	$("#dodajZadatak").click(function()
	{
		var zadatak = $("#unosZadatka").val();
		$("<li>" + zadatak + "</li>").appendTo(listaZadataka).addClass("pojediniZadatak");
	});
	$("ul").on("click", "li", function(e){
 		$(e.target).remove();
	});
});
var currentSlide = 1;
function Prev()
{
	$(document).ready(function () 
	{
		currentSlide--;
		if(currentSlide == 0)
		{
			currentSlide = 5;
		}
		$("#slika").attr("src", "img/slider_" + currentSlide + ".jpg");
	});
}
function Next()
{
	$(document).ready(function () 
	{
		currentSlide++;
		if(currentSlide == 6)
		{
			currentSlide = 1;
		}
		$("#slika").attr("src", "img/slider_" + currentSlide + ".jpg");
	});
}
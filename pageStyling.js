

function fetchColour(name)
{
var scribeColour= '#9ac470';
var knightColour = '#537ae9';
var bruteColour = '#fe0000';

	if(name=='scribe')
	{
		return scribeColour;
	}
	else if(name=='knight')
	{
		return knightColour;
	}
	else
	{
		return bruteColour;
	}
	
}



 function fetchIcon(name)
{
	var scribeImg = 'scribeIcon.jpg';
	var knightImg = 'knightIcon.jpg';
	var bruteImg = 'bruteicon.jpg';

	if(name=='scribe')
	{

	}
	else if(name=='knight')
	{
		const img = document.createElement("img");
		img.src = knightImg;

		document.body.appendChild(img);
		img.style.position = "absolute";
		img.style.left = "130px";
		img.style.top = "110px";
		img.style.width = "150px";
		img.style.height = "150px";
		
	}
	else
	{
		const img = document.createElement("img");
		img.src = bruteImg;

		document.body.appendChild(img);
		img.style.position = "absolute";
		img.style.left = "130px";
		img.style.top = "110px";
		img.style.width = "150px";
		img.style.height = "150px";
	}

	
};

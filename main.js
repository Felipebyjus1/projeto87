var canvas = new fabric.Canvas("myCanvas");

 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var block_image_object= "";

function new_image(getImage)
{
	fabric.Image.fromURL(getImage, function(Img){
		block_image_object = Img;

		block_image_object.scaleToWidth(blockImageWidth)
		block_image_object.scaleToHeight(blockImageHeight)
		block_image_object.set({
			top:blockY,
			left:blockX
		})
		canvas.add(block_image_object);
	})
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e){
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '69') // adicione os códigos adequados às teclas
	{
		new_image("pr.png")
		console.log("letra E")
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		new_image("gr.png")
		console.log("letra V")
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		new_image("yr.png")
		console.log("letra E")
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		new_image("rr1.png")
		console.log("letra E")
	}
	if(keyPressed == '73')
	{
		blockX = 700;
		new_image("br.png")
		console.log("letra E")
	}
	
}


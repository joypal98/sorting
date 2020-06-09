function setup(){
	createCanvas(1000, 600);
}

function draw(){
	background(220);
}

let sortArr = [];

if($("button").click(function(){
	let sortString = ($("input").val());
    sortArr = sortString.split(',');
     function draw(){
	let X = 30;
      for(let i = 0; i < sortArr.length ; i++){
      	console.log(sortArr[i]);
   	  	rect(X, 20, parseInt(sortArr[i]) , 55);
   	  	X = X + 55 + 5;
   }
}
    } 
  )
);

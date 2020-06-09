function setup(){
	createCanvas(1000, 600);
		background(220);
}


let sortArr = [];

if($("button").click(function(){
	let sortString = ($("input").val());
    sortArr = sortString.split(',');
 
    } 
  )
);

    function draw(){

	let X = 30;
      for(let i = 0; i < sortArr.length ; i++){
      	console.log(sortArr[i]);
   	  	rect(X, 20, 55 , parseInt(sortArr[i]));
   	  	X = X + 55 + 5;
   }
   }

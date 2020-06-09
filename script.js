unction setup(){
	createCanvas(1000, 600);
}
if($("button").click(function(){
	let sortString = ($("input").val());
    let sortArr = sortString.split(',');
    console.log(parseInt(sortArr[0]));
    console.log(parseInt(sortArr[1]));
    console.log(parseInt(sortArr[2]));
 } 
  )
	);

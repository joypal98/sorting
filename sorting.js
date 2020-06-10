


alert("values");

var values = new Array(30);

  

  function setup()
  {
  	createCanvas(800,600);
  	// background(33)
  	
  	for(var i=0;i<values.length;i++)
  	{
  		values[i]=Math.floor(Math.random() * 80);

  	}
  	// console.log(values);
  }
 let i=0;
 let j=0;
 let temp=0;
  let p=0;

console.log(values[j]+"   "+values[j+1]);

   function draw()

   {
   	console.log(i+"   "+j);	
   	console.log(values);
   	background(0);

  	


  		if(values[j]>values[j+1])
  		{

 			  temp=values[j];
			  values[j]=values[j+1];
			  values[j+1]=temp;
  		}
  				
  		
  	
   		if(i<values.length)
   			{
   				j=j+1;
   				if (j>=values.length-i-1)
   					{
   						j=0;
   						i=i+1;
   					}
   			}
   		 
   		 if(i===35)
   		 {
   		 	noLoop();
   		 }
    
	for(let k=0;k<values.length;k++)
		{   
			fill(250,0,200);
			
			rect(p,10,10,values[k]);
			p=p+10;
		}
		p=0;
// 		function swap(arr,a,b)
// {    
// 	let temp=arr[a];
// 	arr[a]=arr[b];
// 	arr[b]=temp;
// }
	console.log(i+"   "+j);	
	}


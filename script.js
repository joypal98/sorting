function setup(){
  createCanvas(1000, 600);
    background(220);
}


let sortArr = new Array(30);
let numArr = new Array(30);

if($("button").click(function(){
  let sortString = ($("input").val());
    sortArr = sortString.split(',');
    for(let i = 0 ; i < sortArr.length ; i++){
       numArr[i] = parseInt(sortArr[i]);
       console.log(numArr[i])
    }
    } 
  )
);

let i=0;
 let j=0;
 let temp=0;
  let p=0;
$(".start").click(function{
  function draw()

   {
    console.log(i+"   "+j); 
    console.log(numArr);
    background(0);

    


      if(numArr[j]>numArr[j+1])
      {

        temp=numArr[j];
        numArr[j]=numArr[j+1];
        numArr[j+1]=temp;
      }
          
      
    
      if(i<numArr.length)
        {
          j=j+1;
          if (j>=numArr.length-i-1)
            {
              j=0;
              i=i+1;
            }
        }
       
       if(i===35)
       {
        noLoop();
       }
    
  for(let k=0;k<numArr.length;k++)
    {   
      fill(250,0,200);
      
      rect(p,10,10,numArr[k]);
      p=p+10;
    }
    p=0;
  console.log(i+"   "+j); 
  }
}
  )
   

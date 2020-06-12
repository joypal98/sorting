alert("values");
 let i=0;
 let j=0;
 let temp=0;
 let p=0;
 let flag=0;

let values = [33,190,80,7,340,100];
let rr;
console.log(values);
  function setup()
  {
    createCanvas(800,600);
    let button=createButton("reset");
    button.mousePressed(change);
    background(33);
  }
  

  function change()
  {
    flag=1;
  }

 function draw()
   {  
    if(i>values.length)
         {
             noLoop();
           }
       if(values[j]>values[j+1])
         {
                                      
             let temp=values[j];
             values[j]=values[j+1];
             values[j+1]=temp;  
         }
       st();
                                    
       for(let k=0;k<6;k++)
       {   
         fill(250,0,200);
         console.log(values[k]);
         rect(p,10,20,values[k]);
         
         p=p+20;
       }
       p=0; 
                                    
function st()
  {
    if(flag===1)
    {

      if(i<values.length)
        {
          j=j+1;
          if (j>=values.length-i-1)
            {
              j=0;
              i=i+1;}
              console.log(i+","+j);
                                    
            }

    }
    
  }  }
        
  

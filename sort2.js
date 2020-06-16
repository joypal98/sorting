 let i=0;
 let j=0;
 let temp=0;
 let p=0;
 let flag=0;
 let w=0;

let values = [33,190,80,7,340,100,78,55,121,222,44,111,98];
let rr;
console.log(values);

  function setup()
  {
    createCanvas(800,600);
    frameRate(20);
    let button=createButton("reset");
    slider=createSlider(3,50,10,2);
    button.mousePressed(change);
    background(33);
   
  }
  

  function change()
  {
    flag=1;
  }

 function draw()
   {  
    background(0);
    translate(0,height);
    w=slider.value();
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
                                   
       for(let k=0;k<values.length;k++)
       {
        fill(200,0,200);
        rect(p,10,w,-values[k]);
        p=p+w;
       }
       p=0; 
       }                            
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
  }


//***********************************************************************************************************
// let i=0;
//  let j=0;
//  let temp=0;
//  let p=0;
//  let flag=0;

// let values = [33,190,80,7,340,100,78,55,121,222,44,111,98];
// let rr;
// console.log(values);

//   function setup()
//   {
//     createCanvas(800,600);
//     frameRate(5);
//     let button=createButton("reset");
//     button.mousePressed(change);
//     background(33);
   
//   }
  

//   function change()
//   {
//     flag=1;
//   }

//  function draw()
//    {  
//     background(0);
//     if(i>values.length)
//          {
//              noLoop();
//            }
//        if(values[j]>values[j+1])
//          {
                                      
//              let temp=values[j];
//              values[j]=values[j+1];
//              values[j+1]=temp;  
//          }
//        st();
                                   
//        for(let k=0;k<values.length;k++)
//        {
//         fill(200,0,200);
//         rect(p,10,20,values[k]);
//         p=p+20;
//        }
//        p=0; 
//        }                            
// function st()
//   {
//     if(flag===1)
//     {

//       if(i<values.length)
//         {
//           j=j+1;
//           if (j>=values.length-i-1)
//             {
//               j=0;
//               i=i+1;}
//               console.log(i+","+j);
                                    
//             }

//     }
//   }
   

//***************************
// alert("values");
//  let i=0;
//  let j=0;
//  let temp=0;
//  let p=0;
//  let flag=0;

// let values = [33,190,80,7,340,100];
// let rr;
// console.log(values);
//   function setup()
//   {
//     createCanvas(800,600);
//     let button=createButton("reset");
//     button.mousePressed(change);
//     background(33);
//   }
  

//   function change()
//   {
//     flag=1;
//   }

//  function draw()
//    {  
//     if(i>values.length)
//          {
//              noLoop();
//            }
//        if(values[j]>values[j+1])
//          {
                                      
//              let temp=values[j];
//              values[j]=values[j+1];
//              values[j+1]=temp;  
//          }
//        st();
                                    
//        for(let k=0;k<6;k++)
//        {   
//          fill(250,0,200);
//          console.log(values[k]);
//          rect(p,10,20,values[k]);
         
//          p=p+20;
//        }
//        p=0; 
                                    
// function st()
//   {
//     if(flag===1)
//     {

//       if(i<values.length)
//         {
//           j=j+1;
//           if (j>=values.length-i-1)
//             {
//               j=0;
//               i=i+1;}
//               console.log(i+","+j);
                                    
//             }

//     }
   
   
   
//    let values = [33,190,80,7,340,100];
// let flag = 0;
// let i=0;
// let j=0;
// let temp=0;
// let p=0;

// function setup(){
// 	createCanvas(800,600);
//     background(0);
//     frameRate(2);
// }
// function draw(){
// values.forEach(function(value){
//          fill(250,0,200);
//          rect(p,10,20,value);
//          p = p+20;
// })
// p=0;
// bs();	
// }

// function bs(){
// 	  for(i = 0; i < values.length - 1; i++) {
//         if(values[i] > values[i+1]) {
//             temp = values[i+1];
//             values[i+1] = values[i];
//             values[i] = temp;
//         }	
// 	}
   
//  }
    
//   }  }
        
  

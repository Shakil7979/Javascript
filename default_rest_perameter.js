

// default perameter  
const myFunction = (text = "This is default perameter!") => {
  console.log(`${text}`);
};

myFunction();
myFunction(`Hello Sadbin i'm working`);
 
// restPerameter 
const restPerameter = (x, y, ...z) => {  // x= 2, y= 4 z= 8,12,12,156 
  console.log(`x=${x} y=${y} z=${z}`);
};

restPerameter(2, 4, 8, 12, 12, 156);



var arr = ['a','i','o','e','u'];
var userInput = 'Sadbin Shakil';


var count= 0;

for(var i = 0; i < arr.length; i++){
    for(var v = 0; v < userInput.length; v++){
        if(arr[i] == userInput[v]){
            count++;
        }
    }
}

console.log(count);

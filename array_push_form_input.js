     

var super_array = [];  

    document.getElementById("form").addEventListener("click", function(event){
    event.preventDefault();  

    function myFunction() {
        var number = parseInt(document.getElementById('number').value); 
        for(var x = 0; x <= 0; x++){
            var superA = super_array.push(number); 

        }  
        console.log(super_array);
        return false;

    } 
    console.log(myFunction());

    },false); 


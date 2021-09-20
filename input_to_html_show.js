function click_function()
{
    var f_name = document.getElementById('f_name').value;
    var l_name = document.getElementById('l_name').value;
    var phone = document.getElementById('phone').value;
    var country = document.getElementById('country').value; 

    // alert(typeof(f_name));

    if(f_name.length == 0){
        document.getElementById('full_name').innerHTML= 'My Name is : first name null!' ;
    }else if(l_name.length == 0){
        document.getElementById('full_name').innerHTML= 'My Name is : last name null!' ;
    }else{
        full_name = f_name +' '+ l_name;
        document.getElementById('full_name').innerHTML= 'My Name is : ' + full_name;
    }


    if(phone.length <= 11){
        document.getElementById('phn').innerHTML= 'My Phone : wrong Number ! ';
    }else{
        document.getElementById('phn').innerHTML= 'My Phone : ' + phone; 
    } 

    if(typeOf(country) != 'string'){
        document.getElementById('cnty').innerHTML= 'My Country: Country should be string!'; 
    }else{ 
        document.getElementById('cnty').innerHTML= 'My Country: ' + country;  
    } 
 
}

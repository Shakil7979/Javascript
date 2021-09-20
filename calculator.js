// jog er jnno function 

function jog()
{
    var f_number = parseInt(document.getElementById('f_number').value);
    var m_number = parseInt(document.getElementById('m_number').value); 

    var jog = f_number + m_number ; 

    document.getElementById('output').innerHTML= jog;  

} 

// biog er jnno function  
function biog()
{
    var f_number = parseInt(document.getElementById('f_number').value);
    var m_number = parseInt(document.getElementById('m_number').value);  
 
    var biog = f_number - m_number; 

    document.getElementById('output').innerHTML= biog;  

}

// gun er jnno function 
function gun()
{
    var f_number = parseInt(document.getElementById('f_number').value);
    var m_number = parseInt(document.getElementById('m_number').value); 
 
    var gun = f_number * m_number; 

    document.getElementById('output').innerHTML= gun;  

}

// vag er jnno function 
function vag()
{
    var f_number = parseInt(document.getElementById('f_number').value);
    var m_number = parseInt(document.getElementById('m_number').value); 
 
    var vag = f_number / m_number; 

    document.getElementById('output').innerHTML= vag;  

}

// vagses er jnno function 
function vagses()
{
    var f_number = parseInt(document.getElementById('f_number').value);
    var m_number = parseInt(document.getElementById('m_number').value); 
 
    var vagses = f_number % m_number;

    document.getElementById('output').innerHTML= vagses;  

}


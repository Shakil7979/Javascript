

//******** GET FROM HTML
getElementById() // HTML id get korar jnno 
getElementsByClassName()  // HTML class get korar jnno
getElementsByTagName()  // HTML tag name get korar jnno
querySelector() // j kono tag class id nia kaj kora jabe
querySelectorAll()  // akoi multiple class get kora jabe

// **CREATE ELEMENT IN HTML
createElement()  // create HTML tag element
createTextNode()  // element er text add korar jnno
appendChild()   // tag HTML add korar jnno 
insertBefore()  // HTML tag position thik korar jnno 


// tag add in js for example

var lastTag = document.createElement("h3");
var lastTagText = document.createTextNode("this is last text");
lastTag.appendChild(lastTagText);

var div_id = document.getElementById("my_id");
div_id.appendChild(lastTag);



var lastTag2 = document.createElement("h2");
var lastTagText2 = document.createTextNode("this is last text");
lastTag2.appendChild(lastTagText2);
div_id.insertBefore(lastTag2, lastTag);




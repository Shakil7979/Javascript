

try {
  alert("Hi shakil");
  alert(u);
} catch (error) {
  alert(error.name);
  alert(error.message);
} finally {
  alert("Bye Sadbin");
}


// try catch thorw


try {
  document.getElementById("checkBtn").addEventListener("click", function () {
    var inputVal = document.getElementById("inputVal").value;
    if (inputVal < 5) {
      throw "Number must be 5 up!";
    } else if (inputVal > 10) {
      throw "Number must be 10 down";
    } else {
      console.log(inputVal);
    }
  });
} catch (error) {
  console.log(error);
}



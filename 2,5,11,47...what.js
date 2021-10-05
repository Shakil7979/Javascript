

//8,11,17,29,53...... next number

var fNum = 2;
var lNum = 5;
var dif = Math.abs(fNum - lNum);
let text = "";
for (var i = 0; i < 20; i++) {
  var gun = dif * 2;
  var jog = lNum + gun;
  text += jog + ",";
  dif = gun;
  lNum = jog;
}
console.log(text);


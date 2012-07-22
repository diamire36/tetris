var countPress = 1;
function setBg() {
countPress++;
  if (countPress == 2) {document.bgColor = 'red';}
  if (countPress == 3) {document.bgColor = 'green';}
  if (countPress == 4) {document.bgColor = 'blue';}
  if (countPress == 5) {document.bgColor = 'white'; countPress = 1;}
}
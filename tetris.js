var setBg

(function () { // создаём анонимную функцию, чтобы спрятать переменные
  var countPress = 1

  setBg = function () {
    var newColor
    switch (countPress++) {
      case 2: newColor = 'red'; break
      case 3: newColor = 'green'; break
      case 4: newColor = 'blue'; break
      case 5: newColor = 'white'; countPress = 1
    }
    document.bgColor = newColor
  }
})()

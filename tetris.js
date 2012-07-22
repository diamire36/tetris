var setBg

(function () { // создаём анонимную функцию, чтобы спрятать переменные
  var countPress = 0

  var colors = ['red', 'green', 'blue', 'white']

  setBg = function () {
    document.bgColor = colors[countPress++]

    if (countPress === 4) // в js используем === и !==
      countPress = 0
  }
})()

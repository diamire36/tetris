var setBg

(function () {
  var countPress = 0

  var colors = ['red', 'green', 'blue', 'white']

  setBg = function () {
    // используем css стиль вместо inline аттрибутов. важно!
    document.body.style.background = colors[countPress++]

    if (countPress === 4) // в js используем === и !==
      countPress = 0
  }
})()

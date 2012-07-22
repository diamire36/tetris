var setBg, getNodes

(function () {
  var countPress = 0

  var colors = ['red', 'green', 'blue', 'yellow']

  var nodes = {}

  setBg = function () {
    nodes.cube2x2.style.background = colors[countPress++]

    if (countPress === 4) // в js используем === и !==
      countPress = 0
  }

  getNodes = function () {
    nodes.cube2x2 = document.getElementsByClassName('cube5')[0]
  }
})()

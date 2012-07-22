var setBg, getNodes

(function () {
  var countPress = 0

  var colors = ['red', 'green', 'blue', 'yellow']

  var nodes = {}

  setBg = function () {
    nodes.cube2x2.style.background = colors[countPress++]

    if (countPress === 4)
      countPress = 0
  }

  main = function () {
    nodes.cube2x2 = document.getElementsByClassName('cube5')[0]

    var colorButton = document.getElementById('but_1')

    colorButton.addEventListener('click', function (event) {
      event.preventDefault()
      setBg()
    })
  }
})()

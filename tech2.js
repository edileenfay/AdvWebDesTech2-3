var buttons = document.querySelectorAll('.buttonStyle');
  var display = document.getElementById('displaySquare');
  var prevColor = null;

  function changeColor(color) {
    if (prevColor !== null) {
      display.style.marginTop = "-800px";
    }

    setTimeout(function() {
      display.style.backgroundColor = color;
      display.style.marginTop = "0"; 
    }, 500);

    prevColor = color;
  }

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      var color = this.style.backgroundColor; 
      changeColor(color);
    });
  });

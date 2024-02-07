var display = document.getElementById('display');

var buttons = document.querySelectorAll('.buttonContainer button');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {

        var value = this.textContent;

        switch (value) {
            case 'C':
                display.value = '';
                break;
            case '<':
                display.value = display.value.slice(0, -1);
                break;
            case '=':
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Error';
                }
                break;
            case 'x':
                display.value += '*';
                break;
            case '/':
                display.value += '/';
                break;
            case '+':
                display.value += '+';
                break;
            case '-':
                display.value += '-';
                break;
            default:
                display.value += value;
                break;
        }
    });
});

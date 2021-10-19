var isCheckedWithGlobalVariable = false;
var elements = document.querySelectorAll('input[type=checkbox]');
for (var i = 0; i < elements.lenght; i++) {
    elements[i].onclick = function() {
        if (this.checked == true) {
            // checked
            isCheckedWithGlobalVariable = true;
        }
    };
}
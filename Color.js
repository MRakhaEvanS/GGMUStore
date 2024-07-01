document.querySelectorAll('input[name="color"]').forEach((radio) => {
    radio.addEventListener('change', function() {
        document.querySelectorAll('input[name="color"] + label').forEach((label) => {
            label.style.border = '2px solid transparent';
        });
        this.nextElementSibling.style.border = '2px solid black';
    });
});

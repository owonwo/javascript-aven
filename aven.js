
window.addEventListener('load', () => {
    let inputBoxes = document.querySelectorAll('.fancy-input');

    inputBoxes.forEach(function(inputBox) {

        let input = inputBox.children[1];
        let label = inputBox.children[0];
        let closeIconBe = inputBox.children[2];

        input.addEventListener('focus', () =>{

            inputBox.classList.add('focused');

            label.classList.add('float-label')

            inputBox.classList.add('show-icon');
            
        });

        input.addEventListener('blur', () =>{
            console.log('bluring', input.value)
            if(input.value === "") {
                inputBox.classList.remove('focused');    
                label.classList.remove('float-label');
                inputBox.classList.remove('show-icon');
            }
        });

        if(closeIconBe)
        closeIconBe.addEventListener('click', function (event) {
            event.stopPropagation()
            input.value = ''
            input.focus();
        })
    });
    
});

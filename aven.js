
window.addEventListener('load', () => {
    let inputBoxes = document.querySelectorAll('.fancy-input');

    // let input = inputBoxes.querySelector('input');


    inputBoxes.forEach(function(inputBox) {

        let childNodeArray = inputBox.children[1];
        let floatNodeArray = inputBox.children[0];


        let input = inputBox.querySelectorAll('input');
        

        childNodeArray.addEventListener('focus', () =>{

            inputBox.classList.add('focused');

            floatNodeArray.classList.add('float-label')

            inputBox.classList.add('show-icon');
            
        });

        childNodeArray.addEventListener('blur', () =>{

            if(input.value !== ""){
                inputBox.classList.remove('focused');       
            }         
        });

            
    });

      inputBoxes.forEach(function(inputDiv){
        let closeIconBe = inputDiv.children[2];

        // console.log(closeIconBe);

        if(closeIconBe){

            closeIconBe.addEventListener('click', function(event){
                let input = closeIconBe.parentElement.children[1];
            // console.log(input);
                event.stopPropagation()
                input.value = ''
                input.focus();
            })
        }


      })


   
    
});

function swapRandomCharacters(string) {
    const string_length = string.length; 
    let character1 = " "; 
    let character2 = " ";
    let indexOfFirstChar; 
    let indexOfSecondChar;

    while (character1 == " " || character2 == " ") {
        indexOfFirstChar = Math.floor(Math.random()*string_length); 

        indexOfSecondChar = Math.floor(Math.random()*string_length);  
        while (indexOfFirstChar == indexOfSecondChar) {
            indexOfSecondChar = Math.floor(Math.random()*string_length);  
        }

        //Indexes of first char and second char should now be different

        character1 = string[indexOfFirstChar]; 
        character2 = string[indexOfSecondChar]; 
    }

    //When both characters are not spaces, switch the characters
    let stringArray = string.split('');

    stringArray[indexOfFirstChar] = character2; 
    stringArray[indexOfSecondChar] = character1;

    string = stringArray.join('');

    return string; 
}

function scrambleString(string) {
    for (let i = 0; i < 200; i ++) {
        string = swapRandomCharacters(string);
    }

    return string; 
}

document.querySelectorAll('.scramble-text').forEach(function(text) {
    let originalContent = text.dataset.originalContent


    const intervalId = setInterval(function() {
        const scrambledString = scrambleString(originalContent);
        text.innerText = scrambledString;
        text.style.fontWeight = 'bold'; 
    }, 500);

    text.dataset.intervalId = intervalId;

    text.addEventListener('mouseenter', function() {
        clearInterval(text.dataset.intervalId);
        text.innerText = text.dataset.originalContent;
        text.style.fontWeight = 'normal'
    });
});

const grassDeletion = document.querySelector('#grassing');

if (grassDeletion) {
    grassDeletion.addEventListener('click', function() {
        grassDeletion.remove();
    });
}

const removeSpin = document.querySelector('.spin');

if (removeSpin) {
    removeSpin.addEventListener('mouseenter', function() {
        removeSpin.classList.remove('spin');
    });
}

const removeMove = document.querySelector('.moving');

if (removeMove) {
    removeMove.addEventListener('mouseenter', function() {
        removeMove.classList.remove('moving');
    });
}




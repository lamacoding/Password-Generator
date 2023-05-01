const capitalLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const smallLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialCharacters = ['!', '@', '#', '$', '%', '&', '*', '+', '-', '.', '/', '=', '?', '^', '_', '|', '~'];



let requestedPasswordLength = 15;

function renderPasswords() {
    document.getElementById("generated-password-1").textContent = generatePassword();
    document.getElementById("generated-password-2").textContent = generatePassword();
}

function generatePassword() {
    let hasCapitalLetters = document.getElementById("capitalLetters").checked;
    let hasSmallLetters = document.getElementById("smallLetters").checked;
    let hasNumbers = document.getElementById("numbers").checked;
    let hasSpecialCharacters = document.getElementById("specialCharacters").checked;

    if(!hasCapitalLetters && !hasSmallLetters && !hasNumbers && !hasSpecialCharacters) {
        console.error("Cannot generate password without a character set.");
        return;
    }

    let passwordCharacters = [];
    let generatedPassword = "";

    if(hasCapitalLetters) passwordCharacters = passwordCharacters.concat(capitalLetters);
    if(hasSmallLetters) passwordCharacters = passwordCharacters.concat(smallLetters);
    if(hasNumbers) passwordCharacters = passwordCharacters.concat(numbers);
    if(hasSpecialCharacters) passwordCharacters = passwordCharacters.concat(specialCharacters);

    for(let i = 0; i < requestedPasswordLength; i++) {
        generatedPassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    }

    return generatedPassword;
}

function copyPassword(pwID) {
    navigator.clipboard.writeText(document.getElementById("generated-password-" + pwID).textContent);

    document.getElementById("notification-copied").style.visibility = "visible";
    setTimeout(function() {
        document.getElementById("notification-copied").style.visibility = "hidden";
      }, 3000);
}
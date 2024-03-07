function passwordGenerator(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    
    let lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
    let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let numberChars = "0123456789";
    let symbolChars = "!^+%&/()=?_";
    
    let allowedChars = "";
    let password = "";

    if (includeLowercase) {
        allowedChars += lowercaseChars;
    }
    if (includeUppercase) {
        allowedChars += uppercaseChars;
    }
    if (includeNumbers) {
        allowedChars += numberChars;
    }
    if (includeSymbols) {
        allowedChars += symbolChars;
    }

    if (length <= 8) {
        return "password must at least be 8 characters long!";
    }
    if (allowedChars.length === 0) {
        return "At least one set of characters must be selected.";
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return `Generated password: ${password}`;

}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = false;

console.log(passwordGenerator(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols));
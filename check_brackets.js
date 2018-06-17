const brackets = {
    '(': { id: 0, type: open },
    ')': { id: 0, type: close },
    '[': { id: 1, type: open },
    ']': { id: 1, type: close },
    '{': { id: 2, type: open },
    '}': { id: 2, type: close }
};

const $enteredString = document.getElementById('enteredString');
const $checkButton = document.getElementById('checkString');
const $result = document.getElementById('result');

function bracketTester(string) {
    let stack = [];
    let currentBracket;
    for (let i = 0; i < string.length; i++) {
        if (brackets.hasOwnProperty(currentBracket = string.charAt(i))) {
            if (brackets[currentBracket].type === open) {
                stack.push(brackets[currentBracket].id);
            }
            else if (stack.length === 0 || stack.pop() !== brackets[currentBracket].id) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

function setInvalidMessage() {
    $result.innerHTML = 'Invalid';
    $result.classList.remove('valid');
    $result.classList.add('invalid');
}

function setValidMessage() {
    $result.innerHTML = 'Valid';
    $result.classList.remove('invalid');
    $result.classList.add('valid');
}

$checkButton.onclick = function () {
    if(bracketTester($enteredString.value)){
        setValidMessage();
    } else {
        setInvalidMessage();
    }
};
const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");
let current = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        current = checking(value);
        display(current);
    });
});

function checking(value) {
    if (['+', '-', '*', '/','.','%'].includes(value)) {
        current += value;
        return current;
    } else if (!isNaN(parseFloat(value))) {
        current += value;
        return current;
    } else if (['CE', 'DE'].includes(value)) {
        return removal(value);
    } else if (value === '=') {
        return calculate();
    }
}

function removal(value) 
{
    if (value === 'CE') {
        current = "";
    } else if (value === 'DE') {
        current = current.slice(0, -1);
    }
    return current;
}

function calculate() 
{
    try {
        current = eval(current);
        return current;
    } catch (error) {
        return 'Error';
    }
}

function display(todisplay)
{
    result.value = todisplay;
}
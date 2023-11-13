
function appendToOutput(value) {
    const output = document.getElementById('output');
    output.value = output.value === '0' ? value : output.value + value;
}

function clearOutput() {
    document.getElementById('output').value = '0';
}

function calculateResult() {
    try {
        const output = document.getElementById('output');
        output.value = eval(output.value);
    } catch (error) {
        document.getElementById('output').value = 'Error';
    }
}

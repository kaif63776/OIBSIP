document.getElementById('convertBtn').addEventListener('click', function() {
    const tempValueInput = document.getElementById('tempValue').value;
    const tempUnit = document.getElementById('tempUnit').value;
    const errorMsg = document.getElementById('errorMsg');

    // Clear previous error and results
    errorMsg.textContent = '';
    document.getElementById('resCelsius').textContent = '--';
    document.getElementById('resFahrenheit').textContent = '--';
    document.getElementById('resKelvin').textContent = '--';

    // Input validation check
    if (tempValueInput === '' || isNaN(tempValueInput)) {
        errorMsg.textContent = 'Please enter a valid numeric temperature value.';
        return;
    }

    const val = parseFloat(tempValueInput);
    let celsius, fahrenheit, kelvin;

    // Conversion logic based on chosen unit
    if (tempUnit === 'celsius') {
        if (val < -273.15) {
            errorMsg.textContent = 'Error: Temperature cannot be below Absolute Zero (−273.15°C)!';
            return;
        }
        celsius = val;
        fahrenheit = (val * 9/5) + 32;
        kelvin = val + 273.15;
    } 
    else if (tempUnit === 'fahrenheit') {
        if (val < -459.67) {
            errorMsg.textContent = 'Error: Temperature cannot be below Absolute Zero (−459.67°F)!';
            return;
        }
        celsius = (val - 32) * 5/9;
        fahrenheit = val;
        kelvin = (val - 32) * 5/9 + 273.15;
    } 
    else if (tempUnit === 'kelvin') {
        if (val < 0) {
            errorMsg.textContent = 'Error: Temperature cannot be below Absolute Zero (0K)!';
            return;
        }
        kelvin = val;
        celsius = val - 273.15;
        fahrenheit = (val - 273.15) * 9/5 + 32;
    }

    // Displaying rounded results simultaneously
    document.getElementById('resCelsius').textContent = celsius.toFixed(2) + ' °C';
    document.getElementById('resFahrenheit').textContent = fahrenheit.toFixed(2) + ' °F';
    document.getElementById('resKelvin').textContent = kelvin.toFixed(2) + ' K';
});
function convertir() {
    const grados = parseFloat(document.getElementById("grados").value);
    const tipoConversion = document.getElementById("tipo").value;
    let resultado = "";
    let formulaImg = "";

    if (isNaN(grados)) {
        resultado = "Por favor, ingrese una cantidad válida de grados.";
    } else {
        if (tipoConversion === "celsiusToFahrenheit") {
            const fahrenheit = (grados * 9/5) + 32;
            resultado = `${grados}°C = ${fahrenheit.toFixed(2)}°F`;
            formulaImg = "celcuis a farenheit.PNG";
        } else if (tipoConversion === "fahrenheitToCelsius") {
            const celsius = (grados - 32) * 5/9;
            resultado = `${grados}°F = ${celsius.toFixed(2)}°C`;
            formulaImg = "farenheit a celcius.PNG"; 
        }
    }

    document.getElementById("resultado").innerHTML = `
        <p>${resultado}</p>
        <img src="${formulaImg}" alt="Fórmula de conversión" style="max-width: 100%; height: auto;">
    `;
}

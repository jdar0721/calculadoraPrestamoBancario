function calcularCuota(){
    const monto = parseFloat(document.getElementById("monto").value);
    const Tipoprestamo = parseInt(document.getElementById("Tipoprestamo").value);
    const plazo = parseInt(document.getElementById("plazo").value);
    let tasaInteres = 0;
    let plazoMaximo = 0;

    switch (Tipoprestamo){
        case 1:
            tasaInteres = 0.05
            plazoMaximo = 5
            break;
        case 2: 
            tasaInteres = 0.03
            plazoMaximo = 20
            break;
        case 3:
            tasaInteres = 0.04
            plazoMaximo = 7
            break;
            default: 
            document.getElementById("resultado").innerHTML = "<p class='error'> Tipo de préstamo no válido. 'Seleccione uno de los tres tipos de préstamo' </p>";
            return;
    }
    if (plazo <= 0 || plazo > plazoMaximo){
        document.getElementById("resultado").innerHTML = "<p class='error'> ERROR: El plazo de ingreso no es válido para este tipo de préstamo.</p>";
        return;
    }

    const cuotaMensual = (monto * (1 + tasaInteres * plazo)) / (plazo * 12);

    document.getElementById("resultado").innerHTML = `<p>La cuota mensual a pagar es: <strong>${cuotaMensual.toFixed(2)}</strong></p>`;


}   

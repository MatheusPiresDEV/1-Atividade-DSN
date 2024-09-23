function calcular() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var n3 = parseFloat(document.getElementById("n3").value);
    var res = document.getElementById("resp");
    var soma = n1 + n2 + n3
    res.innerHTML = soma.toFixed(2)
}
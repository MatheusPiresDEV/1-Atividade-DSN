function rodor() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var resp = document.getElementById("resp"); 

    if (n1 >= 80 && n1 <= 120) {
        resp.innerHTML = "Multa -> media"; 
    }
    if(n1 >= 121){
        resp.innerHTML = "Multa -> grave"; 
    }
    else{
        resp.innerHTML = "👍"; 
    }
}
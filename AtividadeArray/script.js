var array = []

function adicionar (){
   var n1 = document.getElementById("n1").value
   array.push(n1)
   document.getElementById("resp").innerText = array
}

function remover (){
   var n1 = document.getElementById("n1").value
   array.pop(n1)
   document.getElementById("resp").innerText = array
}
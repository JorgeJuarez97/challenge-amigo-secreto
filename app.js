let amigos = [];

function agregarAmigo() {
  let entradaAmigo = document.getElementById("amigo").value;

  if (entradaAmigo) {
    amigos.push(entradaAmigo);
    limpiarInput();
  } else {
    alert("Por favor, inserte un nombre");
  }
  return;
}

function limpiarInput() {
  document.getElementById("amigo").value = "";
  return;
}

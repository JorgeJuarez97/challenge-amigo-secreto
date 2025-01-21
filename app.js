let amigos = [];

function agregarAmigo() {
  let entradaAmigo = document.getElementById("amigo").value;

  if (entradaAmigo) {
    amigos.push(entradaAmigo);
    agregarAmigoLista();
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

function agregarAmigoLista() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let elementoLista = document.createElement("li");
    elementoLista.textContent = amigos[i];
    listaAmigos.appendChild(elementoLista);
  }
  return;
}

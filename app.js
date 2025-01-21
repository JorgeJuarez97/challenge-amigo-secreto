// Variable donde iran agregados los nombres de los amigos
let amigos = [];

// Funcion  para agregar amigo
function agregarAmigo() {
  let entradaAmigo = document.getElementById("amigo").value;

  // Verifica si el input no esta vacio
  if (entradaAmigo) {
    // Si se realizo un sorteo, limpia la lista "RESULTADO" del HTML
    limpiarLista("resultado", "");

    // Agrega el nombre del amigo a la lista "amigos", actualiza la lista y limpia el input
    amigos.push(entradaAmigo);
    agregarAmigoLista();
    limpiarInput();
  } else {
    // Si el input esta vacio, muestra un mensaje de error
    alert("Por favor, inserte un nombre");
  }
  return;
}

// Funcion para limpiar el input
function limpiarInput() {
  document.getElementById("amigo").value = "";
  return;
}

// Funcion para actualizar la lista de amigos
function agregarAmigoLista() {
  limpiarLista("listaAmigos", "");

  // Recorre el array de amigos, crea un eleminto "li" para cada uno y lo agregar al HTML como hijo de "listaAmigos"
  for (let i = 0; i < amigos.length; i++) {
    let elementoLista = document.createElement("li");
    elementoLista.textContent = amigos[i];
    listaAmigos.appendChild(elementoLista);
  }
  return;
}

// Funcion para sortear los nombres agregados en el array de amigos
function sortearAmigo() {
  // Verifica que el array tenga nombres agregados
  if (amigos.length) {
    // Al presionar el boton sortear, limpa la lista de nombres del HTML
    limpiarLista("listaAmigos", "");

    // Genera un numero random entre 0 y la cantidad de amigos agregados
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Agrega el nombre del amigo sorteado a la lista "resultado" del HTML
    let elementoResultado = document.createElement("p");
    elementoResultado.textContent = `El amigo sorteado es: ${amigoSorteado}`;
    resultado.appendChild(elementoResultado);

    // Limpia el array de amigos
    amigos = [];
  } else {
    // Si no hay nombres agregados, muestra un mensaje de error
    alert("No hay amigos para sortear");
  }
  return;
}

// Funcion para limpiar listas del HTML
function limpiarLista(id, contenido) {
  let listas = document.getElementById(id);
  listas.innerHTML = contenido;
  return;
}

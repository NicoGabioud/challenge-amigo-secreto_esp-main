// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema
// 

// Variables
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Si el campo está vacío, mostrar un mensaje de alerta
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    // Actualizar array de amigos ingresados
    amigos.push(nombre);
    // Verificar el nombre ingresado
    input.value = "";
    // Actualizar la lista
    agregarAmigosEnLista();
};
// Funcion para mostrar la lista de amigos en pantalla   
function agregarAmigosEnLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    amigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    // Verificar si hay amigos en la lista
    if (amigos.length === 0){
        alert ("No hay amigos para sortear. Por favor, añade al menos un amigo.");
    return;
    };
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // Obtener el amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    // Mostrar el resultado en pantalla
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
} 
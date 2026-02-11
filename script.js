// Base del algoritmo tipo CourseMash adaptado a impresión 3D

const modelos3D = [
    { nombre: "Soporte para celular", votos: 0 },
    { nombre: "Maceta geométrica", votos: 0 },
    { nombre: "Organizador de escritorio", votos: 0 },
    { nombre: "Figura articulada", votos: 0 },
    { nombre: "Llavero personalizado", votos: 0 },
    { nombre: "Soporte para auriculares", votos: 0 },
    { nombre: "Caja decorativa", votos: 0 },
    { nombre: "Porta cables", votos: 0 },
    { nombre: "Mini busto personalizado", votos: 0 },
    { nombre: "Molde para repostería", votos: 0 }
];

let indiceA;
let indiceB;

// Genera dos modelos aleatorios distintos
function generarComparacion() {
    indiceA = Math.floor(Math.random() * modelos3D.length);
    
    do {
        indiceB = Math.floor(Math.random() * modelos3D.length);
    } while (indiceA === indiceB);

    document.getElementById("titleA").innerText = modelos3D[indiceA].nombre;
    document.getElementById("titleB").innerText = modelos3D[indiceB].nombre;
}

// Cuando el usuario vota
function vote(opcion) {
    if (opcion === "A") {
        modelos3D[indiceA].votos++;
    } else {
        modelos3D[indiceB].votos++;
    }

    actualizarRanking();
    generarComparacion();
}

// Ordena y muestra el ranking
function actualizarRanking() {
    const lista = document.getElementById("ranking");
    lista.innerHTML = "";

    const ordenados = [...modelos3D].sort((a, b) => b.votos - a.votos);

    ordenados.forEach(modelo => {
        const li = document.createElement("li");
        li.innerText = modelo.nombre + " — " + modelo.votos + " votos";
        lista.appendChild(li);
    });
}

// Inicia el algoritmo
generarComparacion();
actualizarRanking();

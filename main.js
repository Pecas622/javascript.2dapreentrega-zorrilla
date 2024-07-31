const listaDeBotines = [
    {
        id: 1,
        nombre: "mercurial",
        color: "negro",
        marca: "nike",
    },
    {
        id: 2,
        nombre: "tiempo",
        color: "blanco",
        marca: "nike",
    },
    {
        id: 3,
        nombre: "top sala",
        color: "negro",
        marca: "adidas",
    },
    {
        id: 4,
        nombre: "top flex",
        color: "blanco",
        marca: "joma",
    },
];

class Botin {
    constructor(id, nombre, marca, color) {
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.color = color;
    }
}

// Menú de opciones:

let opcionElegida = parseInt(prompt(`Bienvenido a Peca Store. Ingrese una opción:
    
1. Agregar un botin.
2. Mostrar botines blancos.
3. Mostrar botines negros.
4. Buscar botin por nombre.(top flex,top sala, tiempo, mercurial).
5. Ver todos los botines.
Para salir, marque 0`));

function agregarBotin() {
    const id = listaDeBotines.length + 1;
    const nombre = prompt("Ingrese el nombre del botin");
    const color = prompt("Ingrese el color");
    const marca = prompt("Ingrese la marca");
    const nuevoBotin = new Botin(id, nombre, marca, color);
    listaDeBotines.push(nuevoBotin);
    alert("Agregado correctamente");
}

function mostrarBotinesPorColor(color) {
    const botinesFiltrados = listaDeBotines.filter(botin => {
        console.log(`Comparando ${botin.color} con ${color}`);
        return botin.color === color;
    });
    if (botinesFiltrados.length > 0) {
        console.log(`Botines de color ${color}: `, botinesFiltrados);
        alert(`Mirá en la consola los botines de color ${color}`);
    } else {
        alert(`No se encontraron botines de color ${color}`);
    }
}

function buscarBotinPorNombre(nombre) {
    const botinEncontrado = listaDeBotines.find(botin => {
        console.log(`Comparando ${botin.nombre} con ${nombre}`);
        return botin.nombre === nombre;
    });
    if (botinEncontrado) {
        console.log("Botin encontrado: ", botinEncontrado);
        alert("Mirá en la consola el botin que buscabas");
    } else {
        alert(`No se encontró un botin con el nombre ${nombre}`);
    }
}


while (opcionElegida !== 0) {
    switch (opcionElegida) {
        case 1:
            agregarBotin();
            break;
        case 2:
            mostrarBotinesPorColor("blanco");
            break;
        case 3:
            mostrarBotinesPorColor("negro");
            break;
        case 4:
            const nombreABuscar = prompt("Ingrese el nombre del botin a buscar (top flex,top sala, tiempo, mercurial)");
            buscarBotinPorNombre(nombreABuscar);
            break;
        case 5:
            console.log("Lista completa de botines: ", listaDeBotines);
            alert("Mirá en la consola todos los botines");
            break;
        default:
            alert("Opción no válida");
            break;
    }
    opcionElegida = parseInt(prompt(`Bienvenido a Peca Store. Ingrese una opción:
    
1. Agregar un botin.
2. Mostrar botines blancos.
3. Mostrar botines negros.
4. Buscar botin por nombre(top flex,top sala, tiempo, mercurial).
5. Ver todos los botines.
Para salir, marque 0`));
}


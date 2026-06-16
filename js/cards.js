const contenedor = document.getElementById("contenedor-cards");
const cardsCreadas = JSON.parse(localStorage.getItem("misCards")) || [];

function pintarCards() {
    contenedor.innerHTML = "";
    cardsCreadas.forEach(card => {
        const nuevaCard = document.createElement("div");
        nuevaCard.classList.add("card");

        // Aplicamos el color guardado directamente al fondo del contenedor de la card
        if (card.color) {
            nuevaCard.style.backgroundColor = card.color;
        }

        nuevaCard.innerHTML = `
            <p id="nombre2" class="imprimir">Nombre: ${card.nombre}</p> 
            <p id="apellido2" class="imprimir">Apellido: ${card.apellido}</p> 
            <p id="profesion2" class="imprimir">Profesion: ${card.profesion}</p> 
            <img id="img-imprimir" src="${card.imagen || ''}" alt="Imagen de ${card.nombre}">
        `;

        contenedor.appendChild(nuevaCard);
    });
}

pintarCards();

console.log("JavaScript cargado...")
//inputs
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const profesion = document.querySelector(".select")
///////
const color = document.getElementById("color")
///outputs//
const imprimirNombre = document.getElementById("nombre2")
const imprimirApellido = document.getElementById("apellido2")
const imprimirProfesion = document.getElementById("profesion2")
/////
///funciones
 nombre.addEventListener("input", (e) =>{
    imprimirNombre.textContent = `Nombre: ${e.target.value}`
 })
 apellido.addEventListener("input",(e)=>{
     imprimirApellido.textContent = `Apellido: ${e.target.value}`
 })
profesion.addEventListener("change", (e)=>{
    imprimirProfesion.textContent = `Profesion: ${e.target.value}`
})

const card = document.querySelector(".card2");
color.addEventListener("input",(e)=> {
    card.style.backgroundColor= e.target.value
})

const insertImg = document.getElementById("img-imprimir");
const imgSelect = document.getElementById("img");

imgSelect.addEventListener("change",(e)=>{
    ///guardamos la imagen en una variable
    const img = e.target.files[0];

    if(img){
        //esta funcion basicamente nos permite crear un objeto para poder mostrarla en la pagina
        insertImg.src = URL.createObjectURL(img)
    }
})
const cardsCreadas = JSON.parse(localStorage.getItem("misCards")) || [];

const crear = document.getElementById("crear");

crear.addEventListener("click", () => {
    const nuevaCard = {
        nombre: imprimirNombre.textContent,
        apellido: imprimirApellido.textContent,
        profesion: imprimirProfesion.textContent,
        color:card.style.backgroundColor,
        img:insertImg.src
    };

    cardsCreadas.push(nuevaCard);

    // 2. Guardamos el array actualizado en el disco local convertido en texto
    localStorage.setItem("misCards", JSON.stringify(cardsCreadas));

    console.log("Guardado en LocalStorage:", cardsCreadas);
});


const seccion = document.getElementsByClassName("section");

const divContenedor = document.createElement("div");
divContenedor.id = "productosIndex";
seccion[0].appendChild(divContenedor);
let tituloMenu = document.createElement("h2");
tituloMenu.id = "menu__title";
tituloMenu.innerHTML = "Elegí tu gustito del día";
divContenedor.appendChild(tituloMenu);
const productos = [
  {
    id: 1,
    imagen: "napo.jpg",
    name: "jamon crudo con provolone",
    precio: 1400,
  },
  {
    id: 2,
    imagen: "muzzarella.jpg",
    name: "Muzzarella",
    precio: 1000,
  },
  { id: 3, imagen: "chapignon.jpeg", name: "Champignon", precio: 1600 },
  {
    id: 4,
    imagen: "chapignon.jpeg",
    name: "Especial Albahaca",
    precio: 1300,
  },
  { id: 5, imagen: "napo.jpg", name: "Napolitana", precio: 1350 },
];
const carrito = [];
for (let cardItem of productos) {
  let cards = document.createElement("div");
  cards.className = "cardsStyle";
  cards.innerHTML = `<img class= cardImage src= imagenes/${cardItem.imagen}
  />
    <h3 class = "card__title"> ${cardItem.name}</h3> 
    <p class = "card__precio" >  $${cardItem.precio}</p>
    <button class= "comprar__btn" id= "${cardItem.id}">Comprar</button>
    
    `;
  seccion[0].appendChild(cards);
}
//captura del botón en el DOM
let botonesComprar = document.querySelectorAll(".comprar__btn");
console.log(botonesComprar);
//recorro los botones de los productos y les asigno el evento para que al hacer click, agregue los productos al carrito
botonesComprar.forEach((botonComprar) => {
  botonComprar.addEventListener("click", (e) => {
    let idBoton = parseInt(e.target.id); //acá el id pasa de string a número
    let productoEncontrado = buscarProducto(idBoton); //en base al número (orieginalmente del id del botón) busca el producto en el array
    agregarProducto(productoEncontrado); //pushea el objeto (producto) al array (carrito)
    console.log(
      `La pizza de: ${productoEncontrado.name} fue agregada al carrito de compras`
    );
  });
});
function buscarProducto(id) {
  return productos.find((elemento) => elemento.id == id);
}
function agregarProducto(producto) {
  carrito.push(producto);
  console.log(carrito);
}

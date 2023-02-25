/* let ancho = screen.width
console.log(ancho); */

//creamos la funcion para generar las cartas
function createTemplate(){
    //a continuacion creamos la variable en la que se almacenan los datos
    let events = data.events
    //crear un array vacio para guardar las cards
    let templates = []
    //generamos el loop pra recorrer los eventos de data y agregarlos al arreglo templates
    for(let one of events){
        templates.push(template(one.image, one.name, one.description, one.price))
    }
    console.log(templates);
    let selector = document.getElementById("card-container")
    selector.innerHTML = templates.join("")
}
createTemplate()
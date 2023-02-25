let template = (imagen, titulo, descripcion, precio) => {
    return `
        <div class="tarjeta">
            <a href="./details.html"><img class="img-tarjeta" src="${imagen}" alt="Cinema"></a>
            <h3>${titulo}</h3>
            <p class="descripcion">${descripcion}</p>
            <div class="pie-tarjeta">
                <p class="p-tarjeta">Price: ${precio}</p>
                <a class="p-tarjeta info" href="./details.html">More Info</a>
            </div>
        </div>`;
}
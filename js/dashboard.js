/*
    SI YO INGRESARÁ DIRECTAMENTE
    A DASHBOARD.HTML 
    SIN HABERME LOGEADO
    DEBERIA DE DEVOLVERME A INDEX.HTML

    --> codigo parecido dentro de profefavorito
    --> localStorage()
*/
const donacion = [
    {   
        "id": "12",
        "uuid": "15414581asda1a1x",
        "nombre": "Donación en Real Plaza",
        "detalle": "La donación se realizó en Real plaza La Marina a las 9:30pm",
        "productos": [
            {
                "SKU": "14815",
                "nombre": "Hoy fui a donar sangre en el hospital local. Es gratificante saber que mi donación podría salvar vidas y hacer una diferencia real en la comunidad.",
                "imagen":"../assets/img/caso.jpg"
            },
            {
                "SKU": "145811",
                "nombre": "Participé en una campaña de donación de sangre en la que doné sangre por primera vez. Sentí un gran sentido de deber y satisfacción al saber que mi sangre podría ayudar a quienes la necesitan desesperadamente.",
                "imagen":"../assets/img/caso2.jpeg"
            },
            {
                "SKU": "148112",
                "nombre": "Doné sangre hoy en respuesta a una llamada de emergencia por escasez de suministros en los bancos de sangre locales. Es importante mantener los suministros de sangre para emergencias médicas y quirúrgicas.",
                "imagen":"../assets/img/caso3.jpg"
            }
        ]
    },
    {
        "id": "16",
        "uuid": "15414581ytytaaddq1",
        "nombre": "Donación en Monterrico",
        "detalle": "La Donación se realizo en Monterrico a las 7:20pm",
        "productos": [
            {
                "SKU": "177774",
                "nombre": "Hice una donación de sangre en memoria de un ser querido que necesitó transfusiones de sangre durante su tratamiento médico. Es mi manera de honrar su memoria y ayudar a otros que se enfrentan a situaciones similares.",
                "imagen":"../assets/img/caso.jpg"
            },
            {
                "SKU": "177771",
                "nombre": "Participé en una maratón de donación de sangre en mi comunidad. Fue inspirador ver a tanta gente dispuesta a dar de sí misma para ayudar a salvar vidas.",
                "imagen":"../assets/img/caso2.jpeg"
            },
            {
                "SKU": "177779",
                "nombre": "Doné sangre hoy como parte de mi compromiso de hacer una contribución regular a la comunidad. Aunque puede parecer un pequeño gesto, cada donación cuenta y puede marcar la diferencia.",
                "imagen":"../assets/img/caso3.jpg"
            }
        ]
    },
    {
        "id": "18",
        "uuid": "1566664514aa",
        "nombre": "Donación en Azangaro",
        "detalle": "La Donación se realizo en Azangaro a las 6:06pm",
        "productos": [
            {
                "SKU": "177774",
                "nombre": "Hice una donación de sangre como parte de un esfuerzo de la empresa en la que trabajo para fomentar la responsabilidad social corporativa. Es genial ver a mi empresa apoyar causas importantes como esta.",
                "imagen":"../assets/img/caso.jpg"
            },
            {
                "SKU": "177771",
                "nombre": "Participé en una campaña de donación de sangre en la universidad, donde animamos a los estudiantes a donar sangre para ayudar a los pacientes en los hospitales locales.",
                "imagen":"../assets/img/caso2.jpeg"
            },
            {
                "SKU": "177779",
                "nombre": "Hoy doné sangre como parte de mi rutina de donación regular. Es importante recordar que la necesidad de sangre es constante, no solo durante emergencias o desastres.",
                "imagen":"../assets/img/caso3.jpg"
            }
        ]
    }
];
//Imprimir esa lista de compras
const $misProductos = $("#misProductos");
donacion.forEach((donacion) => {
    //2. Crear una NUEVA URL donde usemos de parametro el ID
    const link = "producto.html?iddonacion="+donacion.id;
    const template = `
        <li class="collection-item avatar" data-id="${donacion.id}" data-uuid="${donacion.id}">
            <i class="material-icons circle red">collections</i>
            <span class="title">${donacion.nombre}</span>
            <p>
                ${donacion.detalle}        
            </p>
            <a href="${link}" class="waves-effect waves-light red btn btnIcon">
                <i class="material-icons">grade</i>
                Ver Recuerdo
            </a>
        </li>
    `;
    $misProductos.append(template);
});

/*
    3. En esa URL vamos a leer el parametro 
    e imprimir los datos de los productos
*/

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const iddonacion = params.get("iddonacion");
let misproductos = [];
if (iddonacion) {
    donacion.forEach((donacion) => {
        if (donacion.id == iddonacion) {
            const mytitle = "Historial de " + donacion.nombre;
            $("#myTitle").html(mytitle);
            misproductos = donacion.productos;           
        }
    });
    if (misproductos.length > 0) {
        misproductos.forEach((producto)=> {
            let imagenHTML = '<img src="' + producto.imagen + '" alt="' + producto.nombre + '" class="imagen-producto">';
            const template = `
                <li class="collection-item">
                   ${imagenHTML}
                   <p class="description">RECUERDO:</p>
                    <p class="nombre">${producto.nombre}</p>
                </li>
            `;
            $("#myProducts").append(template);
        });
    }

}

function verificarAutenticacion() {
    if (!localStorage.getItem("inicioSesion")) {
        location.href = "index.html";
    }
}
verificarAutenticacion();
//Cuando el usuario Cierre sesion se elimina la clave y el valor de inicioSesion y regresa al login
document.getElementById('cerrarSesion').addEventListener('click', function () {
    localStorage.removeItem("inicioSesion");
});

function verificarBotonDonacion() {
    if (!idDonacion) {
        location.href = "dashboard.html";
    }
}if (window.location.pathname.includes("producto.html")) {
    verificarBotonDonacion();
}

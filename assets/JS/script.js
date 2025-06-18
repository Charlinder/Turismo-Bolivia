const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

let index = 0;
const total = images.length;

function nextSlide() 
{
  index++;
  if (index >= total) {
    index = 0;
  }
  slides.style.transform = `translateX(${-index * 600}px)`; // ancho de cada imagen
}
setInterval(nextSlide, 3000); 
/* HISTORIA */

document.addEventListener('DOMContentLoaded', () => {
    const historiaTrack = document.querySelector('.historia-track');
    const dots = document.querySelectorAll('.dot');
    const slides = document.querySelectorAll('.historia-slide');

    let currentIndex = 0;
    
    function showSlide(index) {
        //distanciaDesplazado
        const slideWidth = slides[0].offsetWidth;
        historiaTrack.style.transform = `translateX(-${index * slideWidth}px)`;
        //actualiza el estado de los puntitos
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
        currentIndex = index;
    }
    // Añadir event listeners a los puntos
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
    //ajusta la imagen
    window.addEventListener('resize', () => {
        showSlide(currentIndex); //calcula la posición del slide actual
    });
    //muestra imgaen por defecto
    showSlide(0);
});


//departamento a seleccionar
document.addEventListener('DOMContentLoaded', () => {
    const destinosContenedor = document.getElementById('destinosContenedor');
    const departamentoTitulo = document.getElementById('departamentoTitulo');
    const pageTitle = document.getElementById('pageTitle');
    const loadingMessage = document.getElementById('loadingMessage');

    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    const departamentoSeleccionado = getUrlParameter('departamento');

    const datosDestinos = {
        la_paz: [
            {
                nombreLugar: "Tiwanaku",
                img: "/assets/IMG/LAPAZ-Tiwanaku.jpg",
                agenciaLink: "https://kantutaboliviatravel.com",
                agenciaNombre: "Kantuta Bolivia Travel",
                descripcion: "Ruinas arqueológicas preincaicas, con templos y pirámides. Civilización ancestral florecida entre 300-1000 d.C., precursor del Imperio Inca.",
                estrellasId: "1"
            },
            {
                nombreLugar: "Camino de la Muerte (Yungas)",
                img: "/assets/IMG/LAPAZ-Camino de la Muerte (Yungas).jpg",
                agenciaLink: "https://magriturismo.com",
                agenciaNombre: "Magri Turismo",
                descripcion: "Ruta de montaña popular para ciclismo extremo. Antigua ruta inca reinventada como sendero turístico.",
                estrellasId: "2"
            },
            {
                nombreLugar: "Mercado de las Brujas",
                img: "/assets/IMG/LAPAZ-mercado-de-las-brujas.jpg",
                agenciaLink: "https://www.traveltime.com.bo",
                agenciaNombre: "Travel Time",
                descripcion: "Mercado tradicional donde se venden pociones y rituales andinos. Herencia de prácticas aymara y quechua, que persisten desde la colonia.",
                estrellasId: "3"
            },
            {
                nombreLugar: "Cordillera Real",
                img: "/assets/IMG/LAPAZ-cordillera-Real.jpg",
                agenciaLink: "https://magriturismo.com",
                agenciaNombre: "Magri Turismo",
                descripcion: "Cordillera de más de 600 km, con nevados entre 5,500 m y 6,500 m. Parte de la división natural entre Andes y Amazonía; usada históricamente como ruta de paso ancestral.",
                estrellasId: "4"
            }
        ],
        pando: [
            {
                nombreLugar: "Lago Bay",
                img: "/assets/IMG/PANDO-Lago Bay.jpg",
                agenciaLink: "https://www.traveltime.com.bo",
                agenciaNombre: "Travel Time",
                descripcion: "Relájate en sus aguas serenas y observa aves exóticas; un lugar perfecto para desconectarse y sentir la magia de la Amazonía.",
                estrellasId: "pando1"
            },
            {
                nombreLugar: "Río Tahuamanu",
                img: "/assets/IMG/PANDO- Tahuamanu River.jpg",
                agenciaLink: "https://magriturismo.com",
                agenciaNombre: "Magri Turismo",
                descripcion: "Navega por sus aguas cristalinas y disfruta de la pesca, paseos en bote y paisajes selváticos únicos en la región.",
                estrellasId: "pando2"
            },
            {
                nombreLugar: "Parque Nacional Manuripi",
                img: "/assets/IMG/PANDO-Parque Nacional Manuripi-Heath.jpg",
                agenciaLink: "https://www.traveltime.com.bo",
                agenciaNombre: "Travel Time",
                descripcion: "Adéntrate en un paraíso de biodiversidad: ríos, lagunas y exuberante flora amazónica que te conectan con la naturaleza pura.",
                estrellasId: "pando3"
            },
            {
                nombreLugar: "Cobija",
                img: "/assets/IMG/PANDO-CobijaTown.jpg",
                agenciaLink: "https://www.traveltime.com.bo",
                agenciaNombre: "Travel Time",
                descripcion: "Descubre la capital amazónica de Bolivia, un rincón cálido rodeado de selva, ideal para vivir la hospitalidad y la tranquilidad del norte.",
                estrellasId: "pando4"
            }
        ],
        beni: [
            {
                nombreLugar: "Reserva de la Biosfera Beni",
                img: "/assets/IMG/BENI-Reserva de la Biosfera Beni.webp",
                agenciaLink: "#",
                agenciaNombre: "Beni Salvático",
                descripcion: "Explora uno de los humedales más ricos del planeta, santuario de fauna silvestre y paisajes que combinan llanuras, ríos y bosques tropicales.",
                estrellasId: "beni1"
            },
            {
                nombreLugar: "Lancha Tahuamanu",
                img: "/assets/IMG/BENI-Lancha Tahuamanu.jpg",
                agenciaLink: "#",
                agenciaNombre: "Agencia Beni 2",
                descripcion: "Embárcate en una aventura fluvial para admirar delfines rosados, aves y la exuberancia de los ríos amazónicos de Beni.",
                estrellasId: "beni2"
            },
            {
                nombreLugar: "Parque el Pantanal Beni",
                img: "/assets/IMG/BENI-parque-el-pantanal-beni.jpg",
                agenciaLink: "#",
                agenciaNombre: "Agencia Beni 3",
                descripcion: "Descubre un oasis natural lleno de lagunas y fauna exótica, ideal para caminatas, observación de aves y turismo ecológico.",
                estrellasId: "beni3"
            },
            {
                nombreLugar: "Riberalta",
                img: "/assets/IMG/BENI-Riberalta.jpg",
                agenciaLink: "#",
                agenciaNombre: "Agencia Beni 4",
                descripcion: "Conocida como la “Perla del Acre”, es el destino perfecto para disfrutar de la cultura amazónica, su gastronomía y los atardeceres junto a sus ríos.",
                estrellasId: "beni4"
            }
        ],
        oruro: [
            {
                nombreLugar: "Chullpares de Macaya",
                img: "/assets/IMG/ORURO-chullpares-de-macaya.jpg",
                agenciaLink: "#",
                agenciaNombre: "Oruro Cultura",
                descripcion: "Visita antiguas torres funerarias prehispánicas rodeadas de paisajes altiplánicos, un viaje a la memoria de las culturas andinas.",
                estrellasId: "oruro1"
            },
            {
                nombreLugar: "Ciudadela de Alcaya",
                img: "/assets/IMG/ORURO-CiudadeladeAlcaya.jpg",
                agenciaLink: "#",
                agenciaNombre: "Agencia Oruro 2",
                descripcion: "Recorre un impresionante sitio arqueológico con restos de viviendas y momias milenarias que narran la historia de pueblos ancestrales.",
                estrellasId: "oruro2"
            },
            {
                nombreLugar: "Museo Ferroviario de Machacamarca",
                img: "/assets/IMG/ORURO-Museo Ferroviario de Machacamarca.jpg",
                agenciaLink: "#",
                agenciaNombre: "Agencia Oruro 3",
                descripcion: "Descubre locomotoras y vagones históricos que cuentan la importancia del ferrocarril en el desarrollo de Oruro y Bolivia.",
                estrellasId: "oruro3"
            },
            {
                nombreLugar: "Parque Nacional Sajama",
                img: "/assets/IMG/ORURO-ParqueNacionalSajama.jpg",
                agenciaLink: "#",
                agenciaNombre: "Agencia Oruro 4",
                descripcion: "Déjate maravillar por la montaña más alta de Bolivia, aguas termales y paisajes únicos de puna andina llenos de vida silvestre.",
                estrellasId: "oruro4"
            }
        ],
        cochabamba: [
            {
                nombreLugar: "Incallajta",
                img: "/assets/IMG/COCHABAMBA-Incallajta.jpg",
                agenciaLink: "#",
                agenciaNombre: "Cochabamba Inca",
                descripcion: "Descubre la imponente fortaleza inca más grande de Bolivia, rodeada de paisajes verdes y misterio ancestral.",
                estrellasId: "cocha1"
            },
            {
                nombreLugar: "Cristo de la Concordia",
                img: "/assets/IMG/COCHABAMBA-Cristo de la Concordia.jpg",
                agenciaLink: "#",
                agenciaNombre: "Agencia Cocha 2",
                descripcion: "Asciende al Cristo más alto de Sudamérica y contempla la mejor vista panorámica de la ciudad de Cochabamba.",
                estrellasId: "cocha2"
            },
            {
                nombreLugar: "Parque Nacional Carrasco",
                img: "/assets/IMG/COCHABAMBA-Parque Nacional Carrasco.jpg",
                agenciaLink: "#",
                agenciaNombre: "Agencia Cocha 3",
                descripcion: "Adéntrate en un paraíso de selva nubosa, cascadas y senderos llenos de aves y mariposas.",
                estrellasId: "cocha3"
            },
            {
                nombreLugar: "Parque Nacional Tunari",
                img: "/assets/IMG/COCHABAMBA-Parque Nacional Tunari.jpg",
                agenciaLink: "#",
                agenciaNombre: "Agencia Cocha 4",
                descripcion: "Respira aire puro en montañas que resguardan la biodiversidad андina, ideal para caminatas y avistamiento de fauna.",
                estrellasId: "cocha4"
            }
        ],
        santa_cruz: [
            {
                nombreLugar: "Fuerte de Samaipata",
                img: "/assets/IMG/SANTA_CRUZ-Fuerte-de-Samaipata-Bolivia.jpg",
                agenciaLink: "#",
                agenciaNombre: "Samaipata Expediciones",
                descripcion: "Admira este sitio arqueológico único, una gran roca esculpida que combina legado preinca e inca en medio de montañas exuberantes.",
                estrellasId: "scz1"
            },
            {
                nombreLugar: "Parque Ecológico Yvaga Guazu",
                img: "/assets/IMG/SANTA_CRUZ-Parque Ecólogico Yvaga Guazu.jpg",
                agenciaLink: "#",
                agenciaNombre: "Agencia SCZ 2",
                descripcion: "Explora jardines, senderos y espacios para aprender y conectarte con la naturaleza cruceña en familia.",
                estrellasId: "scz2"
            },
            {
                nombreLugar: "Parque Nacional Noel Kempff Mercado",
                img: "/assets/IMG/SANTA_CRUZ-Parque Nacional Noel Kempff Mercado.jpg",
                agenciaLink: "#",
                agenciaNombre: "Agencia SCZ 3",
                descripcion: "Maravíllate con cascadas majestuosas, selva virgen y una de las zonas más biodiversas de Bolivia.",
                estrellasId: "scz3"
            },
            {
                nombreLugar: "Ruta del Che",
                img: "/assets/IMG/SANTA_CRUZ-ruta-del-che-magri-4.jpg",
                agenciaLink: "#",
                agenciaNombre: "Agencia SCZ 4",
                descripcion: "Recorre pueblos e historias que reviven los últimos pasos del Che, entre paisajes rurales y cultura viva.",
                estrellasId: "scz4"
            }
        ],
        potosi: [
            {
                nombreLugar: "Salar de Uyuni",
                img: "/assets/IMG/POTOSI-UYUNI.jpg",
                agenciaLink: "#",
                agenciaNombre: "Uyuni Adventures",
                descripcion: "Camina sobre el desierto de sal más grande del mundo, un espejo natural que regala paisajes irreales.",
                estrellasId: "potosi1"
            },
            {
                nombreLugar: "Casa de la Moneda",
                img: "/assets/IMG/POTOSI-Casa de la Moneda.jpg",
                agenciaLink: "#",
                agenciaNombre: "Agencia Potosi 2",
                descripcion: "Visita la histórica fábrica colonial de monedas y sumérgete en la rica herencia minera de Potosí.",
                estrellasId: "potosi2"
            },
            {
                nombreLugar: "Parque Nacional Torotoro",
                img: "/assets/IMG/POTOSI-Torotoro.jpg",
            agenciaLink: "#",
                agenciaNombre: "Agencia Potosi 3",
                descripcion: "Explora cavernas, cañones y huellas de dinosaurios en un parque que combina aventura y fósiles.",
                estrellasId: "potosi3"
            },
            {
                nombreLugar: "Cerro Rico y la Ciudad de Potosí",
                img: "/assets/IMG/POTOSI-cerro rico y ciudad.jpg",
                agenciaLink: "#",
                agenciaNombre: "Agencia Potosi 4",
                descripcion: "Contempla la montaña legendaria que impulsó la riqueza colonial, símbolo de historia minera viva.",
                estrellasId: "potosi4"
            }
        ],
        chuquisaca: [
            {
                nombreLugar: "Casa de la Libertad",
                img: "/assets/IMG/CHUQUISACA-CasaLibertad.jpg",
                agenciaLink: "#",
                agenciaNombre: "Sucre Histórico",
                descripcion: "Visita la cuna de la independencia boliviana, donde se firmó el Acta de 1825; un tesoro histórico en el corazón de Sucre.",
                estrellasId: "chuqui1"
            },
            {
                nombreLugar: "Museo Nacional de Etnografía y Folklore (MUSEF)",
                img: "/assets/IMG/CHUQUISACA-museo-nacional-de-etnografia-y-folklore-1.jpg",
                agenciaLink: "#",
                agenciaNombre: "Agencia Chuqui 2",
                descripcion: "Admira piezas únicas que preservan la riqueza cultural, artesanal y festiva de los pueblos bolivianos.",
                estrellasId: "chuqui2"
            },
            {
                nombreLugar: "Templo de San Lázaro",
                img: "/assets/IMG/CHUQUISACA-Templo_de_San_Lázaro_Sucre-Bolivia.jpg",
                agenciaLink: "#",
                agenciaNombre: "Agencia Chuqui 3",
                descripcion: "Conoce uno de los templos más antiguos de Sucre, lleno de historia colonial y detalles arquitectónicos fascinantes.",
                estrellasId: "chuqui3"
            },
            {
                nombreLugar: "Valle de los Ancestros",
                img: "/assets/IMG/CHUQUISACA-Valle de los Ancestros.jpg",
                agenciaLink: "#",
                agenciaNombre: "Agencia Chuqui 4",
                descripcion: "Sumérgete en paisajes espectaculares y sitios arqueológicos que revelan la herencia milenaria de la región.",
                estrellasId: "chuqui4"
            }
        ],
        tarija: [
            {
                nombreLugar: "Valle de los Cintis",
                img: "/assets/IMG/TARIJA-Valle de los Cintis.png",
                agenciaLink: "#",
                agenciaNombre: "Tarija Vinos",
                descripcion: "Recorre viñedos y pueblos coloniales rodeados de montañas y sabores tradicionales.",
                estrellasId: "tarija1"
            },
            {
                nombreLugar: "Casa Dorada",
                img: "/assets/IMG/TARIJA-Casa Dorada.jpg",
                agenciaLink: "#",
                agenciaNombre: "Agencia Tarija 2",
                descripcion: "Déjate cautivar por esta mansión ecléctica de fines del siglo XIX, símbolo de la elegancia tarijeña.",
                estrellasId: "tarija2"
            },
            {
                nombreLugar: "Ruta del Vino",
                img: "/assets/IMG/TARIJA-Ruta del Vino.jpg",
                agenciaLink: "#",
                agenciaNombre: "Agencia Tarija 3",
                descripcion: "Disfruta tours por bodegas locales, degusta vinos de altura y descubre el encanto vitivinícola de Tarija.",
                estrellasId: "tarija3"
            },
            {
                nombreLugar: "Museo Nacional Paleontológico Arqueológico",
                img: "/assets/IMG/TARIJA-Museo Nacional Paleontológico Arqueológico de Tarija.jpg",
                agenciaLink: "#",
                agenciaNombre: "Agencia Tarija 4",
                descripcion: "Explora restos fósiles y hallazgos arqueológicos que cuentan la prehistoria de la región.",
                estrellasId: "tarija4"
            }
        ]
    };

    function capitalizeFirstLetter(string) {
        if (!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1).replace(/_/g, ' ');
    }

    loadingMessage.style.display = 'block';
    destinosContenedor.innerHTML = '';

    if (departamentoSeleccionado && datosDestinos[departamentoSeleccionado]) {
        const destinos = datosDestinos[departamentoSeleccionado];
        const tituloFormateado = capitalizeFirstLetter(departamentoSeleccionado);

        departamentoTitulo.textContent = `Destinos en ${tituloFormateado}`;
        pageTitle.textContent = `Destinos en ${tituloFormateado} - Turísmo Bolivia`;

        destinos.forEach(destino => {
            const destinoDiv = document.createElement('div');
            destinoDiv.classList.add('destino');
            //estructura html desde js
            destinoDiv.innerHTML = `
                <div class="destino-nombre-lugar">
                    <h3>${destino.nombreLugar}</h3>
                </div>
                <div class="destino-imagen-wrapper">
                    <img src="${destino.img}" alt="Imagen de ${destino.nombreLugar}" class="imagen-destino">
                </div>
                <div class="destino-agencia">
                    <a href="${destino.agenciaLink}" class="link-agencia" target="_blank" rel="noopener noreferrer">${destino.agenciaNombre}</a>
                </div>
                <div class="destino-descripcion-wrapper">
                    <p class="descripcion-destino">${destino.descripcion}</p>
                </div>
                <div class="estrellas" data-id="${destino.estrellasId}"></div>
            `;
            destinosContenedor.appendChild(destinoDiv);
        });

        loadingMessage.style.display = 'none';

        initializeStarRatings();

    } else {
        departamentoTitulo.textContent = 'Selecciona un Departamento';
        pageTitle.textContent = 'Destinos - Turísmo Bolivia';
        destinosContenedor.innerHTML = `
            <p style="text-align: center; color: #d33; font-size: 1.2rem;">
                No se encontraron destinos para el departamento seleccionado o no se especificó uno.
            </p>
            <p style="text-align: center; color: #555; margin-top: 1rem;">
                Por favor, regresa a la página de <a href="departamentos.html" style="color: #007bff; text-decoration: none;">Departamentos</a> para seleccionar uno.
            </p>
        `;
        loadingMessage.style.display = 'none';
    }
});

//estrellas
document.addEventListener('DOMContentLoaded', () => {
 const estrellasContenedores = document.querySelectorAll('.estrellas');
 estrellasContenedores.forEach(contenedor => {
 const id = contenedor.getAttribute('data-id');
  for (let i = 1; i <= 5; i++) {
   const estrella = document.createElement('span');
   estrella.innerHTML = '★';
   estrella.dataset.valor = i;
   contenedor.appendChild(estrella);
  }
  contenedor.addEventListener('click', e => {
   if (e.target.tagName === 'SPAN') {
    const valor = e.target.dataset.valor;
    setRating(contenedor, valor);
   }
  });
 });
 function setRating(contenedor, valor) {
  const estrellas = contenedor.querySelectorAll('span');
  estrellas.forEach(estrella => {
   if (estrella.dataset.valor <= valor) {
    estrella.classList.add('estrella-activa');
   } else {
    estrella.classList.remove('estrella-activa');
   }
  });
 }
});
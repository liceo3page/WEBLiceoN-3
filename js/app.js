// Cambia estos datos durante el año para actualizar el sitio.
const comunicados = [
  {
    id: "presentacion-pagina-web",
    titulo: "Presentación oficial de la página web del liceo",
    fecha: "Fecha a definir",
    descripcion: "Próximamente realizaremos la presentación oficial del nuevo sitio web institucional del Liceo N.° 3.",
    imagen: "img/comunicados/portada-web.png",
    contenido: [
      "Invitamos a la comunidad educativa a la presentación oficial de la página web del Liceo N.° 3 “Brigadier General Juan Antonio Lavalleja”.",
      "El nuevo sitio será un espacio de información y encuentro donde se compartirán comunicados, proyectos, recursos, actividades y novedades institucionales.",
      "La fecha y los detalles de la presentación se comunicarán próximamente."
    ]
  },
  {
    id: "presentacion-bandera-liceo",
    titulo: "Acto y presentación oficial de la bandera del Liceo N.° 3",
    fecha: "Fecha a definir",
    descripcion: "La comunidad educativa será convocada al acto de presentación oficial de la bandera de nuestra institución.",
    imagen: "img/comunicados/portada-bandera.png",
    contenido: [
      "El Liceo N.° 3 realizará un acto especial para presentar oficialmente la bandera de nuestra institución.",
      "Será una instancia significativa para compartir y celebrar este nuevo símbolo de identidad junto a estudiantes, familias, docentes y demás integrantes de la comunidad educativa.",
      "La fecha, el horario y los detalles del acto se comunicarán próximamente."
    ]
  }
];

const proyectos = [
  {
    id: "proyecto-comedor",
    titulo: "Proyecto comedor",
    descripcion: "Desde 2026, las nuevas Aulas Comedor ampl&iacute;an el servicio de alimentaci&oacute;n en Educaci&oacute;n Media y ofrecen un espacio de encuentro, convivencia y acompa&ntilde;amiento que tambi&eacute;n contribuye a extender el tiempo educativo.",
    imagen: "linear-gradient(135deg, #0b2b66, #1459b8)",
    portada: "img/proyectos/comedor/aula-comedor-exterior.png",
    imagenDetalle: "img/proyectos/comedor/aula-comedor-interior.png",
    publicaciones: [
      {
        titulo: "Aulas Comedor: una nueva propuesta para Educaci&oacute;n Media",
        fecha: "2026",
        descripcion: "La iniciativa de ANEP busca garantizar el derecho a la alimentaci&oacute;n, mejorar las condiciones para aprender y transformar el momento del almuerzo en una instancia cotidiana de encuentro, intercambio y convivencia.",
        tipo: "youtube-destacado",
        recurso: "https://www.youtube.com/embed/S3309TGyxBk?start=14"
      },
      {
        titulo: "El Aula Comedor del Liceo N.&deg; 3",
        fecha: "2026",
        descripcion: "El nuevo espacio cuenta con mobiliario y equipamiento para brindar el servicio de alimentaci&oacute;n en un ambiente cuidado, luminoso y preparado para compartir. Su incorporaci&oacute;n fortalece el bienestar y el acompa&ntilde;amiento de los estudiantes durante la jornada liceal.",
        tipo: "galeria",
        recursos: [
          "img/proyectos/comedor/aula-comedor-exterior.png",
          "img/proyectos/comedor/aula-comedor-interior.png",
          "img/proyectos/comedor/almuerzo.png"
        ]
      }
    ]
  },
  {
    id: "proyecto-estrellas-2026",
    titulo: "Proyecto Estrellas 2026",
    descripcion: "Proyecto institucional que se realiza desde hace varios a&ntilde;os: los estudiantes de cada grupo pertenecen a una estrella de un color determinado y suman puntos durante todo el a&ntilde;o por realizar buenas acciones en el liceo.",
    imagen: "linear-gradient(135deg, #f4c542, #1459b8)",
    portada: "img/proyectos/estrellas-2026/portada.png",
    claseImagen: "imagen-rotada",
    imagenDetalle: "img/proyectos/estrellas-2026/vespertino/03-equipo-verde.png",
    claseImagenDetalle: "",
    publicaciones: [
      {
        titulo: "Apertura del Proyecto Estrellas 2026 · Turno vespertino",
        fecha: "26 de junio de 2026",
        descripcion: "La comunidad del turno vespertino dio comienzo a una nueva edición del Proyecto Estrellas con entusiasmo, creatividad, identidad grupal y espíritu de compañerismo.",
        tipo: "instagram",
        recurso: "https://www.instagram.com/reel/Daq_Hz7PzeA/"
      },
      {
        titulo: "Equipos del turno vespertino",
        fecha: "26 de junio de 2026",
        descripcion: "Una selección de imágenes de la jornada de apertura, con los equipos representando sus colores y compartiendo las primeras actividades del proyecto.",
        tipo: "galeria",
        recursos: [
          "img/proyectos/estrellas-2026/vespertino/01-equipo-naranja.png",
          "img/proyectos/estrellas-2026/vespertino/02-equipo-violeta.png",
          "img/proyectos/estrellas-2026/vespertino/03-equipo-verde.png",
          "img/proyectos/estrellas-2026/vespertino/04-equipo-celeste.png",
          "img/proyectos/estrellas-2026/vespertino/05-equipo-celeste-exterior.png"
        ],
        recursosRotados: [1],
        enlaceInstagram: "https://www.instagram.com/reel/Daq_Hz7PzeA/"
      },
      {
        titulo: "Apertura del Proyecto Estrellas 2026 · Turno matutino",
        fecha: "25 de junio de 2026",
        descripcion: "El turno matutino comenzó a escribir una nueva historia de desafíos, valores, compañerismo y sentido de pertenencia.",
        tipo: "instagram",
        recurso: "https://www.instagram.com/reel/DaB4LJlpila/"
      },
      {
        titulo: "Jornada de apertura · Turno matutino",
        fecha: "25 de junio de 2026",
        descripcion: "La apertura promovió la participación, el respeto, la solidaridad, el compromiso, la creatividad y el esfuerzo de los diferentes grupos.",
        tipo: "instagram",
        recurso: "https://www.instagram.com/p/DaBtopwlNzq/"
      }
    ]
  },
  {
    id: "robotica-educativa",
    titulo: "Rob&oacute;tica educativa",
    descripcion: "CyberTeam L3 participa en la Olimp&iacute;ada de Rob&oacute;tica, Programaci&oacute;n y Videojuegos de Ceibal.",
    imagen: "url('img/robotica/portada.webp')",
    portada: "img/robotica/portada.webp",
    publicaciones: [
      {
        titulo: "CyberTeam L3 vuelve a decir presente",
        fecha: "2026",
        descripcion: "Por tercer a&ntilde;o consecutivo, el equipo CyberTeam L3 participa en la Olimp&iacute;ada de Rob&oacute;tica, Programaci&oacute;n y Videojuegos de Ceibal. En esta edici&oacute;n 13: Territorios Vivos, nuestros estudiantes contin&uacute;an demostrando creatividad, trabajo en equipo e innovaci&oacute;n tecnol&oacute;gica, representando con orgullo al Liceo N.&deg; 3 de Rivera. Integrantes del equipo: Alison Acevedo, Luanna Da Cunha y Julio C&eacute;sar Tajes. El equipo est&aacute; integrado por estudiantes del Liceo N.&deg; 3 y del Liceo N.&deg; 8, fortaleciendo el trabajo colaborativo entre instituciones. Felicitaciones tambi&eacute;n al Prof. Pablo Macedo por acompa&ntilde;ar este proceso.",
        tipo: "galeria",
        recursos: [
          "img/robotica/portada.webp",
          "img/robotica/cyberteam-1.webp",
          "img/robotica/cyberteam-2.webp",
          "img/robotica/cyberteam-3.webp",
          "img/robotica/cyberteam-4.webp"
        ]
      }
    ]
  },
  {
    id: "biblioteca",
    titulo: "Biblioteca",
    descripcion: "Un espacio de lectura, investigación, encuentro y propuestas que fortalecen el pensamiento, la creatividad y la convivencia.",
    imagen: "linear-gradient(135deg, #0b2b66, #44b3e6)",
    portada: "img/proyectos/biblioteca/ajedrez-03.jpg",
    imagenDetalle: "img/proyectos/biblioteca/ajedrez-03.jpg",
    publicaciones: [
      {
        titulo: "Estudiantes del Liceo N.º 3 en una jornada de ajedrez",
        fecha: "30 de julio de 2026",
        descripcion: "Nuestros estudiantes participaron en la jornada organizada por el Liceo N.º 7, compartiendo una experiencia que promueve el pensamiento estratégico, el respeto, la concentración y el juego limpio.",
        tipo: "galeria",
        recursos: [
          "img/proyectos/biblioteca/ajedrez-01.jpg",
          "img/proyectos/biblioteca/ajedrez-02.jpg",
          "img/proyectos/biblioteca/ajedrez-03.jpg",
          "img/proyectos/biblioteca/ajedrez-04.jpg",
          "img/proyectos/biblioteca/ajedrez-05.jpg",
          "img/proyectos/biblioteca/ajedrez-06.jpg"
        ],
        enlaceInstagram: "https://www.instagram.com/p/Dbbmw8SlLlj/"
      },
      {
        titulo: "Taller de ajedrez en la Biblioteca",
        fecha: "9 de julio de 2026",
        descripcion: "La Biblioteca abrió un nuevo espacio para aprender y disfrutar del ajedrez. La propuesta favorece el razonamiento, la toma de decisiones y el encuentro entre estudiantes.",
        tipo: "galeria",
        recursos: [
          "img/proyectos/biblioteca/taller-01.jpg",
          "img/proyectos/biblioteca/taller-02.jpg",
          "img/proyectos/biblioteca/taller-03.jpg",
          "img/proyectos/biblioteca/taller-04.jpg",
          "img/proyectos/biblioteca/taller-05.jpg"
        ],
        enlaceInstagram: "https://www.instagram.com/p/Dal7uWzlDWT/"
      },
      {
        titulo: "Rivera Lee: lectura y encuentro en Plaza Flores",
        fecha: "25 de mayo de 2026",
        descripcion: "La comunidad del liceo participó de Rivera Lee, una jornada organizada por la Intendencia Departamental de Rivera para compartir lecturas y acercar los libros a toda la ciudad.",
        tipo: "instagram",
        recurso: "https://www.instagram.com/p/DYxzp7kFLTF/"
      }
    ]
  },
  {
    id: "deportes",
    titulo: "Deportes",
    descripcion: "Actividad física, convivencia, participación y trabajo en equipo dentro y fuera del liceo.",
    imagen: "linear-gradient(135deg, #061a40, #44b3e6)",
    portada: "img/proyectos/deportes/futsal-04.jpg",
    imagenDetalle: "img/proyectos/deportes/futsal-04.jpg",
    publicaciones: [
      {
        titulo: "Juegos Deportivos Nacionales · Futsal masculino",
        fecha: "11 de junio de 2026",
        descripcion: "Estudiantes del liceo participaron en la instancia de futsal masculino de los Juegos Deportivos Nacionales, representando a la institución con compromiso, compañerismo y espíritu deportivo.",
        tipo: "galeria",
        recursos: [
          "img/proyectos/deportes/futsal-01.jpg",
          "img/proyectos/deportes/futsal-02.jpg",
          "img/proyectos/deportes/futsal-03.jpg",
          "img/proyectos/deportes/futsal-04.jpg",
          "img/proyectos/deportes/futsal-05.jpg"
        ],
        enlaceInstagram: "https://www.instagram.com/p/DZd3h03lGED/"
      }
    ]
  },
  {
    id: "trabajos-interdisciplinarios",
    titulo: "Trabajos interdisciplinarios",
    descripcion: "Propuestas que conectan distintas asignaturas para investigar, crear y compartir aprendizajes con sentido.",
    imagen: "linear-gradient(135deg, #1459b8, #f4c542)",
    portada: "img/proyectos/interdisciplinarios/comedor-06.jpg",
    imagenDetalle: "img/proyectos/interdisciplinarios/comedor-06.jpg",
    publicaciones: [
      {
        titulo: "Conociendo nuestro comedor · Presentación de trabajos",
        fecha: "30 de julio de 2026",
        descripcion: "Los estudiantes investigaron distintos aspectos del comedor liceal y compartieron sus hallazgos en una jornada de presentaciones, integrando saberes, comunicación oral y trabajo colaborativo.",
        tipo: "galeria",
        recursos: [
          "img/proyectos/interdisciplinarios/comedor-01.jpg",
          "img/proyectos/interdisciplinarios/comedor-02.jpg",
          "img/proyectos/interdisciplinarios/comedor-03.jpg",
          "img/proyectos/interdisciplinarios/comedor-04.jpg",
          "img/proyectos/interdisciplinarios/comedor-05.jpg",
          "img/proyectos/interdisciplinarios/comedor-06.jpg"
        ],
        enlaceInstagram: "https://www.instagram.com/p/Dbb_gIxFIr7/"
      },
      {
        titulo: "Entre estadios y cocinas · Clases abiertas",
        fecha: "28 de julio de 2026",
        descripcion: "Los grupos de 7.º compartieron con sus familias una propuesta de Geografía —integrada también con Inglés— que recorrió culturas, territorios, estadios y cocinas del mundo.",
        tipo: "galeria",
        recursos: [
          "img/proyectos/interdisciplinarios/estadios-01.jpg",
          "img/proyectos/interdisciplinarios/estadios-02.jpg",
          "img/proyectos/interdisciplinarios/estadios-03.jpg",
          "img/proyectos/interdisciplinarios/estadios-04.jpg",
          "img/proyectos/interdisciplinarios/estadios-05.jpg"
        ],
        enlaceInstagram: "https://www.instagram.com/p/DbWLIMjFNv0/"
      },
      {
        titulo: "Pastel para enemigos · Convivencia y reflexión",
        fecha: "23 de julio de 2026",
        descripcion: "A partir de una lectura, estudiantes de 8.º reflexionaron sobre empatía, respeto y compañerismo. El cierre reunió Comunicación Visual, Biología y acompañamiento pedagógico en una experiencia creativa y compartida.",
        tipo: "galeria",
        recursos: [
          "img/proyectos/interdisciplinarios/pastel-01.jpg",
          "img/proyectos/interdisciplinarios/pastel-02.jpg",
          "img/proyectos/interdisciplinarios/pastel-03.jpg",
          "img/proyectos/interdisciplinarios/pastel-04.jpg",
          "img/proyectos/interdisciplinarios/pastel-05.jpg"
        ],
        enlaceInstagram: "https://www.instagram.com/p/DbJ8zCElKli/"
      },
      {
        titulo: "Ciudadanía digital y ciberconvivencia",
        fecha: "16 de julio de 2026",
        descripcion: "Una propuesta de reflexión y prevención sobre convivencia en entornos digitales, sexting y grooming. Los estudiantes analizaron situaciones cotidianas y construyeron herramientas para participar en internet de manera responsable, segura y respetuosa.",
        tipo: "galeria",
        recursos: [
          "img/proyectos/interdisciplinarios/ciudadania-01.jpg",
          "img/proyectos/interdisciplinarios/ciudadania-02.jpg",
          "img/proyectos/interdisciplinarios/ciudadania-03.jpg",
          "img/proyectos/interdisciplinarios/ciudadania-04.jpg",
          "img/proyectos/interdisciplinarios/ciudadania-05.jpg",
          "img/proyectos/interdisciplinarios/ciudadania-06.jpg"
        ],
        enlaceInstagram: "https://www.instagram.com/p/Da3vWW3lHhL/"
      },
      {
        titulo: "Promotores de salud",
        fecha: "10 de julio de 2026",
        descripcion: "Estudiantes participaron en una propuesta de promoción de la salud y prevención, articulada con la Junta Nacional de Drogas. El trabajo favoreció el intercambio de información, el pensamiento crítico y la construcción de decisiones saludables.",
        tipo: "galeria",
        recursos: [
          "img/proyectos/interdisciplinarios/salud-01.jpg",
          "img/proyectos/interdisciplinarios/salud-02.jpg",
          "img/proyectos/interdisciplinarios/salud-03.jpg",
          "img/proyectos/interdisciplinarios/salud-04.jpg",
          "img/proyectos/interdisciplinarios/salud-05.jpg",
          "img/proyectos/interdisciplinarios/salud-06.jpg"
        ],
        enlaceInstagram: "https://www.instagram.com/p/DaorBeClccS/"
      }
    ]
  },
  {
    id: "laboratorio",
    titulo: "Laboratorio",
    descripcion: "Experiencias prácticas para aprender ciencia desde la observación y la exploración.",
    imagen: "linear-gradient(135deg, #1459b8, #061a40)",
    publicaciones: []
  }
];

const publicacionesApal = [
  {
    titulo: "Bono Colaboración: agradecimiento a la comunidad",
    fecha: "10 de julio de 2026",
    descripcion: "APAL agradece a estudiantes, familias y colaboradores que hicieron posible esta iniciativa. Cada aporte contribuye al crecimiento de nuestra comunidad educativa.",
    tipo: "galeria",
    recursos: [
      "img/apal/bono-colaboracion-julio-1.jpg",
      "img/apal/bono-colaboracion-julio-2.jpg"
    ],
    enlaceInstagram: "https://www.instagram.com/p/Daoo7jtlYVH/"
  },
  {
    titulo: "Sorteo y entrega del Bono Colaboración",
    fecha: "23 de junio de 2026",
    descripcion: "Compartimos el sorteo y la entrega del premio del Bono Colaboración, una propuesta impulsada con el compromiso de APAL y el apoyo de las familias y estudiantes.",
    tipo: "galeria",
    recursos: [
      "img/apal/bono-colaboracion-junio-1.jpg",
      "img/apal/bono-colaboracion-junio-2.jpg"
    ],
    enlaceInstagram: "https://www.instagram.com/p/DZ7wooelV39/"
  },
  {
    titulo: "Beneficio y acción de APAL",
    fecha: "2026",
    descripcion: "Publicación de APAL con información para estudiantes, familias y la comunidad educativa del Liceo N.º 3.",
    tipo: "galeria",
    recursos: [
      "img/apal/beneficio-apal-1.webp",
      "img/apal/beneficio-apal-2.webp"
    ],
    enlaceInstagram: "https://www.instagram.com/p/DY5jpSPlPJ9/"
  }
];

const recursos = [
  {
    id: "materiales-estudio",
    titulo: "Materiales de estudio",
    descripcion: "Guías, fichas y recursos para las distintas asignaturas.",
    textoBoton: "Abrir materiales",
    contenido: [
      "Espacio para organizar materiales de estudio por asignatura, nivel o grupo.",
      "Más adelante se pueden agregar enlaces a carpetas, documentos PDF, guías de trabajo o recursos digitales."
    ],
    enlaces: [
      { texto: "Agregar enlace a carpeta de materiales", url: "#" }
    ]
  },
  {
    id: "formularios",
    titulo: "Formularios",
    descripcion: "Espacio para inscripciones, solicitudes y trámites.",
    textoBoton: "Abrir formularios",
    contenido: [
      "Espacio para centralizar formularios de inscripción, solicitudes, autorizaciones u otros trámites.",
      "Cuando exista un formulario real, se puede colocar aquí el enlace correspondiente."
    ],
    enlaces: [
      { texto: "Agregar formulario", url: "#" }
    ]
  },
  {
    id: "documentos-institucionales",
    titulo: "Documentos institucionales",
    descripcion: "Reglamentos, comunicados oficiales y orientaciones.",
    textoBoton: "Ver documentos",
    contenido: [
      "Espacio para documentos institucionales, reglamentos, orientaciones y materiales de consulta.",
      "Puede incluir archivos descargables o enlaces a documentos compartidos."
    ],
    enlaces: [
      { texto: "Agregar documento", url: "#" }
    ]
  },
  {
    id: "calendario",
    titulo: "Calendario",
    descripcion: "Fechas importantes, actividades y evaluaciones.",
    textoBoton: "Ver calendario",
    contenido: [
      "Espacio para publicar fechas importantes, actividades, evaluaciones y jornadas institucionales.",
      "Puede conectarse a un calendario externo o mantenerse como listado de fechas."
    ],
    enlaces: [
      { texto: "Agregar calendario", url: "#" }
    ]
  },
  {
    id: "enlaces-utiles",
    titulo: "Enlaces útiles",
    descripcion: "Accesos a plataformas y sitios educativos.",
    textoBoton: "Abrir enlaces",
    contenido: [
      "Espacio para reunir accesos a plataformas educativas, sitios oficiales y herramientas digitales.",
      "Se pueden agregar varios enlaces en forma de botones."
    ],
    enlaces: [
      { texto: "Agregar enlace útil", url: "#" }
    ]
  },
  {
    id: "estudiantes-familias",
    titulo: "Estudiantes y familias",
    descripcion: "Recursos de apoyo para la vida liceal.",
    textoBoton: "Ver recursos",
    contenido: [
      "Espacio pensado para compartir información de apoyo para estudiantes y familias.",
      "Puede incluir guías, orientaciones, horarios, materiales o información de acompañamiento."
    ],
    enlaces: [
      { texto: "Agregar recurso", url: "#" }
    ]
  }
];

const galeria = [
  { titulo: "Actividades", descripcion: "Espacio para foto", fondo: "linear-gradient(135deg, #061a40, #1459b8)" },
  { titulo: "Aula", descripcion: "Espacio para foto", fondo: "linear-gradient(135deg, #1459b8, #44b3e6)" },
  { titulo: "Comunidad", descripcion: "Espacio para foto", fondo: "linear-gradient(135deg, #0b2b66, #f4c542)" },
  { titulo: "Talleres", descripcion: "Espacio para foto", fondo: "linear-gradient(135deg, #061a40, #44b3e6)" },
  { titulo: "Proyectos", descripcion: "Espacio para foto", fondo: "linear-gradient(135deg, #0b2b66, #1459b8)" },
  { titulo: "Encuentros", descripcion: "Espacio para foto", fondo: "linear-gradient(135deg, #1459b8, #061a40)" }
];

const videos = [
  {
    titulo: "Video institucional",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    titulo: "Actividades del liceo",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

const encabezado = document.querySelector("#encabezado");
const botonMenu = document.querySelector("#botonMenu");
const menu = document.querySelector("#menu");
const anioActual = document.querySelector("#anioActual");

if (anioActual) {
  anioActual.textContent = new Date().getFullYear();
}

if (botonMenu && menu) {
  botonMenu.addEventListener("click", () => {
    const menuAbierto = menu.classList.toggle("abierto");
    botonMenu.classList.toggle("activo", menuAbierto);
    botonMenu.setAttribute("aria-expanded", menuAbierto);
    document.body.classList.toggle("menu-abierto", menuAbierto);
  });
}

document.querySelectorAll(".menu a").forEach((enlace) => {
  enlace.addEventListener("click", () => {
    menu?.classList.remove("abierto");
    botonMenu?.classList.remove("activo");
    botonMenu?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-abierto");
  });
});

window.addEventListener("scroll", () => {
  encabezado?.classList.toggle("con-sombra", window.scrollY > 20);
});

function crearComunicados() {
  const contenedor = document.querySelector("#contenedorComunicados");
  if (!contenedor) return;
  const limite = Number(contenedor.dataset.limite) || comunicados.length;
  contenedor.innerHTML = comunicados.slice(0, limite).map((comunicado) => `
    <article class="tarjeta-comunicado revelar">
      ${comunicado.imagen ? `<img class="imagen-comunicado-card" src="${comunicado.imagen}" alt="${comunicado.titulo}">` : ""}
      <div class="contenido-comunicado-card">
      <span class="fecha">${comunicado.fecha}</span>
      <h3>${comunicado.titulo}</h3>
      <p>${comunicado.descripcion}</p>
      <a class="enlace-tarjeta" href="comunicado.html?id=${comunicado.id}">Leer más</a>
      </div>
    </article>
  `).join("");
}

function crearDetalleComunicado() {
  const contenedor = document.querySelector("#detalleComunicado");
  if (!contenedor) return;

  const parametros = new URLSearchParams(window.location.search);
  const id = parametros.get("id");
  const comunicado = comunicados.find((item) => item.id === id);

  if (!comunicado) {
    contenedor.innerHTML = `
      <article class="detalle-comunicado revelar">
        <p class="etiqueta">Comunicado no encontrado</p>
        <h2>No pudimos encontrar el comunicado solicitado</h2>
        <p>Puede haber sido movido o eliminado del listado.</p>
        <a class="boton boton-azul" href="comunicados.html">Volver a comunicados</a>
      </article>
    `;
    return;
  }

  document.title = `${comunicado.titulo} | Liceo N.° 3`;

  const tituloEncabezado = document.querySelector("#tituloEncabezadoComunicado");
  if (tituloEncabezado) {
    tituloEncabezado.textContent = comunicado.titulo;
  }

  const imagenEncabezado = document.querySelector("#imagenEncabezadoComunicado");
  if (imagenEncabezado && comunicado.imagen) {
    imagenEncabezado.innerHTML = `<img src="${comunicado.imagen}" alt="${comunicado.titulo}">`;
    imagenEncabezado.classList.add("foto-con-imagen");
  }

  const imagen = comunicado.imagen
    ? `<img src="${comunicado.imagen}" alt="${comunicado.titulo}">`
    : `<span>Espacio para imagen del comunicado</span>`;

  contenedor.innerHTML = `
    <article class="detalle-comunicado revelar">
      <span class="fecha">${comunicado.fecha}</span>
      <h2>${comunicado.titulo}</h2>
      <div class="detalle-comunicado-grid">
        <div class="contenido-comunicado">
          ${comunicado.contenido.map((parrafo) => `<p>${parrafo}</p>`).join("")}
          <a class="boton boton-azul" href="comunicados.html">Volver a comunicados</a>
        </div>
        <div class="foto-placeholder imagen-detalle-comunicado">
          ${imagen}
        </div>
      </div>
    </article>
  `;
}

function crearProyectos() {
  const contenedor = document.querySelector("#contenedorProyectos");
  if (!contenedor) return;
  const limite = Number(contenedor.dataset.limite) || proyectos.length;
  contenedor.innerHTML = proyectos.slice(0, limite).map((proyecto) => `
    <article class="tarjeta-proyecto revelar">
      ${proyecto.portada
        ? `<img class="imagen-proyecto-card ${proyecto.claseImagen || ""}" src="${proyecto.portada}" alt="${proyecto.titulo}">`
        : `<div class="imagen-proyecto" style="--imagen-proyecto: ${proyecto.imagen};">Imagen del proyecto</div>`}
      <div class="contenido-proyecto">
        <h3>${proyecto.titulo}</h3>
        <p>${proyecto.descripcion}</p>
        <a class="enlace-tarjeta" href="proyecto.html?id=${proyecto.id}">Ver proyecto</a>
      </div>
    </article>
  `).join("");
}

function crearDetalleProyecto() {
  const contenedor = document.querySelector("#detalleProyecto");
  if (!contenedor) return;

  const parametros = new URLSearchParams(window.location.search);
  const id = parametros.get("id");
  const proyecto = proyectos.find((item) => item.id === id);

  if (!proyecto) {
    contenedor.innerHTML = `
      <article class="detalle-comunicado revelar">
        <p class="etiqueta">Proyecto no encontrado</p>
        <h2>No pudimos encontrar el proyecto solicitado</h2>
        <p>Puede haber sido movido o eliminado del listado.</p>
        <a class="boton boton-azul" href="proyectos.html">Volver a proyectos</a>
      </article>
    `;
    return;
  }

  document.title = `${proyecto.titulo} | Liceo N.° 3`;

  const imagenDestacada = document.querySelector("#imagenDestacadaProyecto");
  if (imagenDestacada) {
    if (proyecto.portada) {
      imagenDestacada.innerHTML = `<img class="${proyecto.claseImagen || ""}" src="${proyecto.portada}" alt="${proyecto.titulo}"><span>${proyecto.titulo}</span>`;
      imagenDestacada.classList.add("con-imagen-destacada");
    } else {
      imagenDestacada.style.setProperty("--imagen-proyecto", proyecto.imagen);
      imagenDestacada.innerHTML = `<span>${proyecto.titulo}</span>`;
      imagenDestacada.classList.add("con-imagen-proyecto");
    }
  }

  const publicacionesDestacadas = proyecto.publicaciones
    .filter((publicacion) => publicacion.tipo === "youtube-destacado")
    .map(crearPublicacionProyecto)
    .join("");

  const actividades = proyecto.publicaciones
    .filter((publicacion) => publicacion.tipo !== "youtube-destacado");

  const publicaciones = actividades.length
    ? actividades.map(crearPublicacionProyecto).join("")
    : `<article class="publicacion-proyecto revelar">
        <div class="foto-placeholder medio-publicacion">
          <span>Espacio para primera publicación</span>
        </div>
        <div>
          <p class="etiqueta">Publicaciones</p>
          <h3>Sin publicaciones cargadas todavía</h3>
          <p>Cuando tengas imágenes, videos o textos de este proyecto, los agregamos en el archivo app.js.</p>
        </div>
      </article>`;

  contenedor.innerHTML = `
    <article class="detalle-proyecto revelar">
      <div class="detalle-proyecto-hero">
        <div>
          <p class="etiqueta">Proyecto</p>
          <h2>${proyecto.titulo}</h2>
          <p>${proyecto.descripcion}</p>
          <a class="boton boton-azul" href="proyectos.html">Volver a proyectos</a>
        </div>
        ${proyecto.imagenDetalle || proyecto.portada
          ? `<img class="imagen-proyecto-detalle-img ${proyecto.claseImagenDetalle ?? proyecto.claseImagen ?? ""}" src="${proyecto.imagenDetalle || proyecto.portada}" alt="${proyecto.titulo}">`
          : `<div class="imagen-proyecto imagen-proyecto-detalle" style="--imagen-proyecto: ${proyecto.imagen};">Imagen principal del proyecto</div>`}
      </div>
    </article>

    ${publicacionesDestacadas
      ? `<div class="muro-publicaciones publicaciones-destacadas">${publicacionesDestacadas}</div>`
      : ""}

    <div class="encabezado-seccion revelar encabezado-publicaciones">
      <p class="etiqueta">Publicaciones</p>
      <h2>Actividades del proyecto</h2>
      <p>Este espacio funciona como un muro interno del proyecto, con imágenes, videos y textos breves.</p>
    </div>

    <div class="muro-publicaciones">
      ${publicaciones}
    </div>
  `;
}

function crearPublicacionProyecto(publicacion) {
  let medio = `<div class="foto-placeholder medio-publicacion"><span>Espacio para imagen o video</span></div>`;

  if (publicacion.tipo === "imagen" && publicacion.recurso) {
    medio = `<img class="medio-publicacion" src="${publicacion.recurso}" alt="${publicacion.titulo}">`;
  }


  if (publicacion.tipo === "galeria" && publicacion.recursos?.length) {
    medio = `
      <div class="galeria-publicacion medio-publicacion">
        ${publicacion.recursos.map((recurso, indice) => `
          <button
            class="boton-imagen-galeria"
            type="button"
            data-imagen="${recurso}"
            data-rotada="${publicacion.recursosRotados?.includes(indice) ? "true" : "false"}"
            data-descripcion="${publicacion.titulo}"
            aria-label="Ampliar imagen: ${publicacion.titulo}">
            <img class="${publicacion.recursosRotados?.includes(indice) ? "imagen-rotada" : ""}" src="${recurso}" alt="${publicacion.titulo}">
          </button>
        `).join("")}
      </div>
    `;
  }
  if ((publicacion.tipo === "youtube" || publicacion.tipo === "youtube-destacado") && publicacion.recurso) {
    medio = `
      <div class="video-marco medio-publicacion">
        <iframe
          src="${publicacion.recurso}"
          title="${publicacion.titulo}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
    `;
  }

  if (publicacion.tipo === "instagram" && publicacion.recurso) {
    medio = `
      <div class="instagram-publicacion medio-publicacion">
        <blockquote
          class="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink="${publicacion.recurso}"
          data-instgrm-version="14">
          <a href="${publicacion.recurso}" target="_blank" rel="noopener noreferrer">Ver publicación en Instagram</a>
        </blockquote>
      </div>
    `;
  }

  return `
    <article class="publicacion-proyecto ${publicacion.tipo === "youtube-destacado" ? "publicacion-video-destacado" : ""} revelar">
      ${medio}
      <div>
        <span class="fecha">${publicacion.fecha}</span>
        <h3>${publicacion.titulo}</h3>
        <p>${publicacion.descripcion}</p>
        ${publicacion.tipo === "instagram" || publicacion.enlaceInstagram ? `<a class="enlace-tarjeta" href="${publicacion.enlaceInstagram || publicacion.recurso}" target="_blank" rel="noopener noreferrer">Abrir en Instagram</a>` : ""}
      </div>
    </article>
  `;
}

function cargarEmbedsInstagram() {
  if (!document.querySelector(".instagram-media")) return;

  if (window.instgrm?.Embeds) {
    window.instgrm.Embeds.process();
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.instagram.com/embed.js";
  document.body.appendChild(script);
}

function crearPublicacionesApal() {
  const contenedor = document.querySelector("#contenedorApal");
  if (!contenedor) return;

  contenedor.innerHTML = publicacionesApal.map((publicacion) => {
    const medio = publicacion.tipo === "galeria" && publicacion.recursos?.length
      ? `<div class="apal-galeria">
          ${publicacion.recursos.map((recurso, indice) => `
            <button
              class="boton-imagen-galeria"
              type="button"
              data-imagen="${recurso}"
              data-descripcion="${publicacion.titulo} — imagen ${indice + 1}"
              aria-label="Ampliar imagen ${indice + 1}: ${publicacion.titulo}">
              <img src="${recurso}" alt="${publicacion.titulo} — imagen ${indice + 1}">
            </button>
          `).join("")}
        </div>`
      : publicacion.tipo === "instagram" && publicacion.recurso
      ? `<div class="instagram-publicacion apal-publicacion-imagen">
          <blockquote
            class="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink="${publicacion.recurso}"
            data-instgrm-version="14">
            <a href="${publicacion.recurso}" target="_blank" rel="noopener noreferrer">Ver publicación en Instagram</a>
          </blockquote>
        </div>`
      : publicacion.recurso
      ? `<img class="apal-publicacion-imagen" src="${publicacion.recurso}" alt="${publicacion.titulo}">`
      : `<div class="foto-placeholder apal-publicacion-imagen"><span>Espacio para imagen o afiche</span></div>`;

    return `
      <article class="apal-publicacion revelar">
        ${medio}
        <div class="apal-publicacion-contenido">
          <span class="fecha">${publicacion.fecha}</span>
          <h3>${publicacion.titulo}</h3>
          <p>${publicacion.descripcion}</p>
          ${publicacion.enlaceInstagram || publicacion.tipo === "instagram" ? `<a class="enlace-tarjeta" href="${publicacion.enlaceInstagram || publicacion.recurso}" target="_blank" rel="noopener noreferrer">Ver publicación original en Instagram</a>` : ""}
        </div>
      </article>
    `;
  }).join("");
}

function crearRecursos() {
  const contenedor = document.querySelector("#contenedorRecursos");
  if (!contenedor) return;
  contenedor.innerHTML = recursos.map((recurso, indice) => `
    <article class="tarjeta-recurso revelar">
      <span>${indice + 1}</span>
      <h3>${recurso.titulo}</h3>
      <p>${recurso.descripcion}</p>
      <a class="boton-recurso" href="recurso.html?id=${recurso.id}">${recurso.textoBoton}</a>
    </article>
  `).join("");
}

function crearDetalleRecurso() {
  const contenedor = document.querySelector("#detalleRecurso");
  if (!contenedor) return;

  const parametros = new URLSearchParams(window.location.search);
  const id = parametros.get("id");
  const recurso = recursos.find((item) => item.id === id);

  if (!recurso) {
    contenedor.innerHTML = `
      <article class="detalle-comunicado revelar">
        <p class="etiqueta">Recurso no encontrado</p>
        <h2>No pudimos encontrar el recurso solicitado</h2>
        <p>Puede haber sido movido o eliminado del listado.</p>
        <a class="boton boton-azul" href="recursos.html">Volver a recursos</a>
      </article>
    `;
    return;
  }

  document.title = `${recurso.titulo} | Liceo N.° 3`;

  const enlaces = recurso.enlaces.map((enlace) => `
    <a class="boton-recurso" href="${enlace.url}" ${enlace.url !== "#" ? 'target="_blank" rel="noopener noreferrer"' : ""}>${enlace.texto}</a>
  `).join("");

  contenedor.innerHTML = `
    <article class="detalle-comunicado revelar">
      <p class="etiqueta">Recurso</p>
      <h2>${recurso.titulo}</h2>
      <div class="detalle-comunicado-grid">
        <div class="contenido-comunicado">
          ${recurso.contenido.map((parrafo) => `<p>${parrafo}</p>`).join("")}
          <div class="acciones-recursos">${enlaces}</div>
          <a class="boton boton-azul" href="recursos.html">Volver a recursos</a>
        </div>
        <div class="foto-placeholder imagen-detalle-comunicado">
          <span>Espacio para imagen, afiche o documento destacado</span>
        </div>
      </div>
    </article>
  `;
}

function crearGaleria() {
  const contenedor = document.querySelector("#contenedorGaleria");
  if (!contenedor) return;
  contenedor.innerHTML = galeria.map((item) => `
    <article class="item-galeria revelar" style="--fondo-galeria: ${item.fondo};">
      <h3>${item.titulo}</h3>
      <p>${item.descripcion}</p>
    </article>
  `).join("");
}

function crearVideos() {
  const contenedor = document.querySelector("#contenedorVideos");
  if (!contenedor) return;
  contenedor.innerHTML = videos.map((video) => `
    <article class="video-tarjeta revelar">
      <div class="video-marco">
        <iframe
          src="${video.url}"
          title="${video.titulo}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
      <h3>${video.titulo}</h3>
    </article>
  `).join("");
}

function activarAnimacionesScroll() {
  const elementos = document.querySelectorAll(".revelar");
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.14 });

  elementos.forEach((elemento) => observador.observe(elemento));
}

function activarVisorImagenes() {
  const visor = document.createElement("div");
  visor.className = "visor-imagen";
  visor.setAttribute("role", "dialog");
  visor.setAttribute("aria-modal", "true");
  visor.setAttribute("aria-label", "Imagen ampliada");
  visor.hidden = true;
  visor.innerHTML = `
    <button class="cerrar-visor" type="button" aria-label="Cerrar imagen ampliada">&times;</button>
    <img class="imagen-visor" src="" alt="">
  `;
  document.body.appendChild(visor);

  const imagenVisor = visor.querySelector(".imagen-visor");
  const botonCerrar = visor.querySelector(".cerrar-visor");

  const cerrarVisor = () => {
    visor.hidden = true;
    document.body.classList.remove("visor-abierto");
    imagenVisor.src = "";
    imagenVisor.classList.remove("imagen-rotada");
  };

  document.addEventListener("click", (evento) => {
    const botonImagen = evento.target.closest(".boton-imagen-galeria");
    if (botonImagen) {
      imagenVisor.src = botonImagen.dataset.imagen;
      imagenVisor.alt = botonImagen.dataset.descripcion;
      imagenVisor.classList.toggle("imagen-rotada", botonImagen.dataset.rotada === "true");
      visor.hidden = false;
      document.body.classList.add("visor-abierto");
      botonCerrar.focus();
      return;
    }

    if (evento.target === visor || evento.target === botonCerrar) {
      cerrarVisor();
    }
  });

  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape" && !visor.hidden) cerrarVisor();
  });
}

crearComunicados();
crearDetalleComunicado();
crearProyectos();
crearDetalleProyecto();
crearPublicacionesApal();
crearRecursos();
crearDetalleRecurso();
crearGaleria();
crearVideos();
cargarEmbedsInstagram();
activarAnimacionesScroll();
activarVisorImagenes();

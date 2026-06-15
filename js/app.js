// Cambia estos datos durante el año para actualizar el sitio.
const comunicados = [
  {
    id: "bienvenida-sitio",
    titulo: "Bienvenidos al sitio institucional",
    fecha: "14 de junio de 2026",
    descripcion: "Este espacio reunirá comunicados, actividades y novedades del Liceo Nº3 de Rivera.",
    imagen: "",
    contenido: [
      "Este espacio reunirá comunicados, actividades y novedades del Liceo Nº3 de Rivera.",
      "La intención es contar con un lugar claro y accesible para compartir información con estudiantes, familias, docentes y comunidad educativa."
    ]
  },
  {
    id: "calendario-actividades",
    titulo: "Calendario de actividades",
    fecha: "14 de junio de 2026",
    descripcion: "Próximamente se publicarán fechas importantes, jornadas y propuestas del año lectivo.",
    imagen: "",
    contenido: [
      "En este comunicado se podrán publicar fechas importantes, jornadas institucionales, actividades especiales y propuestas del año lectivo.",
      "Cuando el comunicado tenga más información, se puede ampliar este texto desde el archivo app.js."
    ]
  },
  {
    id: "informacion-familias",
    titulo: "Información para familias",
    fecha: "14 de junio de 2026",
    descripcion: "Canal de referencia para compartir avisos, recursos y documentos institucionales.",
    imagen: "",
    contenido: [
      "Este canal funcionará como referencia para compartir avisos, recursos y documentos institucionales dirigidos a las familias.",
      "También puede utilizarse para comunicar reuniones, inscripciones, entregas de boletines u otras novedades relevantes."
    ]
  }
];

const proyectos = [
  {
    id: "robotica-educativa",
    titulo: "Robótica educativa",
    descripcion: "Espacio para desarrollar pensamiento lógico, creatividad y resolución de problemas.",
    imagen: "linear-gradient(135deg, #061a40, #1459b8)",
    publicaciones: [
      {
        titulo: "Primeras experiencias",
        fecha: "14 de junio de 2026",
        descripcion: "Espacio para compartir una actividad del proyecto, como se publicaría en Instagram.",
        tipo: "placeholder",
        recurso: ""
      }
    ]
  },
  {
    id: "biblioteca",
    titulo: "Biblioteca",
    descripcion: "Lectura, investigación, acompañamiento y acceso a materiales de estudio.",
    imagen: "linear-gradient(135deg, #0b2b66, #44b3e6)",
    publicaciones: [
      {
        titulo: "Lecturas y encuentros",
        fecha: "14 de junio de 2026",
        descripcion: "Publicación de ejemplo para mostrar imágenes, afiches o videos relacionados con biblioteca.",
        tipo: "placeholder",
        recurso: ""
      }
    ]
  },
  {
    id: "laboratorio",
    titulo: "Laboratorio",
    descripcion: "Experiencias prácticas para aprender ciencia desde la observación y la exploración.",
    imagen: "linear-gradient(135deg, #1459b8, #061a40)",
    publicaciones: []
  },
  {
    id: "arte-comunicacion-visual",
    titulo: "Arte y comunicación visual",
    descripcion: "Propuestas expresivas para compartir producciones, identidad y creatividad.",
    imagen: "linear-gradient(135deg, #0b2b66, #f4c542)",
    publicaciones: []
  },
  {
    id: "deportes",
    titulo: "Deportes",
    descripcion: "Actividad física, convivencia, participación y trabajo en equipo.",
    imagen: "linear-gradient(135deg, #061a40, #44b3e6)",
    publicaciones: []
  },
  {
    id: "talleres-optativos",
    titulo: "Talleres optativos",
    descripcion: "Espacios flexibles para ampliar intereses y fortalecer habilidades.",
    imagen: "linear-gradient(135deg, #1459b8, #f4c542)",
    publicaciones: []
  },
  {
    id: "proyecto-comedor",
    titulo: "Proyecto comedor",
    descripcion: "Acompañamiento, cuidado y apoyo a la comunidad educativa.",
    imagen: "linear-gradient(135deg, #0b2b66, #1459b8)",
    publicaciones: []
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
      <span class="fecha">${comunicado.fecha}</span>
      <h3>${comunicado.titulo}</h3>
      <p>${comunicado.descripcion}</p>
      <a class="enlace-tarjeta" href="comunicado.html?id=${comunicado.id}">Leer más</a>
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
      <div class="imagen-proyecto" style="--imagen-proyecto: ${proyecto.imagen};">
        Imagen del proyecto
      </div>
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

  const publicaciones = proyecto.publicaciones.length
    ? proyecto.publicaciones.map(crearPublicacionProyecto).join("")
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
        <div class="imagen-proyecto imagen-proyecto-detalle" style="--imagen-proyecto: ${proyecto.imagen};">
          Imagen principal del proyecto
        </div>
      </div>
    </article>

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

  if (publicacion.tipo === "youtube" && publicacion.recurso) {
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

  return `
    <article class="publicacion-proyecto revelar">
      ${medio}
      <div>
        <span class="fecha">${publicacion.fecha}</span>
        <h3>${publicacion.titulo}</h3>
        <p>${publicacion.descripcion}</p>
      </div>
    </article>
  `;
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

crearComunicados();
crearDetalleComunicado();
crearProyectos();
crearDetalleProyecto();
crearRecursos();
crearDetalleRecurso();
crearGaleria();
crearVideos();
activarAnimacionesScroll();

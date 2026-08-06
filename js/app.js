// Cambia estos datos durante el año para actualizar el sitio.
const comunicados = [
  {
    id: "presentacion-pagina-web",
    titulo: "Presentamos la página web de nuestra institución",
    fecha: "",
    descripcion: "Compartimos la página web institucional del Liceo N.° 3, un nuevo espacio de información y encuentro para toda la comunidad educativa.",
    imagen: "img/comunicados/portada-web.png",
    contenido: [
      "Presentamos la página web de nuestra institución, el Liceo N.° 3 “Brigadier General Juan Antonio Lavalleja”.",
      "Este sitio es un espacio de información y encuentro donde compartiremos comunicados, proyectos, recursos, actividades y novedades institucionales con estudiantes, familias y toda la comunidad educativa."
    ]
  },
  {
    id: "presentacion-bandera-liceo",
    titulo: "El Liceo N.° 3 ya tiene su bandera oficial",
    fecha: "Presentación oficial: próximamente",
    descripcion: "Ya conocemos el diseño ganador y las propuestas que obtuvieron el segundo y tercer lugar. Próximamente presentaremos oficialmente nuestra bandera.",
    imagen: "img/comunicados/bandera-primer-lugar.png",
    contenido: [
      "Luego de la instancia de selección, el Liceo N.° 3 ya cuenta con el diseño que representará oficialmente a nuestra institución.",
      "Felicitamos a quienes participaron y agradecemos la creatividad, el compromiso y el sentido de pertenencia reflejados en cada propuesta. A continuación, presentamos los diseños que obtuvieron el primer, segundo y tercer lugar.",
      "A la brevedad realizaremos un acto para presentar oficialmente la bandera del liceo ante toda la comunidad educativa. La fecha, el horario y los demás detalles serán comunicados próximamente."
    ],
    resultados: [
      { puesto: "Primer lugar · Diseño ganador", imagen: "img/comunicados/bandera-primer-lugar.png", destacado: true },
      { puesto: "Segundo lugar", imagen: "img/comunicados/bandera-segundo-lugar.png" },
      { puesto: "Tercer lugar", imagen: "img/comunicados/bandera-tercer-lugar.png" }
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
    portada: "img/proyectos/laboratorio/portada-lampara-lava.webp",
    imagenDetalle: "img/proyectos/laboratorio/portada-lampara-lava.webp",
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
    titulo: "CREA",
    descripcion: "Aulas virtuales, tareas, materiales, mensajes y seguimiento de los cursos del liceo.",
    publico: "Estudiantes · Familias · Docentes",
    logo: "img/recursos/logo-crea-oficial.png",
    url: "https://ceibal.edu.uy/plataformas-y-programas/crea/",
    textoBoton: "Conocer e ingresar a CREA"
  },
  {
    titulo: "Portal de Estudiantes Ceibal",
    descripcion: "Acceso central a las plataformas Ceibal, libros de texto, videos y recursos para aprender.",
    publico: "Estudiantes · Familias",
    logo: "img/recursos/logo-ceibal-oficial.png",
    url: "https://estudiantes.ceibal.edu.uy/",
    textoBoton: "Abrir portal"
  },
  {
    titulo: "Biblioteca País",
    descripcion: "Libros, audiolibros y materiales digitales disponibles para lectura, estudio y préstamo.",
    publico: "Estudiantes · Familias · Docentes",
    logo: "img/recursos/logo-biblioteca-pais.png",
    url: "https://bibliotecapais.ceibal.edu.uy/",
    textoBoton: "Ir a la biblioteca"
  },
  {
    titulo: "Uruguay Educa",
    descripcion: "Recursos educativos, propuestas didácticas, juegos, materiales multimedia y contenidos de ANEP.",
    publico: "Estudiantes · Familias · Docentes",
    logo: "img/recursos/logo-uruguay-educa.png",
    url: "https://uruguayeduca.anep.edu.uy/",
    textoBoton: "Explorar recursos"
  },
  {
    titulo: "REA Ceibal",
    descripcion: "Actividades y recursos educativos abiertos para estudiar, practicar o enriquecer las clases.",
    publico: "Estudiantes · Docentes",
    logo: "img/recursos/logo-rea-ceibal.png",
    url: "https://rea.ceibal.edu.uy/",
    textoBoton: "Buscar actividades"
  },
  {
    titulo: "EDUx Ceibal",
    descripcion: "Catálogo de cursos en línea sobre tecnología, inclusión, ciudadanía digital y prácticas educativas.",
    publico: "Docentes · Comunidad educativa",
    logo: "img/recursos/logo-edux.png",
    url: "https://equipo.edux.ceibal.edu.uy/",
    textoBoton: "Ver cursos"
  },
  {
    titulo: "DGES · Educación Secundaria",
    descripcion: "Información oficial, propuesta educativa, programas, inscripciones, noticias y trámites de Secundaria.",
    publico: "Estudiantes · Familias · Docentes",
    logo: "img/recursos/logo-dges.png",
    url: "https://www.dges.edu.uy/",
    textoBoton: "Visitar DGES"
  },
  {
    titulo: "Estudiantes DGES",
    descripcion: "Inscripciones liceales, escolaridades, constancias, pases, reválidas y programas de asignaturas.",
    publico: "Estudiantes · Familias",
    logo: "img/recursos/logo-dges-estudiantes.png",
    url: "https://www.dges.edu.uy/estudiantes",
    textoBoton: "Ver información"
  }
];

const galeria = [
  { titulo: "Juramento de fidelidad a la bandera", descripcion: "Acto conmemorativo · 19 de junio", imagen: "img/galeria/2026/01-acto-bandera.jpg" },
  { titulo: "Comunidad reunida en el acto", descripcion: "Estudiantes y docentes · 19 de junio", imagen: "img/galeria/2026/02-acto-bandera.jpg" },
  { titulo: "Símbolos que nos representan", descripcion: "Acto conmemorativo · 19 de junio", imagen: "img/galeria/2026/03-acto-bandera.jpg" },
  { titulo: "Participación estudiantil", descripcion: "Juramento de fidelidad a la bandera", imagen: "img/galeria/2026/04-acto-bandera.jpg" },
  { titulo: "Equipo naranja", descripcion: "Apertura del Proyecto Estrellas 2026", imagen: "img/galeria/2026/05-proyecto-estrellas.jpg" },
  { titulo: "Equipo violeta", descripcion: "Apertura del Proyecto Estrellas 2026", imagen: "img/galeria/2026/06-proyecto-estrellas.jpg", rotada: true },
  { titulo: "Equipo celeste", descripcion: "Apertura del Proyecto Estrellas 2026", imagen: "img/galeria/2026/07-proyecto-estrellas.jpg" },
  { titulo: "Identidad y compañerismo", descripcion: "Proyecto Estrellas · Turno vespertino", imagen: "img/galeria/2026/08-proyecto-estrellas.jpg" },
  { titulo: "Nueva Aula Comedor", descripcion: "Un espacio inaugurado durante 2026", imagen: "img/galeria/2026/09-aula-comedor.jpg" },
  { titulo: "El comedor por dentro", descripcion: "Encuentro, alimentación y convivencia", imagen: "img/galeria/2026/10-aula-comedor.jpg" },
  { titulo: "Jornada de ajedrez", descripcion: "Concentración y pensamiento estratégico", imagen: "img/galeria/2026/11-jornada-ajedrez.jpg" },
  { titulo: "Aprender jugando", descripcion: "Estudiantes del Liceo N.º 3 en el Liceo N.º 7", imagen: "img/galeria/2026/12-jornada-ajedrez.jpg" },
  { titulo: "Futsal masculino", descripcion: "Juegos Deportivos Nacionales 2026", imagen: "img/galeria/2026/13-futsal.jpg" },
  { titulo: "Representando al liceo", descripcion: "Deporte, compromiso y compañerismo", imagen: "img/galeria/2026/14-futsal.jpg" },
  { titulo: "Conociendo nuestro comedor", descripcion: "Presentación de trabajos interdisciplinarios", imagen: "img/galeria/2026/15-conociendo-comedor.jpg" },
  { titulo: "Entre estadios y cocinas", descripcion: "Clases abiertas con las familias", imagen: "img/galeria/2026/16-estadios-cocinas.jpg" },
  { titulo: "Pastel para enemigos", descripcion: "Lectura, convivencia y trabajo colaborativo", imagen: "img/galeria/2026/17-pastel-enemigos.jpg" },
  { titulo: "Ciudadanía digital", descripcion: "Ciberconvivencia y participación responsable", imagen: "img/galeria/2026/18-ciudadania-digital.jpg" },
  { titulo: "Promotores de salud", descripcion: "Prevención, diálogo y decisiones saludables", imagen: "img/galeria/2026/19-promotores-salud.jpg" },
  { titulo: "CyberTeam L3", descripcion: "Robótica, programación e innovación", imagen: "img/galeria/2026/20-cyberteam.webp" },
  { titulo: "Partidas que enseñan", descripcion: "Jornada de ajedrez y encuentro entre estudiantes", imagen: "img/galeria/2026/21-ajedrez.jpg" },
  { titulo: "Pensar antes de mover", descripcion: "Concentración y estrategia en cada tablero", imagen: "img/galeria/2026/22-ajedrez.jpg" },
  { titulo: "Aprendizaje compartido", descripcion: "Una jornada de intercambio a través del ajedrez", imagen: "img/galeria/2026/23-ajedrez.jpg" },
  { titulo: "Encuentro de ajedrez", descripcion: "Respeto, juego limpio y nuevas experiencias", imagen: "img/galeria/2026/24-ajedrez.jpg" },
  { titulo: "Taller en la Biblioteca", descripcion: "Primeras experiencias frente al tablero", imagen: "img/galeria/2026/25-taller-ajedrez.jpg" },
  { titulo: "El ajedrez nos reúne", descripcion: "Un espacio para aprender y compartir", imagen: "img/galeria/2026/26-taller-ajedrez.jpg" },
  { titulo: "Estrategias en construcción", descripcion: "Taller de ajedrez del Liceo N.º 3", imagen: "img/galeria/2026/27-taller-ajedrez.jpg" },
  { titulo: "Biblioteca en movimiento", descripcion: "Lectura, juegos y pensamiento", imagen: "img/galeria/2026/28-taller-ajedrez.jpg" },
  { titulo: "Nuevos desafíos", descripcion: "Estudiantes participando del taller de ajedrez", imagen: "img/galeria/2026/29-taller-ajedrez.jpg" },
  { titulo: "Almuerzo en el liceo", descripcion: "Alimentación y bienestar durante la jornada", imagen: "img/galeria/2026/30-almuerzo.jpg" },
  { titulo: "Equipo verde", descripcion: "Color, alegría y pertenencia en el Proyecto Estrellas", imagen: "img/galeria/2026/31-proyecto-estrellas.jpg" },
  { titulo: "Presentaciones interdisciplinarias", descripcion: "Estudiantes compartiendo lo investigado", imagen: "img/galeria/2026/32-conociendo-comedor.jpg" },
  { titulo: "Producciones del proyecto", descripcion: "Conociendo nuestro comedor", imagen: "img/galeria/2026/33-conociendo-comedor.jpg" },
  { titulo: "Comunicar lo aprendido", descripcion: "Exposición y trabajo colaborativo", imagen: "img/galeria/2026/34-conociendo-comedor.jpg" },
  { titulo: "Aprender investigando", descripcion: "Circuitos productivos, alimentación y estadísticas", imagen: "img/galeria/2026/35-conociendo-comedor.jpg" },
  { titulo: "Una jornada para compartir", descripcion: "Cierre de Conociendo nuestro comedor", imagen: "img/galeria/2026/36-conociendo-comedor.jpg" },
  { titulo: "Familias en el aula", descripcion: "Clases abiertas de Entre estadios y cocinas", imagen: "img/galeria/2026/37-estadios-cocinas.jpg" },
  { titulo: "Geografía para compartir", descripcion: "Culturas y territorios en diálogo", imagen: "img/galeria/2026/38-estadios-cocinas.jpg" },
  { titulo: "Recorridos por el mundo", descripcion: "Aprendizajes integrados con Inglés y Geografía", imagen: "img/galeria/2026/39-estadios-cocinas.jpg" },
  { titulo: "El liceo recibe a las familias", descripcion: "Encuentro en torno a los aprendizajes", imagen: "img/galeria/2026/40-estadios-cocinas.jpg" },
  { titulo: "Cocinar y convivir", descripcion: "Cierre del proyecto Pastel para enemigos", imagen: "img/galeria/2026/41-pastel-enemigos.jpg" },
  { titulo: "Una experiencia compartida", descripcion: "Preparación de pasteles en clase", imagen: "img/galeria/2026/42-pastel-enemigos.jpg" },
  { titulo: "Aprender haciendo", descripcion: "Creatividad y colaboración entre estudiantes", imagen: "img/galeria/2026/43-pastel-enemigos.jpg" },
  { titulo: "Convivencia en acción", descripcion: "Empatía, compañerismo y reflexión", imagen: "img/galeria/2026/44-pastel-enemigos.jpg" },
  { titulo: "Cuidarnos en internet", descripcion: "Taller de ciudadanía digital", imagen: "img/galeria/2026/45-ciudadania-digital.jpg" },
  { titulo: "Ciberconvivencia", descripcion: "Herramientas para participar de forma responsable", imagen: "img/galeria/2026/46-ciudadania-digital.jpg" },
  { titulo: "Dialogar para prevenir", descripcion: "Sexting, grooming y ciudadanía digital", imagen: "img/galeria/2026/47-ciudadania-digital.jpg" },
  { titulo: "Promoción de la salud", descripcion: "Estudiantes construyendo herramientas de prevención", imagen: "img/galeria/2026/48-promotores-salud.jpg" },
  { titulo: "Escuchar y participar", descripcion: "Taller de Promotores de salud", imagen: "img/galeria/2026/49-promotores-salud.jpg" },
  { titulo: "Decisiones saludables", descripcion: "Reflexión, información y trabajo en equipo", imagen: "img/galeria/2026/50-promotores-salud.jpg" }
];

const videos = [
  {
    titulo: "Apertura del Proyecto Estrellas · Turno vespertino",
    fecha: "26 de junio de 2026",
    descripcion: "Una jornada de identidad, creatividad y compañerismo para dar comienzo al proyecto institucional.",
    tipo: "instagram",
    url: "https://www.instagram.com/reel/Daq_Hz7PzeA/"
  },
  {
    titulo: "Apertura del Proyecto Estrellas · Turno matutino",
    fecha: "25 de junio de 2026",
    descripcion: "El turno matutino inició una nueva edición del proyecto con desafíos, valores y participación.",
    tipo: "instagram",
    url: "https://www.instagram.com/reel/DaB4LJlpila/"
  },
  {
    titulo: "Taller de ajedrez en la Biblioteca",
    fecha: "2026",
    descripcion: "Una invitación a mejorar la concentración, la memoria y la estrategia a través del ajedrez.",
    tipo: "instagram",
    url: "https://www.instagram.com/reel/DYdhPyQuuvg/"
  },
  {
    titulo: "Acto de los Treinta y Tres Orientales",
    fecha: "22 de abril de 2026",
    descripcion: "Registro del acto realizado junto a estudiantes, docentes, funcionarios y familias.",
    tipo: "instagram",
    url: "https://www.instagram.com/reel/DYdfuGNhmVe/"
  },
  {
    titulo: "Cuadro de honor 2026",
    fecha: "2026",
    descripcion: "Presentación de los estudiantes elegidos para portar y escoltar los pabellones nacionales.",
    tipo: "instagram",
    url: "https://www.instagram.com/reel/DYN8s_jvWzO/"
  },
  {
    titulo: "El comedor comenzó a funcionar",
    fecha: "2026",
    descripcion: "Un recorrido por el servicio y por el trabajo cotidiano que sostiene esta propuesta.",
    tipo: "instagram",
    url: "https://www.instagram.com/reel/DYLiXlLstic/"
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
      ${comunicado.fecha ? `<span class="fecha">${comunicado.fecha}</span>` : ""}
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

  const resultados = comunicado.resultados?.length
    ? `
      <section class="resultados-bandera" aria-labelledby="tituloResultadosBandera">
        <p class="etiqueta">Diseños seleccionados</p>
        <h3 id="tituloResultadosBandera">Primer, segundo y tercer lugar</h3>
        <div class="podio-bandera">
          ${comunicado.resultados.map((resultado) => `
            <figure class="puesto-bandera ${resultado.destacado ? "puesto-ganador" : ""}">
              <a href="${resultado.imagen}" target="_blank" rel="noopener" aria-label="Ampliar ${resultado.puesto}">
                <img src="${resultado.imagen}" alt="${resultado.puesto} del concurso de la bandera del Liceo N.° 3">
              </a>
              <figcaption>${resultado.puesto}</figcaption>
            </figure>
          `).join("")}
        </div>
        <p class="ayuda-imagen">Hacé clic en cada diseño para verlo en tamaño completo.</p>
      </section>
    `
    : "";

  contenedor.innerHTML = `
    <article class="detalle-comunicado revelar">
      ${comunicado.fecha ? `<span class="fecha">${comunicado.fecha}</span>` : ""}
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
      ${resultados}
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
    : "";

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

    ${publicaciones ? `<div class="muro-publicaciones">${publicaciones}</div>` : ""}
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
  contenedor.innerHTML = recursos.map((recurso) => `
    <article class="tarjeta-recurso revelar">
      <div class="logo-recurso">
        <img src="${recurso.logo}" alt="Logo de ${recurso.titulo}" loading="lazy">
      </div>
      <div class="contenido-tarjeta-recurso">
        <p class="publico-recurso">${recurso.publico}</p>
        <h3>${recurso.titulo}</h3>
        <p>${recurso.descripcion}</p>
        <a class="boton-recurso" href="${recurso.url}" target="_blank" rel="noopener noreferrer">${recurso.textoBoton}<span aria-hidden="true">↗</span></a>
      </div>
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
    <button
      class="item-galeria boton-imagen-galeria revelar"
      type="button"
      style="--fondo-galeria: url('../${item.imagen}');"
      data-imagen="${item.imagen}"
      data-rotada="${item.rotada ? "true" : "false"}"
      data-descripcion="${item.titulo} — ${item.descripcion}"
      aria-label="Ampliar imagen: ${item.titulo}">
      <span class="contenido-item-galeria">
        <strong>${item.titulo}</strong>
        <small>${item.descripcion}</small>
      </span>
    </button>
  `).join("");
}

function crearVideos() {
  const contenedor = document.querySelector("#contenedorVideos");
  if (!contenedor) return;
  contenedor.innerHTML = videos.map((video) => `
    <article class="video-tarjeta revelar">
      <div class="instagram-publicacion video-instagram">
        <blockquote
          class="instagram-media"
          data-instgrm-permalink="${video.url}"
          data-instgrm-version="14">
          <a href="${video.url}" target="_blank" rel="noopener noreferrer">Ver video en Instagram</a>
        </blockquote>
      </div>
      <div class="contenido-video-tarjeta">
        <span class="fecha">${video.fecha}</span>
        <h3>${video.titulo}</h3>
        <p>${video.descripcion}</p>
        <a class="enlace-tarjeta" href="${video.url}" target="_blank" rel="noopener noreferrer">Abrir en Instagram</a>
      </div>
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
    <button class="navegacion-visor anterior-visor" type="button" aria-label="Ver imagen anterior">&#10094;</button>
    <img class="imagen-visor" src="" alt="">
    <button class="navegacion-visor siguiente-visor" type="button" aria-label="Ver imagen siguiente">&#10095;</button>
    <span class="contador-visor" aria-live="polite"></span>
  `;
  document.body.appendChild(visor);

  const imagenVisor = visor.querySelector(".imagen-visor");
  const botonCerrar = visor.querySelector(".cerrar-visor");
  const botonAnterior = visor.querySelector(".anterior-visor");
  const botonSiguiente = visor.querySelector(".siguiente-visor");
  const contadorVisor = visor.querySelector(".contador-visor");
  let imagenesDisponibles = [];
  let indiceActual = 0;
  let elementoOrigen = null;

  const mostrarImagen = (indice) => {
    if (!imagenesDisponibles.length) return;

    indiceActual = (indice + imagenesDisponibles.length) % imagenesDisponibles.length;
    const botonImagen = imagenesDisponibles[indiceActual];

    imagenVisor.src = botonImagen.dataset.imagen;
    imagenVisor.alt = botonImagen.dataset.descripcion || "Imagen ampliada";
    imagenVisor.classList.toggle("imagen-rotada", botonImagen.dataset.rotada === "true");
    contadorVisor.textContent = `${indiceActual + 1} de ${imagenesDisponibles.length}`;

    const hayVariasImagenes = imagenesDisponibles.length > 1;
    botonAnterior.hidden = !hayVariasImagenes;
    botonSiguiente.hidden = !hayVariasImagenes;
    contadorVisor.hidden = !hayVariasImagenes;
  };

  const cerrarVisor = () => {
    visor.hidden = true;
    document.body.classList.remove("visor-abierto");
    imagenVisor.src = "";
    imagenVisor.classList.remove("imagen-rotada");
    elementoOrigen?.focus();
  };

  botonAnterior.addEventListener("click", (evento) => {
    evento.stopPropagation();
    mostrarImagen(indiceActual - 1);
  });

  botonSiguiente.addEventListener("click", (evento) => {
    evento.stopPropagation();
    mostrarImagen(indiceActual + 1);
  });

  document.addEventListener("click", (evento) => {
    const botonImagen = evento.target.closest(".boton-imagen-galeria");
    if (botonImagen) {
      imagenesDisponibles = Array.from(document.querySelectorAll(".boton-imagen-galeria"))
        .filter((boton) => boton.dataset.imagen);
      indiceActual = imagenesDisponibles.indexOf(botonImagen);
      elementoOrigen = botonImagen;
      mostrarImagen(indiceActual);
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
    if (visor.hidden) return;

    if (evento.key === "Escape") cerrarVisor();
    if (evento.key === "ArrowLeft") mostrarImagen(indiceActual - 1);
    if (evento.key === "ArrowRight") mostrarImagen(indiceActual + 1);
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

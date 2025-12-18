const path = require("path");
const express = require("express");

// Bloques de contenido obtenidos de W3Schools para la página de introducción.
const contenidoIntroduccion = [
  {
    id: "que-es-html",
    titulo: "¿Qué es HTML?",
    descripcion: [
      "HTML son las siglas de Hyper Text Markup Language (Lenguaje de Marcado de Hipertexto).",
      "Es el lenguaje de marcado estándar para crear páginas web y describe la estructura de una página mediante elementos."
    ],
    lista: [
      "HTML significa Hyper Text Markup Language.",
      "HTML es el lenguaje de marcado estándar para crear páginas web.",
      "HTML describe la estructura de una página web.",
      "HTML está compuesto por una serie de elementos.",
      "Los elementos HTML indican al navegador cómo mostrar el contenido.",
      "Los elementos etiquetan partes del contenido como \"esto es un encabezado\", \"esto es un párrafo\" o \"esto es un enlace\"."
    ],
    nota: "Información adaptada directamente de la sección \"What is HTML?\" de W3Schools."
  },
  {
    id: "documento-html-sencillo",
    titulo: "Documento HTML sencillo",
    descripcion: [
      "El tutorial presenta un documento HTML muy simple que sirve como punto de partida para cualquier página web.",
      "Incluye un encabezado principal y un párrafo dentro del cuerpo del documento, tal como muestra W3Schools."
    ],
    ejemploCodigo: "<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n</head>\n<body>\n\n<h1>My First Heading</h1>\n<p>My first paragraph.</p>\n\n</body>\n</html>",
    ejemploDescripcion: "Ejemplo original de W3Schools: documento HTML simple sin modificaciones.",
    ejemploRender: "<div><h1>My First Heading</h1><p>My first paragraph.</p></div>"
  },
  {
    id: "explicacion-del-ejemplo",
    titulo: "Explicación del ejemplo",
    descripcion: [
      "La página explica cada parte del documento simple con el siguiente detalle."
    ],
    lista: [
      "La declaración <!DOCTYPE html> define que el documento es HTML5.",
      "El elemento <html> es la raíz de una página HTML.",
      "El elemento <head> contiene información meta sobre la página.",
      "El elemento <title> especifica un título para la página mostrado en la pestaña del navegador.",
      "El elemento <body> define el cuerpo del documento e incluye encabezados, párrafos, imágenes, hipervínculos, tablas, listas, etc.",
      "El elemento <h1> define un encabezado grande.",
      "El elemento <p> define un párrafo."
    ],
    nota: "Detalle proveniente de la sección \"Example Explained\" de W3Schools."
  },
  {
    id: "que-es-un-elemento-html",
    titulo: "¿Qué es un elemento HTML?",
    descripcion: [
      "Un elemento HTML se define por una etiqueta de inicio, contenido y una etiqueta de cierre.",
      "Todo lo que hay entre la etiqueta de inicio y la etiqueta de cierre forma el elemento completo."
    ],
    lista: [
      "Ejemplo de sintaxis: <tagname> Content goes here... </tagname>.",
      "<h1>My First Heading</h1> y <p>My first paragraph.</p> muestran elementos completos.",
      "<h1> | My First Heading | </h1> representa la estructura de un encabezado.",
      "<p> | My first paragraph. | </p> muestra la estructura de un párrafo.",
      "<br> | none | none indica un elemento vacío sin etiqueta de cierre."
    ],
    nota: "La nota original enfatiza que algunos elementos, como <br>, no tienen contenido y no llevan etiqueta de cierre.",
    ejemploCodigo: "<tagname> Content goes here... </tagname>\n\n<h1>My First Heading</h1>\n<p>My first paragraph.</p>",
    ejemploDescripcion: "Sintaxis y ejemplos tomados textualmente de W3Schools para ilustrar elementos completos.",
    ejemploRender: "<div><h1>My First Heading</h1><p>My first paragraph.</p></div>"
  },
  {
    id: "navegadores-web",
    titulo: "Navegadores web",
    descripcion: [
      "La finalidad de un navegador (Chrome, Edge, Firefox, Safari) es leer documentos HTML y mostrarlos correctamente.",
      "Un navegador no muestra las etiquetas HTML; las usa para determinar cómo presentar el documento."
    ],
    nota: "Información tomada de la sección \"Web Browsers\" de W3Schools."
  },
  {
    id: "estructura-pagina-html",
    titulo: "Estructura de página HTML",
    descripcion: [
      "La página ofrece una visualización de cómo se estructura un documento HTML típico.",
      "El contenido dentro de <body> se muestra en el navegador, mientras que el contenido dentro de <title> aparece en la pestaña."
    ],
    ejemploCodigo: "<html>\n<head>\n  <title>Page title</title>\n</head>\n<body>\n  <h1>This is a heading</h1>\n  <p>This is a paragraph.</p>\n  <p>This is another paragraph.</p>\n</body>\n</html>",
    ejemploDescripcion: "Visualización de estructura ofrecida por W3Schools sin modificaciones.",
    ejemploRender: "<div><h1>This is a heading</h1><p>This is a paragraph.</p><p>This is another paragraph.</p></div>"
  },
  {
    id: "historia-de-html",
    titulo: "Historia de HTML",
    descripcion: [
      "Desde los inicios de la Web ha habido múltiples versiones de HTML, según la cronología mostrada en W3Schools."
    ],
    lista: [
      "1989 | Tim Berners-Lee inventó la World Wide Web.",
      "1991 | Tim Berners-Lee inventó HTML.",
      "1993 | Dave Raggett propuso HTML+.",
      "1995 | El HTML Working Group definió HTML 2.0.",
      "1997 | Recomendación del W3C: HTML 3.2.",
      "1999 | Recomendación del W3C: HTML 4.01.",
      "2000 | Recomendación del W3C: XHTML 1.0.",
      "2008 | WHATWG publicó el primer borrador público de HTML5.",
      "2012 | WHATWG estableció HTML5 como Living Standard.",
      "2014 | Recomendación del W3C: HTML5.",
      "2016 | Recomendación candidata del W3C: HTML 5.1.",
      "2017 | Recomendación del W3C: HTML5.1 2nd Edition.",
      "2017 | Recomendación del W3C: HTML5.2."
    ],
    nota: "El tutorial aclara que sigue el estándar HTML5 más reciente."
  }
];

// Bloques de contenido para el tema de editores HTML.
const contenidoEditores = [
  {
    id: "editores-recomendados",
    titulo: "Editores recomendados",
    descripcion: [
      "Los editores HTML van desde utilidades simples como Notepad/TextEdit hasta IDEs completos.",
      "W3Schools sugiere comenzar con editores ligeros y, si se requiere más ayuda, usar herramientas con resaltado de sintaxis y autocompletado."
    ],
    lista: [
      "Notepad (Windows)",
      "TextEdit (macOS)",
      "Visual Studio Code",
      "Sublime Text",
      "Atom"
    ],
    nota: "Listado basado en la sección de recomendaciones de editores de W3Schools."
  },
  {
    id: "html-notepad",
    titulo: "Escribir HTML en Notepad (Windows)",
    descripcion: [
      "La guía propone usar Notepad para comprender la estructura básica del documento sin distracciones.",
      "Los pasos se enfocan en crear un archivo desde cero y guardarlo con la extensión correcta."
    ],
    lista: [
      "Abre Notepad desde el menú Inicio.",
      "Escribe el marcado HTML deseado.",
      "Guarda el archivo con la extensión .html usando la opción 'Save as'.",
      "Selecciona 'All Files' en el campo de tipo y usa la codificación UTF-8."
    ]
  },
  {
    id: "html-textedit",
    titulo: "Escribir HTML en TextEdit (macOS)",
    descripcion: [
      "En macOS se recomienda TextEdit, pero configurado en modo texto sin formato.",
      "Esto evita que el editor inserte formato adicional que pueda afectar al HTML."
    ],
    lista: [
      "Abre TextEdit y ve a Preferencias.",
      "En la pestaña Nuevo documento, selecciona Texto sin formato.",
      "Escribe el contenido HTML.",
      "Guarda el archivo con la extensión .html y codificación UTF-8."
    ]
  },
  {
    id: "guardar-archivo",
    titulo: "Guardar y abrir el archivo",
    descripcion: [
      "Independientemente del editor, el archivo debe guardarse con extensión .html.",
      "Al abrirlo en un navegador se visualizará el resultado del código escrito."
    ],
    lista: [
      "Utiliza un nombre descriptivo como misitio.html.",
      "Verifica que la codificación sea UTF-8 para evitar caracteres inválidos.",
      "Abre el archivo en un navegador para revisar el resultado."
    ],
    nota: "Proceso recopilado de la sección 'Write HTML Using Notepad or TextEdit' de W3Schools."
  },
  {
    id: "ejemplo-editores",
    titulo: "Ejemplo de prueba",
    descripcion: [
      "W3Schools recomienda comenzar con un documento sencillo para comprobar que el editor está configurado correctamente."
    ],
    ejemploCodigo: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Mi primer documento HTML</title>\n</head>\n<body>\n  <h1>Configurando mi editor</h1>\n  <p>Este es un párrafo de prueba.</p>\n</body>\n</html>",
    ejemploDescripcion: "Fragmento adaptado del ejemplo que aparece en la sección de editores de W3Schools.",
    ejemploRender: "<div><h1>Configurando mi editor</h1><p>Este es un párrafo de prueba.</p></div>"
  }
];

// Lista completa de temas que expondrá la versión SSR.
const temasHtml = [
  {
    id: "html-introduccion",
    titulo: "Introducción a HTML (W3Schools)",
    resumen: "HTML es el lenguaje de marcado estándar para crear páginas web y describe la estructura de una página mediante elementos.",
    enlace: "https://www.w3schools.com/html/html_intro.asp",
    enlaceTexto: "W3Schools - HTML Introduction",
    secciones: contenidoIntroduccion
  },
  {
    id: "html-editores",
    titulo: "Editores HTML (W3Schools)",
    resumen: "W3Schools explica que cualquier editor de texto puede servir para escribir HTML, pero recomienda elegir herramientas que faciliten la escritura y prueba del código.",
    enlace: "https://www.w3schools.com/html/html_editors.asp",
    enlaceTexto: "W3Schools - HTML Editors",
    secciones: contenidoEditores
  }
];

// TODO: Integrar contenido adicional proporcionado por el docente en futuras iteraciones.

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  const renderTimestamp = new Date().toLocaleString("es-EC", {
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  const mostrarEscudo = req.query.mostrar === "1";
  const temaActivo = req.query.tema && req.query.tema !== "none" ? req.query.tema : null;

  // Renderizamos la vista pasando el tema activo y el estado del botón del escudo.
  res.render("index", {
    temas: temasHtml,
    temaActivo,
    renderTimestamp,
    mostrarEscudo
  });
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});

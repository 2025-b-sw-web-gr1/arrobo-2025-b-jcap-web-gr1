const temaPrincipal = {
  titulo: "HTML",
  resumen: "Lenguaje de marcado que define la estructura de las páginas web; los navegadores interpretan sus etiquetas para mostrar contenido.",
  fuente: {
    titulo: "W3Schools - HTML Introduction",
    url: "https://www.w3schools.com/html/default.asp"
  }
};

const subtemas = [
  {
    id: "html-home",
    titulo: "HTML HOME",
    resumen: "Portada del tutorial con el primer ejemplo y enlaces a los temas base.",
    fuente: {
      titulo: "W3Schools - HTML HOME",
      url: "https://www.w3schools.com/html/default.asp"
    },
    secciones: [
      {
        titulo: "Ejemplo inicial",
        descripcion: [
          "La pagina principal muestra un ejemplo minimo con encabezado y parrafo.",
          "Incluye el boton Try it Yourself para probar el codigo en linea y enlaces al tutorial."
        ],
        ejemploCodigo: `<!DOCTYPE html>
<html>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`,
        ejemploDescripcion: "Ejemplo de partida que aparece en la portada del tutorial.",
        ejemploRender: `<div><h1>This is a Heading</h1><p>This is a paragraph.</p></div>`
      }
    ]
  },
  {
    id: "html-intro",
    titulo: "HTML Introduction",
    resumen: "Que es HTML y como el navegador lo interpreta para renderizar contenido.",
    fuente: {
      titulo: "W3Schools - HTML Introduction",
      url: "https://www.w3schools.com/html/html_intro.asp"
    },
    secciones: [
      {
        titulo: "Que es HTML",
        descripcion: [
          "HTML significa HyperText Markup Language y define la estructura de las paginas web.",
          "Los elementos usan etiquetas que el navegador interpreta para mostrar el contenido."
        ],
        lista: [
          "Lenguaje de marcado estandar para la Web.",
          "Los elementos suelen tener etiqueta de apertura y cierre.",
          "El navegador no muestra las etiquetas, solo el contenido procesado."
        ]
      },
      {
        titulo: "Documento base",
        descripcion: ["Ejemplo completo con encabezado y parrafo para ilustrar la estructura."],
        ejemploCodigo: `<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>
  <h1>My First Heading</h1>
  <p>My first paragraph.</p>
</body>
</html>`,
        ejemploDescripcion: "Ejemplo usado en la introduccion para explicar la sintaxis.",
        ejemploRender: `<div><h1>My First Heading</h1><p>My first paragraph.</p></div>`
      },
      {
        titulo: "Notas y versiones",
        descripcion: [
          "El tutorial sigue HTML5, estandar actual.",
          "El navegador lee el HTML y presenta la pagina aun cuando las etiquetas no se muestran en pantalla."
        ]
      }
    ]
  },
  {
    id: "html-editores",
    titulo: "HTML Editors",
    resumen: "Recomendaciones y pasos para crear y guardar tu primer archivo HTML.",
    fuente: {
      titulo: "W3Schools - HTML Editors",
      url: "https://www.w3schools.com/html/html_editors.asp"
    },
    secciones: [
      {
        titulo: "Editores sugeridos",
        descripcion: [
          "Puedes iniciar con editores simples como Notepad o TextEdit y avanzar a herramientas con resaltado.",
          "Visual Studio Code, Sublime Text o Atom facilitan autocompletado y coloreado de sintaxis."
        ],
        lista: ["Notepad (Windows)", "TextEdit (macOS)", "Visual Studio Code", "Sublime Text", "Atom"]
      },
      {
        titulo: "Crear un archivo en Notepad",
        lista: [
          "Abrir Notepad desde el menu Inicio.",
          "Escribir el marcado HTML de prueba.",
          "Guardar como .html eligiendo 'All Files' y codificacion UTF-8."
        ]
      },
      {
        titulo: "Ejemplo de prueba",
        descripcion: ["Fragmento basico para verificar que el editor guarda y el navegador renderiza."],
        ejemploCodigo: `<!DOCTYPE html>
<html>
<head>
  <title>Mi primer documento HTML</title>
</head>
<body>
  <h1>Configurando mi editor</h1>
  <p>Este es un parrafo de prueba.</p>
</body>
</html>`,
        ejemploDescripcion: "Ejemplo adaptado de W3Schools para validar la configuracion del editor.",
        ejemploRender: `<div><h1>Configurando mi editor</h1><p>Este es un parrafo de prueba.</p></div>`
      }
    ]
  },
  {
    id: "html-basico",
    titulo: "HTML Basic",
    resumen: "Elementos esenciales: encabezados, parrafos, enlaces, imagenes, botones y listas.",
    fuente: {
      titulo: "W3Schools - HTML Basic",
      url: "https://www.w3schools.com/html/html_basic.asp"
    },
    secciones: [
      {
        titulo: "Documento basico",
        descripcion: [
          "Ejemplo minimo de documento con encabezado y parrafo tomado de HTML Basic.",
          "Incluye DOCTYPE, la raiz <html>, metadatos en <head> y contenido visible en <body>."
        ],
        ejemploCodigo: `<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>

  <h1>This is a Heading</h1>
  <p>This is a paragraph.</p>

</body>
</html>`,
        ejemploDescripcion: "Documento base con un h1 y un parrafo como en el capitulo Basic.",
        ejemploRender: `<div><h1>This is a Heading</h1><p>This is a paragraph.</p></div>`
      },
      {
        titulo: "Encabezados y parrafos",
        descripcion: [
          "Los encabezados van de <h1> a <h6> y definen jerarquias de titulo.",
          "<p> representa un parrafo de texto."
        ],
        lista: [
          "<h1> es el nivel mas alto; <h6> el mas bajo.",
          "Usa encabezados para estructura semantica, no solo tamano visual.",
          "<p> agrupa texto corrido."
        ]
      },
      {
        titulo: "Enlaces",
        descripcion: ["Un enlace se crea con <a href='URL'>enlace</a> y puede abrir en la misma pestaña o nueva."],
        ejemploCodigo: `<a href="https://www.w3schools.com">Visit W3Schools</a>`,
        ejemploDescripcion: "El atributo href indica la direccion del destino.",
        ejemploRender: `<a href="https://www.w3schools.com">Visit W3Schools</a>`
      },
      {
        titulo: "Imagenes",
        descripcion: ["<img> inserta una imagen; se recomienda incluir atributo alt para texto alternativo."],
        ejemploCodigo: `<img src="img_girl.jpg" alt="Girl in a jacket" width="200" height="200">`,
        ejemploDescripcion: "La ruta src apunta al recurso y alt describe la imagen.",
        ejemploRender: `<img src="https://www.w3schools.com/html/pic_trulli.jpg" alt="Trulli" width="200">`
      },
      {
        titulo: "Botones",
        descripcion: ["<button> crea un boton clicable."],
        ejemploCodigo: `<button>Click me</button>`,
        ejemploDescripcion: "Elemento interactivo simple para acciones en la pagina.",
        ejemploRender: `<button>Click me</button>`
      },
      {
        titulo: "Listas",
        descripcion: ["<ul> genera listas sin orden y <ol> listas ordenadas; <li> define cada item."],
        ejemploCodigo: `<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>`,
        ejemploDescripcion: "Ejemplo de lista sin orden usando <ul> y elementos <li>.",
        ejemploRender: `<ul><li>Coffee</li><li>Tea</li><li>Milk</li></ul>`
      }
    ]
  }
];

function crearTexto(texto) {
  const p = document.createElement("p");
  p.textContent = texto;
  return p;
}

function crearLista(items) {
  const ul = document.createElement("ul");
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
  return ul;
}

function crearEjemplo(seccion) {
  const fragment = document.createDocumentFragment();
  if (seccion.ejemploCodigo) {
    const code = document.createElement("pre");
    code.className = "code-block";
    code.textContent = seccion.ejemploCodigo.trim();
    fragment.appendChild(code);
  }
  if (seccion.ejemploDescripcion) {
    fragment.appendChild(crearTexto(seccion.ejemploDescripcion));
  }
  if (seccion.ejemploRender) {
    const preview = document.createElement("div");
    preview.className = "preview";
    preview.innerHTML = seccion.ejemploRender;
    fragment.appendChild(preview);
  }
  return fragment;
}

function renderTemas() {
  const contenedor = document.getElementById("contenido");
  if (!contenedor) return;

  const card = document.createElement("article");
  card.className = "theme-card";

  const header = document.createElement("div");
  header.className = "theme-header";

  const title = document.createElement("h2");
  title.className = "theme-title";
  title.textContent = temaPrincipal.titulo;
  header.appendChild(title);

  if (temaPrincipal.fuente?.url) {
    const link = document.createElement("a");
    link.className = "theme-source";
    link.href = temaPrincipal.fuente.url;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = temaPrincipal.fuente.titulo || temaPrincipal.fuente.url;
    header.appendChild(link);
  }

  if (temaPrincipal.resumen) {
    const resumen = document.createElement("p");
    resumen.className = "theme-summary";
    resumen.textContent = temaPrincipal.resumen;
    header.appendChild(resumen);
  }

  card.appendChild(header);

  const accordionList = document.createElement("div");
  accordionList.className = "accordion-list";

  subtemas.forEach((subtema) => {
    const item = document.createElement("div");
    item.className = "accordion-item";

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "accordion-toggle";
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", `${subtema.id}-body`);

    const labelWrap = document.createElement("span");
    labelWrap.className = "label";

    const titulo = document.createElement("span");
    titulo.textContent = subtema.titulo;
    labelWrap.appendChild(titulo);

    const subSummary = document.createElement("span");
    subSummary.className = "sub-summary";
    subSummary.textContent = subtema.resumen;
    labelWrap.appendChild(subSummary);

    const chevron = document.createElement("span");
    chevron.className = "chevron";
    chevron.textContent = "▶";

    toggle.appendChild(labelWrap);
    toggle.appendChild(chevron);

    const body = document.createElement("div");
    body.className = "accordion-body";
    body.id = `${subtema.id}-body`;

    const content = document.createElement("div");
    content.className = "section-content";

    subtema.secciones.forEach((seccion) => {
      if (seccion.titulo) {
        const h3 = document.createElement("h3");
        h3.textContent = seccion.titulo;
        content.appendChild(h3);
      }

      seccion.descripcion?.forEach((texto) => {
        content.appendChild(crearTexto(texto));
      });

      if (seccion.lista?.length) {
        content.appendChild(crearLista(seccion.lista));
      }

      if (seccion.ejemploCodigo || seccion.ejemploRender || seccion.ejemploDescripcion) {
        content.appendChild(crearEjemplo(seccion));
      }
    });

    body.appendChild(content);

    toggle.addEventListener("click", () => {
      const isOpen = body.classList.toggle("is-open");
      toggle.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    item.appendChild(toggle);
    item.appendChild(body);
    accordionList.appendChild(item);
  });

  card.appendChild(accordionList);
  contenedor.appendChild(card);
}

document.addEventListener("DOMContentLoaded", renderTemas);

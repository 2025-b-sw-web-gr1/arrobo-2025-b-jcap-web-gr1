# Taller: Express con Handlebars

## Motor elegido

Handlebars (extensiones .hbs).

## Que es Handlebars

Es un motor de plantillas basado en Mustache que usa expresiones simples con llaves dobles. Permite separar la logica de los datos y reusar layouts. No depende de un framework grande y funciona bien en Node.

## Por que se eligio

Sintaxis clara y menos codigo embebido en la vista; ideal para ejemplos educativos y portafolios basicos.

## Diferencias con EJS

- EJS usa <% %> y permite JS directo en la plantilla; Handlebars evita JS embebido y usa helpers.
- Handlebars trabaja con contextos y bloques; EJS renderiza mas como HTML con JS incrustado.
- Handlebars fomenta vistas mas limpias y predecibles, EJS da mas libertad pero puede mezclar logica y vista.

## Ventajas

- Sintaxis simple y legible.
- Soporte de layouts y parciales.
- Evita mezclar demasiada logica en la vista.
- Buen rendimiento para paginas ligeras.

## Desventajas

- Menos flexible para ejecutar JS directo en la plantilla.
- Requiere definir helpers para logica personalizada.
- Comunidad y ejemplos mas pequeños que EJS.

## Conclusion

Handlebars ofrece vistas limpias y estructuradas, suficientes para proyectos academicos o portafolios sencillos. Aporta disciplina en la separacion de datos y presentacion.

## Aprendizaje

Configure un servidor Express con Handlebars como motor de render. Entendi como pasar datos desde el backend y mostrarlos con bloques y contextos. Valide la diferencia entre un motor con JS incrustado (EJS) y uno mas declarativo (Handlebars).

const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuracion del motor Handlebars
app.engine('hbs', engine({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views', 'layouts')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// Datos basicos para la pagina
const profile = {
  name: 'Julio Arrobo',
  career: 'Estudiante de Ingenieria en Software',
  description: 'Apasionado por el desarrollo web y el aprendizaje constante.',
  skills: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'Git'],
  footer: 'Portafolio academico - 2025'
};

app.get('/', (req, res) => {
  res.render('home', profile);
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});

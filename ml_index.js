import express from 'express'
import { create } from 'express-handlebars'
import getFortune from './lib/fortune.js'

const hbs = create({
  defaultLayout: 'main',
})
const app = express()
const PORT = 9001;

// Настройка механизма представлений Handlebars
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.use(express.static('./public'))

app.get('/', (req, res) => res.render('home'))

/* Перенесено в файл 'fortune.js'
const fortunes = [
  "Conquer your fears or they will conquer you.",
  "Rivers need springs.",
  "Do not fear what you don't know.",
  "You will have a pleasant surprise.",
  "Whenever possible, keep it simple.",
] */

app.get('/about', (req, res) => {
  // Перенесено в файл 'fortune.js'
  // const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)]
  res.render('about', { fortune: getFortune })
})

// custom 404 page
app.use((req, res) => {
  res.status(404)
  res.render('404')
})

// custom 500 page
app.use((err, req, res, next) => {
  console.error(err.message)
  res.status(500)
  res.render('500')
}) 

app.listen(PORT, () => console.log(
    `Express running on http://localhost:${PORT}; ` +
    `press Ctrl+C to stop` ))
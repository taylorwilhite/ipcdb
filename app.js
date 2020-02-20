import express from 'express'
import path from 'path'

const app = express()

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/api/getPods', (req, res) => {
  var list = ['Comedy Bang Ban', 'MBMBAM', 'Rude Tales of Magic']
  res.json(list)
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'))
})

const port = process.env.PORT || 3000
app.listen(port)

console.log('App is listening on port ' + port)

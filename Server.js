const express = require('express')
const app = express()
const port = 5000

// Importation de notre modèle
const { user } = require("./models/User")

//Commandes pour permettre notre serveur de lire le body d'un objet json
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// Instruction GET
app.get('/user', (req, res) => {
  user.find(req.body, (err, data) => {
    if (err) res.send(err)
    res.json(data)
  })
})

// Instruction POST
app.post("/user", (req, res) => {
  user.create(req.body, (err, data) => {
    if (err) res.send(err)
    res.json(data)
  })
})

// Instruction PUT
app.put("/user/:id", (req, res) => {
  user.findByIdAndUpdate(req.body, (err, data) => {
    if (err) res.send(err)
    res.json(data)
  })
})

// Instruction DELETE
app.delete("/user/:id", (req, res) => {
  user.findByIdAndRemove(req.body, (err, data) => {
    if (err) res.send(err)
    res.json(data)
  })
})

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:5000/`)
})
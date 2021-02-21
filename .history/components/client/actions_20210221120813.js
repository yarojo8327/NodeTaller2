const { Client } = require('./model')



const createClient = (req, res) => {
  const newClient = new Client (req.body) 
  newBook.save((error, bookSaved) => {
    if (error) {
      res.status(422).send(error)
    } else {
      res.status(201).send(bookSaved)
    }
  })
}

module.exports = { createClient }

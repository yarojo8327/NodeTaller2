const { Client } = require('./model')



const createBook = (req, res) => {
  const newBook = new Book(req.body) 
  newBook.save((error, bookSaved) => {
    if (error) {
      res.status(422).send(error)
    } else {
      res.status(201).send(bookSaved)
    }
  })
}

module.exports = { createClient }

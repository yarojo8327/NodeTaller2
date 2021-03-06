const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema()


= mongoose.model('clients', { name: String, address: String, mobile: String, email: String, password: String })

module.exports = Client



const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  cover: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: false },
  unitValue: { type: Number, required: true, min: 0 },
  categories: { type: Array, required: false }
}, {
  timestamps: true
})

const Book = mongoose.model('books', bookSchema)

module.exports = Book


const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
    name:{ type: String, required: true },
    address: { type: String, required: true },
    mobole: { type: String, required: true },
    email:{ type: String, required: true },
    password: { type: String, required: true },
})

const Client = mongoose.model('clients', clientSchema)
module.exports = Client



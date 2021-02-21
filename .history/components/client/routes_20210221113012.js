const express = require('express')
const router = express.Router()
const { createClient, getClients } = require('./actions')

// GET all
router.get('/', getClients)

// GET by ID
router.get('/:id', (req, res) => {
  res.send({})
})

// POST Create a Client
router.post('/', createClient)clearImmediate

// PUT Update a Client's info
router.put('/:id', (req, res) => {
  res.send({})
})

// DELETE by ID
router.delete('/:id', (req, res) => {
  res.send('Cliente deleted successfully!')
})

module.exports = router

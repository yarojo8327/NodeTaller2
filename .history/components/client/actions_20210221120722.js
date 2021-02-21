const {  } = require('./model')

const createClient = (req, res) => {
  //const newClient = new Client(req.body)
  console.log(req.body)
  const client = new Client(req.body)
  
  client.save((error, clientSaved) => {
    if (error) {
      console.error('Error saving client ', error)
      res.status(500).send(error)
    } else {
      res.send(clientSaved)
    }
  })
}

module.exports = { createClient }

const Sale = require('./model')



const createSale = (req, res) => {
  console.log(req.params.client_id)
  const newSale = new Sale(req.body)
  newSale.save((error, saleSaved) => {
    if (error) {
      res.status(422).send(error)
    } else {
      res.status(201).send(saleSaved)
    }
  })
}


const getSales = (req, res) => {
  let query = req.query
  if (req.query.name) {
    query = { name: new RegExp(`.*${req.query.name}.*`, 'i') }
  }

  Sale.find(Object.assign({}, query, { clientId: req.params.clientId }), (error, sales) => {
    if (error) {
      res.status(500).send(error)
    } else {
      res.send(sales)
    }
  })
}

const getSale = (req, res) => {
  Sale.findOne(
      { 
          _id: req.params.id,
          clientId: req.params.clientId
      }, (error, sale) => {
    sale.populate('clientId').populate('details.bookId').execPopulate((error, saleWithAllInfo) => {
      if (error) {
        res.status(500).send(error)
      } else if (saleWithAllInfo) {
        res.send(saleWithAllInfo)
      } else {
        res.status(404).send({})
      }
    })
  })
}



const updateSale = (req, res) => {  
  Sale.updateOne({ _id: req.params.id, clientId: req.params.clientId }, req.body, (error, result) => {
    if (error) {
      res.status(422).send(error)
    } else {
      res.send(result)
    }
  })
}

const deleteSale = (req, res) => {
  Sale.findOneAndDelete(
      {
           _id: req.params.id,
            clientId: req.params.clientId }, (error, result) => {
    if (error) {
      res.status(500).send(error)
    } else {
      res.status(204)
    }
  })
}



module.exports = { createSale, deleteSale, getSale, getSales, updateSale }
'use strict'

class Product {
  get rules () {
    return {
      description:'required',
      brand:'required',
      amount:'required',
      barcode:'required'
    }
  }
}

module.exports = Product

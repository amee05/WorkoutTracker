const { model, Schema } = require('mongoose')

const Plan = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  }
  
})
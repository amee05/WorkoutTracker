const { model, Schema } = require('mongoose')

const Plan = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  xercises: [
    {
      type: {
        type: String,
        required: true

      }
      name: {
        type: String,
        trim: true,
        required: 'Enter a task name'
      },
      duration: {
        type: Number,
        required: 'Enter a task duration'
      }
      weight: {
        type: Number,
      }
      
    }
  ]
})

module.exports = model('Plan', Plan)
const { model, Schema } = require('mongoose')

const Workout = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: 'Select the type of workout'
      },
      name: {
        type: String,
        trim: true,
        required: 'Enter a exercise name'
      },
      duration: {
        type: Number,
        required: 'Enter the duration'
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      }
    }
  ]
})

module.exports = model('Workout', Workout)
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
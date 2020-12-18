module.exports = require('mongoose').connect(process.env.MONGODB_URL || 'mongodb://localhost/workout_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

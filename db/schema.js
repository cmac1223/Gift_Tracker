var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

var GoalSchema = new Schema({
  goal: { type: String, required: true },
  cost: { type: Number, required: true },
  createAt: Date,
  updatedAt: Date
})

GoalSchema.pre('save', function(next){
  now = new Date();
  this.updatedAt = now;

  if( !this.createdAt ) {
      this.createAt = now;
  }
  next();
})

var GoalModel = mongoose.model('Goal', GoalSchema);

module.exports = {
  Goal: GoalModel
};
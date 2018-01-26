var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

var GoalSchema = new Schema({
  entry: { type: String, required: true },
  cost: { type: Number, required: true },
  createAt: Date,
  updatedAt: Date
})

var ListSchema = new Schema({
  title: String,
  goal: [GoalSchema]
});

ListSchema.pre('save', function (next) {
  now = new Date();
  this.updatedAt = now;

  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
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
var ListModel = mongoose.model('List', ListSchema);

module.exports = {
  Goal: GoalModel,
  List: ListModel
};
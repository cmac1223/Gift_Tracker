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

var ShoppingListSchema = new Schema({
  title: String,
  list: [GoalSchema]
});

ShoppingListSchema.pre('save', function (next) {
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
var ShoppingListModel = mongoose.model('ShoppingList', ShoppingListSchema);

module.exports = {
  Goal: GoalModel,
  ShoppingList: ShoppingListModel
};
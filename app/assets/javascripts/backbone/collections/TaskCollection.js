
var TaskCollection = Backbone.Collection.extend({
  model: Task,
  url: '/tasks',
  comparator: function(model) {
    var dueDate = new Date(model.get('due'))
    return dueDate;
  }
});

// Task Item
var TaskView = Backbone.View.extend({

  tagName: 'div',

  className: 'collection',

  events: {
    'click h6': 'showDetails'
  },

  template: HandlebarsTemplates['task'],

  initialize: function() {
    // listen to change event on collection
    // when the model change call this.addOne
    this.listenTo(this.collection, 'add', this.addOne);
  },

  render: function() {
    // append each model from collection to html el
    this.collection.each(function(model) {
      var html = this.template(model.toJSON());
      this.$el.append(html);
    }, this)

    return this;
  },

  showDetails: function() {
  // display details of this view in detail div;
  },

  addOne: function(model) {
    var pos = taskCollection.indexOf(model);
    var html = this.template(model.toJSON());
    if (this.$el.find('.task-summary').length === 0) {
      this.$el.append(html);
    } else {
      this.$el.find('.task-summary').eq(pos - 1).after(html);
    }
  }

});

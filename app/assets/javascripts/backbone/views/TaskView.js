
// Task Item
var TaskView = Backbone.View.extend({

  className: 'task',

  events: {
    'click': 'showDetails'
  },

  template: HandlebarsTemplates['task'],

  initialize: function() {
    // listen to change event on model
    // when the model change call this.render
    this.listenTo(this.model, 'change:complete', this.render);
  },

  render: function() {

    var html = this.template(this.model);
    this.$el.html(html);

    return this;
  },

  showDetails: function() {
  //   display details of this view in detail div;
  // console.log('Details: ' + this.model.get('desc'))
  }

});

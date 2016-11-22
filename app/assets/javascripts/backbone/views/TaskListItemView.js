
var TaskListItemView = Backbone.View.extend({

  events: {
    'click': 'showDetails'
  },

  template: HandlebarsTemplates['task_list_item'],

  initialize: function() {
    // listen to change event on model
    // when the model change call this.render
    this.listenTo(this.model, 'change:title', this.render);
  },

  render: function() {

    var html = this.template(this.model.toJSON());
    this.$el.html(html);

    return this;
  },

  showDetails:
  // function() {
  //   display details of this view to detail div;
  // }
  console.log('Details: ' + this.model.get('desc'));

});

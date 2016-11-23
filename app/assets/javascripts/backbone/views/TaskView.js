var TaskView = Backbone.View.extend({

  className: 'task-summary collection-item',

  events: {
    'click a': 'showDetails'
  },

  template: HandlebarsTemplates['task'],

  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.html(html);
    return this;
  },

  showDetails: function() {
    var detailedTaskView = new DetailedTaskView({model: this.model})
    $('.task-detail').html(detailedTaskView.render().el);
  },

});

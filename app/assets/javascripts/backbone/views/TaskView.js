var TaskView = Backbone.View.extend({

  className: 'task-summary',

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
    // Make Task display 'active'
    $('.task-list a').removeClass('active');
    this.$el.find('a').addClass('active');
    window.scrollTo(0, 0);

  },

});

var TaskView = Backbone.View.extend({

  className: 'task-summary',

  events: {
    'click a': 'showDetails'
  },

  template: HandlebarsTemplates['task'],

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    var taskJSON = this.model.toJSON();
    taskJSON.due = taskJSON.due.slice(0, 10);
    var html = this.template(taskJSON);
    this.$el.html(html);
    if (this.model.get('complete')){
      this.$el.addClass('complete');
    } else {
      this.$el.removeClass('complete');
    }
    return this;
  },

  showDetails: function() {
    var detailedTaskView = new DetailedTaskView({model: this.model})
    $('.task-detail').html(detailedTaskView.render().el);
    // Make Task display 'active'
    $('.task-list a').removeClass('active');
    this.$el.find('a').addClass('active');
    window.scrollTo(0, 0);
    $('.hidden-div').fadeOut();
    $('.x').fadeOut();
  },

});

var TaskView = Backbone.View.extend({

  className: 'collection-item',

  events: {
    'click a': 'showDetails'
  },

  template: HandlebarsTemplates['company'],

  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.html(html);
    return this;
  },

  showDetails: function() {
    var detailedTaskView = new DetailedCompanyView({model: this.model})
    $('.task-detail').html(detailedTaskView.render().el);
  },

});

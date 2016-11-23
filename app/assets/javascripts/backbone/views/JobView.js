var JobView = Backbone.View.extend({

  className: 'task-summary',

  events: {
    'click a': 'showDetails'
  },

  template: HandlebarsTemplates['job'],

  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.html(html);
    return this;
  },

  showDetails: function() {
    var detailedJobView = new DetailedJobView({model: this.model})
    $('.task-detail').html(detailedJobView.render().el);

    // Make Task display 'active'
    $('.task-list a').removeClass('active');
    this.$el.find('a').addClass('active');
    window.scrollTo(0, 0);

  },

});

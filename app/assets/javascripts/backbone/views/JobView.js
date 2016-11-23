var JobView = Backbone.View.extend({

  className: 'collection-item',

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
  },

});
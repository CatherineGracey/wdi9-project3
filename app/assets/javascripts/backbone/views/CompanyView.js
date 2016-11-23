var CompanyView = Backbone.View.extend({

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
    var detailedCompanyView = new DetailedCompanyView({model: this.model})
    $('.task-detail').html(detailedCompanyView.render().el);
  },

});

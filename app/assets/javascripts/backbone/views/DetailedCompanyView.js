var DetailedCompanyView = Backbone.View.extend({

  events: {
    'click #edit-company-btn': 'editCompany',
    'click #delete-company-btn': 'deleteCompany'
  },

  template: HandlebarsTemplates['company_details'],

  render: function() {
    var html = this.template(this.model);
    this.$el.html(html);
    this.collection.each(function(model){
      var companyView = new CompanyView({model: model});
      this.$el.find('#tasks-snapshot').append(companyView.render().el);
    }, this);
    return this;
  },

  editCompany: function() {

  },

  deleteCompany: function() {

  }

});

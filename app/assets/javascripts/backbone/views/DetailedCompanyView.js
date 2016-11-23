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
      var taskView = new TaskView({model: model});
      this.$el.find('#tasks-snapshot').append(taskView.render().el);
    }, this);
    return this;
  },

  editCompany: function() {

  },

  deleteCompany: function() {

  }

});

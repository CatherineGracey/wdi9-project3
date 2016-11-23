var DetailedCompanyView = Backbone.View.extend({

  events: {
    'click #edit-company-btn': 'editCompany',
    'click #delete-company-btn': 'deleteCompany'
  },

  template: HandlebarsTemplates['company_details'],

  render: function() {
    var html = this.template(this.model);
    this.$el.html(html);
    
    // Filter tasks related to selected company and append list:
    var companyTasks = taskCollection.filter(function(model) {
      return model.get('company_id') === this.model.get('id');
    }, this);
    var companyTasksCollection = new TaskCollection(companyTasks);
    var companyTasksList = new TaskListView({ collection: companyTasksCollection });
    this.$el.find('#tasks-snapshot').append(companyTasksList.render().el);

    return this;
  },

  editCompany: function() {

  },

  deleteCompany: function() {

  }

});

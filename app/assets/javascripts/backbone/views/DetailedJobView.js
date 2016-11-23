var DetailedJobView = Backbone.View.extend({

  events: {
    'click #edit-job-btn': 'editJob',
    'click #delete-job-btn': 'deleteJob'
  },

  template: HandlebarsTemplates['job_details'],

  render: function() {
    var html = this.template(this.model);
    this.$el.html(html);
    // TODO: Draw list of tasks related to selected job:

    // var companyTasks = taskCollection.filter(function(model) {
    //   return model.get('company_id') === this.model.get('id');
    // }, this);
    // var companyTasksCollection = new TaskCollection(companyTasks);
    // var companyTasksList = new TaskListView({ collection: companyTasksCollection });
    // this.$el.find('#tasks-snapshot').append(companyTasksList.render().el);

    return this;
  },

  editJob: function() {

  },

  deleteJob: function() {

  }

});

var DetailedJobView = Backbone.View.extend({

  events: {
    'click #edit-job-btn': 'editJob',
    'click #delete-job-btn': 'deleteJob',
    'click #at-company': 'showCompany'
  },

  template: HandlebarsTemplates['job_details'],

  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.html(html);

    // Draw list of tasks related to selected job:
    var jobTasks = taskCollection.filter(function(model) {
      return model.get('job_id') === this.model.get('id');
    }, this);
    var jobTasksCollection = new TaskCollection(jobTasks);
    var jobTasksList = new TaskListView({ collection: jobTasksCollection });
    this.$el.find('#tasks-snapshot').append(jobTasksList.render().el);

    return this;
  },

  editJob: function() {

  },

  deleteJob: function() {

  },

  showCompany: function() {
    var currentCompany = companyCollection.filter(function(company) {
      return company.get('name') === this.$el.find('#at-company').text();
    }, this);
    console.log(currentCompany[0]);
    var detailedCompanyView = new DetailedCompanyView({model: currentCompany[0]});
    $('.task-detail').html(detailedCompanyView.render().el);

  }

});

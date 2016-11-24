var DetailedCompanyView = Backbone.View.extend({

  events: {
    'click #edit-company-btn': 'editCompany',
    'click #delete-company-btn': 'deleteCompany',
    'click #new-job-btn': 'newJob',
    'click #new-task-btn': 'newTask'
  },

  template: HandlebarsTemplates['company_details'],

  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.html(html);

    // Filter tasks related to selected company and append list:
    var companyTasks = taskCollection.filter(function(model) {
      return model.get('company_id') === this.model.get('id');
    }, this);
    var companyTasksCollection = new TaskCollection(companyTasks);
    var companyTasksList = new TaskListView({ collection: companyTasksCollection });
    this.$el.find('#tasks-snapshot').append(companyTasksList.render().el);

    // Filter jobs related to selected company and append list:
    var companyJobs = jobCollection.filter(function(model) {
      return model.get('company_id') === this.model.get('id');
    }, this);
    var companyJobsCollection = new JobCollection(companyJobs);
    var companyJobsList = new JobListView({ collection: companyJobsCollection });
    this.$el.find('#jobs-snapshot').append(companyJobsList.render().el);

    return this;
  },

  editCompany: function() {

  },

  deleteCompany: function() {
    var model = this.model
    var options = {
      url: '/companies/' + model.get('id') + '/delete',
      method: 'delete'
    }
    $.ajax(options);
    companyCollection.remove(model);
    $('.task-detail').html('')
  },

  newJob: function() {
    // Render new task form, append to hidden-div
    var view = new NewJobView();
    $('.hidden-div').html(view.render().el);
    $('.datepicker').pickadate({
      selectMonths: true,
      selectYears: 15
    });
    // Reveal hidden-div
    $('.hidden-div').fadeIn();
  },

  newTask: function() {
    // Render new task form, append to hidden-div
    var view = new NewTaskView();
    $('.hidden-div').html(view.render().el);
    $('.datepicker').pickadate({
      selectMonths: true,
      selectYears: 15
    });
    // Reveal hidden-div
    $('.hidden-div').fadeIn();
  }

});

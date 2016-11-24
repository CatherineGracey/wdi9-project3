var DetailedJobView = Backbone.View.extend({

  events: {
    'click #edit-job-btn': 'editJob',
    'click #delete-job-btn': 'deleteJob',
    'click #at-company': 'showCompany',
    'click #new-task-btn': 'newTask'
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
    var model = this.model
    var options = {
      url: '/jobs/' + model.get('id') + '/delete',
      method: 'delete'
    }
    $.ajax(options);
    jobCollection.remove(model);
    $('.task-detail').html('')
  },

  showCompany: function() {
    var currentCompany = companyCollection.filter(function(company) {
      return company.get('name') === this.$el.find('#at-company').text();
    }, this);
    console.log(currentCompany[0]);
    var detailedCompanyView = new DetailedCompanyView({model: currentCompany[0]});
    $('.task-detail').html(detailedCompanyView.render().el);

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

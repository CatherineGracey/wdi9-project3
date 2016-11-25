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
    jobTasksCollection = new TaskCollection(jobTasks);
    var jobTasksList = new TaskListView({ collection: jobTasksCollection });
    this.$el.find('#tasks-snapshot').append(jobTasksList.render().el);

    return this;
  },

  editJob: function() {
    model = this.model
    var editJobView = new EditJobView({model: model})
    $('.task-detail').html(editJobView.render().el);
    // Make Task display 'active'
    $('.task-list a').removeClass('active');
    this.$el.find('a').addClass('active');
    window.scrollTo(0, 0);
    $('.hidden-div').fadeOut();
    $('#edit-job-company-name').material_select();
    $('.datepicker').pickadate({
      selectMonths: true,
      selectYears: 15
    });
  },

  deleteJob: function() {
    var model = this.model
    var options = {
      url: '/jobs/' + model.get('id') + '/delete',
      method: 'delete'
    }
    $.ajax(options);
    jobCollection.remove(model);
    var jobTasks = [];
    taskCollection.each(function(task_model) {
      if (task_model.get('job_id') == model.get('id')) {
        jobTasks.push(task_model);
      }
    });
    taskCollection.remove(jobTasks);
    $('.task-detail').html('')
  },

  showCompany: function() {
    var currentCompany = companyCollection.filter(function(company) {
      return company.get('name') === this.$el.find('#at-company').text();
    }, this);
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
    $('select').material_select();
    // Reveal hidden-div
    window.scrollTo(0, 0);
    $('.hidden-div').fadeIn();
    $('.x').fadeIn();
  }

});

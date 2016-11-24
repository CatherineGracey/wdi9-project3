var EditTaskView = Backbone.View.extend({

  events: {
    'click #update-task-btn': 'updateTask',
    'click #delete-task-btn': 'deleteTask'
  },

  template: HandlebarsTemplates['edit_task_details'],

  render: function() {
    var model = this.model.toJSON();
    model.due = model.due.substring(0, 16);
    // Compile list of companies and jobs
    model.companies = [];
    companyCollection.each(function(company) {
      model.companies.push({ id: company.get('id'), name: company.get('name') });
    });
    model.jobs = []
    jobCollection.each(function(job) {
      model.jobs.push({ id: job.get('id'), title: job.get('title') });
    });
    var html = this.template(model);
    this.$el.html(html);
    return this;
  },

  updateTask: function() {
    var model = this.model
    var options = {
      url: '/tasks/' + model.get('id') + '/edit',
      method: 'post',
      data: {
        title: $('#edit-task-title').val(),
        desc: $('#edit-task-desc').val(),
        due: $('#edit-task-datepicker').val(),
        // company_id: parseInt($('select[name="company"]').val()),
        // job_id: parseInt($('select[name="job"]').val())
      }
    }
    $.ajax(options).done(

    );
  },

  deleteTask: function() {
    var model = this.model;
    var options = {
      url: '/tasks/' + model.get('id') + '/delete',
      method: 'delete'
    };
    $.ajax(options);
    taskCollection.remove(model);
    $('.task-detail').html('');
  }

});

var EditTaskView = Backbone.View.extend({

  events: {
    'click #update-task-btn': 'updateTask',
    'click #delete-task-btn': 'deleteTask'
  },

  template: HandlebarsTemplates['edit_task_details'],

  render: function() {
    var model = this.model.toJSON();
    model.due = model.due.substring(0, 10);
    // Compile list of companies and jobs
    model.companies = [{id: "", name: "None"}];
    companyCollection.each(function(company) {
      model.companies.push({ id: company.get('id'), name: company.get('name') });
    });
    for (var i = 0; i < model.companies.length; i++){
      if (model.companies[i].id === model.company_id){
        var company = model.companies.splice(i, 1);
        model.companies.unshift(company[0]);
        break;
      }
    }
    model.jobs = [{id: "", title: "None"}];
    jobCollection.each(function(job) {
      model.jobs.push({ id: job.get('id'), title: job.get('title') });
    });
    for (var i = 0; i < model.jobs.length; i++){
      if (model.jobs[i].id === model.job_id){
        var job = model.jobs.splice(i, 1);
        model.jobs.unshift(job[0]);
        break;
      }
    }
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
        company_id: $('#edit-task-company-name').val(),
        job_id: $('#edit-task-job-title').val()
      }
    }
    console.log(options)
    $.ajax(options).done(function(response){
      console.log(response);
    });
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

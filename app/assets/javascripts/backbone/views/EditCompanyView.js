var EditTaskView = Backbone.View.extend({

  events: {
    'click #update-company-btn': 'updateCompany',
    'click #delete-company-btn': 'deleteCompany'
  },

  template: HandlebarsTemplates['edit_company_details'],

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

  updateCompany: function() {
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
      if (!response.error){
        model.set({'title': response.title});
        model.set({'desc': response.desc});
        var due = new Date(response.due);
        model.set({'due': due.toISOString()});
        model.set({'company_id': response.company_id});
        model.set({'job_id': response.job_id});
      }
    });
  },

  deleteCompany: function() {
    var model = this.model
    var options = {
      url: '/companies/' + model.get('id') + '/delete',
      method: 'delete'
    }
    $.ajax(options);
    // Remove linked front end models
    companyCollection.remove(model);
    var companyTasks = [];
    taskCollection.each(function(task_model) {
      if (task_model.get('company_id') == model.get('id')) {
        companyTasks.push(task_model);
      }
    });
    taskCollection.remove(companyTasks);
    var companyJobs = [];
    jobCollection.each(function(job_model) {
      if (job_model.get('company_id') == model.get('id')) {
        companyJobs.push(job_model);
      }
    });
    jobCollection.remove(companyJobs);
    $('.task-detail').html('')
  }

});

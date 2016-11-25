var EditJobView = Backbone.View.extend({

  events: {
    'click #update-job-btn': 'updateJob',
    'click #delete-job-btn': 'deleteJob'
  },

  template: HandlebarsTemplates['edit_job_details'],

  render: function() {
    var model = this.model.toJSON();
    if (model.date_applied){
      model.date_applied = model.date_applied.substring(0, 10);
    }
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
    var html = this.template(model);
    this.$el.html(html);
    return this;
  },

  updateJob: function() {
    var model = this.model
    var options = {
      url: '/jobs/' + model.get('id') + '/edit',
      method: 'post',
      data: {
        title: $('#edit-job-title').val(),
        pros: $('#edit-job-pros').val(),
        cons: $('#edit-job-cons').val(),
        date_applied: $('#edit-job-date-applied').val(),
        contact_name: $('#edit-job-contact-name').val(),
        contact_phone: $('#edit-job-contact-phone').val(),
        contact_email: $('#edit-job-contact-email').val(),
        located: $('#edit-job-located').val(),
        salary: $('#edit-job-salary').val(),
        notes: $('#edit-job-notes').val(),
        company_id: $('#edit-job-company-name').val(),
      }
    }
    console.log(options)
    $.ajax(options).done(function(response){
      if (!response.error){
        model.set({'title': response.title});
        model.set({'pros': response.pros});
        model.set({'cons': response.cons});
        var date_applied = new Date(response.date_applied);
        model.set({'date_applied': date_applied.toISOString()});
        model.set({'contact_name': response.contact_name});
        model.set({'contact_phone': response.contact_phone});
        model.set({'contact_email': response.contact_email});
        model.set({'located': response.located});
        model.set({'salary': response.salary});
        model.set({'notes': response.notes});
        model.set({'company_id': response.company_id});
        var detailedJobView = new DetailedJobView({model: model})
        $('.task-detail').html(detailedJobView.render().el);
      }
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
  }

});

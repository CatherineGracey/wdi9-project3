var EditJobView = Backbone.View.extend({

  events: {
    'click #update-job-btn': 'updateJob',
    'click #delete-job-btn': 'deleteJob'
  },

  template: HandlebarsTemplates['edit_job_details'],

  render: function() {
    var model = this.model.toJSON();
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

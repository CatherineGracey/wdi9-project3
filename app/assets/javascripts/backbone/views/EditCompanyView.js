var EditCompanyView = Backbone.View.extend({

  events: {
    'click #update-company-btn': 'updateCompany',
    'click #delete-company-btn': 'deleteCompany'
  },

  template: HandlebarsTemplates['edit_company_details'],

  render: function() {
    var model = this.model.toJSON();
    var html = this.template(model);
    this.$el.html(html);
    return this;
  },

  updateCompany: function() {
    var model = this.model
    var options = {
      url: '/companies/' + model.get('id') + '/edit',
      method: 'post',
      data: {
        name: $('#edit-company-name').val(),
        website: $('#edit-company-website').val(),
        pros: $('#edit-company-pros').val(),
        cons: $('#edit-company-cons').val(),
        size: $('#edit-company-size').val(),
        focus: $('#edit-company-focus').val(),
        industry: $('#edit-company-industry').val(),
      }
    }
    console.log(options)
    $.ajax(options).done(function(response){
      if (!response.error){
        model.set({'name': response.name});
        model.set({'website': response.website});
        model.set({'pros': response.pros});
        model.set({'cons': response.cons});
        model.set({'size': response.size});
        model.set({'focus': response.focus});
        model.set({'industry': response.industry});
        var detailedCompanyView = new DetailedCompanyView({model: model})
        $('.task-detail').html(detailedCompanyView.render().el);
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

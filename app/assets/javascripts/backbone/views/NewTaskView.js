var NewTaskView = Backbone.View.extend({

  events: {
    'click #submit-new-task': 'saveNewTask',
  },

  template: HandlebarsTemplates['new_task'],

  render: function() {
    // Compile list of companies and jobs
    var data = { companies: [], jobs: [] };
    companyCollection.each(function(company) {
      data.companies.push({ id: company.get('id'), name: company.get('name') });
    });
    jobCollection.each(function(job) {
      data.jobs.push({ id: job.get('id'), title: job.get('title') });
    });

    var html = this.template(data);
    this.$el.html(html);
    return this;
  },

  saveNewTask: function() {
    var options = {
      url: '/task',
      method: 'post',
      data: {
        title: $('#edit-task-title').val(),
        desc: $('#edit-task-desc').val(),
        due: $('#edit-task-datepicker').val(),
        company_id: parseInt($('select[name="company"]').val()),
        job_id: parseInt($('select[name="job"]').val())
      }
    }
    $.ajax(options)
    var due = new Date(options.data.due);
    options.data.due = due.toISOString();
    taskCollection.add(options.data);
    $('.hidden-div').fadeOut();
    $('.x').fadeOut();
  }

});

var DetailedJobView = Backbone.View.extend({

  events: {
    'click #edit-job-btn': 'editJob',
    'click #delete-job-btn': 'deleteJob'
  },

  template: HandlebarsTemplates['job_details'],

  render: function() {
    var html = this.template(this.model);
    this.$el.html(html);
    this.collection.each(function(model){
      var taskView = new TaskView({model: model});
      this.$el.find('#tasks-snapshot').append(taskView.render().el);
    }, this);
    return this;
  },

  editJob: function() {

  },

  deleteJob: function() {

  }

});

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
      var jobView = new JobView({model: model});
      this.$el.find('#tasks-snapshot').append(jobView.render().el);
    }, this);
    return this;
  },

  editJob: function() {

  },

  deleteJob: function() {

  }

});

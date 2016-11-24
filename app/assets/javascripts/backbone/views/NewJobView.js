var NewJobView = Backbone.View.extend({

  events: {
    'click #submit-new-job': 'saveNewJob',
    'click #close': 'hideForm'
  },

  template: HandlebarsTemplates['new_job'],

  render: function() {
    var html = this.template();
    this.$el.html(html);
    return this;
  },

  saveNewJob: function() {
    var options = {
      url: '/job',
      method: 'post',
      data: {
        title: $('input[name="title"]').val(),
        pros: $('input[name="pros"]').val(),
        cons: $('input[name="cons"]').val(),
        applied: $('input[name="applied"]').val(),
        contact_name: $('input[name="contact_name"]').val(),
        contact_phone: $('input[name="contact_phone"]').val(),
        contact_email: $('input[name="contact_email"]').val(),
        located: $('input[name="located"]').val(),
        salary: $('input[name="salary"]').val(),
        notes: $('input[name="notes"]').val()
      }
    }
    $.ajax(options)
    if (options.data.applied) {
      var applied = new Date(options.data.applied);
      options.data.applied = applied.toISOString();
    }
    jobCollection.add(options.data);
    this.hideForm();
  },

  hideForm: function() {
    $('.hidden-div').fadeOut("slow");
  }

});

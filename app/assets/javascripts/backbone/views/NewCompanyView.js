var NewCompanyView = Backbone.View.extend({

  events: {
    'click #submit-new-company': 'saveNewCompany',
  },

  template: HandlebarsTemplates['new_company'],

  render: function() {
    var html = this.template();
    this.$el.html(html);
    return this;
  },

  saveNewCompany: function() {
    var options = {
      url: '/company',
      method: 'post',
      data: {
        name: $('input[name="name"]').val(),
        pros: $('input[name="pros"]').val(),
        cons: $('input[name="cons"]').val(),
        website: $('input[name="website"]').val(),
        size: $('input[name="size"]').val(),
        focus: $('input[name="focus"]').val(),
        industry: $('input[name="industry"]').val(),
      }
    }
    $.ajax(options).done(function(response) {
      companyCollection.add(response.company);
      _.each(response.tasks, function(task) {
        task.due = new Date(task.due);
        taskCollection.add(task);
      });
    });
    window.scrollTo(0, 0);
    $('.hidden-div').fadeOut();
    $('.x').fadeOut();
  }

});

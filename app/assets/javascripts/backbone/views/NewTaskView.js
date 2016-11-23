var NewTaskView = Backbone.View.extend({

  events: {
    'click #submit-new-task': 'saveNewTask'
  },

  template: HandlebarsTemplates['new_task'],

  render: function() {
    var html = this.template();
    this.$el.html(html);
    return this;
  },

  saveNewTask: function() {
    var options = {
      url: '/task',
      method: 'post',
      data: {
        title: $('input[name="title"]').val(),
        desc: $('input[name="desc"]').val(),
        due: $('input[name="due"]').val(),
      }
    }
    $.ajax(options)
    var due = new Date(options.data.due);
    options.data.due = due.toISOString();
    taskCollection.add(options.data);
  }
});
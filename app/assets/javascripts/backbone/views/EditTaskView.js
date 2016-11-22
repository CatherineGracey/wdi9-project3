var EditTaskView = Backbone.View.extend({

  events: {
    'click #update-task-btn': 'updateTask',
    'click #delete-task-btn': 'deleteTask'
  },

  template: HandlebarsTemplates['edit_task_details'],

  render: function() {
    var html = this.template(task);
    this.$el.html(html);
    return this;
  },

  updateTask: function() {

  },

  deleteTask: function() {

  }

});

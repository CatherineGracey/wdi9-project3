var EditTaskView = Backbone.View.extend({

  events: {
    'click #update-task-btn': 'updateTask',
    'click #delete-task-btn': 'deleteTask'
  },

  template: HandlebarsTemplates['edit_task_details'],

  render: function() {
    var model = this.model.toJSON();
    model.due = model.due.substring(0, 10);
    var html = this.template(model);
    this.$el.html(html);
    return this;
  },

  updateTask: function() {
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

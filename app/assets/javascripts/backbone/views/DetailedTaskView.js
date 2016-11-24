var DetailedTaskView = Backbone.View.extend({

  events: {
    'click #edit-task-btn': 'editTask',
    'click #delete-task-btn': 'deleteTask',
    'click #completed-task': 'completeTask'
  },

  template: HandlebarsTemplates['task_details'],

  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.html(html);
    return this;
  },

  editTask: function() {
  },

  deleteTask: function() {
    var model = this.model
    var options = {
      url: '/tasks/' + model.get('id') + '/delete',
      method: 'delete'
    }
    $.ajax(options);
    taskCollection.remove(model);
    $('.task-detail').html('')
  },

  completeTask: function() {
    var model = this.model
    $.post('/tasks/' + model.get('id') + '/complete').done(function(response) {
      model.set(response);
    });
  }

});

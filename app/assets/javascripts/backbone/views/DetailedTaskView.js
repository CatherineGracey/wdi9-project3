var DetailedTaskView = Backbone.View.extend({

  events: {
    'click #edit-task-btn': 'editTask',
    'click #delete-task-btn': 'deleteTask'
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

  }

});

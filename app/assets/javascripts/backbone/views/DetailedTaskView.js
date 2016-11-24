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
    model = this.model
    var editTaskView = new EditTaskView({model: model})
    $('.task-detail').html(editTaskView.render().el);
    // Make Task display 'active'
    $('.task-list a').removeClass('active');
    this.$el.find('a').addClass('active');
    window.scrollTo(0, 0);
    $('.hidden-div').fadeOut();
    $('#edit-task-company-name').material_select();
    $('#edit-task-job-title').material_select();
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

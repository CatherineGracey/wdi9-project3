var NewTaskView = Backbone.View.extend({

  events: {
    // 'click': 'saveNewTask'
  },

  template: HandlebarsTemplates['new_task'],

  render: function() {
    var html = this.template();
    this.$el.html(html);
    return this;
  },

  saveNewTask: function() {
  }

});
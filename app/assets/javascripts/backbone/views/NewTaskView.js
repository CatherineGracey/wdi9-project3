var NewTaskView = Backbone.View.extend({

  events: {
    'click #submit-new-task': 'saveNewTask',
    'click #close': 'hideForm'
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
    taskCollection.add(options.data);
  },

  hideForm: function() {
    $('#close').click(function() {
      console.log('click');
      $('.hidden-div').fadeOut("slow");
    });
  }

});

var NewTaskView = Backbone.View.extend({

  events: {
    'click': 'saveNewTask'
  },

  // template: Handlebars.compile($('#item-template').html()),

  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.html(html);
    if (this.model.get('selected')) {
      this.$el.addClass('clicked');
    } else {
      this.$el.removeClass('clicked');
    }
    return this;
  },

  saveNewTask: function() {
  }

});
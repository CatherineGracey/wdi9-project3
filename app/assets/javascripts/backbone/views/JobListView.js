var JobListView = Backbone.View.extend({

  className: 'collection',

  initialize: function() {
    this.listenTo(this.collection, 'add', this.addOne);
  },

  addOne: function(model) {
    var view = new JobView({model: model});
    var html = view.render().el;
    this.$el.append(html);
  }

});

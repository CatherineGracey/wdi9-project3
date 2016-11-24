var JobListView = Backbone.View.extend({

  className: 'collection',

  initialize: function() {
    this.listenTo(this.collection, 'add', this.addOne);
    this.listenTo(this.collection, 'remove', this.render);
  },

  render: function() {
    this.$el.html('')
    this.collection.each(function(model) {
      var view = new JobView({model: model});
      this.$el.append(view.render().el);
    }, this);
    return this;
  },

  addOne: function(model) {
    var view = new JobView({model: model});
    var html = view.render().el;
    this.$el.append(html);
  }

});

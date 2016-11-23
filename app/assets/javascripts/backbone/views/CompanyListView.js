var CompanyListView = Backbone.View.extend({

  className: 'collection',

  initialize: function() {
    this.listenTo(this.collection, 'add', this.addOne);
  },

  render: function() {
    this.$el.html('')
    this.collection.each(function(model) {
      var view = new CompanyView({model: model});
      this.$el.append(view.render().el);
    }, this);
    return this;
  },

  addOne: function(model) {
    var view = new CompanyView({model: model});
    var html = view.render().el;
    this.$el.append(html);
  }

});

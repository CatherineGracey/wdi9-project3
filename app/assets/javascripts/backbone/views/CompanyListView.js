var CompanyListView = Backbone.View.extend({

  className: 'collection',

  initialize: function() {
    this.listenTo(this.collection, 'add', this.addOne);
  },

  addOne: function(model) {
    var view = new CompanyView({model: model});
    var html = view.render().el;
    this.$el.append(html);
  }

});

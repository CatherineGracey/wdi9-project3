var JobCollection = Backbone.Collection.extend({
  model: Job,
  url: '/jobs'
});

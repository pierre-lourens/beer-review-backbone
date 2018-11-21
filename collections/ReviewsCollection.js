var ReviewsCollection = Backbone.Collection.extend({
  model: ReviewModel,

  addReview: function (name, text) {
    this.add({
      name: name,
      text: text
    })
  }
});

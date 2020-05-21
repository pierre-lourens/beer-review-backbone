var ReviewsCollection = Backbone.Collection.extend({
  model: ReviewModel,

  addReview: function (name, text) {
    console.log("Addreview's this context", this);
    this.create(
      {
        name: name,
        text: text,
      },
      { wait: true }
    );
  },
});

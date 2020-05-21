var BeersCollection = Backbone.Collection.extend({
  url: "https://beer-review-api.herokuapp.com/beers",
  model: BeerModel,

  addBeer: function (name, style, abv, image_url) {
    this.create(
      {
        name: name,
        style: style,
        abv: abv,
        image_url: image_url,
      },
      { wait: true }
    );
  },

  parse: function (response) {
    return response.map(function (b) {
      var reviews = new ReviewsCollection();

      reviews.set(b.reviews);

      b.reviews = reviews;

      return Object.assign({ id: b._id }, b);
    }, this);
  },
});

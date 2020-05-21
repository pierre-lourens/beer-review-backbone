var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      beers: new BeersCollection(),

      reviews_url: null,

      // either true or false
      show_reviews: false,
    };
  },

  showReviews: function (id) {
    var allBeers = this.get("beers");

    var currentBeer = allBeers.findWhere({ id: id });

    this.set("current_beer", currentBeer);

    currentBeer.get(
      "reviews"
    ).url = `https://beer-review-api.herokuapp.com/beers/${id}/reviews`;

    this.set("show_reviews", true);
  },

  showBeers: function () {
    this.set("show_reviews", false);
  },
});

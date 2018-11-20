var BeerModel = Backbone.Model.extend({
  defaults: function () {
    return {
      id: null,
      name: '',
      style: '',
      abv: 0,
      image_url: '',
      reviews: new ReviewsCollection()
    }
  }
});

var BeersCollection = Backbone.Collection.extend({
  model: BeerModel,

  addBeer: function (name,style,abv,image_url) {
    this.add({
      name: name,
      style: style,
      abv: abv,
      image_url: image_url
    });
  }
});

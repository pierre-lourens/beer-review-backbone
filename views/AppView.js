var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .submit-beer': 'createBeer'
  },

  initialize: function () {
    this.listenTo(this.model.get('beers'), 'add', this.renderBeer);

    this.renderBeers();
  },

  createBeer: function () {
    this.model.get('beers').add({
      name: this.$('#name-input').val(),
      style: this.$('#style-input').val(),
      abv: this.$('#abv-input').val(),
      image_url: this.$('#img-input').val()
    });
  },

  renderBeer: function (beer) {
    var beerView = new BeerView({ model: beer });
    this.$('.beer-list').append(beerView.render().el);
  },

  renderBeers: function () {
    this.model.get('beers').each(function (m) {
      this.renderBeer(m);
    }, this);
  }
});

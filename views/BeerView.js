var BeerView = Backbone.View.extend({
  className: 'beer',

  template: Handlebars.compile($('#beer-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
});

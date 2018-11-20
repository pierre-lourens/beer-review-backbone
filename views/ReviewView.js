var ReviewView = Backbone.View.extend({
  className: 'review',

  template: Handlebars.compile($('#review-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
});

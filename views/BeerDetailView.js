var BeerDetailView = Backbone.View.extend({
  className: 'reviews-container-inner',

  template: Handlebars.compile($('#beer-detail-template').html()),

  initialize: function () {
    this.listenTo(this.model.get('reviews'), 'add', this.renderReview);
  },

  events: {
    'click .submit-review': 'createReview'
  },

  createReview: function () {
    this.model.get('reviews').add({
      name: this.$('#review-name-input').val(),
      text: this.$('#review-notes-input').val()
    });

    this.$('#review-name-input').val('');
    this.$('#review-notes-input').val('');
  },

  renderReviews: function () {
    this.model.get('reviews').each(function (m) {
      this.renderReview(m);
    }, this);
  },

  renderReview: function (review) {
    var reviewView = new ReviewView({ model: review });
    this.$('.reviews-list').append(reviewView.render().el);
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    this.renderReviews();

    return this;
  }
});

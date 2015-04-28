import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.createRecord('haiku');
  },
  setupController: function (controller, model) {
    this._super(controller, model);
    controller.set('lines', this.store.find('haiku-line'));
  }
});

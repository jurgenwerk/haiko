import Ember from 'ember';

export default Ember.Component.extend({
  applyDragula: function () {
    dragula([haiku_area]);
  }.on('didInsertElement')
});

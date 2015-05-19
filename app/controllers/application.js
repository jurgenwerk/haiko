import Ember from 'ember';

export default Ember.Controller.extend({
  verses: function () {
    return this.get('lines').mapBy('line')
  }.property('lines.@each'),

  actions: {
    addLine: function (line, obj) {
      this.set(`model.line${obj.target.row}`, line.get('line'));
    }
  }
});

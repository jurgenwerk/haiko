import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addLine: function (line, obj) {
      this.set(`model.line${obj.target.row}`, line.get('line'));
    }
  }
});

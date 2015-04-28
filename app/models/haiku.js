import DS from 'ember-data';

export default DS.Model.extend({
  line1: DS.attr('string'),
  line2: DS.attr('string'),
  line3: DS.attr('string'),
});

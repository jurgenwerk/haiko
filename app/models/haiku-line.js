import DS from 'ember-data';

var HaikuLine = DS.Model.extend({
  line: DS.attr('string')
});

HaikuLine.reopenClass({
  FIXTURES: [
    { id: 1, line: "Nature stagnates" },
    { id: 2, line: "Ronald Reagan is the shit" },
    { id: 3, line: "Middle age crisis" }
  ]
})

export default HaikuLine

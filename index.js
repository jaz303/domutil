var du = module.exports = {};

extend(require('./impl/classes'));
extend(require('./impl/events'));
extend(require('./impl/layout'));
extend(require('./impl/matches_selector'));
extend(require('./impl/node'));
extend(require('./impl/text'));
extend(require('./impl/viewport'));

function extend(things) {
    for (var k in things) {
        du[k] = things[k];
    }
}

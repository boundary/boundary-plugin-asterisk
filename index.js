var _os = require('os');
var _param = require('./param.json');
var _source = _os.hostname();

var _ari = require('ari-client');

var _interval = parseInt(process.argv[1]) || 1000;
var _last;

function poll()
{
        _ari.connect(_param.server, _param.username, _param.password, function(err, ari) {

                ari.channels.list(function(err, channels) {
                        console.log('ACTIVE_CHANNELS ' + channels.length);
                });
        });

	setTimeout(poll, _interval);
}
poll();
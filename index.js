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
                    console.log('ASTERISK_CHANNELS ' + channels.length);
            });

            ari.bridges.list(function(err, bridges) {
                    console.log('ASTERISK_BRIDGES ' + bridges.length);
            });

            ari.endpoints.list(function(err, endpoints) {
                    var sip_endpoints = 0;
                    for (var i = 0; i < endpoints.length; i++)
                    {
                            if (endpoints[i].technology == "SIP" && endpoints[i].state == "online")
                            {
                                    sip_endpoints++;
                            }
                    }

                    console.log('ASTERISK_SIP_ENDPOINTS: ' + sip_endpoints);
            });
    });

	setTimeout(poll, _interval);
}
poll();
var Nsquishy = require('nsquishy');

exports.register = function (server, options, next) {

    var nsquishy = new Nsquishy(options);
    nsquishy.squish(function squishCallback (err) {

        if (err) {
            return next(err);
        }

        server.app.nsquishy = nsquishy;
        next();
    });
};

exports.register.attributes = {
    pkg: require('../package.json')
};

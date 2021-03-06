'use strict';
var utils = require('./utils.js');
var spawn = require('child_process').spawn;
var argv  = require('yargs').argv;

module.exports = function () {
    return function (cb) {
        var target = argv.t;
        var cmd;
        if(target === 'ios'){
            cmd = spawn('ionic',['run','ios']);
        }
        else{
            cmd = spawn('ionic',['run','android']);
        }
        utils.logCmd(cmd,cb);
    };
};

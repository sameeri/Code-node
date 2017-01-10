'use strict';

var os = require('os');
var _ = require('lodash');

// Hardware stuff
console.log('End of Line marker for the OS:', os.EOL);
console.log('CPU Architecture:', os.arch());
console.log('# of CPUs:', (os.cpus()).length);
console.log('CPUs:', os.cpus());
console.log('Total memory:', os.totalmem());
console.log('Free memory size:', os.freemem());
console.log('What is the endianness on this machine?:', os.endianness());

// OS stuff
console.log('OS platform:', os.platform());
console.log('OS type:', os.type());
console.log('OS release:', os.release());
console.log('OS temp directory:', os.tmpdir());
console.log('OS has been up for:', os.uptime());
console.log('Home directory for the current user:', os.homedir());

// Network Stuff
console.log('Network interfaces:', os.networkInterfaces());
console.log('Host Name:', os.hostname());


console.log('os object', os);

_.each(os, function print(property) {
   console.dir(property); 
});

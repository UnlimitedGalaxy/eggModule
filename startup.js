'use strict';

require('@ali/nut').startCluster({
	baseDir: __dirname,
	port: process.env.PORT || 7878
});
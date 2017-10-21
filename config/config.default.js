'use strict';

module.exports = appInfo => {
	const config = {
		security: {
			csrf: {
				enable: false,
			},
			methodnoallow: {
				enable: false,
			},
			domainWhiteList: [
				'localhost:7878',
				'www.alibaba.com',
			]
		},
	};
	
	// should change to your own
	config.keys = appInfo.name + '_1505205367040_8043';
	
	// add your config here
	
	return config;
};

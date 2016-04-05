function gulpConfig(){
    "use strict";
	var client 	= "./";
	var	server 	= "./server.js";
	
	var config = {
		root: root,
		client: client,
		browserSyncFiles: [client + "**/*"],
		browserSyncPort: 4000,
		nodeServerPort: 3000,
		server: server,
        browsers: "firefox",
        sass: client + "sass/*.scss",
        css: client + "./css"
	};

	return config;
}

module.exports = gulpConfig;
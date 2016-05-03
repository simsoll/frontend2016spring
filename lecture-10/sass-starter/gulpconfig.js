function gulpConfig(){
    "use strict";
	
    var root = "./";
  
	var config = {
		root: root,
		browserSyncFiles: [root + "**/*"],
		browserSyncPort: 4000,
        browsers: ["google chrome", "firefox"],
        sass: root + "sass/*.scss",
        css: root + "./css"
	};

	return config;
}

module.exports = gulpConfig;
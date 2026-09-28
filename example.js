import plugins from './index.js';
import path from 'path';

// ASSUMES that ap-electron-plugins-example is cloned and linked to ../plugins/LINK

let loadedPlugins;
let appDir = process.cwd();

plugins.discover( '../plugins', appDir, true, function ( err, results ) {
    var context = { document: {}, quiet: true };
    if( !err )
    {
      context.plugins = results;
	  context.pluginPath = '../plugins';
	  context.appDir = appDir;
    }
	plugins.load({context: context}, function (err, dependencies, modules) {		
      if(err) {
		return console.error(err);
	  } else {
		  loadedPlugins = modules;
		  loadedPlugins.forEach(element => {
			// Run the about here so we 
			console.log(element.about());
		  });
	  }
    });
});


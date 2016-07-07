
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */

module.exports = {
    files: ["./build/**/*.{html,htm,css,js}",
    {
        match: ["*.{html,js,json}","./app/**/*.{html,htm,css,ts}"],
        fn: function (event, file) {
            console.log("File changed: " + file);
            var exec = require('child_process').exec;
            //child = exec('tsc ' + file).stderr.pipe(process.stderr);
            child = exec('tsc').stderr.pipe(process.stderr);
        }
    }
    ],
    exclude: ["app/**/*.*"]
};

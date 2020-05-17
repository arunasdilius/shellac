var sass = require('node-sass');
var scss_filename = './src/sass/variables.scss';
var destination_filename = './dist/spiral.css';
sass.render({
        file: scss_filename,
        outFile: destination_filename
    },
    function (err, result) {

    });
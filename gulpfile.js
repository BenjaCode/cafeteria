const {src, dest, watch, series, parallel} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css(done){
    src('src/scss/app.scss')
        /* .pipe(sass({outputStyle: 'compressed'})) */
        .pipe(sass())
            .pipe(dest('build/css'));
    done();
}

function dev() {
    watch('src/scss/app.scss', css)
}

exports.css = css;
exports.dev = dev;
exports.default = series(css , dev);
const {src, dest, watch, series, parallel} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function css(done){
    src('src/scss/app.scss')
        /* .pipe(sass({outputStyle: 'compressed'})) */
        .pipe(sourcemaps.init())
            .pipe(sass())
                .pipe(sourcemaps.write('.'))
                    .pipe(dest('build/css'));
    done();
}

function dev() {
    watch('src/scss/**/*.scss', css)
}

exports.css = css;
exports.dev = dev;
exports.default = series(css , dev);
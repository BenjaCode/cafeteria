const {src, dest, watch, series, parallel} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

function css(done){
    src('src/scss/app.scss')
        .pipe(sourcemaps.init())
            .pipe(sass())
            /* .pipe(sass({outputStyle: 'compressed'})) */
                .pipe(postcss([autoprefixer(), cssnano()]))
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
// modules
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const debug = require('gulp-debug');


// control vars
const control = {
    "files": {
        "styles": [
            "components/_defaults/mixins.scss",
            "components/_defaults/presets.scss",
            "components/_defaults/utilities.scss",
            "components/_defaults/reset.scss",

            "components/c-responsiveGrid/index.scss",
            "components/c-btn/index.scss",
            "components/c-form/index.scss",
            "components/c-countdown/index.scss",
            "components/c-brand/index.scss",
            "components/c-spacer/index.scss",
            "components/c-article/index.scss",
            "components/c-formWhatsapp/index.scss",
            "components/c-videoBackground/index.scss",

            "components/s-preSite/index.scss",

            "components/p-home/index.scss",
        ],
        "scripts": [
            //"assets/js/_utilities.js",
            //"assets/js/cResponsiveGrid.js",
            //"assets/js/cForm.js",
            //"assets/js/sDefault.js",
            //"assets/js/lNav.js",
            "components/c-responsiveGrid/index.js",
            "components/c-form/index.js",
            "components/c-countdown/index.js",
            "components/c-formWhatsapp/index.js",
        ],
    },
    "dist" : 'dist/'
};


// project tasks
const tasks = {
    "styles": () => {
        return gulp
            .src(control.files.styles)
            .pipe(debug({title: 'file:'}))
            .pipe(concat('styles-min.css'))
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(autoprefixer({cascade: false}))
            .pipe(gulp.dest(control.dist));
    },
    "scripts": () => {
        return gulp
            .src(control.files.scripts)
            .pipe(debug({title: 'file:'}))
            .pipe(concat('scripts-min.js'))
            .pipe(babel({presets: ['@babel/preset-env']}))
            .pipe(uglify())
            .pipe(gulp.dest(control.dist));
    },
}


// gulp tasks
gulp.task('styles', (done) => {tasks.styles(); done()});
gulp.task('scripts', (done) => {tasks.scripts(); done()});
gulp.task('watch', () => {
    gulp.watch('components/**/*.scss', tasks.styles);
    gulp.watch('components/**/*.js', tasks.scripts);
});
gulp.task('default', gulp.parallel('styles', 'scripts'));

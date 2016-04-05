var gulp        = require('gulp'),
    sass        = require('gulp-sass');

gulp.task("sass", function(){       // when the Gulp task "sass" is executed
    gulp.src("./sass/*.scss")       // grab all sass files in the sass folder
        .pipe(sass())               // compile the sass files
        .pipe(gulp.dest("./css"));  // copy the compiled css file to the css folder
});

gulp.task("default", ["sass"]);     // when the user just types gulp - the sass task is executed
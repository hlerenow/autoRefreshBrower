var gulp=require("gulp"),
		browserSync=require("browser-sync");


// 静态服务器
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./src"
        },
        files:['./src/**/*.*']
    });
});
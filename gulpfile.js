var gulp = require('gulp'); // gulpを読み込む
var uglify = require('gulp-uglify'); // gulp-uglifyを読み込む

// 引数を指定しなかった場合にこれが呼ばれるよ
gulp.task('default', ['uglify']);

// 「uglify」タスクを定義する
gulp.task('uglify', function () {
  // タスクを実行するファイルを指定
  gulp.src('./src/js/example.js')
    // 実行する処理をpipeでつないでいく
    .pipe(uglify()) // uglifyを実行
    .pipe(gulp.dest('dist')) // 圧縮したファイルをdistに出力
});
var gulp = require('gulp');
var git = require('gulp-git');

var newer = require('gulp-newer');//работает только с файлами, которые новее

// GIT PULL

// Run git pull
// remote is the remote repo
// branch is the remote branch to pull from
gulp.task('pull', function(done){
  git.pull('origin', 'master', {args: '--rebase'}, function (err) {
    if (err) throw err;
  });
  done();
});
// gulp.task('default', 'pull');



// GIT PULL END



// date
  var date = new Date(); //для создания папки с текущей датой в папке бэкапа
  var now = date.getFullYear() + '.' + ('0' + (date.getMonth() + 1)).slice(-2) + '.' + ('0' + date.getDate()).slice(-2);
// date END


const rename = require ('gulp-rename'); //переименование файлов
const del = require('del');

const imagemin = require('gulp-imagemin'); //основной плагин, его дополнения:

const imageminPngquant = require('imagemin-pngquant'); //PNG
const imageminJpegRecompress = require('imagemin-jpeg-recompress'); //JPEG
const gifsicle = require('imagemin-gifsicle'); //GIF
const svgo = require('imagemin-svgo'); //SVG

//основной таск - минимизация изображений
gulp.task('imgMinToDest',function(done){ 
  	gulp.src('_site/images/uploads/*')//берем из папки все изображения
  		.pipe(newer('../netlify_to_advance/images/uploads/'))
        // imgMin
  		.pipe(imagemin([
  		      imagemin.gifsicle({interlaced: true}), //gif + options
  		      imageminJpegRecompress({ //jpeg + options
  		        progressive: true,
  		        max: 90,
  		        min: 80
  		      }),
  		      imageminPngquant({quality: [0.8, 0.9]}), //png  + options
  		      imagemin.svgo({plugins: [{removeViewBox: true}]}) //svg + options
  		    ]))
  		// imgMin END
        .pipe(gulp.dest('../netlify_to_advance/images/uploads/'));//кладем файлы в папку ready
        done();
});
//копия исходного файла в папку ready
// gulp.task('rawImgToDest',function(done){
//   		gulp.src('raw/*')					//берем из папки все изображения
//         .pipe( rename({ suffix: '.full' })) //добавляем суффикс 'full' перед расширением
//         .pipe(gulp.dest('ready'));			//копируем в папку ready
//         done();
// });
//копия исходного файла в папку backup
gulp.task('rawImgToBackup',function(done){
	gulp.src('_site/images/uploads/*')
		.pipe(newer('../netlify_backup_imgs/'+now+'/'))					//берем из папки все изображения
		.pipe(gulp.dest('../netlify_backup_imgs/'+now+'/'));		//копируем в папку backup
		done();
});
// удаление исходного файла из папки raw - ОПАСНО!! асинхронно работает((
// gulp.task('deleteRawInSrc', function (done) {
// 		del.sync(['raw/*']);
// 		done();
// });
// последовательное выполнение нескольких задач - MAIN TASK!
gulp.task('min', gulp.series(
	'imgMinToDest',
	// 'rawImgToDest',
	'rawImgToBackup'
	// 'deleteRawInSrc'
));

// Watch files - можно допилить, но будет грузить систему постоянным наблюдением
// function watchFiles() {
//   gulp.watch("./**/*.css", browserSyncReload);
  
// }

//очистка папки ready
gulp.task('clean', function (done) {
		// gulp.src('ready/*', {read: false})
    del.sync(['raw/*']);
    // del.sync(['ready/*']);
    // gulp.src('raw/*', {read: false})
    // .pipe(clean);
		done();
});

// копия файлов jekyll
gulp.task('jekyllCopy',function(done){

  	gulp.src('_site/06_css/about_news/style.css')
  		// .pipe(newer('../netlify_to_advance/06_css/about_news/')
  			.pipe(gulp.dest('../netlify_to_advance/06_css/about_news/'));

  	gulp.src('_site/06_css/knowledge_articles/style.css')
  		// .pipe(newer('../netlify_to_advance/06_css/knowledge_articles/'))
  			.pipe(gulp.dest('../netlify_to_advance/06_css/knowledge_articles/'));

  	gulp.src('_site/about/news/*')
  		// .pipe(newer('../netlify_to_advance/about/news/'))
  			.pipe(gulp.dest('../netlify_to_advance/about/news/'));

  	gulp.src('_site/knowledge/articles/*')
  		// .pipe(newer('../netlify_to_advance/knowledge/articles/'))
  			.pipe(gulp.dest('../netlify_to_advance/knowledge/articles/'));

  	gulp.src('_site/knowledge/videomaterials/*')
  		// .pipe(newer('../netlify_to_advance/knowledge/videomaterials/'))
  			.pipe(gulp.dest('../netlify_to_advance/knowledge/videomaterials/'));
    done();
});

gulp.task('default', gulp.series('pull','min','jekyllCopy'));
// gulp.task('default', gulp.series('pull','jekyllCopy'));
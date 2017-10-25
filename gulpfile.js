// include gulp
var gulp = require('gulp')

,   concat	 	= require('gulp-concat'),
	stripDebug 	= require('gulp-strip-debug'),
	uglify 		= require('gulp-uglify'),
	argv 		= require('yargs').argv

, jsdoc = require('gulp-jsdoc3')
, gutil = require('gulp-util')
, babel	= require('gulp-babel')
, babelify = require('babelify')
, browserify = require('browserify')
, vinylSourceStream = require('vinyl-source-stream')
, vinylBuffer = require('vinyl-buffer')
, ts = require('gulp-typescript')
, sourcemaps = require('gulp-sourcemaps')
, merge = require('merge2')  // Requires separate installation 
, sass = require("gulp-sass")
, clean = require('gulp-clean')
, systemjsBuilder = require('systemjs-builder')
const tslint = require('gulp-tslint');

gulp.task('tslint', function() {
  return gulp.src('app/**/*.ts')
    .pipe(tslint())
    .pipe(tslint.report('default'));
});

gulp.task('clean', function () {
  return gulp.src('../TechnicalPRB/*', {read: false})
    .pipe(clean({force: true}));
});


gulp.task('doc', function (cb) {
    gulp.src([  './app.js',
				'./ServerJavascript/*.js'/*,
				'./public/app/Controllers/*.js',
				'./public/app/Directives/*.js',
				'./public/app/Filters/*.js',
				'./public/app/Services/*.js',
				'./public/app/app.js',
				'./public/app/scada.js'*/
    	], {read: false})
        .pipe(jsdoc(cb));
});




/*****************************************************
* minify views/ng_partials
*		RUN : gulp copy_root
******************************************************/
gulp.task('copy_root', function() {
	gulp.src(['./app.js'])
	.pipe(babel())
	.pipe(uglify({ mangle: false}).on('error', function(err) {
		gutil.log(gutil.colors.red('[Error]'), err.toString());
		console.log('\x07',err.message); return this.end(); 
	}))
	.pipe(gulp.dest('../TechnicalPRB/'));
});


/*****************************************************
* Copy Assets folder
*		RUN : gulp copy_assets
******************************************************/
gulp.task('copy_assets', function() {
	gulp.src(['./assets/*']).pipe(gulp.dest('../TechnicalPRB/assets/'));
});


/*****************************************************
* Copy Bin folder
*		RUN : gulp copy_bin
******************************************************/
gulp.task('copy_bin', function() {
	gulp.src(['./bin/www', './bin/www_NoSSL'])
	.pipe(uglify({ mangle: false}).on('error', function(e) { console.log('\x07',e.message); return this.end(); }))
	.pipe(gulp.dest('../TechnicalPRB/bin/'));
});


/*****************************************************
* Copy node modules
*		RUN : gulp copy_nodemodules
******************************************************/
gulp.task('copy_nodemodules', function() {
	gulp.src([
		// './public/node_modules/@angular/core/bundles/core.umd.min.js',
		// './public/node_modules/@angular/common/bundles/common.umd.min.js',
		// './public/node_modules/@angular/compiler/bundles/compiler.umd.min.js',
		// './public/node_modules/@angular/animations/bundles/animations.umd.min.js',
		// './public/node_modules/@angular/animations/bundles/animations-browser.umd.min.js',
		// './public/node_modules/@angular/platform-browser/bundles/platform-browser.umd.min.js',
		// './public/node_modules/@angular/platform-browser/bundles/platform-browser-animations.umd.min.js',
		// './public/node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',
		// './public/node_modules/@angular/http/bundles/http.umd.min.js',
		// './public/node_modules/@angular/router/bundles/router.umd.min.js',
		// './public/node_modules/@angular/forms/bundles/forms.umd.min.js',
		// './public/node_modules/@angular/upgrade/bundles/upgrade.umd.min.js',
		// './public/node_modules/@angular/material/bundles/material.umd.min.js',
		// './public/node_modules/@angular/animations/bundles/animations.umd.min.js',
		// './public/node_modules/@angular/flex-layout/bundles/flex-layout.umd.min.js',
		// './public/node_modules/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js',
		// './public/node_modules/@angular/cdk/bundles/cdk-platform.umd.min.js',
		// './public/node_modules/@angular/cdk/bundles/cdk-a11y.umd.min.js',
		// './public/node_modules/@angular/cdk/bundles/cdk-coercion.umd.min.js',
		// './public/node_modules/@angular/cdk/bundles/cdk-keycodes.umd.min.js',
		// './public/node_modules/@angular/cdk/bundles/cdk-rxjs.umd.min.js',
		// './public/node_modules/@angular/cdk/bundles/cdk-bidi.umd.min.js',	
		// './public/node_modules/@angular/cdk/bundles/cdk-observers.umd.min.js',
		// './public/node_modules/@angular/cdk/bundles/cdk-overlay.umd.min.js',
		// './public/node_modules/@angular/cdk/bundles/cdk-scrolling.umd.min.js',
		// './public/node_modules/@angular/cdk/bundles/cdk-stepper.umd.min.js',
		// './public/node_modules/@angular/cdk/bundles/cdk-table.umd.min.js',
		// './public/node_modules/@angular/cdk/bundles/cdk-collections.umd.min.js',
		// './public/node_modules/@angular/cdk/bundles/cdk-portal.umd.min.js',

		// './public/node_modules/angular-bootstrap-md/bundles/angular-bootstrap-md.umd.min.js',
		// './public/node_modules/@agm/core/core.umd.min.js',
		// './public/node_modules/@types/**',
		// './public/node_modules/hammerjs/hammer.min.js',
		// './public/node_modules/leaflet/dist/leaflet.js',
		// './public/node_modules/rxjs/bundles/Rx.min.js',
		// './public/node_modules/angular2-fontawesome/bundles/angular2-fontawesome.umd.min.js',
		// './public/node_modules/angular-in-memory-web-api/bundles/in-memory-web-api.umd.min.js',
		// './public/node_modules/socket.io-client/dist/socket.io.slim.js',
		// './public/node_modules/ng2-recaptcha/ng2-recaptcha.js',
		'./public/node_modules/core-js/client/shim.min.js',
		'./public/node_modules/zone.js/dist/zone.min.js',
		'./public/node_modules/reflect-metadata/Reflect.js',
		'./public/node_modules/systemjs/dist/system.src.js',
		'./public/node_modules/systemjs/dist/system-polyfills.js',
		'./public/node_modules/core-js/client/shim.min.js.map',

		'./public/node_modules/systemjs/dist/system.src.js.map',
		'./public/node_modules/reflect-metadata/Reflect.js.map',

		'./public/node_modules/rxjs/**',
        './public/node_modules/zone.js/dist/**',
		// './public/node_modules/@angular/**'

	] , { base: './node_modules/' } )
	// .pipe(gulp.dest('./public/modules/'))
	.pipe(gulp.dest('../TechnicalPRB/lib/'));
});


/*****************************************************
* minify views/ng_partials
*		RUN : gulp views
******************************************************/
gulp.task('views', function() {

	var	ejsmin = require('gulp-ejsmin');

	// minify views/ng_partials
	var htmlSrc = './public/views/ang_partial/*.ejs',
        htmlDst = '../TechnicalPRB/public/views/ang_partial';
	gulp.src(htmlSrc)
	//	.pipe(changed(htmlDst))
		.pipe(ejsmin({removeComment: true}))
		.pipe(gulp.dest(htmlDst));

	// minify views/node_partials
	htmlSrc = './public/views/main_partials/*.ejs';
	htmlDst = '../TechnicalPRB/public/views/main_partials';
	gulp.src(htmlSrc)
	//	.pipe(changed(htmlDst))
		.pipe(ejsmin({removeComment: true}))
		.pipe(gulp.dest(htmlDst));

	// minify all views/*.* ejs files
	gulp.src(['./public/views/*.ejs'])
		.pipe(ejsmin({removeComment: true}))
		.pipe(gulp.dest('../TechnicalPRB/public/views/'));
});


/*****************************************************
* Minify routes
*		RUN : gulp routes
******************************************************/
gulp.task('routes', function() {
	gulp.src(['./routes/*.js'])
	.pipe(babel())
	.pipe(uglify({ mangle: false}).on('error', function(e) { console.log('\x07',e.message); return this.end(); }))
	.pipe(gulp.dest('../TechnicalPRB/routes/'));
});


/*****************************************************
* Minify ServerJavascript
*		RUN : gulp ServerJavascript
******************************************************/
gulp.task('ServerJavascript', function() {
	gulp.src([
				// './ServerJavascript/db.js',
				// './ServerJavascript/uuid.generator.js'
				//'./ServerJavascript/Slave_WT520.js',
				// './ServerJavascript/unpack.js',
				// './ServerJavascript/pack.js',
				// './ServerJavascript/jspack.js'
			]
	)
	.pipe(stripDebug())
	.pipe(babel())
	.pipe(uglify({ mangle: false}).on('error', function(e) { console.log('\x07',e.message); return this.end(); }))
	.pipe(gulp.dest('../TechnicalPRB/ServerJavascript/'));

	// These two files cannot be parsed by uglify module so (maybe because they are written in ES6 format) so I just copy them.
	gulp.src([

				// './ServerJavascript/ConfigFileUtils.js',
				// './ServerJavascript/hnLogger.js',
				// './ServerJavascript/opLogger.js',
				// './ServerJavascript/Mapper.js',
				// './ServerJavascript/model.js',
				// './ServerJavascript/MyServer.js',
				// './ServerJavascript/Parser.js',
				// './ServerJavascript/TcpSocketServer.js',
				// './ServerJavascript/TcpTK103conn.js',
				// './ServerJavascript/User.js',
				// './ServerJavascript/UdpManager.js',
				// './ServerJavascript/ProfileManager.js',
				// './ServerJavascript/FTPSystemSetupManager.js',
				'./ServerJavascript/socket.io.js',
				'./ServerJavascript/emailer.js',
				'./ServerJavascript/GlobalRoutines.js',
				// './ServerJavascript/settings.js',

				// './ServerJavascript/Slave_NONE.js',
				// './ServerJavascript/Slave_PROMETHEUS.js',
				// './ServerJavascript/Slave_WT520.js',
				// './ServerJavascript/Slave_WT520R.js',
				// './ServerJavascript/Master_WT600.js'
			]
	)
	.pipe(babel())
	.pipe(uglify({ mangle: false}).on('error', function(e) { console.log('\x07',e.message); return this.end(); }))
	.pipe(gulp.dest('../TechnicalPRB/ServerJavascript/'));
});


gulp.task('watch', ['scripts'], function() {
    gulp.watch('./public/app/**/*.ts', ['ang_scripts']);
});


/*****************************************************
* JS concat, strip debugging and minify
*		RUN : gulp 
******************************************************/
gulp.task('ang_scripts', function() {

const tscConfig = require('./public/tsconfig.json');	
var tsResult = gulp.src(['./public/app/**/*.ts',
			'./public/typings/*.d.ts'])
  		.pipe(sourcemaps.init()) // This means sourcemaps will be generated 
        .pipe(ts(tscConfig.compilerOptions))
		.pipe(sourcemaps.write()) // Now the sourcemaps are added to the .js file 
		// .pipe(gulp.dest('../TechnicalPRB/public/app'));
    

	// var sources = browserify({
	// 	entries: [// Angular Controllers
  	// 		'./public/app_JS/app.js',
	// 		'./public/app_JS/Controllers/controllers.js',
	// 		'./public/app_JS/Controllers/Ctrlr_Dashboard.js',
	// 		'./public/app_JS/Controllers/Ctrlr_scada.js',
	// 		'./public/app_JS/Controllers/Ctrlr_projects.js',
	// 		'./public/app_JS/Controllers/Ctrlr_Remapper.js',
	// 		'./public/app_JS/Controllers/Ctrlr_CreateProfile.js',
	// 		'./public/app_JS/Controllers/Ctrlr_EditProfile.js',
	// 		'./public/app_JS/Controllers/Ctrlr_Settings.js',
	// 		'./public/app_JS/Controllers/Ctrlr_Status.js',
	// 		'./public/app_JS/Controllers/Ctrlr_plcStatus.js',
	// 		'./public/app_JS/Controllers/Ctrlr_slPromStatus.js',
	// 		'./public/app_JS/Controllers/Ctrlr_slWt520Status.js',

	// 		// Angular Filters
	// 		'./public/app_JS/Filters/GridFilters.js',

	// 		// Angular Services
	// 		'./public/app_JS/Services/ajaxroute.service.js',
	// 		'./public/app_JS/Services/auth.service.js',
	// 		'./public/app_JS/Services/messenger.service.js',
	// 		'./public/app_JS/Services/profiles.service.js',
	// 		'./public/app_JS/Services/livedevices.service.js',

	// 		// Angular Directives
	// 		'./public/app_JS/Directives/grdDin.directive.js',
	// 		'./public/app_JS/Directives/grdDout.directive.js',
	// 		'./public/app_JS/Directives/grdInstall.directive.js',
	// 		'./public/app_JS/Directives/grdCalib.directive.js',
	// 		'./public/app_JS/Directives/grdCalibAD.directive.js',
	// 		'./public/app_JS/Directives/grdScl.directive.js',
	// 		'./public/app_JS/Directives/grdAin.directive.js',
	// 		'./public/app_JS/Directives/grdCnt.directive.js',
	// 		'./public/app_JS/Directives/grdDinUnmpd.directive.js',
	// 		'./public/app_JS/Directives/status.directive.js',
	// 		'./public/app_JS/Directives/scada.directive.js',
	// 		'./public/app_JS/Directives/money.directive.js',

	// 		// Angular Factories
	// 		'./public/app_JS/Factories/UDPConnection.factory.js',

	// 		'./public/app_JS/wt520_lib.js',
	// 		'./public/app_JS/scada.js'],
	// 	debug: true
	// })
	// .transform(babelify.configure({

	// // You can configure babel here!
	// 	// https://babeljs.io/docs/usage/options/
	// 	presets: ["es2015"]	
	// }));

	// sources.bundle()
    // .pipe(vinylSourceStream('ang.min.js'))
    // .pipe(vinylBuffer())
	// .pipe(uglify({ mangle: false}).on('error', function(e) { console.log('\x07',e.message); return this.end(); }))
	// .pipe(gulp.dest('./public/app_JS/'))		// Put resulting file in the development folder
    // .pipe(gulp.dest('../TechnicalPRB/public/app_JS/')); // Put resulting file also in the build folder
});


// Generate systemjs-based bundle (app/app.js)
gulp.task('prod:app', ['bower_scripts'], function() {
	/* var builder = new systemjsBuilder('./public', './public/systemjs.config.js');
	return builder.buildStatic('./public/app', 'public/app/ang4.js'); */
	gulp.src(['./public/dist/**/**/**/**/*']).pipe(gulp.dest('../TechnicalPRB/public/dist/'));
});



/*****************************************************
* Copy Bower (front end) javascript libraries
*		RUN : gulp bower_scripts
******************************************************/
gulp.task('bower_scripts', function() { //bundle:app
	/*   gulp.src([
  			// Angular script
				'./public/app/ang4.js'
			])
    .pipe(concat('ang4.min.js'))
	.pipe(uglify({ mangle: false }).on('error', function(e) { console.log('\x07',e.message); return this.end(); }))
	// .pipe(sourcemaps.init())
	// .pipe(sass.sync().on('error', plugins.sass.logError))
    // .pipe(autoprefixer())
    // .pipe(sourcemaps.write('.'))
    // .pipe(stripDebug())
	// .pipe(jshint())
	.pipe(gulp.dest('./public/'))		// Put resulting file in the development folder
	.pipe(gulp.dest('../TechnicalPRB/public/')); // Put resulting file also in the build folder */

	// This file is not minimized. Minimize it and later add the minimized version to the gl2.js
	// gulp.src(['./public/app/ang4.js'])
	// .pipe(uglify({ mangle: false}).on('error', function(e) { console.log('\x07',e.message); return this.end(); }))
    // .pipe(concat('ang.min.js'))
	// // .pipe(gulp.dest('./public/app'))		// Put resulting file in the development folder
	// .pipe(gulp.dest('../TechnicalPRB/public/app'));		// Put resulting file in the development folder

	// // This file is not minimized. Minimize it and later add the minimized version to the gl2.js
	// gulp.src(['./public/systemjs.conifg.js'])
	// .pipe(uglify({ mangle: false}).on('error', function(e) { console.log('\x07',e.message); return this.end(); }))
    // .pipe(concat('systemjs.conifg.js'))
	// .pipe(gulp.dest('./public/'))		// Put resulting file in the development folder
	// .pipe(gulp.dest('../TechnicalPRB/public/'));		// Put resulting file in the development folder
	

	// First general library	// // This file is not minimized. Minimize it and later add the minimized version to the gl2.js
	// gulp.src(['./public/systemjs.conifg.js'])
	// .pipe(uglify({ mangle: false}).on('error', function(e) { console.log('\x07',e.message); return this.end(); }))
    // .pipe(concat('systemjs.conifg.js'))
	// .pipe(gulp.dest('./public/'))		// Put resulting file in the development folder
	// .pipe(gulp.dest('../TechnicalPRB/public/'));		// Put resulting file in the development folder
	gulp.src(['./public/components/jquery/dist/jquery.min.js',
			  './public/components/popper.js/dist/umd/popper.min.js',
			//   './public/components/popper.min.js.map',
			  './public/components/tether/dist/js/tether.min.js',
			  './public/components/bootstrap/dist/js/bootstrap.min.js',
			  './public/components/wow/dist/wow.min.js',
			// './public/components/material-design-lite/material.min.js',
			// './public/components/angular/angular.min.js',
			// './public/components/sweetalert2/dist/sweetalert2.min.js',
			// './public/components/angular-animate/angular-animate.min.js',
			// './public/components/angular-sanitize/angular-sanitize.min.js',
			// './public/components/angular-bootstrap/ui-bootstrap-tpls.min.js',
			// './public/components/remarkable-bootstrap-notify/bootstrap-notify-3.1.3/bootstrap-notify.min.js'
			])
    .pipe(concat('gl1.js'))
    .pipe(gulp.dest('./public/dist'))		// Put resulting file in the development folder
    .pipe(gulp.dest('../TechnicalPRB/public/dist')); // Put resulting file also in the build folder
	
	
  	// Second general library
	gulp.src([
			// './public/components/angular-ui-grid/ui-grid.min.js',
			// './public/components/angular-ui-router/release/angular-ui-router.min.js',
			// './public/scripts/jszip.min.js',
			// './public/scripts/FileSaver.min.js'
			// './public/node_modules/core-js/client/shim.min.js',
			// './public/node_modules/zone.js/dist/zone.min.js',
			// './public/node_modules/reflect-metadata/Reflect.js',
			// './public/node_modules/systemjs/dist/system.src.js',
			// './public/node_modules/systemjs/dist/system-polyfills.js',
			// './public/systemjs.config.js',
			])
	.pipe(concat('gl2.js'))
	.pipe(uglify({ mangle: false}).on('error', function(e) { console.log('\x07',e.message); return this.end(); }))
    // .pipe(gulp.dest('./public'))		// Put resulting file in the development folder
    .pipe(gulp.dest('../TechnicalPRB/public')); // Put resulting file also in the build folder


  // Third general library
	gulp.src([
			// './public/components/chart.js/dist/Chart.min.js',
			// './public/components/angular-chart.js/dist/angular-chart.min.js',
			// './public/components/angularjs-slider/dist/rzslider.min.js',
			// './public/components/jquery/dist/jquery.min.js',
			// './public/components/angular-virtual-keyboard/release/angular-virtual-keyboard.min.js',
			// './public/components/ng-file-upload/ng-file-upload.min.js'
			])
    .pipe(concat('gl3.js'))
    .pipe(gulp.dest('./public/'))		// Put resulting file in the development folder
    .pipe(gulp.dest('../TechnicalPRB/public/')); // Put resulting file also in the build folder
});




/*****************************************************
* Copy other folder & files inside public folder
*		RUN : gulp appjs_other
******************************************************/
gulp.task('appjs_other', function() {

	var imagemin = require('gulp-imagemin');

	// gulp.src(['./public/styles/font/**/*'])
		// .pipe(gulp.dest('../TechnicalPRB/public/styles/font/'));
	// gulp.src(['./public/font/*']).pipe(gulp.dest('../TechnicalPRB/public/font/'));
// There is some compatibility with imagemin after the node modules update on 11/02/2016.

// gulp.src(['./public/img/**/**/*',
// '!./public/img/Videos/*'])
// .pipe(imagemin())
// .pipe(gulp.dest('../TechnicalPRB/public/img/'))

	/* gulp.src(['./public/node_modules/leaflet/dist/images/*'])
		.pipe(imagemin())
		.pipe(gulp.dest('./public/styles/bs/images/'))
		.pipe(gulp.dest('../TechnicalPRB/public/styles/bs/images/')); */
			// Copy Https certification files and important files
		gulp.src(['./server*.*']).pipe(gulp.dest('../TechnicalPRB/'));
		gulp.src(['./package.json']).pipe(gulp.dest('../TechnicalPRB/'));
		// gulp.src(['./public/package.json']).pipe(gulp.dest('../TechnicalPRB/public'))
		// gulp.src(['./public/package-lock.json']).pipe(gulp.dest('../TechnicalPRB/public'))
		gulp.src(['./.gitignore']).pipe(gulp.dest('../TechnicalPRB/'))
		gulp.src(['./LICENCE']).pipe(gulp.dest('../TechnicalPRB/'))
});



/*****************************************************
* INDEX LICENCE GITIGNORE concat, auto-prefix and minify
*		RUN : gulp config_files
******************************************************/
gulp.task('config_files', function () {
	

	gulp.src(['./public/views/index.html']).pipe(gulp.dest('../TechnicalPRB/public/views'))
	gulp.src(['./public/favicon.ico']).pipe(gulp.dest('../TechnicalPRB/public/'));
})


/*****************************************************
* CSS concat, auto-prefix and minify
*		RUN : gulp styles
******************************************************/
gulp.task('styles', function() {
	var minifyCSS 	= require('gulp-minify-css'),
		autoprefix	= require('gulp-autoprefixer');


	//var cssnano = require('gulp-cssnano');


	// Copy fonts folder of bootstrap inside styles folder
	gulp.src([
		// './public/components/bootstrap/dist/fonts/*',
		'./public/node_modules/font-awesome/fonts/*'
		])
		.pipe(gulp.dest('./public/styles/fonts/'))
		.pipe(gulp.dest('../TechnicalPRB/public/styles/fonts/'));

	// gulp.src([
	// 	'./public/components/bootstrap/dist/css/bootstrap.min.css',
	// 	'./public/node_modules/leaflet/dist/leaflet.css',
	// 	'./public/node_modules/font-awesome/css/font-awesome.min.css',
	// 	'./public/node_modules/@angular/material/prebuilt-themes/indigo-pink.css',
	// ], {base: 'styles/bs' })
	// .pipe(gulp.dest('./public/styles/bs'))
	// .pipe(gulp.dest('../TechnicalPRB/public/styles/bs/'))

	// This file is not minimized. Minimize it and later add the minimized version to the gl2.js
	// gulp.src(['./public/node_modules/leaflet/dist/leaflet.css'])
	// // .pipe(uglify({ mangle: false}).on('error', function(e) { console.log('\x07',e.message); return this.end(); }))
    // .pipe(concat('leaflet.min.css'))
	// .pipe(minifyCSS())
	// .pipe(gulp.dest('./public/styles/bs'))		// Put resulting file in the development folder
	// .pipe(gulp.dest('../TechnicalPRB/public/styles/bs'));		// Put resulting file in the development folder

	// This file is not minimized. Minimize it and later add the minimized version to the gl2.js
	gulp.src(['./public/node_modules/@angular/material/prebuilt-themes/indigo-pink.css'])
	// .pipe(uglify({ mangle: false}).on('error', function(e) { console.log('\x07',e.message); return this.end(); }))
    .pipe(concat('indigo-pink.min.css'))
	// .pipe(minifyCSS())
	.pipe(gulp.dest('./public/styles/bs'))		// Put resulting file in the development folder
	.pipe(gulp.dest('../TechnicalPRB/public/styles/bs'));		// Put resulting file in the development folder

	// This file is not minimized. Minimize it and later add the minimized version to the gl2.js
	gulp.src(['./public/node_modules/font-awesome/css/font-awesome.min.css'])
	// .pipe(uglify({ mangle: false}).on('error', function(e) { console.log('\x07',e.message); return this.end(); }))
    // .pipe(concat('font-awesome.min.css'))
	.pipe(gulp.dest('./public/styles/bs'))		// Put resulting file in the development folder
	.pipe(gulp.dest('../TechnicalPRB/public/styles/bs'));		// Put resulting file in the development folder

	// This file is not minimized. Minimize it and later add the minimized version to the gl2.js
	gulp.src(['./public/components/bootstrap/dist/css/bootstrap.min.css'])
	// .pipe(uglify({ mangle: false}).on('error', function(e) { console.log('\x07',e.message); return this.end(); }))
	// .pipe(concat('bootstrap.min.css'))
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: 'compressed', outFile: "bootstrap.min.css"}).on('error', sass.logError))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./public/styles/bs'))		// Put resulting file in the development folder
	.pipe(gulp.dest('../TechnicalPRB/public/styles/bs'));		// Put resulting file in the development folder

	// Concat, minify bootstrap's css file one level to folder styles/bs
	// One level down from fonts folder so it can display font icons properly
	gulp.src([
		// './public/components/angular-ui-grid/ui-grid.min.css',
		// './public/components/components-font-awesome/css/font-awesome.min.css',
		// './public/components/font-awesome/scss/font-awesome.scss',
		// './public/components/font-awesome/less/font-awesome.less',
		// './public/components/sweetalert2/dist/sweetalert2.min.css',
		// './public/components/angularjs-slider/dist/rzslider.min.css',
		// './public/components/angular-virtual-keyboard/release/angular-virtual-keyboard.min.css',
		// './public/components/angular-chart.js/dist/angular-chart.min.css',
		// './public/styles/carboard.scss',
		// './public/styles/footer.scss',
		// './public/styles/login.scss',
		// './public/styles/header.scss',
		// './public/styles/map.scss',
		// './public/styles/register.scss'
		// './public/node_modules/angular-bootstrap-md/scss/bootstrap/bootstrap.scss',
		'./public/node_modules/angular-bootstrap-md/scss/mdb.scss'

	])
	.pipe(concat('mdb-free.min.css'))
   	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  	.pipe(gulp.dest('./public/styles/bs'))
	.pipe(gulp.dest('../TechnicalPRB/public/styles/bs'));

	gulp.src([
		'./public/styles/admin.css',
		'./public/styles/foot.css',
		'./public/styles/blog.css',
		'./public/styles/home.css',
		'./public/styles/nav.css',
		'./public/styles/app.css'

	])
	// .pipe(concat('mdb-free.min.css'))
   	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  	// .pipe(gulp.dest('./public/styles/bs'))
	.pipe(gulp.dest('../TechnicalPRB/public/styles'));


		//.pipe(cssnano())
		
	gulp.src([
		'./public/styles.css'
	])
	.pipe(concat('styles.css'))
   	.pipe(sass({outputStyle: 'compressed', outFile: "styles.css"}).on('error', sass.logError))
  	// .pipe(gulp.dest('./public/styles/'))
	.pipe(gulp.dest('../TechnicalPRB/public/'));

});



/*****************************************************
* Javascript static syntax checking
*		RUN : gulp lint
******************************************************/
gulp.task('lint', function() {
	var jshint	= require('gulp-jshint');


  	gulp.src(['./app.js',
  			'./routes/*.js',
  			'./ServerJavascript/*.js'
			])
    .pipe(jshint({ esnext : true}))
    .pipe(jshint.reporter('default'));
});







/*****************************************************
* Application Vesrion control. Updates package.json and release.txt
*		RUN : gulp vc
******************************************************/
gulp.task('vc', function() {

	var tfile = 'releases';
	var releases = require('./'+tfile+'.json');		// Get the releases.json file
	//var cv = 'version_'+releases.currentVersion;	// Get the current working version
	//var cv =releases.currentVersion;	// Get the current working version
	//console.log(releases.currentVersion);
	var cr = releases.versions[releases.currentVersion];							// Get the current working version item array
	//console.log(cr);


	// Use this to increase release version number automatically
	// USE : gulp vc --nr   OR   gulp vc --newRelease
	if (argv.newRelease !== undefined || argv.nr !== undefined ) {

				console.log('Increasing release version');
				var Version = releases.currentVersion.split("_");
				var major=parseInt(Version[0]) ,
					minor=parseInt(Version[1]),
					build=parseInt(Version[2]);

				var NewFeatures=0;
				var Modifications=0;

				for(var item in cr){
					//console.log(JSON.stringify(cr[item]));
					if (cr[item].Type === 'NEW') {
						NewFeatures++;
					}else{
						Modifications++;
					}
				}

				console.log('NewFeatures ='+NewFeatures);
				console.log('Modifications ='+Modifications);


				console.log('Old Release version is %d.%d.%d' , major, minor, build );
				minor=minor+NewFeatures;
				if (NewFeatures>0){	build=Modifications;}
				else { build+=Modifications;}
				console.log('New Release version is %d.%d.%d' , major, minor, build );


				// SET THE CURRENT VERSION
				releases.currentVersion = major+'_'+minor+'_'+build;

				//Create New release item
				//var cri = 'version_'+releases.currentVersion;
				var cri = releases.currentVersion;
				releases.versions[cri]=[];

				// Write releases.json file
				WriteReleaseJSON(tfile, releases);

				// Write Releases.txt (Printable format)
				createReleaseTXTfile(tfile, releases);


				//UPDATE PACKAGE.JSON TO REFLECT THE RELEASES.JSON FILE
				var d = new Date();
				var pkgJson = require('./package.json');
				pkgJson.version = major+'.'+minor+'.'+build;
				pkgJson.buildDate = d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear();


				var fs 	= require('fs');
				var jsonf = JSON.stringify(pkgJson, null, 1);
				fs.writeFile('./package.json', jsonf, function(err) {
					if(err) {
						return console.log(err);
					}
					console.log("Package.json file is updated");
				});

	}	// Increase release end



	// Use this to add new items in current release
	// USE : gulp vc --item "u Npm package mysql from v2.9.0 to v2.10.0"
	if (argv.item !== undefined){
		AddReleaseItem(cr, argv.item);
		WriteReleaseJSON(tfile, releases);
		createReleaseTXTfile(tfile, releases);
	}

	// Use this to show items in current release
	// USE : gulp vc --releaseinfo
	if (argv.releaseinfo !== undefined || argv.ri !== undefined ) {
		console.log('\r\n----- Release '+releases.currentVersion+' -------------------------------------------');
		console.log(showReleaseInfo(cr));
		createReleaseTXTfile(tfile, releases);
	}

});



/*****************************************************
* Shows build message to user
*		RUN : displayBuildMessage
******************************************************/
gulp.task('displayBuildMessage', function() {

	console.log('Build finished.');
	// console.log('Copy the contents of build forlder to the /home/pi/wt600 folder');
	// console.log('then cd /home/pi/wt600  and npm install to download and compile all node packages');

	console.log('WARNING!!! dont forget to replace the angular scripts includes in the file index.html with the ang4.min.js lib');
	console.log(`Also don't forget to change in gl2.js the app main js file to ang4.min.js `)
	console.log('');
});




/*****************************************************
* Application Vesrion control. Updates  CDS_release.txt
*		RUN : gulp vcc (Version Control Codesys)
******************************************************/
gulp.task('vcc', function() {

	var tfile = 'CDS_releases';
	var releases = require('./'+tfile+'.json');		// Get the releases.json file
	//var cv = 'version_'+releases.currentVersion;	// Get the current working version
	//var cv =releases.currentVersion;	// Get the current working version
	//console.log(releases.currentVersion);
	var cr = releases.versions[releases.currentVersion];							// Get the current working version item array
	//console.log(cr);


	// Use this to increase release version number automatically
	// USE : gulp vcc --nr   OR   gulp vcc --newRelease
	if (argv.newRelease !== undefined || argv.nr !== undefined ) {

				console.log('Increasing release version');
				var Version = releases.currentVersion.split("_");
				// item [0] will be fixed at 4
				var major=parseInt(Version[1]) ,
					minor=parseInt(Version[2]),
					build=parseInt(Version[3]);

				var NewFeatures=0;
				var Modifications=0;

				for(var item in cr){
					//console.log(JSON.stringify(cr[item]));
					if (cr[item].Type === 'NEW') {
						NewFeatures++;
					}else{
						Modifications++;
					}
				}

				console.log('NewFeatures ='+NewFeatures);
				console.log('Modifications ='+Modifications);


				console.log('Old Release version is 4.%d.%d.%d' , major, minor, build );
				minor=minor+NewFeatures;
				if (NewFeatures>0){	build=Modifications;}
				else { build+=Modifications;}
				console.log('New Release version is 4.%d.%d.%d' , major, minor, build );


				// SET THE CURRENT VERSION
				releases.currentVersion = '4_'+major+'_'+minor+'_'+build;

				//Create New release item
				//var cri = 'version_'+releases.currentVersion;
				var cri = releases.currentVersion;
				releases.versions[cri]=[];

				// Write releases.json file
				WriteReleaseJSON(tfile, releases);

				// Write Releases.txt (Printable format)
				createReleaseTXTfile(tfile, releases);



	}	// Increase release end



	// Use this to add new items in current release
	// USE : gulp vc --item "u Npm package mysql from v2.9.0 to v2.10.0"
	if (argv.item !== undefined){
		AddReleaseItem(cr, argv.item);
		WriteReleaseJSON(tfile, releases);
		createReleaseTXTfile(tfile, releases);
	}

	// Use this to show items in current release
	// USE : gulp vcc --releaseinfo
	if (argv.releaseinfo !== undefined || argv.ri !== undefined ) {
		console.log('\r\n----- Release '+releases.currentVersion+' -------------------------------------------');
		console.log(showReleaseInfo(cr));
		createReleaseTXTfile(tfile, releases);
	}

});



function showReleaseInfo(cur_rls){
	var infoLine='';
		for(var item in cur_rls){
			//console.log(JSON.stringify(cur_rls[item]) +'\r\n');

			var idate = (cur_rls[item].Date !== undefined) ? SetStringLength(cur_rls[item].Date, 12) : 'NAVAIL      ';
			var itype = (cur_rls[item].Date !== undefined) ? SetStringLength(cur_rls[item].Type, 10) : 'NAVAIL    ';

			if (cur_rls[item].Descr !== undefined){
				infoLine += itype + idate + ': ' + cur_rls[item].Descr +'\r\n';
			}
		}

	return infoLine;
}

function createReleaseTXTfile(tfile, rls){

	// Get the current date
	var d = new Date();
	var line ='Release text file created at ' +d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate()+'\r\n';


	//This gets the keys of an object
	var keys = [];
	for(var k in rls.versions) keys.push(k);
	//console.log("total " + keys.length + " keys: " + keys);

	// Iterate among all releases and get all the items in each release
	for (var i=0; i<keys.length;i++) {
		//console.log(keys[i] +'\r\n');
		var cur_rls = rls.versions[keys[i]];
		line +='\r\n----- Release '+keys[i] +'-------------------------------------------\r\n';
		line += showReleaseInfo(cur_rls);
	}

	//console.log(line);

	console.log('CREATING '+tfile+'.txt file ');
	var fs 	= require('fs');
	fs.writeFile('./'+tfile+'.txt', line, function(err) {
		if(err) {
			return console.log(err);
		}
		console.log(tfile+'.txt file has been created.');
	});
}

function SetStringLength(istr, slen){
	// Cut the string if it longer
	istr.substr(0,slen);
	// Add space if it is shorter
	while (istr.length<slen) {
		istr +=' ';
	}
	return  istr;
}

/*****************************************************
 AddReleaseItem. Inserts at the current release vesrion
 a new item that holds a new change in the app.

 USE : gulp vc --item "u Npm package mysql from v2.9.0 to v2.10.0"
 will produce object

 {
  "type": "UPDATE",
  "Date": "2015/12/04",
  "Descr": "Npm package mysql from v2.9.0 to v2.10.0"
 }

 First letter of the string can be u, d, c, f
******************************************************/
function AddReleaseItem(cro, ri){
	var itemType = ri[0];
	var itemDesc = ri.slice(2);
	var iType;

	switch( itemType ) {
		case 'u': iType = 'UPDATE'	;	break;
		case 'n': iType = 'NEW'		;	break;
		case 'f': iType = 'FIX'		;	break;
		case 'd': iType = 'DELETE'	;	break;
		case 'c': iType = 'CHANGE'	;	break;
		default:
	}

	var d = new Date();
	var nu = {};
	nu.Date = d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate();
	nu.Type = iType;
	nu.Descr = itemDesc;
	//console.log(JSON.stringify(nu) );
	cro.push(nu);
	//console.log(cro);
}


function WriteReleaseJSON(tfile, rls){
	var fs 	= require('fs');
	var jsonf = JSON.stringify(rls, null, 1);
	fs.writeFile('./'+tfile+'.json', jsonf, function(err) {
		if(err) {
			return console.log(err);
		}
		//console.log("Wrote "+ releases);
	});
}


/*****************************************************
* Default task. Run using just (Gulp) inside the
*               root development app folder
******************************************************/
gulp.task('default',[	'clean',
						'copy_root',
						// 'copy_assets',
						'copy_bin',
						'routes',
						'prod:app',
						// 'views',
						// 'copy_nodemodules',
						'appjs_other',
						// 'config_files',
						'ServerJavascript',
						// 'styles',
						'displayBuildMessage'
					], function() {}
);

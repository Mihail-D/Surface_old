/* eslint-disable no-undef */
"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var rename = require("gulp-rename");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var csso = require("gulp-csso");
var server = require("browser-sync").create();
var imagemin = require("gulp-imagemin");
const imageminPngquant = require("imagemin-pngquant");
var jsmin = require("gulp-uglify");
var svgstore = require("gulp-svgstore");
var webp = require("gulp-webp");
var posthtml = require("gulp-posthtml");
var htmlmin = require("gulp-htmlmin");
var include = require("posthtml-include");
var del = require("del");

gulp.task("css", function() {
	return gulp
		.src("source/sass/style.scss")
		.pipe(plumber())
		.pipe(sourcemap.init())
		.pipe(sass())
		.pipe(postcss([autoprefixer()]))
		.pipe(csso())
		.pipe(rename("style.min.css"))
		.pipe(sourcemap.write("."))
		.pipe(gulp.dest("build/css"))
		.pipe(server.stream());
});

gulp.task("css_dev", function() {
	return gulp
		.src("source/sass/style.scss")
		.pipe(plumber())
		.pipe(sourcemap.init())
		.pipe(sass())
		.pipe(postcss([autoprefixer()]))
		.pipe(csso())
		.pipe(rename("style.min.css"))
		.pipe(sourcemap.write("."))
		.pipe(gulp.dest("source/css"))
		.pipe(server.stream());
});

gulp.task("server", function() {
	server.init({
		server: "source/",
		notify: false,
		open: true,
		cors: true,
		ui: false,
		browser: ["chrome", "iexplore"],
	});

	gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css_dev", "refresh"));
	gulp.watch("source/*.html", gulp.series("refresh"));
	gulp.watch("source/img/**/*.{png,jpg,svg}", gulp.series("refresh"));
	gulp.watch("source/js/**/*.js", gulp.series("refresh"));
});

gulp.task("refresh", function(done) {
	server.reload();
	done();
});

gulp.task("images", function() {
	return gulp
		.src("source/img/**/*.{png,jpg,svg}")
		.pipe(
			imagemin([
				imageminPngquant({ quality: [0.2, 0.85] }),
				imagemin.optipng({ optimizationLevel: 5 }),
				imagemin.jpegtran({ progressive: true }),
				imagemin.svgo(),
			])
		)
		.pipe(gulp.dest("build/img"));
});


gulp.task("sprite", function() {
	return gulp
		.src(
			"build/img/{icon-fb.svg,icon-vk.svg,icon-insta.svg,icon-mail.svg,icon-phone.svg}"
		)
		.pipe(
			svgstore({
				inlineSvg: true
			})
		)
		.pipe(rename("sprite.svg"))
		.pipe(gulp.dest("build/img"));
});

gulp.task("webp", function() {
	return gulp
		.src("source/img/**/*.{png,jpg}")
		.pipe(webp({ quality: 90 }))
		.pipe(gulp.dest("build/img"));
});

gulp.task("html", function () {
	return gulp
		.src("source/*.html")
		.pipe(posthtml([include()]))
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest("build"));
});

gulp.task("jsmin", function() {
	return gulp
		.src("build/js/*.js")
		.pipe(jsmin())
		.pipe(gulp.dest("build/js"));
});


gulp.task("clean", function() {
	return del("build");
});

gulp.task("copy", function() {
	return gulp
		.src(["source/fonts/**/*.{woff,woff2}", "source/js/**"], {
			base: "source",
		})
		.pipe(gulp.dest("build"));
});

gulp.task("build_project", gulp.series("clean", "images", "webp", "sprite", "copy", "jsmin", "css", "html"));

gulp.task("build", gulp.series("build_project"));
gulp.task("start", gulp.series("css_dev", "server"));

# [gulp](http://gulpjs.com/)-devkit

> Common Gulp tasks for rapid NodeJS development.

**Features:**

* Preconfigured development server with integrated livereload listener.
* Asset pipeline, handling sprockets-like includes, styles (`css`, `styl`), scripts (`js` with jsx syntax), views (`html`, `jade`), images (`jpg`, `png`, `gif`) and fonts (`eot`, `woff`, `ttf`, `svg`).
* Asset bundler for precompiling assets.

## Setup

Your `gulpfile.js` should look something like the example below.

```js
var gulp = require('gulp');

var config = {}
require('gulp-devkit')(gulp, config);

gulp.task('default', ['serve']);

```

Now run `gulp` command and start building your next nodejs app. Note that you will need to install the [livereload extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) for your browser for livereload to work.

## Config

Open [defaults.json](defaults.json) file to see the default configuration values.

### serve.execFile: String

> Application's main file (executable).

### serve.watchPaths: String[]

> List of paths to watch and reload on change.

### assets.stylesPath: String

> Path to source folder with styles.

### assets.scriptsPath: String

> Path to source folder with scripts.

### assets.viewsPath: String

> Path to source folder with views.

### assets.imagesPath: String

> Path to source folder with images.

### assets.imagesExt: String[]

> List of allowed image file exstensions.

### assets.fontsPath: String

> Path to source folder with fonts.

### assets.fontsExt: String[]

> List of allowed font file exstensions.

### assets.buildPath: String

> Path to compiled/precompiled assets.

## Tasks

### $ gulp serve

> Starts development HTTP server with built-in support for livereload.

### $ gulp assets:compile

> Compiles assets source files.

### $ gulp assets:watch

> Starts watching assets for changes. Assets are immediately recompiled when changed.

### $ gulp assets:bundle

> Precompiles assets for production (fingerprint, gzip).

### $ gulp assets:clean

> Removes all compiled assets.

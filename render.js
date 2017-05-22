(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slides = __webpack_require__(1);

	var _slides2 = _interopRequireDefault(_slides);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (locals, callback) {
	  callback(null, (0, _slides2.default)({ NODE_ENV: ("production") }));
	};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(2);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (NODE_ENV) {pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml\u003E\u003Chead\u003E\u003Cmeta charset=\"utf-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1\"\u003E\u003Ctitle\u003EAngular Universal Rendering\u003C\u002Ftitle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Carticle\u003E\u003Csection\u003E\u003Cdiv class=\"meetup\"\u003E\u003C\u002Fdiv\u003E\u003Cbr \u002F\u003E\u003Ch2\u003EAngular Universal\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Cdiv class=\"avatar\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"vienna\"\u003E\u003Ch2\u003ERemote Web Dev \u003Cbr \u002F\u003E\u003Cbr \u002F\u003E Vienna\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EAngular & Drupal\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch3\u003EGithub : https:\u002F\u002Fgithub.com\u002Fjoaogarin\u003C\u002Fh3\u003E\u003Ch3\u003ETwitter : https:\u002F\u002Ftwitter.com\u002Fjoaogarin\u003C\u002Fh3\u003E\u003Ch3\u003ELinkedin : https:\u002F\u002Fwww.linkedin.com\u002Fin\u002Fjoao-garin-9b118525\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"static universal\"\u003E\u003Ch1\u003EUniversal\u003C\u002Fh1\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch1\u003EContext\u003C\u002Fh1\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EServer Rendered apps\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ccode\u003E\u003Cpre\u003E&lt;body&gt;\n  \u003Cem\u003E\n  ...\n  &lt;div class=&quot;page-title&quot;&gt;\n    &lt;h1&gt;Rendered on the server&lt;\u002Fh1&gt;\n    &lt;div&gt;\n      &lt;p&gt;Welcome home&lt;\u002Fp&gt;\n    &lt;\u002Fdiv&gt;\n  &lt;\u002Fdiv&gt;\n  ...\n  \u003C\u002Fem\u003E\n  &lt;script src=&quot;my-app.js&quot;&gt;&lt;\u002Fscript&gt;\n&lt;\u002Fbody&gt;\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Cul class=\"no-bullets\"\u003E\u003Cli\u003EServer controls the process\u003C\u002Fli\u003E\u003Cli\u003EFetch CSS\u003C\u002Fli\u003E\u003Cli\u003EFetch some fonts\u003C\u002Fli\u003E\u003Cli\u003ENo javascript needed to render\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003ESingle page apps\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ccode\u003E\u003Cpre\u003E&lt;body&gt;\n  \u003Cem\u003E\n  &lt;app&gt;&lt;\u002Fapp&gt;\n  \u003C\u002Fem\u003E\n  &lt;script src=&quot;my-app.js&quot;&gt;&lt;\u002Fscript&gt;\n&lt;\u002Fbody&gt;\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Cul class=\"no-bullets\"\u003E\u003Cli\u003EClient controls the process\u003C\u002Fli\u003E\u003Cli\u003EJavascript does the rendering\u003C\u002Fli\u003E\u003Cli\u003ESlower startup time\u003C\u002Fli\u003E\u003Cli\u003ESnappier on page transitions after first load\u003C\u002Fli\u003E\u003Cli\u003ERequests to already loaded assets dont need to be remade\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003ETaking a step back\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; but... &mdash;\u003C\u002Fh3\u003E\u003Ch2\u003Ewhy?\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch1\u003E1 - Search Engine Optimization\u003C\u002Fh1\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EMetatags\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Cul class=\"no-bullets\"\u003E\u003Cli\u003ETitle\u003C\u002Fli\u003E\u003Cli\u003EMeta description\u003C\u002Fli\u003E\u003Cli\u003ECanonical Url's\u003C\u002Fli\u003E\u003Cli\u003EContent\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003ECrawlers \u003Cbr \u002F\u003E\u003Cbr \u002F\u003Ecare about content\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EJavascript parsing\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EThere are solutions\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; but &mdash;\u003C\u002Fh3\u003E\u003Ch2\u003Enot perfect\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch1\u003E2 - Social media\u003C\u002Fh1\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EScrapers\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"static contain social-ng1\"\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003ESpecific Protocols\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003ETwitter \u003Cbr \u002F\u003E\u003Cbr \u002F\u003E\u003C\u002Fh2\u003E\u003Ccode\u003E\u003Cpre\u003E...\n&lt;meta name=&quot;twitter:card&quot; content=&quot;summary&quot; \u002F&gt;\n\u003Cem\u003E&lt;meta name=&quot;twitter:site&quot; content=&quot;@nytimesbits&quot; \u002F&gt;\u003C\u002Fem\u003E\n&lt;meta name=&quot;twitter:creator&quot; content=&quot;@nickbilton&quot; \u002F&gt;\n...\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch1\u003E3 - User experience\u003C\u002Fh1\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EStartup time\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Cul class=\"no-bullets\"\u003E\u003Cli\u003ELarge bundles\u003C\u002Fli\u003E\u003Cli\u003EInitial loading time\u003C\u002Fli\u003E\u003Cli\u003ETime to first interaction\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Cdiv class=\"loading\"\u003E\u003C\u002Fdiv\u003E\u003Ch3\u003ELoading...\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch3\u003E&ldquo;53% of people will abandon a site if it takes \u003Cbr \u002F\u003Emore than 3 sec to load&rdquo;\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch3\u003E&ldquo;Average time to load a website in 3G is ~19sec.&rdquo;\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Cdiv class=\"angular\"\u003E\u003C\u002Fdiv\u003E\u003Cbr \u002F\u003E\u003Ch2\u003EAngular is fast\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Cul class=\"no-bullets\"\u003E\u003Cli\u003EOptimizatized for performance\u003C\u002Fli\u003E\u003Cli\u003EAOT\u003C\u002Fli\u003E\u003Cli\u003ELazy loading\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch3\u003E&mdash; there is room for improvement &mdash;\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EHTML load\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; to &mdash;\u003C\u002Fh3\u003E\u003Ch2\u003EAngular bootstrap\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EImportant metrics\u003C\u002Fh2\u003E\u003Cbr\u002F\u003E\u003Cul class=\"no-bullets\"\u003E\u003Cli\u003ETime to meaningful paint\u003C\u002Fli\u003E\u003Cli\u003ETime to interactive\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"static contain html-load\"\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003ELets talk numbers\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"static contain angular2-todo\"\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003E\u003E4 seconds?\u003C\u002Fh2\u003E\u003Ch3\u003Eouch...\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"static contain angular2-todo-ssr\"\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003E490ms\u003C\u002Fh2\u003E\u003Ch3\u003E👍 \u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch1\u003EHow?\u003C\u002Fh1\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EApp that works\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; on &mdash;\u003C\u002Fh3\u003E\u003Ch2\u003EServer and client\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch3\u003E&mdash; Good for &mdash; \u003Cbr \u002F\u003E\u003Cbr \u002F\u003E\u003C\u002Fh3\u003E\u003Cul class=\"no-bullets\"\u003E\u003Cli\u003EUX - Response from the server contains content for our users\u003C\u002Fli\u003E\u003Cli\u003ESEO - crawlers can understand our page easily\u003C\u002Fli\u003E\u003Cli\u003ESocial Media - pages are fully shareable\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch3\u003E&mdash; introducing &mdash;\u003C\u002Fh3\u003E\u003Ch2\u003EUniversal rendering\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch3\u003EUniversal rendering or Universal javascript is a concept\u003Cbr \u002F\u003E or an architectural pattern that consists on using one single version \u003Cbr \u002F\u003E of our app on multiple environments.\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch3\u003EAllows you to\u003Cbr \u002F\u003E\u003Cbr \u002F\u003E\u003C\u002Fh3\u003E\u003Cul class=\"no-bullets\"\u003E\u003Cli\u003EWrite your code once (one app only)\u003C\u002Fli\u003E\u003Cli\u003ERun the app on the client and server (the same app)\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch3\u003Ewhat we get with this is\u003Cbr \u002F\u003E \u003Cbr \u002F\u003E\u003C\u002Fh3\u003E\u003Cul class=\"no-bullets\"\u003E\u003Cli\u003EBetter performance\u003C\u002Fli\u003E\u003Cli\u003ESEO compliance\u003C\u002Fli\u003E\u003Cli\u003ESocial media \u002F Meta information support\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"static universal\"\u003E\u003Ch1\u003EAngular Universal\u003C\u002Fh1\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Cdiv class=\"contributors\"\u003E\u003C\u002Fdiv\u003E\u003Cbr \u002F\u003E\u003Ch3\u003Ebring server side rendering to Angular with the\u003Cbr \u002F\u003E least amount of changes to the code a developer has to make.\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"static contain angular-layers\"\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EInitial effort\u003C\u002Fh2\u003E\u003Cbr \u002F\u003E\u003Ch3\u003Eprovide everything needed to have angular running on the server\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003E4.x\u003C\u002Fh2\u003E\u003Ch3\u003EUniversal moved to Angular core\u003C\u002Fh3\u003E\u003Ch3\u003EOpen source project provides several wrappers\u003Cbr\u002F\u003E for different environments\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Cul class=\"no-bullets\"\u003E\u003Cli\u003ENode - Express\u003C\u002Fli\u003E\u003Cli\u003ENode - Happyjs\u003C\u002Fli\u003E\u003Cli\u003E.Net (in development)\u003C\u002Fli\u003E\u003Cli\u003EJava (in development)\u003C\u002Fli\u003E\u003Cli\u003EPHP (in development)\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EPlatform-server\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ccode class=\"long-pre\"\u003E\u003Cpre\u003Eimport { readFileSync } from 'fs';\n\u003Cem\u003Eimport { renderModuleFactory } from '@angular\u002Fplatform-server';\u003C\u002Fem\u003E\nimport { AppServerModuleFactory } from ‘.\u002Fapp.server.module.ngFactory';\n\n\u003Cem\u003ErenderModuleFactory(AppServerModuleFactory, {\u003C\u002Fem\u003E\n  document: readFileSync('index.html', 'utf-8'),\n  url: '\u002F'\n})\n.then(html =\u003E console.log(html));\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EAngular universal \u003Cbr \u002F\u003E\u003Cbr \u002F\u003Ewith node\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; Express &mdash;\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EBefore\u003C\u002Fh2\u003E\u003Cbr\u002F\u003E\u003Ch3\u003EAppRoot module imports BrowserModule\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch3\u003Eapp.module.ts\u003Cbr\u002F\u003E\u003Cbr\u002F\u003E\u003C\u002Fh3\u003E\u003Ccode class=\"long-pre\"\u003E\u003Cpre\u003Eimport { NgModule } from '@angular\u002Fcore';\n\u003Cem\u003Eimport { BrowserModule } from '@angular\u002Fplatform-browser';\u003C\u002Fem\u003E\nimport { AppComponent } from '.\u002Fapp.component';\n\n@NgModule({\n  \u003Cem\u003Eimports: [ BrowserModule ],\u003C\u002Fem\u003E\n  declarations: [ AppComponent ],\n  bootstrap: [ AppComponent ]\n})\nexport class AppModule { }\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EAfter\u003C\u002Fh2\u003E\u003Cbr\u002F\u003E\u003Ch3\u003ETwo entries - Server & Browser\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EBrowser\u003C\u002Fh2\u003E\u003Ch3\u003EImports AppModule\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch3\u003Ebrowser-app.module.ts\u003Cbr\u002F\u003E\u003Cbr\u002F\u003E\u003C\u002Fh3\u003E\u003Ccode class=\"long-pre\"\u003E\u003Cpre\u003Eimport { NgModule } from '@angular\u002Fcore';\n\u003Cem\u003Eimport { BrowserModule } from '@angular\u002Fplatform-browser';\u003C\u002Fem\u003E\nimport { AppModule } from '.\u002Fapp.module';\n\n@NgModule({\n  \u003Cem\u003Ebootstrap: [ AppComponent ],\n    imports: [ \n    BrowserModule.withServerTransition({\n      appId: 'my-app-id'\n    }),\n    AppModule,\n  ],\u003C\u002Fem\u003E\n})\nexport class BrowserAppModule { }\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EServer\u003C\u002Fh2\u003E\u003Ch3\u003ENew NgModule - ServerModule\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch3\u003Eserver-app.module.ts\u003Cbr\u002F\u003E\u003C\u002Fh3\u003E\u003Ccode class=\"long-pre\"\u003E\u003Cpre\u003Eimport { NgModule } from '@angular\u002Fcore';\nimport { BrowserModule } from '@angular\u002Fplatform-browser';\n\u003Cem\u003Eimport { ServerModule } from '@angular\u002Fplatform-server';\u003C\u002Fem\u003E\nimport { AppModule } from '.\u002Fapp.module';\n\n@NgModule({\n  bootstrap: [ AppComponent ],\n  imports: [ \n    BrowserModule.withServerTransition({\n      appId: 'my-app-id'\n    }),\n    \u003Cem\u003EServerModule,\u003C\u002Fem\u003E,\n    AppModule,\n  ],\n})\nexport class ServerAppModule { }\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EServerModule\u003C\u002Fh2\u003E\u003Cbr \u003E\u003Cul class=\"no-bullets\"\u003E\u003Cli\u003EServer implementations for some modules like http, location, DOM\u003C\u002Fli\u003E\u003Cli\u003EEnsure the same prefix in server and browser\u003C\u002Fli\u003E\u003Cli\u003EIn the future might provide ways to share state from server to client\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EBootstrap\u003C\u002Fh2\u003E\u003Ch3\u003EUsing express wrapper provided by \u003Cbr\u002F\u003E @nguniversal\u002Fexpress-engine\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ccode class=\"very-long-pre\"\u003E\u003Cpre\u003E...\nimport * as express from 'express';\n\u003Cem\u003Eimport { ServerAppModule } from '.\u002Fapp\u002Fserver-app.module';\u003C\u002Fem\u003E\n\u003Cem\u003Eimport { ngExpressEngine } from '@nguniversal\u002Fexpress-engine';\u003C\u002Fem\u003E\n...\nconst app = express();\nconst port = 8000;\nconst baseUrl = `http:\u002F\u002Flocalhost:${port}`;\n\n\u003Cem\u003Eapp.engine('html', ngExpressEngine({\n  bootstrap: ServerAppModule\n}));\u003C\u002Fem\u003E\n\napp.set('view engine', 'html');\napp.set('views', 'src');\napp.use('\u002F', express.static('dist', {index: false}));\n...\napp.listen(8000,() =\u003E {\n  console.log(`Listening at ${baseUrl}`);\n});\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EHow it works\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch3\u003E\"The pre-rendered page is just static HTML and CSS\"\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Col class=\"no-bullets\"\u003E\u003Cli\u003EServer renderes the app transforming it into a string\u003C\u002Fli\u003E\u003Cli\u003EServer provides a static rendered version of that DOM\u003C\u002Fli\u003E\u003Cli\u003EClient bootstraps\u003C\u002Fli\u003E\u003Cli\u003EClient swaps the server rendered version with the browser version\u003C\u002Fli\u003E\u003C\u002Fol\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch1\u003EUniversal gotchas\u003C\u002Fh1\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EDOM\u003C\u002Fh2\u003E\u003Ch3\u003E\u003Cstrike\u003EWindow\u003C\u002Fstrike\u003E, \u003Cstrike\u003Edocument\u003C\u002Fstrike\u003E, \u003Cstrike\u003Enavigator\u003C\u002Fstrike\u003E\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ccode class=\"long-pre\"\u003E\u003Cpre\u003Eimport { PLATFORM_ID } from '@angular\u002Fcore';\nimport { isPlatformBrowser, isPlatformServer } from '@angular\u002Fcommon';\n\nconstructor(@Inject(PLATFORM_ID) private platformId: Object) { ... }\n\nngOnInit() {\n  \u003Cem\u003Eif (isPlatformBrowser(this.platformId)) {\n      \u002F\u002F Client only code.\n      ...\n  }\n  if (isPlatformServer(this.platformId)) {\n    \u002F\u002F Server only code.\n    ...\n  }\u003C\u002Fem\u003E\n}\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003ERenderer\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch3\u003EDOM API\u003C\u002Fh3\u003E\u003Ccode class=\"very-long-pre\"\u003E\u003Cpre\u003Eimport { Component, ViewChild, ElementRef } from '@angular\u002Fcore';\n\n@Component({\n  selector: 'app-root',\n  template: '&lt;input type=&quot;text&quot; #name&gt;'\n})\nexport class AppComponent {\n  @ViewChild(\"name\") name: ElementRef;\n  \n  ngAfterViewInit() {\n    this.name.nativeElement.setAttribute('placeholder','Name');\n  }\n}\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch3\u003ERenderer API\u003C\u002Fh3\u003E\u003Ccode class=\"very-long-pre\"\u003E\u003Cpre\u003Eimport { Component, ViewChild, ElementRef, Renderer2 } from '@angular\u002Fcore';\n\n@Component({\n  selector: 'app-root',\n  template: '&lt;input type=&quot;text&quot; #name&gt;'\n})\nexport class AppComponent {\n  @ViewChild(\"name\") name: ElementRef;\n  \n  constructor(private renderer: Renderer2) {}\n\n  ngAfterViewInit() {\n    \u003Cem\u003Ethis.renderer.setAttribute(this.name.nativeElement, 'placeholder', 'Name');\u003C\u002Fem\u003E\n  }\n}\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EDependencies\u003C\u002Fh2\u003E\u003Ch3\u003EPlatform specific dependencies\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch3\u003Ebrowser-app.module.ts\u003C\u002Fh3\u003E\u003Ccode class=\"long-pre\"\u003E\u003Cpre\u003E@NgModule({\n  bootstrap: [AppComponent],\n  imports: [\n    BrowserModule.withServerTransition({\n      appId: 'spotshot'\n    }),\n    AppModule,\n  ],\n  providers: [\n    \u003Cem\u003E{ provide: Storage, useClass: LocalStorage },\u003C\u002Fem\u003E\n  ],\n})\nexport class BrowserAppModule { }\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch3\u003Eserver-app.module.ts\u003C\u002Fh3\u003E\u003Ccode class=\"long-pre\"\u003E\u003Cpre\u003E@NgModule({\n  bootstrap: [AppComponent],\n  imports: [\n    BrowserModule.withServerTransition({\n      appId: 'spotshot'\n    }),\n    ServerModule,\n    AppModule,\n  ],\n  providers: [\n    \u003Cem\u003E{ provide: Storage, useClass: InMemoryStorage },\u003C\u002Fem\u003E\n  ],\n})\nexport class ServerAppModule { }\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch3\u003Eapp.component.ts\u003C\u002Fh3\u003E\u003Ccode class=\"long-pre\"\u003E\u003Cpre\u003E\u003Cem\u003Econstructor(public storage: Storage)\u003C\u002Fem\u003E\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch3\u003Estorage.ts\u003C\u002Fh3\u003E\u003Ccode class=\"very-long-pre\"\u003E\u003Cpre\u003Eimport {Injectable} from '@angular\u002Fcore';\n\nexport abstract class Storage {\n  abstract getItem(key: string): string;\n  abstract setItem(key: string, value: string): void;\n}\n\n@Injectable()\n\u003Cem\u003Eexport class LocalStorage implements Storage\u003C\u002Fem\u003E {\n  ...\n}\n\n@Injectable()\n\u003Cem\u003Eexport class InMemoryStorage implements Storage\u003C\u002Fem\u003E {\n  ...\n}\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003ESet Timeout\u003C\u002Fh2\u003E\u003Ch3\u003EAvoid using it, as it slows down the server response\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EHttp\u003C\u002Fh2\u003E\u003Ch3\u003EBy default XHR requests will be made on the server and repeated on the client.\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch1\u003EAngular CLI\u003C\u002Fh1\u003E\u003Ch3\u003EComing soon\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch3\u003EResources\u003C\u002Fh3\u003E\u003Cul class=\"no-bullets\"\u003E\u003Cli\u003Ehttps:\u002F\u002Fgithub.com\u002FFrozenPandaz\u002Fng-universal-demo\u003C\u002Fli\u003E\u003Cli\u003Ehttps:\u002F\u002Fgithub.com\u002Fangular\u002Funiversal\u003C\u002Fli\u003E\u003Cli\u003Ehttps:\u002F\u002Fgitter.im\u002Fangular\u002Funiversal\u003C\u002Fli\u003E\u003Cli\u003Ehttps:\u002F\u002Fangular.io\u002Fdocs\u002Fts\u002Flatest\u002Fguide\u002Funiversal.html\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EThank you!\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003C\u002Farticle\u003E\u003Cscript src=\"index.js\"\u003E\u003C\u002Fscript\u003E";
	if (NODE_ENV !== 'production') {
	pug_html = pug_html + "\u003Cscript src=\"webpack-dev-server.js\"\u003E\u003C\u002Fscript\u003E";
	}
	pug_html = pug_html + "\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";}.call(this,"NODE_ENV" in locals_for_with?locals_for_with.NODE_ENV:typeof NODE_ENV!=="undefined"?NODE_ENV:undefined));;return pug_html;};
	module.exports = template;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var pug_has_own_property = Object.prototype.hasOwnProperty;

	/**
	 * Merge two attribute objects giving precedence
	 * to values in object `b`. Classes are special-cased
	 * allowing for arrays and merging/joining appropriately
	 * resulting in a string.
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Object} a
	 * @api private
	 */

	exports.merge = pug_merge;
	function pug_merge(a, b) {
	  if (arguments.length === 1) {
	    var attrs = a[0];
	    for (var i = 1; i < a.length; i++) {
	      attrs = pug_merge(attrs, a[i]);
	    }
	    return attrs;
	  }

	  for (var key in b) {
	    if (key === 'class') {
	      var valA = a[key] || [];
	      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
	    } else if (key === 'style') {
	      var valA = pug_style(a[key]);
	      var valB = pug_style(b[key]);
	      a[key] = valA + valB;
	    } else {
	      a[key] = b[key];
	    }
	  }

	  return a;
	};

	/**
	 * Process array, object, or string as a string of classes delimited by a space.
	 *
	 * If `val` is an array, all members of it and its subarrays are counted as
	 * classes. If `escaping` is an array, then whether or not the item in `val` is
	 * escaped depends on the corresponding item in `escaping`. If `escaping` is
	 * not an array, no escaping is done.
	 *
	 * If `val` is an object, all the keys whose value is truthy are counted as
	 * classes. No escaping is done.
	 *
	 * If `val` is a string, it is counted as a class. No escaping is done.
	 *
	 * @param {(Array.<string>|Object.<string, boolean>|string)} val
	 * @param {?Array.<string>} escaping
	 * @return {String}
	 */
	exports.classes = pug_classes;
	function pug_classes_array(val, escaping) {
	  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
	  for (var i = 0; i < val.length; i++) {
	    className = pug_classes(val[i]);
	    if (!className) continue;
	    escapeEnabled && escaping[i] && (className = pug_escape(className));
	    classString = classString + padding + className;
	    padding = ' ';
	  }
	  return classString;
	}
	function pug_classes_object(val) {
	  var classString = '', padding = '';
	  for (var key in val) {
	    if (key && val[key] && pug_has_own_property.call(val, key)) {
	      classString = classString + padding + key;
	      padding = ' ';
	    }
	  }
	  return classString;
	}
	function pug_classes(val, escaping) {
	  if (Array.isArray(val)) {
	    return pug_classes_array(val, escaping);
	  } else if (val && typeof val === 'object') {
	    return pug_classes_object(val);
	  } else {
	    return val || '';
	  }
	}

	/**
	 * Convert object or string to a string of CSS styles delimited by a semicolon.
	 *
	 * @param {(Object.<string, string>|string)} val
	 * @return {String}
	 */

	exports.style = pug_style;
	function pug_style(val) {
	  if (!val) return '';
	  if (typeof val === 'object') {
	    var out = '';
	    for (var style in val) {
	      /* istanbul ignore else */
	      if (pug_has_own_property.call(val, style)) {
	        out = out + style + ':' + val[style] + ';';
	      }
	    }
	    return out;
	  } else {
	    val += '';
	    if (val[val.length - 1] !== ';') 
	      return val + ';';
	    return val;
	  }
	};

	/**
	 * Render the given attribute.
	 *
	 * @param {String} key
	 * @param {String} val
	 * @param {Boolean} escaped
	 * @param {Boolean} terse
	 * @return {String}
	 */
	exports.attr = pug_attr;
	function pug_attr(key, val, escaped, terse) {
	  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
	    return '';
	  }
	  if (val === true) {
	    return ' ' + (terse ? key : key + '="' + key + '"');
	  }
	  if (typeof val.toJSON === 'function') {
	    val = val.toJSON();
	  }
	  if (typeof val !== 'string') {
	    val = JSON.stringify(val);
	    if (!escaped && val.indexOf('"') !== -1) {
	      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
	    }
	  }
	  if (escaped) val = pug_escape(val);
	  return ' ' + key + '="' + val + '"';
	};

	/**
	 * Render the given attributes object.
	 *
	 * @param {Object} obj
	 * @param {Object} terse whether to use HTML5 terse boolean attributes
	 * @return {String}
	 */
	exports.attrs = pug_attrs;
	function pug_attrs(obj, terse){
	  var attrs = '';

	  for (var key in obj) {
	    if (pug_has_own_property.call(obj, key)) {
	      var val = obj[key];

	      if ('class' === key) {
	        val = pug_classes(val);
	        attrs = pug_attr(key, val, false, terse) + attrs;
	        continue;
	      }
	      if ('style' === key) {
	        val = pug_style(val);
	      }
	      attrs += pug_attr(key, val, false, terse);
	    }
	  }

	  return attrs;
	};

	/**
	 * Escape the given string of `html`.
	 *
	 * @param {String} html
	 * @return {String}
	 * @api private
	 */

	var pug_match_html = /["&<>]/;
	exports.escape = pug_escape;
	function pug_escape(_html){
	  var html = '' + _html;
	  var regexResult = pug_match_html.exec(html);
	  if (!regexResult) return _html;

	  var result = '';
	  var i, lastIndex, escape;
	  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
	    switch (html.charCodeAt(i)) {
	      case 34: escape = '&quot;'; break;
	      case 38: escape = '&amp;'; break;
	      case 60: escape = '&lt;'; break;
	      case 62: escape = '&gt;'; break;
	      default: continue;
	    }
	    if (lastIndex !== i) result += html.substring(lastIndex, i);
	    lastIndex = i + 1;
	    result += escape;
	  }
	  if (lastIndex !== i) return result + html.substring(lastIndex, i);
	  else return result;
	};

	/**
	 * Re-throw the given `err` in context to the
	 * the pug in `filename` at the given `lineno`.
	 *
	 * @param {Error} err
	 * @param {String} filename
	 * @param {String} lineno
	 * @param {String} str original source
	 * @api private
	 */

	exports.rethrow = pug_rethrow;
	function pug_rethrow(err, filename, lineno, str){
	  if (!(err instanceof Error)) throw err;
	  if ((typeof window != 'undefined' || !filename) && !str) {
	    err.message += ' on line ' + lineno;
	    throw err;
	  }
	  try {
	    str = str || __webpack_require__(3).readFileSync(filename, 'utf8')
	  } catch (ex) {
	    pug_rethrow(err, null, lineno)
	  }
	  var context = 3
	    , lines = str.split('\n')
	    , start = Math.max(lineno - context, 0)
	    , end = Math.min(lines.length, lineno + context);

	  // Error context
	  var context = lines.slice(start, end).map(function(line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? '  > ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');

	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'Pug') + ':' + lineno
	    + '\n' + context + '\n\n' + err.message;
	  throw err;
	};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/* (ignored) */

/***/ })
/******/ ])
});
;
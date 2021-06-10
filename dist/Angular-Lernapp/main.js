(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui list\" *ngIf=\"!about\" style=\"text-align:center; margin-top: 100px; margin-bottom: 50px;\" >\r\n  <a class=\"item\" (click)=\"aboutFunc()\">About</a>\r\n</div>\r\n\r\n<div *ngIf=\"about\" style=\"margin: 30px; text-align: center;\" class=\"ui message\">\r\n  <i class=\"close icon\" (click)=\"hideAbout()\"></i>\r\n  <h4>This project was initially designed and developed by Michaela Rodenbücher.</h4>\r\n  <p>Master-Thesis at Otto-Friedrich University Bamberg.\r\n    <br>May 2019\r\n  </p>\r\n  <h4>Since then, updated and maintained by the team of the chair of media informatics.</h4>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <h1 class=\"ui header\" style=\"text-align:center; margin-top: 30px; margin-bottom: 50px; margin-left: 20%; \">\r\n    {{ title }}\r\n  </h1>\r\n  <div class=\"ui grid container\" style=\"min-width:90%;\">\r\n    <div class=\"four wide column\">\r\n\r\n      <div class=\"ui left fixed vertical menu\" style=\"max-width:25%; overflow: auto;\">\r\n        <a class=\"item\" routerLink=\"/home\" routerLinkActive=\"active\">\r\n          Home\r\n        </a>\r\n        <div class=\"item\">\r\n          <h4>General</h4>\r\n          <a class=\"item\" routerLink=\"/environment\" routerLinkActive=\"active\">\r\n            Environment\r\n          </a>\r\n          <a class=\"item\" routerLink=\"/first-app\" routerLinkActive=\"active\">\r\n            First Angular-App\r\n          </a>\r\n          <a class=\"item\" routerLink=\"/typescript\" routerLinkActive=\"active\">\r\n            TypeScript\r\n          </a>\r\n        </div>\r\n        <div class=\"item\">\r\n          <h4>Project</h4>\r\n          <a class=\"item\" routerLink=\"/project-overview\" routerLinkActive=\"active\">\r\n            Introduction\r\n          </a>\r\n          <a class=\"item\" routerLink=\"/application\" routerLinkActive=\"active\">\r\n            App</a>\r\n          <a class=\"item\" routerLink=\"/components\" routerLinkActive=\"active\">\r\n            Components</a>\r\n          <a class=\"item\" routerLink=\"/components-formmodules-directives\" routerLinkActive=\"active\">\r\n            Components, FormModules, Directives\r\n          </a>\r\n          <a class=\"item\" routerLink=\"/reusable-components\" routerLinkActive=\"active\">\r\n            Reusable Components\r\n          </a>\r\n          <a class=\"item\" routerLink=\"/services\" routerLinkActive=\"active\">\r\n            Services\r\n          </a>\r\n          <a class=\"item\" routerLink=\"/routing\" routerLinkActive=\"active\">\r\n            Routing\r\n          </a>\r\n          <a class=\"item\" routerLink=\"/http\" routerLinkActive=\"active\">\r\n            HTTP\r\n          </a>\r\n          <a class=\"item\" routerLink=\"/finish-app\" routerLinkActive=\"active\">\r\n            Finish the App\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"twelve wide column\">\r\n      <router-outlet (activate)=\"onActivate()\"></router-outlet>\r\n      <div style=\"text-align:center; margin: 50px;\">\r\n        <button class=\"ui button primary\" [routerLink]=\"getLast()\" *ngIf=\"!getHideBackButton()\">Back</button>\r\n        <button class=\"ui button primary\" [routerLink]=\"getNext()\" *ngIf=\"!getHideNextButton()\">Next</button>\r\n      </div>\r\n      <app-about></app-about>\r\n    </div>\r\n  </div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/application/application.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/application/application.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>App</h2>\r\n<div class=\"language-bash\">\r\n<div *ngIf=\"praxis\" class=\"ui info message\">\r\n  <h5>User Story</h5>\r\n  <p>As a <b>user</b><br />\r\n    I want to <b>have an app shell</b>, <br />\r\n    to <b> display the app's content</b>.</p>\r\n</div>\r\n\r\n<div *ngIf=\"praxis\">\r\n  <h4>Initial Application</h4>\r\n  <p>Open your cmd and type:</p>\r\n  <div class=\"code_listing\">\r\n    <pre class=\"command-line language-bash\"><code #code1>ng new where-to-go -is</code></pre>\r\n    <div><i class=\"copy outline link icon\" (click)=\"copy(code1.textContent)\"></i></div>\r\n    <a href=\"https://angular.io/cli/new\" target=\"_blank\"><i class=\"large info circle link icon\"></i></a>\r\n  </div>\r\n  <p>The <code>-is</code> defines that the project has an inline-style. If you don't do\r\n    this, we would get an extra\r\n    CSS-file for every single component. We don't want that for this project.</p>\r\n  <p>Next, open your editor and open the project folder. After that run the\r\n    initial application. In most editors you even can open a terminal directly within the editor. If the terminal returns an error message like <code>Command not found</code> you have to restart it in order for the process to  recognise the newly installed commands.</p>\r\n  <div class=\"code_listing\">\r\n    <pre class=\"command-line language-bash\"><code #code2>ng serve --open</code></pre>\r\n    <div><i class=\"copy outline link icon\" (click)=\"copy(code2.textContent)\"></i></div>\r\n    <a href=\"https://angular.io/cli/serve\" target=\"_blank\"><i class=\"large info circle link icon\"></i></a>\r\n  </div>\r\n  <p>The browser automatically opens the start page of the initial Angular app:</p>\r\n  <img class=\"ui image big centered border\" src=\"assets/img/Angular-Initial-App.png\">\r\n</div>\r\n\r\n<div *ngIf=\"theoryLarge\" class=\"ui message\" style=\"margin-top: 20px;\">\r\n  <h4>Structure of the project</h4>\r\n  <p>The CLI created a project for us. These are the workspace files:</p>\r\n  <p><i class=\"folder open icon\"></i><code>where-to-go</code>: working directory<br>\r\n    <strong>&#8990; </strong><i class=\"folder outline icon\"></i> <code>.git</code>: git metadata and file database<br />\r\n    <strong>&#8990; </strong><i class=\"folder icon\"></i> <code>e2e</code>: for set of end-to-end tests<br />\r\n    <strong>&#8990; </strong> <i class=\"folder icon\"></i> <code>node_modules</code>: Installed npm packages<br/>\r\n    <strong>&#8990; </strong> <i class=\"folder open icon\"></i> <code>src</code>: <strong>source files of the application</strong><br/>\r\n      <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8990; </strong> <i class=\"folder open icon\"></i> <code>app</code>: <strong>Modules and components files</strong><br/>\r\n        <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8990; </strong> <i class=\"file alternate icon\"></i> <code>app-routing.module.ts</code>: Router module (navigation)<br/>\r\n        <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8990; </strong> <i class=\"file alternate icon\"></i> <code>app.component.css</code>: Base CSS for root <code>AppComponent</code><br/>\r\n        <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8990; </strong> <i class=\"file alternate icon\"></i> <code>app.component.html</code>: Template for <code>AppComponent</code>, shell of the app<br/>\r\n        <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8990; </strong> <i class=\"file alternate icon\"></i> <code>app.component.spec.ts</code>: Unit tests for the <code>AppComponent</code><br/>\r\n        <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8990; </strong> <i class=\"file alternate icon\"></i> <code>app.component.ts</code>: Logic of <code>AppComponent</code><br/>\r\n        <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8990; </strong> <i class=\"file alternate icon\"></i> <code>app.module.ts</code>: Root module, all used modules are declared here<br/>\r\n      <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8990; </strong> <i class=\"folder icon\"></i> <code>assets</code>: For images and files copied as-is<br/>\r\n      <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8990; </strong> <i class=\"folder icon\"></i> <code>environments</code>: Build configuration for target environments<br/>\r\n      <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8990; </strong> <i class=\"file alternate icon\"></i> <code>browserslist</code>: Configuration of target browser<br/>\r\n      <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8990; </strong> <i class=\"file alternate icon\"></i> <code>favicon.ico</code>: Icon used in the browser bookmark bar<br/>\r\n      <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8990; </strong> <i class=\"file alternate icon\"></i> <code>index.html</code>: Main served HTML page<br/>\r\n      <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8990; </strong> <i class=\"file alternate icon\"></i> <code>karma.conf.js</code>: Test runner configuration<br/>\r\n      <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8990; </strong> <i class=\"file alternate icon\"></i> <code>main.ts</code>: Entry point of application, compiles the application<br/>\r\n      <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8990; </strong> <i class=\"file alternate icon\"></i> <code>polyfills.ts</code>: Polyfill scripts for old browser support<br/>\r\n      <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8990; </strong> <i class=\"file alternate icon\"></i> <code>styles.css</code>: Global stylesheet<br/>\r\n      <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8990; </strong> <i class=\"file alternate icon\"></i> <code>test.ts</code>: Entry point for unit tests<br/>\r\n      <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8990; </strong> <i class=\"file alternate icon\"></i> <code>tsconfig.app.json</code>: Application-specific TypeScript configuration<br/>\r\n      <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8990; </strong> <i class=\"file alternate icon\"></i> <code>tsconfig.spec.json</code>: Test-specific TypeScript configuration<br/>\r\n      <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8990; </strong> <i class=\"file alternate icon\"></i> <code>tslint.json</code>: Application-specific TSLint configuration<br/>\r\n    <strong>&#8990; </strong> <i class=\"file alternate outline icon\"></i> <code>.editorconfig</code>: Code editor configuration (consisten coding styles)<br/>\r\n    <strong>&#8990; </strong> <i class=\"file alternate outline icon\"></i> <code>.gitignore</code>: Files and folders which are not tracked by Git<br/>\r\n    <strong>&#8990; </strong> <i class=\"file alternate icon\"></i> <code>angular.json</code>: Angular CLI configuration<br/>\r\n    <strong>&#8990; </strong> <i class=\"file alternate icon\"></i> <code>package-lock.json</code>: Version information about installed packages<br/>\r\n    <strong>&#8990; </strong> <i class=\"file alternate icon\"></i> <code>package.json</code>: npm package dependency configuration<br/>\r\n    <strong>&#8990; </strong> <i class=\"file alternate icon\"></i> <code>README.md</code>: Help documentation<br/>\r\n    <strong>&#8990; </strong> <i class=\"file alternate icon\"></i> <code>tsconfig.json</code>: TypeScript compiler configuration<br/>\r\n    <strong>&#8990; </strong> <i class=\"file alternate icon\"></i> <code>tslint.json</code>: TSLint configuration (static code analysis)<br/>\r\n</p>\r\n</div>\r\n<div *ngIf=\"theoryLarge\" class=\"ui message\" style=\"margin-top: 20px;\">\r\n  <h4>Angular Modules</h4>\r\n  <p>Angular modules help structuring the application in functional blocks.\r\n  Each application has at least one root module, called <code>AppModule</code>.\r\n  Technically modules are classes like all other\r\n  Angular blocks.\r\n  The <code>@NgModule()</code> decorator marks the class as module.</p>\r\n  \r\n  <p>\r\n  Decorators define metadata which Angular uses\r\n  at runtime to initialise the application and to expand the functionality of the class. The most important properties from NgModule are as follows:</p>\r\n\r\n  <ul>\r\n    <li><strong>declarations</strong>: All components, directives and pipes that belong to this module</li>\r\n    <li><strong>exports</strong>: Specifies all components, directives and pipes which should be available for other Angular modules</li>\r\n    <li><strong>imports</strong>: Contains all modules on which this module depends</li>\r\n    <li><strong>providers</strong>: Creators of services, which should be globally accessible in all parts of the app</li>\r\n    <li><strong>bootstrap</strong>: The main appliction view, called <code>root component</code>, which houses all other views</li>\r\n  </ul>\r\n\r\n  <p>The main component is the starting point of the application. As you will learn in the chapter <a routerLink=\"/components\">Components</a> this is the <code>AppComponent</code>.</p>\r\n \r\n  <p>You can use different module types such as the main module, routing-module and service-module.\r\n  A routing-module contains configuration for the router.\r\n  You will learn about the <code>router</code> in the chapter <a routerLink=\"/router\">Router</a>.\r\n  A service-module provides utilities like data access and messaging for the entire application as you will learn in the chapter <a routerLink=\"/service\">Service</a>.\r\n  </p>\r\n</div>\r\n\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\">\r\n\r\n  <h4>Make some changes</h4>\r\n  <p>Open <b>app.component.ts</b> and change the title of the app.</p>\r\n\r\n  <div class=\"code_listing\">\r\n    <pre><code #code3>export class AppComponent &#123;\r\n    title = 'Where To Go';\r\n&#125;</code></pre>\r\n    <div><i class=\"copy outline link icon\" (click)=\"copy(code3.textContent)\"></i></div>\r\n  </div>\r\n\r\n\r\n  <p>In the <b>app.component.html</b> is a binding to <code>title</code>. This binding brings the new title into the application.\r\n  </p>\r\n  <span>{{ title }} app is running!</span>\r\n  <div class=\"code_listing\">\r\n    <pre class=\"language-html\"><code #code4>&lt;span&gt;<span>{{</span> title <span>}}</span> app is running!&lt;&#47;span&gt;</code></pre>\r\n    <div><i class=\"copy outline link icon\" (click)=\"copy(code4.textContent)\"></i></div>\r\n  </div>\r\n\r\n\r\n  <img class=\"ui image medium centered border\" src=\"assets/img/Angular-Changed-Title.png\">\r\n</div>\r\n\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\">\r\n  <h4>Import UI-Framework</h4>\r\n  <p>As this is a web application showing you, how to build an Angular app, there is no need to do manual CSS styling.\r\n  Probably you already know how to style with CSS and the sole focus here should be Angular. That's why we are going to use the\r\n    <a href=\"https://semantic-ui.com/\" target=\"_blank\">Semantic UI</a> CSS-Framework for a nice look and feel out-of-the-box.</p>\r\n\r\n  <p>You can install the UI-Framework with the command:</p>\r\n\r\n  <div class=\"code_listing\">\r\n      <pre class=\"command-line language-bash\" data-user=\"user\" data-host=\"localhost\"><code #code5>npm i semantic-ui-css</code></pre>\r\n      <div><i class=\"copy outline link icon\" (click)=\"copy(code5.textContent)\"></i></div>\r\n      <a href=\"https://docs.npmjs.com/cli/install\" target=\"_blank\"><i class=\"large info circle link icon\"></i></a>\r\n  </div>\r\n\r\n  <p class=\"ui info message\">Tip: Its possible to open up another terminal and to have multiple running command shells to avoid powering off and on again the Angular web application.</p>\r\n\r\n  <p>Add it to the <b>angular.json</b> file:</p>\r\n\r\n  <div class=\"code_listing\">\r\n    <pre class=\"language-json\"><code #code6>\"styles\": [\r\n    \"node_modules/semantic-ui-css/semantic.css\",\r\n    \"src/styles.css\"\r\n]</code></pre>\r\n    <div><i class=\"copy outline link icon\" (click)=\"copy(code6.textContent)\"></i></div>\r\n  </div>\r\n\r\n  <p>CSS and JS framework files with <strong>min</strong> in the file name are, as usual, minified and compressed versions for production use, in contrary to the normal files for development and debugging purposes.</p>\r\n  <p>Configuration changes in the <strong>angular.json</strong> file are not hot reloaded! Therefore in order for the CSS to take effect, you have to hold (<code>Ctrl + C</code>) and restart your app with <code>ng serve</code>.</p>\r\n\r\n  <p>Now you can test the new style. Adjust the <b>app.component.html</b> like this and see if it looks different:</p>\r\n\r\n  <div class=\"code_listing\">\r\n    <pre class=\"language-html\"><code #code7>&lt;div style=\"text-align:center\"&gt;\r\n  &lt;h1 class=\"ui header\"&gt;\r\n    Welcome to <span>{{</span> title <span>}}</span>!\r\n  &lt;&#47;h1&gt;\r\n&lt;&#47;div&gt;</code></pre>\r\n    <div><i class=\"copy outline link icon\" (click)=\"copy(code7.textContent)\"></i></div>\r\n  </div>\r\n\r\n  <p class=\"ui info message\">If you have any problems with installing the Semantic UI CSS, you can download the plain files from their website (under <a href=\"https://semantic-ui.com/introduction/getting-started.html\" target=\"_blank\">Getting Started</a><em> &gt;Simpler Setup</em>) and paste the CSS it into your project folder.</p>\r\n\r\n  <p class=\"ui red message\">Be aware that most UI frameworks additionally include a JavaScript file for complex widgets.\r\n  These can be included too in <strong>angular.json</strong> under <code>\"scripts\": []</code>.\r\n  Against this approach speaks however, that it goes against the nature of Angular as Angular should be solely responsible for rendering and manipulation of the DOM.\r\n  Interferences triggered by the included framework are possible and may end up in some unwanted results. <br>\r\n  Furthermore it may be the case that classical JavaScript frameworks tag the DOM once, to enable their functions.\r\n  This normally happens after the content loaded event was fired. \r\n  But this event is only emitted once in the life time of a Single-Page-Application (after the almost empty index.html was downloaded and parsed) as reloads do normally not occur.\r\n  Instead the DOM is dynamically build and changed by Angular.</p>\r\n</div>\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\">\r\n\r\n  <h4>Visualization of the Construction:</h4>\r\n  <p><img class=\"ui image large centered\" src=\"assets/img/App-Building-1.png\"></p>\r\n  <div class=\"ui success message\">\r\n    <h4>Summary</h4>\r\n    <ul>\r\n      <li>You generated the initial app skeleton with the Angular CLI.</li>\r\n      <li>You changed the title and displayed it via data-binding (curly braces).</li>\r\n      <li>You imported an ui framework.</li>\r\n      <li>You learned about the app structure and modules.</li>\r\n    </ul>\r\n  </div>\r\n\r\n  <iframe style=\"margin-top:20px; margin-bottom:20px; width:100%; height: 500px\"\r\n    src=\"https://stackblitz.com/edit/wheretogo-step-1?embed=1&file=src/app/app.component.html&hideNavigation=1\"></iframe>\r\n  <h3 id=\"toc_further_references\">Further references</h3>\r\n  <div class=\"ui warning message\">\r\n    <p>Official documentation:</p>\r\n    <ul>\r\n      <li>Angular: <a href=\"https://angular.io/guide/file-structure\" target=\"_blank\">Workspace and project file structure</a></li>\r\n      <li>Angular: <a href=\"https://angular.io/guide/architecture\" target=\"_blank\">Architecture overview</a></li>\r\n      <li>Angular: <a href=\"https://angular.io/guide/architecture-modules\" target=\"_blank\">Introduction to modules</a></li>\r\n      <li>Angular: <a href=\"https://angular.io/guide/ngmodules\" target=\"_blank\">NgModules</a></li>\r\n      <li>Angular: <a href=\"https://angular.io/guide/workspace-config\" target=\"_blank\">Workspace Configuration</a>(angular.json)</li>\r\n      <li>npm: <a href=\"https://docs.npmjs.com/files/package-lock.json\" target=\"_blank\">package-lock.json</a> and <a href=\"https://docs.npmjs.com/files/package.json\" target=\"_blank\">package.json</a></li>\r\n      <li>Angular: <a href=\"https://docs.npmjs.com/files/package-lock.json\" target=\"_blank\">Workspace npm dependencies</a></li>\r\n      <li>Wikipedia: <a href=\"https://en.wikipedia.org/wiki/Polyfill_(programming)\" target=\"_blank\">Polyfill</a></li>\r\n    </ul>\r\n    <p>Design frameworks tailored for Angular:</p>\r\n      <ul>\r\n        <li><a href=\"https://material.angular.io/\" target=\"_blank\">Angular Material</a>: Material design components for Angular</li>\r\n        <li><a href=\"https://ng-bootstrap.github.io/#/home\" target=\"_blank\">Bootstrap widgets</a>: The angular way</li>\r\n      </ul>\r\n  </div>\r\n\r\n</div>\r\n</div>\r\n\r\n<div class=\"ui center aligned segment\" style=\"width: 50%; margin-left: auto; margin-right: auto\">\r\n    <h4>Your Progress:</h4>\r\n    <mat-progress-bar style=\"margin-bottom:20px;\" mode=\"determinate\" value=\"10\"></mat-progress-bar>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components-formmodules-directives/components-formmodules-directives.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components-formmodules-directives/components-formmodules-directives.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Components, FormModules and Directives</h2>\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\" class=\"ui info message\">\r\n    <h5>User Story</h5>\r\n    <p>As a <b>user</b><br />\r\n        I want to <b>display all lectures in a timetable and click to select one</b>, <br />\r\n        to <b> look through all of them and change the selected one</b>.</p>\r\n</div>\r\n<div *ngIf=\"praxis\">\r\n    <h4>Mock Data</h4>\r\n    <p>Later we will have more than one lecture and therefore we will need a list to display all of them. </p>\r\n    <pre class=\"command-line language-bash\"><code>ng g component timetable</code></pre>\r\n    <p>Because we don't get our data from a server we will create some mock-data and pretend that they are from a\r\n        server.</p>\r\n    <pre class=\"command-line language-bash\"><code>ng g class shared/mock-lectures</code></pre>\r\n    <p>Remove the class in this file and define the constant LECTURES as an array of lectures and export it. The content is the same\r\n        as in the property lecture from the lecture-item.component.ts, so you can copy the first lecture from there and\r\n        paste\r\n        it a few times for different lectures. The id must always be different!</p>\r\n    <div class=\"ui info message\">\r\n        <p>Later we will have drop-downs for day, time and building. To avoid problems, please make sure that: <br>\r\n            Your day looks like that: Monday, Tuesday, Wednesday, Thursday, Friday.<br>\r\n            Your hours are between 08 and 19 and always consists of two numbers.<br>\r\n            Your minutes are 00, 15, 30 or 45.<br>\r\n            Your building is KR1, WE5, F21 or M3.\r\n        </p>\r\n    </div>\r\n\r\n    <pre class=\"language-ts\"><code>export const LECTURES: Lecture[] = [\r\n  &#123;\r\n    id: 1,\r\n    name: 'Webtechnologien',\r\n    room: '075',\r\n    day: 'Monday',\r\n    time: &#123;hours: 10, minutes: 15&#125;,\r\n    building: 'WE5',\r\n    floor: '02',\r\n    department: 'Lehrstuhl für Medieninformatik'\r\n  &#125;,\r\n  &#123;\r\n    id: 2,\r\n    // ... and so on\r\n  &#125;\r\n]</code></pre>\r\n\r\n    <p>After that, you can delete the property lecture from the <b>lecture-item.component.ts</b> and initialise the\r\n        constant in the <b>timetable.component.ts</b>, because we need the data in the list now.</p>\r\n\r\n    <pre class=\"language-ts\"><code>lectures = LECTURES;</code></pre>\r\n    <p>Of course we also need to import the constant <code>LECTURES</code> now.</p>\r\n    <pre class=\"language-ts\"><code>import &#123; LECTURES &#125; from \"../shared/mock-lectures\";</code></pre>\r\n\r\n    <h4>Display a List</h4>\r\n    <p>\r\n        We generated our shell for the lecture items. The timetable is going to be a list with all the lectures we\r\n        have.\r\n    </p>\r\n    <p>First we have to write the code for a single lecture item and replace the code in\r\n        <b>lecture-item.component.html</b>: </p>\r\n\r\n    <pre class=\"language-html\"><code>&lt;div class=\"content\"&gt;\r\n    &lt;div class=\"header\"&gt;What? <span>{{</span>lecture.name | uppercase<span>}}</span>&lt;&#47;div&gt;\r\n    &lt;div class=\"description\"&gt;Where? <span>{{</span>lecture.building<span>}}</span>&#47;\r\n        <span>{{</span>lecture.floor<span>}}</span>.<span>{{</span>lecture.room<span>}}</span>&lt;&#47;div&gt;\r\n    &lt;div class=\"description\"&gt;When? <span>{{</span>lecture.day<span>}}</span>, \r\n        <span>{{</span>lecture.time.hours<span>}}</span>:<span>{{</span>lecture.time.minutes<span>}}</span>&lt;&#47;div&gt;\r\n    &lt;div *ngIf=\"lecture.department\" class=\"description\"&gt;Department: \r\n        <span>{{</span>lecture.department<span>}}</span>&lt;&#47;div&gt;\r\n&lt;&#47;div&gt;</code></pre>\r\n\r\n    <p>Next change the selector in the <b>lecture-item.component.ts</b>:</p>\r\n    <pre class=\"language-ts\"><code>selector: 'a.app-lecture-item',</code></pre>\r\n    <p>And insert this right above the empty constructor:</p>\r\n\r\n    <pre class=\"language-ts\"><code>@Input() lecture: Lecture;</code></pre>\r\n\r\n    <p>For that, we need to import the class <code>Input</code>.</p>\r\n    <pre class=\"language-ts\"><code>import &#123; Input &#125; from \"@angular/core\";</code></pre>\r\n</div>\r\n<div *ngIf=\"theoryLarge\" style=\"margin-top: 20px;\" class=\"ui message\">\r\n    <h4>Input-Property</h4>\r\n    <p>\r\n        You can transfer data, especially between parent- and children-components via\r\n        <code>@Input()</code>-property. The\r\n        decorator marks the class field as an input property and provides configuration metadata. This declares a\r\n        data-bound input property, which is automatically updated during change detection.\r\n    </p>\r\n</div>\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\">\r\n    <p>We display this component in the <b>app.component.html</b> and replace the lecture-item with this code:</p>\r\n    <pre class=\"language-html\"><code>&lt;app-timetable&gt;&lt;/app-timetable&gt;</code></pre>\r\n    <p>In the <b>timetable.component.html</b> we display the list of lecture-items now with a header beyond and a\r\n        for-loop, because every item should be displayed the same way:</p>\r\n\r\n<pre class=\"line-numbers language-html\"><code>&lt;div style=\"margin-top: 15px\"&gt;&lt;&#47;div&gt;\r\n    &lt;h2 class=\"ui header\"&gt;Timetable:&lt;&#47;h2&gt;\r\n    &lt;div style=\"padding: 15px;\"&gt;\r\n        &lt;div class=\"ui middle aligned divided list\"&gt;\r\n            &lt;div *ngFor=\"let l of lectures\" class=\"item\"&gt;\r\n                &lt;a class=\"app-lecture-item item\" [lecture]=\"l\" \r\n                style=\"margin: 10px; padding:10px\"&gt;&lt;&#47;a&gt;\r\n        &lt;&#47;div&gt;\r\n    &lt;&#47;div&gt;\r\n&lt;&#47;div&gt; \r\n</code></pre>\r\n\r\n    <p>With the construct <code>[lecture]=\"l\"</code> we make sure that <code\r\n           >l</code> is the lecture\r\n        we imported via input-binding\r\n        before.</p>\r\n    <p class=\"ui info message\">\r\n        Property-Binding: Sets properties of the DOM-Tree. Syntax:<br />\r\n        <code>[ ] = \" \"</code>\r\n    </p>\r\n</div>\r\n<div *ngIf=\"theorySmall\" style=\"margin-top: 20px;\" class=\"ui message\">\r\n    <h4>Directives</h4>\r\n    <p>Constructs like <code>*ngFor</code> are called \"Directives\". With this you can\r\n        make loops in the HTML similar to\r\n        loops in the logic code (TypeScript, Java,...), as you may know. </p>\r\n    <p>Every time I iterate over my list of items (if you also read the code examples, it's a list of lectures) I take\r\n        one single item out of all items, for which is displayed what I defined for it as HTML code before. With the\r\n        attribute <code>[lecture]</code> I assign the respective lecture object. And\r\n        with\r\n        this for-loop I repeat this for all the items (lectures) I have.</p>\r\n    <p>Another directive we already used before is <code>*ngIf</code>. For those who\r\n        read the code: because we made\r\n        department an optional property, someone may not set a value for this property. So we want to ask if this\r\n        property has a value and just display\r\n        the corresponding <code>div</code> if it has one.</p>\r\n    <p>This is also called templating-microsyntax, because the way we iterate over an array isn't just a simple\r\n        templating expression, it is a very small own language which generates DOM-elements. For every element in the\r\n        array it creates a new instance of something. In this case\r\n        <code>&lt;a class=\"app-lecture-item item\" ...&gt;&lt;/a&gt;</code>.</p>\r\n    <p class=\"ui info message\">\r\n        Structure directives: Directives to manipulate the DOM-Tree.\r\n        Syntax:<br>\r\n    <code class=\"language-ts\">*ngFor=\"let lecture of lectures\"</code><br><code class=\"language-ts\">\r\n*ngIf=\"lecture.department\"</code></p>\r\n    \r\n</div>\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\">\r\n    <h4>Visualization of the Construction:</h4>\r\n    <p><img class=\"ui image large centered\" src=\"assets/img/App-Building-4.png\"></p>\r\n\r\n    <h4>Details View</h4>\r\n    <p>Later we want to be able to make changes within a lecture item so we want to select one lecture and get its\r\n        details\r\n        view via click. First we need a variable for the selected lecture in the <b>timetable.component.ts</b>\r\n        and second we need a function, we call it <code>onSelect()</code>, which assigns\r\n        the clicked lecture from the\r\n        template to the <code>selectedLecture</code> of the component.</p>\r\n\r\n    <pre class=\"language-ts\"><code>selectedLecture: Lecture;\r\n\r\nonSelect(lecture: Lecture): void &#123;\r\n    this.selectedLecture = lecture;\r\n&#125;</code></pre>\r\n\r\n    <p>Of course we also need to import the class <code>Lecture</code>.</p>\r\n    <pre class=\"language-ts\"><code>import &#123; Lecture &#125; from \"../shared/lecture\";</code></pre>\r\n\r\n    <p>We add a click-event-binding to the <b>timetable.component.html</b>:</p>\r\n\r\n    <pre class=\"language-html\"><code>&lt;a class=\"app-lecture-item item\" [lecture]=\"l\" (click)=\"onSelect(l)\" style=\"margin: 10px; padding: 10px\"&gt;&lt;&#47;a&gt;</code></pre>\r\n\r\n    <p class=\"ui info message\">Event-Binding: Interrogate results and treat them. Syntax: <br />\r\n        <code>() = \" \"</code>\r\n    </p>\r\n    <p>We want to display the clicked lecture beneath the list of all lectures. therefore we need to add some code for\r\n        the selected lecture, but only if there is a lecture selected. To make this sure, we have the <code\r\n           >*ngIf</code>\r\n        directive.</p>\r\n    <p>In the <b>timetable.component.html</b> we need to insert the following code snippet beneath the existing code:\r\n    </p>\r\n\r\n<pre class=\"language-html line-numbers\"><code>&lt;div style=\"padding: 15px;\"&gt;\r\n    &lt;div class=\"ui middle aligned divided list\"&gt;\r\n        &lt;div *ngIf=\"selectedLecture\" style=\"padding: 50px;\"&gt;\r\n            &lt;h4&gt; <span>{{</span>selectedLecture.name<span>}}</span> Details &lt;&#47;h4&gt;\r\n            &lt;div class=\"description\"&gt;Where? <span>{{</span>selectedLecture.building<span>}}</span>&#47;<span>{{</span>selectedLecture.floor<span>}}</span>.<span>{{</span>selectedLecture.room<span>}}</span> &lt;&#47;div&gt;\r\n            &lt;div class=\"description\"&gt;When? <span>{{</span>selectedLecture.day<span>}}</span>,<span>{{</span>selectedLecture.time.hours<span>}}</span>:<span>{{</span>selectedLecture.time.minutes<span>}}</span> &lt;&#47;div&gt;\r\n            &lt;div *ngIf=\"selectedLecture.department\" class=\"description\"&gt;Department: <span>{{</span>selectedLecture.department<span>}}</span> &lt;&#47;div&gt;\r\n        &lt;&#47;div&gt;\r\n    &lt;&#47;div&gt;\r\n&lt;&#47;div&gt;</code></pre>\r\n    \r\n    <p>Now we asked, is there a <code>selectedLecture</code>? If there is, display the\r\n        <code>selectedLecture.name, selectedLecture.building</code>\r\n        and all the other information.</p>\r\n</div>\r\n\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\">\r\n    <h4>Make it an Input Form</h4>\r\n    <p>If we want to make changes in the details of a lecture, we will need two-way-binding and input fields.\r\n    </p>\r\n    <p class=\"ui info message\">Two-Way-Binding: Can read in properties and process results. Syntax: <br />\r\n        <code>[()] = \" \"</code>\r\n    </p>\r\n    <p>First we need to import the FormsModule in <b>app.module.ts</b>:</p>\r\n\r\n    <pre class=\"language-ts\"><code>import &#123; FormsModule &#125; from \"@angular/forms\";</code></pre>\r\n\r\n    <pre class=\"language-ts\"><code>imports: [\r\n    // Beside other entries, add:\r\n    FormsModule\r\n],</code></pre>\r\n\r\n    <p>Afterwards we can make the changes in <b>timetable.component.html</b> with <code\r\n           >[(ngModel)]</code>, the\r\n        bidirectional data-binding of Angular. It binds the selectedLecture.name property to the HTML input field so\r\n        that\r\n        data can flow in both directions: from the selectedLecture.name property to the input field and from the input\r\n        field\r\n        back to the selectedLecture.name.</p>\r\n    <p>This is going to be a lot of code, because the input form should already look good and provide drop-downs for an\r\n        easier input. For one item the code will look like this:</p>\r\n\r\n<pre class=\"language-html line-numbers\"><code>&lt;div class=\"field\"&gt;\r\n    &lt;label&gt;Name of the Lecture*:&lt;&#47;label&gt;\r\n    &lt;div class=\"field\"&gt;\r\n        &lt;input [(ngModel)]=\"selectedLecture.name\" placeholder=\"Name\" &#47;&gt;\r\n    &lt;&#47;div&gt;\r\n&lt;&#47;div&gt;</code></pre>\r\n\r\n    <p>Replace the old code for the details with this code for every input and finally the app looks like in the code\r\n        editor at the end of this page.</p>\r\n</div>\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\">\r\n    <h4>Visualization of the Construction:</h4>\r\n    <p><img class=\"ui image large centered\" src=\"assets/img/App-Building-5.png\"></p>\r\n    <div class=\"ui success message\">\r\n        <h4>Summary</h4>\r\n        <ul>\r\n            <li>You learned about directives.</li>\r\n            <li>You used <code>*ngIf</code> to show or hide the department.</li>\r\n            <li>You binded the lecture via <code>@Input()</code> binding and set the\r\n                property via property binding.</li>\r\n            <li>You applied the <code>*ngFor</code> directive to display a list of\r\n                lectures.</li>\r\n            <li>You prepared a details view for lectures and displayed it with a click event.</li>\r\n            <li>You imported the <code>FormsModule</code> in the <code\r\n                   >AppModule</code>.</li>\r\n            <li>You made the details view editable because you applied the <code\r\n                   >NgModel</code> directive and made it an input form.</li>\r\n        </ul>\r\n    </div>\r\n    <iframe style=\"margin-top:20px; margin-bottom:20px; width:100%; height: 500px\"\r\n        src=\"https://stackblitz.com/edit/wheretogo-step-3?embed=1&file=src/app/timetable/timetable.component.html&hideNavigation=1\"></iframe>\r\n\r\n<h3 id=\"toc_further_references\">Further references</h3>\r\n<div class=\"ui warning message\">\r\n    <p>Official documentation:</p>\r\n    <ul>\r\n    <li>Angular: <a href=\"https://angular.io/guide/forms-overview\" target=\"_blank\">Introduction to forms</a></li>\r\n    <li>Angular: <a href=\"https://angular.io/guide/template-syntax\" target=\"_blank\">Template syntax</a></li>\r\n    <li>Angular: <a href=\"https://angular.io/guide/attribute-directives\" target=\"_blank\">Attribute directives</a></li>\r\n    <li>Angular: <a href=\"https://angular.io/guide/structural-directives\" target=\"_blank\">Structural directives</a></li>\r\n    <li>Angular: <a href=\"https://angular.io/guide/component-interaction\" target=\"_blank\">Component Interaction</a></li>\r\n    </ul>\r\n    <p>Advanced concepts:</p>\r\n    <ul>\r\n        <li>MDN: <a href=\"https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms\" target=\"_blank\">HTML forms</a></li>\r\n    </ul>\r\n</div>\r\n\r\n    <div class=\"ui center aligned segment\" style=\"width: 50%; margin: 0 auto\">\r\n        <h4>Your Progress:</h4>\r\n        <mat-progress-bar style=\"margin-bottom:20px;\" mode=\"determinate\" value=\"35\"></mat-progress-bar>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Components</h2>\r\n<div class=\"language-ts\">\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\" class=\"ui info message\">\r\n  <h5>User Story</h5>\r\n  <p>As a <strong>user</strong><br />\r\n    I want to <strong>display a lecture</strong>, <br />\r\n    to <strong> see its details</strong>.</p>\r\n</div>\r\n<div *ngIf=\"theoryLarge\" class=\"ui message\">\r\n  <h4>What are Components?</h4>\r\n  <p>A component controls a specific part of the screen. In the HTML file you define the structure of a component, the CSS styles this component, together it's the view of the component. The TypeScript file contains the logic part of the component and interacts with the view.<br>\r\n  An Angular application is basically a tree structure of components. It has a root, that is the <code class=\"language-ts\">AppComponent</code> and also the entry point of the application.\r\n  However, there is no difference to the other components in concept or syntax. Only difference is that the Angular framework knows that this component is the entry point of the application. If you have the root component or an other component you can put multiple other components inside it and you can interlace components deeper into each other. This is the most important architectural concept of Angular.</p>\r\n  <p>Components consist of three parts:\r\n  A class with the <code class=\"language-ts\">@Component</code> decorator which marks it as a component, the HTML template and the optional CSS styles.\r\n  With the template of a component you tell Angular how to render that view at runtime. In addition you can define the user interaction logic in the TypeScript file. The template is written in an extended HTML language (almost all HTML elements are allowed), which includes additional syntax elements like data-binding to dynamically exchange (set and get) data between DOM and the component class.</p>\r\n  <p><img class=\"ui image big centered\" src=\"assets/img/Components-1.png\"></p>\r\n</div>\r\n\r\n<div *ngIf=\"praxis\">\r\n  <h3>Generate new Component</h3>\r\n  <p>Open your command line and generate (short form <code>g</code>) your \"where-to-go\" component. It is going to be the page you see\r\n    first when you start the app.</p>\r\n  <pre class=\"language-bash command-line\" data-user=\"user\" data-host=\"localhost\"><code>ng g component where-to-go</code></pre>\r\n</div>\r\n<div *ngIf=\"theorySmall\" class=\"ui message\">\r\n  <p>Result:</p>\r\n  <p><img class=\"ui image centered\" style=\"height: 65px\" src=\"assets/img/Create-Three-Files.png\"></p>\r\n  <p>When you add a new component the <strong>app.module.ts</strong> automatically declares your new component.\r\n  The CLI creates three (or four) files in one subfolder for you.\r\n  It is the skeleton for your component:<br></p>\r\n  <ul>\r\n    <li><code>.html</code>: Nearly empty and ready for your markup</li>\r\n    <li><code>.spec.ts</code>: Defines unit tests for the component (for now we ignore this file)</li>\r\n    <li><code>.ts</code>: Ready for your code, already contains necessary skeleton</li>\r\n    <li>Optional: <code>.css</code> or <code>.styl</code> or <code>.less</code> or <code>.scss</code>: Empty styles file explicitly and exclusively for this component (depending on stylesheet format)</li>\r\n  </ul>\r\n  <p>\r\n  The HTML file is nearly empty and ready for your code.\r\n  You can ignore the spec.ts file, it defines a unit test for the component.\r\n  The .ts file is for your TypeScript code and defines the components logic.\r\n  </p>\r\n</div>\r\n<div *ngIf=\"theoryLarge\" class=\"ui message\">\r\n  <p><img class=\"ui image medium centered\" src=\"assets/img/Skeleton-Component.png\"></p>\r\n  <p>Each component skeleton .ts file includes a <code>@Component</code> decorator which identifies the class as component and specifies its metadata. The CLI generates three configuration options:</p>\r\n  <ul>\r\n    <li><code>selector</code>: CSS element selector of the component </li>\r\n    <li><code>templateUrl</code> or <code>template</code>: Location of the component's HTML file or inline template</li>\r\n    <li><code>stylesUrl</code> or <code>styles</code>: Location of the private CSS stylesheet or inline styles\r\n    </li>\r\n  </ul>\r\n  <p>The <code>selector</code>, here \"app-where-to-go\", also defines the name of a custom HTML element, which tells Angular to insert an instance of this component between the opening and closing tag. \r\n  Most of the time this element is inserted into the template of the parent component.</p>\r\n  <p><code>ngOnInit</code> is one of the provided component lifecycle hook methods. \r\n  Angular calls this function once after creating the component with the <code>constructor</code>. Therefore it is the right function to place additional initialisation logic.</p>\r\n  <p>The component's class always needs to be exported, to reuse it in other files, e.g. in the <code>AppModule</code>.</p>\r\n</div>\r\n<div *ngIf=\"theoryLarge\" class=\"ui message\">\r\n  <h4>Lifecycle of a Component</h4>\r\n  <p>Every component has a lifecycle that is controlled by Angular. \r\n  Angular creates a component instance, renders its view, monitors for changes in its data-bound properties and, in the end, destroys it.\r\n  The Angular framework provides lifecycle hooks for each of these key events and enables the programer to act upon these occurrence. All methods are not just plain functions, instead Angular has its own interface for each.</p>\r\n  <p><img class=\"ui image large centered\" src=\"assets/img/Lifecycle.png\"></p>\r\n  <ul>\r\n    <li><code>constructor()</code>:<br>\r\n    Normal JavaScript class constructor, but important when considering the lifecycle of a component since it is responsible for the instantiation of the component. \r\n    Don't put much logic into the constructor because when the constructor is called, neither input- and output-data-bindings  nor the child components are available.</li>\r\n\r\n    <li><code>ngOnChanges()</code>:<br>\r\n    Called once before <code>ngOnInit()</code> and afterwards every time an\r\n    input-binding changes.</li>\r\n\r\n    <li><code>ngOnInit()</code>:<br>\r\n    Called once after the first <code>ngOnChanges()</code>, after all input-data-bindings are initialised.\r\n    It offers the possibility to run additional initialisation logic you have, for example to request the data from the backend.</li>\r\n\r\n    <li><code>ngDoCheck()</code>:<br>\r\n    Called once after first <code>ngOnInit()</code> and afterwards every change detection.\r\n    To find and react on changes, which Angular does not detect on its own.</li>\r\n\r\n    <li><code>ngAfterContentInit()</code>:<br>\r\n    Called once after the first <code>ngDoCheck()</code>.\r\n    With it you can react to the initialisation of child components.</li>\r\n\r\n    <li><code>ngAfterContentChecked()</code>:<br>\r\n    Called once after <code>ngAfterContentInit()</code> and afterwards every <code>ngDoCheck</code>.\r\n    Invoked after the change detector checked all properties.</li>\r\n\r\n    <li><code>ngAfterViewInit()</code>:<br>\r\n    Called once after the first <code>ngAfterContentChecked()</code>.\r\n    The view of the child-components is accessable</li>\r\n\r\n    <li><code>ngAfterViewChecked()</code>:<br>\r\n    Called once after <code>ngAfterViewInit</code> and afterwards every <code>ngAfterConctentChecked</code>.\r\n    Invoked after the change detector checked the component's view if the view needs to be redrawn.\r\n\r\n    <li><code>ngOnDestroy()</code>:<br>\r\n    Called once right before Angular destroys the componenent.\r\n    Cleanup tasks, which might be necessary if a component subscribed to data streams and to detach event handlers (Avoid memory leaks).</li>\r\n  </ul>\r\n</div>\r\n<div *ngIf=\"praxis\">\r\n  <h3>(Re)use a Component</h3>\r\n  <p>We can now use the <code>selector</code></p>\r\n  <pre class=\"language-html\"><code>&lt;app-where-to-go&gt;&lt;&#47;app-where-to-go&gt;</code></pre>\r\n\r\n  <p>and insert it into any component template (remember the component tree structure and avoid circular interdependencies!), in our case into the <strong>app.component.html</strong>.\r\n  Now the app shows the component at this location, just like it would do with every other HTML tag.</p>\r\n</div>\r\n\r\n<div *ngIf=\"theoryLarge\" class=\"ui message\">\r\n  <h4>Communication between Logic and View</h4>\r\n  <p>As we already learned every component consists of at least two parts: logic (&lt;<em>component</em>&gt;.ts) and view (&lt;<em>component</em>&gt;.html).\r\n  To ensure the information flow between these two we can use different types of bindings:</p>\r\n  <ol>\r\n    <li><strong>Property Binding</strong>:<br />\r\n    One-way data flow from source to view<br>\r\n    Set property of a target element based on an expression (most common is a component property).\r\n    You assign them with square brackets.<br />\r\n    <code class=\"language-html\">&lt;element [property]=\"expression\"&gt;...&lt;/element&gt;</code>\r\n    </li>\r\n    <li><strong>Interpolation</strong>:<br />\r\n    One-way data flow from source to view<br>\r\n    Embeds an expression (to display component properties or calculated values) as string into the text between HTML tags.<br />\r\n    <code class=\"language-html\">&lt;div&gt;<span>{{</span> expression <span>}}</span>&lt;/div&gt;</code>\r\n    </li>\r\n    <li><strong>Event Binding</strong>:<br />\r\n    One-way data flow from view to source<br>\r\n    This is kind of the opposite of a property binding.\r\n    It is possible to react to the occurrence of DOM events, e.g. in order to change the application model by calling a function.<br />\r\n    <code class=\"language-html\">&lt;element (event)=\"statement\"&gt;...&lt;/element&gt;</code>\r\n\r\n    </li>\r\n    <li><strong>Two-Way Binding</strong>:<br />\r\n    Use this if you want to share data between a component class and its template. Specifies an element property and listens for all element change events.<br />\r\n    <code class=\"language-html\">&lt;element [(elementProperty)]=\"componentProperty\"&gt;...&lt;/element&gt;</code><br />\r\n    It is a combination of property and an event binding. You could write the expanded form too:<br />\r\n      <code class=\"language-html\"\r\n       >&lt;input [elementProperty]=\"componentProperty\" (elementPropertyChange)=\"componentProperty$event\"&gt;...&lt;/input&gt;</code><br>\r\n    For <code>input</code> elements in Forms there is even the shortcut to synchronize the user's input with a data property:\r\n    <code class=\"language-html\">&lt;input [(ngModel)]=\"componentProperty\"&gt;...&lt;/input&gt;</code>\r\n    </li>\r\n    <li><strong>Local Template reference variables</strong>:<br />\r\n    You can create a local variable (within a template) to reference a DOM element.\r\n    With this you have now a named pointer to the element and can access all the nodes attributes, e.g. <code>element.textContent</code>.<br />\r\n      <code class=\"language-html\">&lt;element #reference_name &gt;...&lt;/element&gt;\r\n        </code> or<br/>\r\n      <code class=\"language-html\">&lt;element ref-reference_name&gt;...&lt;/element&gt;\r\n          </code>\r\n    </li>\r\n  </ol>\r\n  <br /><a href=\"https://stackblitz.com/edit/practice-part?embed=1&file=src/app/app.component.ts&hideNavigation=1\"\r\n    target=\"_blank\"><i class=\"edit outline link icon\"></i>Click here to try it out!</a>\r\n</div>\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\">\r\n  <h3>Create and show Property</h3>\r\n  <p>Now we will use data-binding to show a temporary text message on the \"Home\" page until we are ready to show the information about the next lecture we have to go to.\r\n  Put this property into <strong>where-to-go.component.ts</strong>:</p>\r\n\r\n  <pre><code>tempText: string = \"Here will appear your information soon!\";</code></pre>\r\n\r\n  <p>And replace the auto generated code in the <strong>where-to-go.component.html</strong> with this code:</p>\r\n  <pre><code>&lt;p&gt;<span>{{</span> tempText <span>}}&lt;&#47;p&gt;</span></code></pre>\r\n\r\n  <p>This kind of data-binding is called interpolation and you just displayed the value of the property \"tempText\" as string in your HTML code.</p>\r\n  <p class=\"ui info message\"><strong>Interpolation</strong>: Shows logic data in the template.<br>\r\n  Syntax: <code><span>{{</span> &lt;<em>property</em>&gt; <span>}}</span></code>\r\n  </p>\r\n\r\n  <h3>Visualization of the Construction:</h3>\r\n  <p><img class=\"ui image large centered\" src=\"assets/img/App-Building-2.png\"></p>\r\n\r\n  <h3>Create Data Classes</h3>\r\n  <p>For our project we are going to need a class to define a \"lecture\". \r\n  With this code you can generate a TypeScript\r\n  class in a new folder named \"shared\":</p>\r\n    <pre class=\"command-line language-bash\" data-host=\"localhost\" data-user=\"user\"><code>ng g class shared/lecture</code></pre>\r\n\r\n  <p>We put it in a separated \"shared\" folder because all component work on the same reusable logical data structures.<br>\r\n  In this new class we define the constructor for lecture.</p>\r\n\r\n<pre><code>constructor(\r\n  public id: number,\r\n  public name: string,\r\n  public room: string,\r\n  public day: string,\r\n  public time: Time,\r\n  public building: string,\r\n  public floor: string,\r\n  public department?: string) &#123;\r\n&#125;</code></pre>\r\n\r\n  <p>Angular has its own type for time. Dependent on your used editor and the installed extensions, it may be the convenience case that you get asked right away if you want to import it.</p>\r\n  <p><img class=\"ui image large centered\" src=\"assets/img/Import-Time.png\"></p>\r\n  <p>If not, you have to do it on your own, like this:</p>\r\n\r\n  <pre><code>import &#123; Time &#125; from \"@angular/common\";</code></pre>\r\n\r\n  <h3>Generate Item Component</h3>\r\n  <p>We want to show a complete lecture now, so we generate the component lecture-item.</p>\r\n  <pre class=\"command-line language-bash\" data-user=\"user\" data-host=\"localhost\"><code>ng g component lecture-item</code></pre>\r\n\r\n  <p>We temporally create a static lecture inside the class \"LectureItemComponent\" in <strong>lecture-item.component.ts</strong> first and define all the properties the constructor requires.</p>\r\n\r\n    <pre><code>lecture: Lecture = &#123;\r\n  id: 1,\r\n  name: 'Webtechnologien',\r\n  room: '075',\r\n  day: 'Monday',\r\n  time: &#123;hours: 10, minutes: 15&#125;,\r\n  building: 'WE5',\r\n  floor: '02',\r\n  department: 'Lehrstuhl für Medieninformatik'\r\n&#125;</code></pre>\r\n\r\n  <p>Of course we also need to import the class <code>Lecture</code>.</p>\r\n  <pre><code>import &#123; Lecture &#125; from \"../shared/lecture\";</code></pre>\r\n\r\n  <p>And in the <strong>lecture-item.component.html</strong> we can define how we want to display that lecture item and which properties to include.\r\n  We use again the interpolation to display the class properties in its HTML template.</p>\r\n\r\n  <pre><code>&lt;div style=\"padding: 50px;\"&gt;\r\n  &lt;div class=\"ui middle aligned divided list\"&gt;\r\n    &lt;div class=\"item\"&gt;\r\n      &lt;div class=\"content\"&gt;\r\n        &lt;h2 style=\"padding-bottom: 20px\" class=\"header ui\"&gt;\r\n            Lecture Details:&lt;&#47;h2&gt;\r\n        &lt;div class=\"header\"&gt;What? <span>{{</span>lecture.name <span>}}</span>&lt;&#47;div&gt;\r\n        &lt;div class=\"description\"&gt;Where? <span>{{</span>lecture.building<span>}}</span>&#47;\r\n            <span>{{</span>lecture.floor<span>}}</span>.<span>{{</span>lecture.room<span>}}</span>&lt;&#47;div&gt;\r\n        &lt;div class=\"description\"&gt;When? <span>{{</span>lecture.day<span>}}</span>, \r\n            <span>{{</span>lecture.time.hours<span>}}</span>:<span>{{</span>lecture.time.minutes<span>}}</span>&lt;&#47;div&gt;\r\n        &lt;div *ngIf=\"lecture.department\" class=\"description\"&gt;\r\n            Department: <span>{{</span>lecture.department<span>}}</span>&lt;&#47;div&gt;\r\n      &lt;&#47;div&gt;\r\n    &lt;&#47;div&gt;\r\n  &lt;&#47;div&gt;\r\n&lt;&#47;div&gt;</code></pre>\r\n\r\n  <p>To show it beneath the \"title\" and the \"where-to-go\" component we append</p>\r\n\r\n    <pre class=\"language-html\"><code>&lt;app-lecture-item&gt;&lt;/app-lecture-item&gt;</code></pre>\r\n  <p>in the <strong>app.component.html</strong>.</p>\r\n</div>\r\n\r\n<div *ngIf=\"theoryLarge\" style=\"margin-top: 20px;\" class=\"ui message\">\r\n  <h4>Pipes</h4>\r\n  <p>In almost every application, instead of showing your users the raw and oftentimes complex and opaque data, you transform the fetched data (to achieve a better user experience with clearer focus) before you show it to your users.<br>\r\n  To help you out with this task Angular comes along with pipes: Display-value transformations to be declared right in your HTML.\r\n  With pipes you can format strings, numbers and other data into your desired output format.<br>\r\n  Additionally there are built-in pipes and it is possible to create your own.</p>\r\n\r\n  <p>\r\n  In this case we are fine with the build-in pipes.\r\n  For example you can format the date of today.\r\n  <br>When you instantiate a <code>Date</code> object like <code>today: Date = new Date();</code>.\r\n  And you display your date just as-is in your HTML code with\r\n  <code><span>{{</span>today<span>}}</span></code> you will see this date-format: {{today}}\r\n  </p>\r\n  <p>Probably there are more readable versions to get the date at a glimpse.\r\n  So you can use pipes to format the date:</p>\r\n  <p><code><span>{{</span>today | date<span>}}</span></code> - Result:\r\n    {{today | date}}</p>\r\n  <p>It's even possible to parameterize a pipe:<br><code><span>{{</span>today | date: 'medium'<span>}}</span></code> - Result:\r\n    {{today | date: 'medium'}}</p>\r\n  <p><code><span>{{</span>today | date: 'fullDate'<span>}}</span></code> - Result:\r\n    {{today | date: 'fullDate'}}</p><p>\r\n      Or to chain pipes into useful combinations:<br>\r\n      <code><span>{{</span>today | date | uppercase<span>}}</span></code> - Result:\r\n    {{today | date | uppercase}}\r\n    </p>\r\n</div>\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\">\r\n  <h3>Try a Pipe</h3>\r\n  <p>We want to try the \"UppercasePipe\", which formats our string to capital letters:</p>\r\n\r\n\r\n  <pre class=\"language-html\"><code>&lt;div class=\"header\"&gt;What? <span>{{</span> lecture.name | uppercase <span>}}</span>&lt;&#47;div&gt;</code></pre>\r\n\r\n  <p class=\"ui info message\"><strong>Pipe operator</strong>: Transforms interpolated data in the template into more display-friendly data.<br>\r\n    Syntax: <code><span>{{</span> &lt;<em>property</em>&gt; | &lt;<em>pipe</em>&gt; <span>}}</span></code>\r\n    </p>\r\n\r\n</div>\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\">\r\n  <h3>Visualization of the Construction:</h3>\r\n  <p><img class=\"ui image large centered\" src=\"assets/img/App-Building-3.png\"></p>\r\n  <div class=\"ui success message\">\r\n    <h4>Summary</h4>\r\n    <ul>\r\n      <li>With the Angular CLI you generated other components and a class.</li>\r\n      <li>You displayed the new components by adding them to the application shell <code\r\n         >AppComponent</code>.</li>\r\n      <li>You learned about components, their lifecycle, bindings and pipes.</li>\r\n      <li>You used interpolation to show text in the template.</li>\r\n      <li>You used your knowledge about pipes and applied the <code\r\n         >UppercasePipe</code>.</li>\r\n    </ul>\r\n  </div>\r\n  <iframe style=\"margin-top:20px; margin-bottom:20px; width:100%; height: 500px\"\r\n    src=\"https://stackblitz.com/edit/wheretogo-step-2?embed=1&file=src/app/app.component.ts&hideNavigation=1\"></iframe>\r\n\r\n<h3 id=\"toc_further_references\">Further references</h3>\r\n<div class=\"ui warning message\">\r\n  <p>Official documentation:</p>\r\n  <ul>\r\n    <li>Angular: <a href=\"https://angular.io/guide/architecture-components\" target=\"_blank\">Introduction to components</a></li>\r\n    <li>Angular: <a href=\"https://angular.io/api/core/Component\" target=\"_blank\">Component Decorator</a></li>\r\n    <li>Angular: <a href=\"https://angular.io/guide/lifecycle-hooks\" target=\"_blank\">Lifecycle Hooks</a></li>\r\n    <li>Angular: <a href=\"https://angular.io/guide/template-syntax\" target=\"_blank\">Template Syntex</a></li>\r\n    <li>Angular: <a href=\"https://angular.io/guide/pipes\" target=\"_blank\">Pipes</a></li>\r\n    <li>Angular: <a href=\"https://angular.io/guide/displaying-data\" target=\"_blank\">Displaying data</a></li>\r\n  </ul>\r\n  <p>Advanced concepts:</p>\r\n    <ul>\r\n      <li>Wikipedia:<a href=\"https://developer.mozilla.org/de/docs/Web/HTML/Element/template\" target=\"_blank\">Template processor</a></li>\r\n      <li>MDN: <a href=\"https://developer.mozilla.org/en-US/docs/Web/Web_Components\" target=\"_blank\">Web Components</a></li>\r\n      <li>MDN: <a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template\" target=\"_blank\">&lt;template&gt;</a> and <a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot\" target=\"_blank\">&lt;slot&gt;</a> tags</li>\r\n      <li>MDN: <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules\" target=\"_blank\">JavaScript modules</a></li>\r\n      <li>MDN: <a href=\"https://developer.mozilla.org/de/docs/Web/API/Node#Properties\" target=\"_blank\">Node Properties</a></li>\r\n    </ul>\r\n</div>\r\n\r\n  <div class=\"ui center aligned segment\" style=\"width: 50%; margin: 0 auto\">\r\n    <h4>Your Progress:</h4>\r\n    <mat-progress-bar style=\"margin-bottom:20px;\" mode=\"determinate\" value=\"20\"></mat-progress-bar>\r\n  </div>\r\n</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/environment/environment.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/environment/environment.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 id=\"headline\">Set up your Environment:</h2>\r\n<div class=\"ui compact menu\" id=\"header_content\">\r\n    <div class=\"ui simple dropdown item\">\r\n    Content\r\n    <i class=\"dropdown icon\"></i>\r\n    <div class=\"menu\">\r\n      <div class=\"item\"><a href=\"#toc_editor\">Editor</a></div>\r\n      <div class=\"item\"><a href=\"#toc_git\">Git</a></div>\r\n      <div class=\"item\"><a href=\"#toc_nodejs\">Node.js</a></div>\r\n      <div class=\"item\"><a href=\"#toc_angular_cli\">Angular CLI</a></div>\r\n      <div class=\"item\"><a href=\"#toc_further_references\">Further references</a></div>\r\n    </div>\r\n    </div>\r\n</div>\r\n<div id=\"start_content\">\r\n  <h3 id=\"toc_editor\">Editor</h3>\r\n  <p>First of all we need a code editor to kick off our bootcamp. You can choose among a large list of available editors, some popular ones are:</p>\r\n    <ul>\r\n      <li>Microsoft: <a href=\"https://code.visualstudio.com/\" target=\"_blank\">Visual Studio Code</a></li>\r\n      <li>GitHub: <a href=\"https://atom.io/\" target=\"_blank\">Atom</a></li>\r\n      <li>Adobe: <a href=\"http://brackets.io/\" target=\"_blank\">Brackets</a></li>\r\n      <li><a href=\"https://www.sublimetext.com/\" target=\"_blank\">Sublime Text</a></li>\r\n    </ul>\r\n    <p>All of them are cross-platform, feature a packet or extension manager, different themes, customization and enable a direct Git integration.</p>\r\n\r\n  <h3 id=\"toc_git\">Git</h3>\r\n  <p>\r\n    To track changes, see our progress and be able to restore to the last working version (if something is broken), we use <a href=\"https://git-scm.com/\" target=\"_blank\">Git</a> as our <a href=\"https://www.atlassian.com/git/tutorials/what-is-version-control\">Version Control System</a> to manage our tutorial project.<br>\r\n    Apart from the standalone git client (CLI and a crud GUI), almost all editors have nowadays an integrated git client. Furthermore, if you prefer it, its possible to use dedicated graphical applications with advanced features and a streamlined workflow:</p>\r\n    <ul>\r\n        <li><a href=\"https://git-fork.com/\" target=\"_blank\">Fork</a></li>\r\n        <li><a href=\"https://www.sourcetreeapp.com/\" target=\"_blank\">Sourcetree</a></li>\r\n        <li><a href=\"https://gitfiend.com/\" target=\"_blank\">GitFiend</a></li>\r\n        <li><a href=\"https://gitblade.com/\" target=\"_blank\">GitBlade</a></li>\r\n        <li><a href=\"https://www.sublimemerge.com/\" target=\"_blank\">Sublime Merge</a></li>\r\n    </ul>\r\n\r\n    <p class=\"ui info message\" style=\"margin-bottom:30px;\">\r\n        Please note: Git will not save the <code class=\"language-bash\">node_modules</code> folder in the Git repository. So if you clone your project\r\n        for the first time you need to install all dependencies via <code class=\"language-bash\">npm install</code> (this time as an administrator).\r\n        Also make sure, that on this different PC Node.js and the Angular CLI are installed, too (see above for instructions).\r\n    </p>\r\n\r\n  <h3 id=\"toc_nodejs\">Node.js</h3>\r\n  <p>\r\n    <a href=\"https://nodejs.org/\" target=\"_blank\">Node.js</a> is a open-source, cross-platform JavaScript runtime environment, which executes JavaScript outside the browser. Therefore it can be used for server-side scripting.<br>\r\n    It is build on top of Google's <a href=\"https://v8.dev\" target=\"_blank\">V8</a> JavaScript engine and uses a modular approach together with the bundled packet manager <a href=\"https://www.npmjs.com/\" target=\"_blank\">npm</a>, which allows developers to install, publish and share modules of code (especially on the npm Registry, which is a public collection of open-source packages).\r\n  </p>\r\n  \r\n    <p>After installing the Long Term Support (LTS) Node.js you can check the used versions in the command line:</p>\r\n    <pre class=\"command-line language-bash\" data-user=\"user\" data-host=\"localhost\"><code>node -v</code></pre>\r\n    <pre class=\"command-line language-bash\" data-user=\"user\" data-host=\"localhost\"><code>npm -v</code></pre>\r\n  \r\n    <p>Now you can search for packages on the npm website and install them locally, in the currenty directory, by running: </p>\r\n    <pre class=\"command-line language-bash\" data-user=\"user\" data-host=\"localhost\"><code>npm install &lt;package_name&gt;</code></pre>\r\n    <p>This creates a <code class=\"language-bash\">node_modules</code> directory and downloads the package into that directory.</p>\r\n    <p>Or, to use the module as a set of tools on your computer, globally by running:</p>\r\n    <pre class=\"command-line language-bash\" data-user=\"user\" data-host=\"localhost\"><code>npm install -g &lt;package_name&gt;</code></pre>\r\n\r\n  <h3 id=\"toc_angular_cli\">Angular CLI</h3>\r\n  <p>\r\n    The <a href=\"https://angular.io/cli\" target=\"_blank\">Angular CLI</a> tool is a command line tool based on Node.js, which helps you from the very beginning:\r\n    It creates projects, generates application and library code (skeletons for components, services, pipes and directives) and helps you with development tasks such as testing, bundling and deployment.\r\n  </p>\r\n  <p>\r\n  For Windows users I recommend <a href=\"https://github.com/felixrieseberg/windows-build-tools#readme\" target=\"_blank\"> Windows-Build-Tools</a> for a frictionless setup.<br> \r\n  Attention: You need to execute this installation as an administrator.</p>\r\n  <pre class=\"command-line language-bash\" data-user=\"user\" data-host=\"localhost\"><code>npm install --global windows-build-tools</code></pre>\r\n\r\n  <p>Now you can install the Angular CLI by using this command:</p>\r\n  <pre class=\"command-line language-bash\" data-user=\"user\" data-host=\"localhost\"><code>npm install -g @angular/cli</code></pre>\r\n\r\n  <p class=\"ui red message\">In some cases it might be required to install the Angular CLI as the user, that will use it. So if it does not work, try to install it with your local user.</p>\r\n\r\n  <p>For those who rather like to work with a graphical user interface there even exists the app <a href=\"https://angularconsole.com\" target=\"_blank\">Angular Console</a>. Please be aware that this desktop application is neither developed nor maintained by the Angular team!</p>\r\n\r\n  <h3 id=\"toc_further_references\">Further references</h3>\r\n  <p class=\"ui info message\">To help you with all the CLI commands:<br>\r\n    <a href=\"https://kapeli.com/cheat_sheets/npm.docset/Contents/Resources/Documents/index\" target=\"_blank\">\r\n      <strong>npm Cheat Sheet</strong>\r\n    </a><br>\r\n    <a href=\"https://malcoded.com/static/68c150aaaee9e8056f44fb81a08799ad/aaced/angular-cli-cheat-sheet.webp\" download=\"angular_cli_cheat_sheet\" target=\"_blank\"><strong>Angular CLI Cheat Sheet</strong></a>\r\n  </p>\r\n  <div class=\"ui warning message\">\r\n    <p>Official documentation:</p>\r\n    <ul>\r\n      <li><a href=\"https://nodejs.org/en/docs/guides/\" target=\"_blank\">Node.js Guides</a></li>\r\n      <li><a href=\"https://docs.npmjs.com/getting-started/configuring-your-local-environment\" target=\"_blank\">npm: Configuring your local environment</a></li>\r\n      <li><a href=\"https://docs.npmjs.com/packages-and-modules/getting-packages-from-the-registry\" target=\"_blank\">npm: Getting packages from the registry</a></li>\r\n      <li><a href=\"https://angular.io/guide/setup-local\" target=\"_blank\">Angular: Setting up the Local Environment and Workspace</a></li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/finish-app/finish-app.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/finish-app/finish-app.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Finish the Application</h2>\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\" class=\"ui info message\">\r\n  <h5>User Story</h5>\r\n  <p>As a <b>user</b><br />\r\n    I want to <b>display the very next lecture on the front page</b>, <br />\r\n    to <b> see immediately where to go next when I open the app</b>.</p>\r\n</div>\r\n<div *ngIf=\"theoryLarge\" style=\"margin-top: 20px;\">\r\n  <p>This chapter doesn't contain any more theory learning units.</p>\r\n</div>\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\">\r\n  <h4>Start page</h4>\r\n  <p>There is still one page empty: the start page. On this page we want to see our next lecture and only the next one\r\n    of the day. So first we need to prepare the <b>where-to-go.component.ts</b>. We are going to need the\r\n    <code>LectureService</code>\r\n    injected in the <code>constructor</code> again.</p>\r\n\r\n    <pre class=\"language-ts\"><code>constructor(private lectureService: LectureService) &#123; &#125;</code></pre>\r\n\r\n  <p>Of course we also need to import the class <code>Lecture</code>.</p>\r\n\r\n  <pre class=\"language-ts\"><code>import &#123; LectureService &#125; from \"../shared/lecture.service\";</code></pre>\r\n\r\n  <p>Then we need the <code>Date</code> of today. This <code\r\n     >Date</code> will tell us all we need to know: the day of\r\n    the week and the time, because we want to compare the day and time of today with the day and time of the lectures\r\n    in the timetable to find the very next lecture to display. We need an array of <code\r\n     >Lecture[]</code>, a\r\n    <code>Lecture</code> variable to save the next lecture with, a <code\r\n     >Boolean</code> that will save if there still\r\n    is a lecture today and a <code>Lecture</code> object with initialised start values.\r\n    We will need this to compare all objects in the timetable with this <code>Lecture</code> object and we\r\n    overwrite it every time, a lecture is closer to the time right now than the saved lecture before.</p>\r\n\r\n    <pre class=\"language-ts\"><code>lectures: Lecture[];\r\nnextLecture: Lecture;\r\nlocalTime: Date = new Date();\r\nisThereANextLecture: boolean = false;\r\ntempLecture: Lecture = &#123;\r\n    id: 99,\r\n    name: \"Dummy\",\r\n    room: \"0\",\r\n    day: this.getWeekday(),\r\n    time: &#123;hours: 20, minutes: 15&#125;,\r\n    building: \"WE5\",\r\n    floor: \"0\"\r\n&#125;;</code></pre>\r\n\r\n  <p>Of course we also need to import the class <code>Lecture</code>.</p>\r\n  <pre class=\"language-ts\"><code>import &#123; Lecture &#125; from \"../shared/lecture\";</code></pre>\r\n\r\n  <p>We will also have the <code>getLectures()</code> method that we call in <code\r\n     >ngOnInit()</code>.</p>\r\n\r\n     <pre class=\"language-ts\"><code>ngOnInit() &#123;\r\n    this.getLectures();\r\n&#125;\r\n\r\ngetLectures(): void &#123;\r\n    this.lectureService.getLectures()\r\n      .subscribe(lectures => &#123;this.lectures = lectures;\r\n        this.getNextLecture()&#125;\r\n      );\r\n&#125;</code></pre>\r\n\r\n  <p>With the method <code>getDay()</code> we will get the weekday of today as a number.\r\n    0 is sunday, 1 is monday and\r\n    so on. But we need them as strings. We pick the one string from an array of strings whose index is the same\r\n    number as todays number.</p>\r\n\r\n    <pre class=\"language-ts\"><code>getWeekday(): string &#123;\r\n    var days = [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"];\r\n    return days[this.localTime.getDay()];\r\n&#125;</code></pre>\r\n\r\n  <p>Now it's time for the function, that will return the correct next lecture for us.</p>\r\n\r\n  <pre class=\"language-ts\"><code>getNextLecture(): void &#123;\r\n    let tempArray: Array&lt;Lecture&gt; = [];\r\n    for (let lecture of this.lectures) &#123;\r\n      if(lecture.day === this.getWeekday()) &#123;\r\n        if(lecture.time.hours &gt;= this.localTime.getHours()) &#123;\r\n          tempArray.push(lecture);\r\n        &#125;\r\n      &#125;\r\n    &#125;\r\n\r\n    for(let t of tempArray) &#123;\r\n      if(t.time.hours &lt; this.tempLecture.time.hours) &#123;\r\n        this.tempLecture = t;\r\n        this.isThereANextLecture = true;\r\n      &#125;\r\n    &#125;\r\n\r\n    if(this.isThereANextLecture) &#123;\r\n      this.nextLecture = this.tempLecture;\r\n    &#125;\r\n&#125;</code></pre>\r\n\r\n  <p>There is an empty array, we go through all lectures in the lecture array and if the day is today, we check if the\r\n    hour is greater than or equal with the hour right now. If so we put this lecture in the prepared array. In the\r\n    second step the function compares all lectures in the <code>tempArray</code> with\r\n    each other and saves the smallest\r\n    one, which means the one that is closest to the time right now and sets the boolean <code\r\n     >true</code>. We could do\r\n    the same thing with the minutes, but you can't be at two lectures at the same time, so this is fine now.</p>\r\n  <p>The last step is to display it via the HTML code. If we have a <code\r\n     >nextLecture</code>, we want to see the\r\n    <code>nextLecture</code>s' building, floor, room, day,time and name. If there is no\r\n    <code>nextLecture</code>, we\r\n    want to display the text \"No events today!\"</p>\r\n\r\n    <pre class=\"language-html\"><code>&lt;div style=\"margin: 30px;\"&gt;\r\n    &lt;div *ngIf=\"nextLecture\" class=\"ui info message\"\r\n      style=\"width: 50%; margin-left: 25%\"&gt;\r\n      &lt;div class=\"header\"&gt;\r\n          You need to be in\r\n      &lt;&#47;div&gt;\r\n      &lt;div class=\"header\"&gt;\r\n          <span>{{</span>nextLecture.building<span>}}</span>&#47;<span>{{</span>nextLecture.floor<span>}}</span>\r\n        .<span>{{</span>nextLecture.room<span>}}</span>\r\n      &lt;&#47;div&gt;\r\n      &lt;div style=\"text-align: center;\r\n          list-style-type: none;\" class=\"list\"&gt;\r\n        &lt;p&gt;At <span>{{</span>nextLecture.day<span>}}</span>, <span>{{</span>nextLecture.time.hours<span>}}</span>\r\n        :<span>{{</span>nextLecture.time.minutes<span>}}</span>&lt;&#47;p&gt;\r\n        &lt;p&gt;For <span>{{</span>nextLecture.name<span>}}</span>&lt;&#47;p&gt;\r\n      &lt;&#47;div&gt;\r\n    &lt;&#47;div&gt;\r\n    &lt;div *ngIf=\"!nextLecture\" class=\"ui info message\"\r\n      style=\"width: 50%; margin-left: 25%\"&gt;\r\n        No events today!\r\n    &lt;&#47;div&gt;\r\n&lt;&#47;div&gt;</code></pre>\r\n\r\n  <h4>Visualization of the Construction:</h4>\r\n  (No changes here)\r\n  <p><img class=\"ui image big centered\" src=\"assets/img/App-Building-9.png\"></p>\r\n  <div class=\"ui success message\">\r\n    <h4>Summary</h4>\r\n    <ul>\r\n      <li>Nothing in this chapter should be new for you.</li>\r\n      <li>You displayed the next lecture of the day on the start page of the application.</li>\r\n      <li>You have learned alot, be proud of yourself!</li>\r\n    </ul>\r\n  </div>\r\n  <h4>Congratulations! This is your result:</h4>\r\n  <iframe style=\"margin-top:20px; margin-bottom:20px; width:100%; height: 500px\"\r\n    src=\"https://stackblitz.com/edit/wheretogo-step-8?embed=1&file=src/app/where-to-go/where-to-go.component.ts&hideNavigation=1\"></iframe>\r\n\r\n<h3 id=\"toc_further_references\">Further references</h3>\r\n<div class=\"ui warning message\">\r\n    <p>Official documentation:</p>\r\n    <ul>\r\n      <li>Angular: <a href=\"https://angular.io/guide/cheatsheet\" target=\"_blank\">Cheat Sheet</a></li>\r\n      <li>Angular: <a href=\"https://angular.io/guide/styleguide\" target=\"_blank\">Style Guide</a></li>\r\n    </ul>\r\n</div>\r\n\r\n  <div class=\"ui center aligned segment\" style=\"width: 50%; margin: 0 auto\">\r\n    <h4>Your Progress:</h4>\r\n    <mat-progress-bar style=\"margin-bottom:20px;\" mode=\"determinate\" value=\"100\"></mat-progress-bar>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/first-app/first-app.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/first-app/first-app.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 id=\"headline\">My first Angular-App:</h2>\r\n<div class=\"ui compact menu\" id=\"header_content\">\r\n    <div class=\"ui simple dropdown item\">\r\n    Content\r\n    <i class=\"dropdown icon\"></i>\r\n    <div class=\"menu\">\r\n      <div class=\"item\"><a href=\"#toc_lets_start\">Let's start</a></div>\r\n      <div class=\"item\"><a href=\"#toc_further_references\">Further references</a></div>\r\n    </div>\r\n    </div>\r\n</div>\r\n<div id=\"start_content\">\r\n  <h3 id=\"toc_lets_start\">Let's start</h3>\r\n  <p>To get a simple welcome app, first open your command line and type:\r\n  </p>\r\n <pre class=\"command-line language-bash\" data-user=\"user\" data-host=\"localhost\"><code>ng new my-first-app</code></pre>\r\n\r\n  <p>You will get questions about the features include in your app:<br></p>\r\n    <ul>\r\n    <li><code class=\"language-bash\">? Would you like to add Angular routing?</code>\". Answer it with <code class=\"language-bash\">Yes</code>! Therefore you get a router to navigate between states and view within your app.</li>\r\n    <li><code class=\"language-bash\">? Which stylesheet format would you like to use?</code> \r\n     In this tutorial we use plain <code class=\"language-bash\">CSS</code>. The other options <a href=\"https://sass-lang.com/documentation/syntax\" target=\"_blank\">SCSS</a>, <a href=\"https://sass-lang.com\" target=\"_blank\">Sass</a>, <a href=\"http://lesscss.org/\" target=\"_blank\">Less</a> and <a href=\"http://stylus-lang.com/\" target=\"_blank\">Stylus</a> are other stylesheet languages, with further features like functions and variables, which are compiled to CSS through their CSS preprocessor.</li></ul>\r\n  <img style=\"margin-bottom:15px;\" class=\"ui centered large image\" src=\"assets/img/New-Project.png\">\r\n\r\n  <p> A project which includes all necessary files and folders will be created.</p>\r\n  <p>These are:</p>\r\n  <ul>\r\n    <li>The new workspace with the root folder <code class=\"language-bash\">my-first-app</code>.</li>\r\n    <li>An initial skeleton app project, also called \"my-first-app\" which you will find it in the subfolder <code class=\"language-bash\">src</code>.\r\n    </li>\r\n    <li> An end-to-end test project in the subfolder <code class=\"language-bash\">e2e</code>.\r\n    </li>\r\n    <li>The, by npm installed, packages in the subfolder <code class=\"language-bash\">node_modules</code>.</li>\r\n    <li>Related configuration files.</li>\r\n  </ul>\r\n  <p>After installation you get an answer from your system, like this: <code class=\"language-bash\">added 1098 packages from 1166 contributors and audited 39144 packages in 35.242s\r\n      <span class=\"bold\">found 3 vulnerabilities (2 low, 1 high)</span></code>. npm scanned your whole project with all your packages for vulnerabilities and shows you the summarized results.\r\n      If there are vulnerabilities just follow the instructions on your command line (<code class=\"language-bash\">npm audit fix</code> or similar) to automatically install any compatible updates to vulnerable dependencies. For production-ready code you should fix at least all high vulnerabilities, but as we only learn for ourselves you can ignore all eventually remaining vulnerabilities.</p>\r\n\r\n  <p>Then you can navigate to that project-folder:</p> \r\n  <pre class=\"command-line language-bash\" data-user=\"user\" data-host=\"localhost\"><code>cd my-first-app</code></pre>\r\n  <pre><code class=\"command-line language-bash\" data-user=\"user\" data-host=\"localhost\">ng serve --open</code></pre>\r\n  <p>With <code class=\"language-bash\">serve</code> you can already run the application and <code class=\"language-bash\">--open</code> opens the browser directly on <a\r\n      href=\"http://localhost:4200/\">http://localhost:4200/</a>\r\n    and shows your brand new application (instead of localhost you can type <a href=\"http://127.0.0.1:4200\">http://127.0.0.1:4200</a>).\r\n  </p>\r\n  <h4>First things first</h4>\r\n  <p>Before we start our big project, we need to know some things about <a routerLink=\"/typescript\">TypeScript</a> in\r\n    general.</p>\r\n\r\n  <h3 id=\"toc_further_references\">Further references</h3>\r\n  <p class=\"ui info message\">If you are already confused by all the special Angular terms:<br>\r\n    <a href=\"https://angular.io/guide/glossary\" target=\"_blank\">\r\n      <strong>Angular Glossary</strong>\r\n    </a><br>\r\n  </p>\r\n  <div class=\"ui warning message\">\r\n    <p>Official documentation:</p>\r\n    <ul>\r\n      <li><a href=\"https://docs.npmjs.com/cli/audit\" target=\"_blank\">npm-audit</a></li>\r\n      <li><a href=\"https://angular.io/guide/setup-local#step-2-create-a-workspace-and-initial-application\" target=\"_blank\">Angular: Create a workspace and initial application</a></li>\r\n      <li><a href=\"https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor\" target=\"_blank\">MDN: CSS preprocessor</a></li>\r\n      <li><a href=\"https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server\" target=\"_blank\">MDN: What is a web server?</a></li>\r\n      <li><a href=\"https://en.wikipedia.org/wiki/Localhost\" target=\"_blank\">Wikipedia: Localhost</a></li>\r\n    </ul>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui three column grid\" style=\"text-align: center\">\r\n  <div class=\"column\">\r\n    <div class=\"ui fluid card\">\r\n      <a class=\"image\" (click)=\"theorist()\" routerLink=\"/environment\">\r\n        <img src=\"assets/img/Icons-01.png\">\r\n      </a>\r\n      <div class=\"content\">\r\n        <a class=\"header\" (click)=\"theorist()\" routerLink=\"/environment\">Theorist</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"column\">\r\n    <div class=\"ui fluid card\">\r\n      <a class=\"image\" (click)=\"practitioner()\" routerLink=\"/environment\">\r\n        <img src=\"assets/img/Icons-02.png\">\r\n      </a>\r\n      <div class=\"content\">\r\n        <a class=\"header\" (click)=\"practitioner()\" routerLink=\"/environment\">Practitioner</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"column\">\r\n    <div class=\"ui fluid card\">\r\n      <a class=\"image\" (click)=\"both()\" routerLink=\"/environment\">\r\n        <img src=\"assets/img/Icons-03.png\">\r\n      </a>\r\n      <div class=\"content\">\r\n        <a class=\"header\" (click)=\"both()\" routerLink=\"/environment\">Both</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<h2 style=\"text-align: center;\">Who are you?</h2>\r\n<div style=\"margin: 30px;\" class=\"ui message\">\r\n  <p>If you just want to read some theory parts about Angular, choose the theorist. If you just want to see how to code\r\n    Angular,\r\n    choose the practitioner. If you want to have it all, choose both.</p>\r\n  <p><b>Recommendation</b>: Choose \"Both\"! You will find a visual difference between theory and practice and you will\r\n    have everything you may interestend in on every page.</p>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/http/http.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/http/http.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>HTTP</h2>\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\" class=\"ui info message\">\r\n  <h5>User Story</h5>\r\n  <p>As a <b>user</b><br />\r\n    I want to <b>add, change and delete lectures</b>, <br />\r\n    to <b> keep my timetable up-to-date</b>.</p>\r\n</div>\r\n<div *ngIf=\"theoryLarge\" style=\"margin-bottom: 20px;\" class=\"ui message\">\r\n  <h4>Http</h4>\r\n  <p>\r\n    Most front-end applications interact with the backend over HTTP protocol. In fact, every application loads data at\r\n    runtime. Different patterns can be used. Angular uses the RxJS-Framework, that is based on the observable pattern.\r\n    The Angular class <code>Http</code> implements this pattern and provides an\r\n    interface, where you can load data\r\n    asynchonous.\r\n  </p>\r\n  <p>Often web-applications use REST server. They use http methods to define actions, e.g. which action should the server\r\n    run for the specific resource.</p>\r\n  <ul>\r\n    <li>GET: is used to request a resource from the server, e.g. a list with items</li>\r\n    <li>POST: to add a new resource or update an existing one, e.g. adds or updates an item of that list</li>\r\n    <li>PUT: replaces an existing resource, e.g. replaces one item or one list with another item or list</li>\r\n    <li>DELETE: deletes a resource by the sent id</li>\r\n  </ul>\r\n  <p>The term \"resource\" refers to a single data object of a REST server. The path of the request tells the\r\n    server which resource to do an action on. For example you can make a request for a list with the path\r\n    <code>/list</code> and the method <code>GET</code>.\r\n    And with the path <code>/list/1234</code> you could request the\r\n    list-item 1234.</p>\r\n  <h4>Observables</h4>\r\n  <p>Reactive programing is a programing paradigm. It's about data streams. As an example calculation tables in MS\r\n    Excel can be used. It is not about Excel, it's about the table. If you have cells in the table connected by a\r\n    formula and you change a value in a connected cell, the outcome of the formula will be updated automatically.\r\n    Angular supports reactive programing with the RxJS-Framework. Observables are the main construct of the RxJS\r\n    library. Observables represent a data stream supplied by a source. They have the following tasks:</p>\r\n  <ul>\r\n    <li>Generate data</li>\r\n    <li>Allow the use of operators, to manipulate data</li>\r\n    <li>Release storage, if data stream is no longer needed</li>\r\n  </ul>\r\n  <p> <code>subscribe</code>-method: it's used to listen and react to signals of the\r\n    observable. The signature could\r\n    look like this:\r\n    <code>obs.subscribe((data) => &#123;...&#125;);</code></p>\r\n  <p><code>pipe</code>-method: chains the operators of observables. The method gets null\r\n    or more operators and returns\r\n    an observable.\r\n    The data of the returned observable have the same type as they have in the last operator</p>\r\n  <ul>\r\n    <li><code>map</code>-operator: gets an observable internally, gives the data of the\r\n      observable to the transformation\r\n      function,\r\n      gets the return value and puts it in an observable. This new observable is forwarded to the next operator</li>\r\n    <li><code>mapTo</code>-operator: forwards a static value</li>\r\n    <li><code>tap</code>-operator: is used for side-effects. Can be used to print the\r\n      data stream on the console, or to\r\n      save data from the server in a property</li>\r\n    <li><code>catchError</code>-operator: is comparable to the <code\r\n       >catch</code> of a <code>try/catch</code>-block.\r\n      It\r\n      gets an error, handles the error and returns a new observable or a new error-observable for the next\r\n      <code>catchError</code>-operator</li>\r\n    <li><code>of</code>-operator: creates a new observable from a static value</li>\r\n    <li><code>throwError</code>-operator: creates a new error-observable. It's similar\r\n      to the <code>throw</code>\r\n      command</li>\r\n  </ul>\r\n  <h4>Http-Module</h4>\r\n  <p>The http-module contains three Angular modules: <code\r\n     > HttpClientModule, HttpClientJsonpModule</code> and\r\n    <code>HttpClientXsrfModule</code>. The most important classes of the http-module\r\n    are:</p>\r\n  <ul>\r\n    <li><code>HttpHeaders</code>: helps you to define and manipulate the http-headers of\r\n      a server request</li>\r\n    <li><code>HttpParams</code>: helps you to define and manipulate the request\r\n      parameter of a server request</li>\r\n    <li><code>HttpRequest</code>: represents server requests. An instance of this class\r\n      contains URL and http-headers\r\n      for\r\n      the request. You don't assign instances of this class, Angular will do this internally.</li>\r\n    <li><code>HttpResponse</code>: represents an answer from the server. It contains for\r\n      example the status, the server\r\n      has for the request and the data the server sends.</li>\r\n    <li><code>HttpErrorResponse</code>: represents an error-answer from the server. The\r\n      answer of the server fails when\r\n      the connection fails, when an exception is in your code or when the server status code is bigger or equals 400.\r\n    </li>\r\n  </ul>\r\n  <p>We will work with the <code>HttpClientModule</code>. It provides the <code\r\n     >HttpClient</code> service. All methods\r\n    of the <code>HttpClient</code> service return observables and use json data. The use\r\n    of json data means that Angular\r\n    serializes and deserializes the data for you.</p>\r\n</div>\r\n<h4>Using a Data Server</h4>\r\n<div *ngIf=\"theorySmall\" style=\"margin-bottom: 20px;\" class=\"ui message\">\r\n  <p>The service class should get the data now with HTTP requests. We want to add functions:</p>\r\n  <ul>\r\n    <li><b>C</b>reate for adding new lectures</li>\r\n    <li><b>R</b>ead (we already have that)</li>\r\n    <li><b>U</b>pdate for changing a lecture item</li>\r\n    <li><b>D</b>elete for deleting a lecture item or all of them</li>\r\n  </ul>\r\n</div>\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\">\r\n  <p>Import this in <b>app.module.ts</b>:</p>\r\n\r\n  <pre class=\"language-ts\"><code>import &#123; HttpClientModule &#125; from \"@angular/common/http\";</code></pre>\r\n\r\n  <p>And add it to the <code>imports</code> array:</p>\r\n\r\n  <pre class=\"language-ts\"><code>imports: [\r\n    // Other lines, add below:\r\n    HttpClientModule\r\n],</code></pre>\r\n\r\n  <p>The In-Memory Web API Module will be used. It imitates the communication with a remote data server. First install\r\n    the npm package and generate the InMemoryData-Service:</p>\r\n <pre class=\"command-line language-bash\"><code>npm install angular-in-memory-web-api --save</code></pre>\r\n <pre class=\"command-line language-bash\"><code>ng g service shared/InMemoryData</code></pre>\r\n  <p>Import to <b>app.module.ts</b>:</p>\r\n\r\n  <pre class=\"language-ts\"><code>import &#123; HttpClientInMemoryWebApiModule &#125; from \"angular-in-memory-web-api\";\r\nimport &#123; InMemoryDataService &#125; from \"./shared/in-memory-data.service\";</code></pre>\r\n\r\n  <p>And you also need to add it to the <code>imports</code> array:</p>\r\n\r\n  <pre class=\"language-ts\"><code>imports: [\r\n    // Other lines, add below:\r\n    HttpClientModule,\r\n    HttpClientInMemoryWebApiModule.forRoot(\r\n      InMemoryDataService,\r\n      &#123; dataEncapsulation: false &#125;)\r\n],</code></pre>\r\n\r\n  <p>If you have this problem, don't worry, we will fix it now.\r\n  </p>\r\n  <img style=\"margin-bottom:15px;\" class=\"ui centered large image\" src=\"assets/img/InMemoryData-Error.png\">\r\n  <p>The class <code><b>InMemoryDataService</b></code> needs to implement <code\r\n     >InMemoryDbService</code> and the\r\n    property\r\n    <code>createDb</code> is missing.</p>\r\n\r\n    <pre class=\"language-ts\"><code>export class InMemoryDataService implements InMemoryDbService &#123;\r\n    createDb() &#123;\r\n      const lectures = [];\r\n      return &#123; lectures &#125;\r\n    &#125;\r\n&#125;</code></pre>\r\n\r\n  <p>therefore you need to import:</p>\r\n    \r\n  <pre class=\"language-ts\"><code>import &#123; InMemoryDbService &#125; from \"angular-in-memory-web-api\";</code></pre>\r\n\r\n  <p>Now we need to fill the <code>const lectures</code> with the data we have in <code\r\n     >mock-lectures.ts</code>.</p>\r\n  <p>To be sure every new lecture will have an unique id we add the method <code\r\n     >genId()</code>. If the array is\r\n    empty the initial id 11 will be used, otherwise the highest id + 1 will be used.</p>\r\n\r\n    <pre class=\"language-ts\"><code>genId(lectures: Lecture[]): number &#123;\r\n    return lectures.length &gt; 0 ? Math.max(...lectures.map(lecture => lecture.id)) + 1 : 11;\r\n&#125;</code></pre>\r\n\r\n  <p>Of course we also need to import the class <code>Lecture</code>.</p>\r\n  <pre class=\"language-ts\"><code>import &#123; Lecture &#125; from \"./lecture\";</code></pre>\r\n\r\n  <h4>Update the Getter</h4>\r\n  <p>To get the data from the remote server now, we need to update the getter-methods for the lecture array and the\r\n    single lecture item. First we define in <b>lecture.service.ts</b> the <code\r\n     >lectureUrl</code> of the form\r\n    <code>:base/:collectionName</code> with the address of the lecture resource on the\r\n    server. Here base is the\r\n    resource to which requests are made, and <code>collectionName</code> is the lectures\r\n    data object in the\r\n    in-memory-data-service.ts.</p>\r\n    <pre class=\"language-ts\"><code>private lectureUrl = \"api/lectures\";</code></pre>\r\n\r\n  <p>Injection into the constructor:</p>\r\n  <pre class=\"language-ts\"><code>constructor(private http: HttpClient) &#123;\r\n&#125;</code></pre>\r\n\r\n<pre class=\"language-ts\"><code>import &#123; HttpClient &#125; from \"@angular/common/http\";</code></pre>\r\n\r\n  <p>And now change the getter:</p>\r\n\r\n  <pre class=\"language-ts\"><code>getLectures(): Observable&lt;Lecture[]&gt; &#123;\r\n    return this.http.get&lt;Lecture[]&gt;(this.lectureUrl);\r\n&#125;</code></pre>\r\n\r\n</div>\r\n<div *ngIf=\"theorySmall\" style=\"margin-top: 20px;\" class=\"ui message\">\r\n  <p>All HttpClient methods return a RxJS-Observable of something. HTTP is a request / response protocol. Every time\r\n    you make a request you will get a single response. </p>\r\n</div>\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\">\r\n  <p>There might go something wrong with the data of the remote\r\n    server sometimes, that's why <code>getLectures()</code> should catch an error and do\r\n    something appropriate with it.\r\n    So we need a method for that:</p>\r\n\r\n    <pre class=\"language-ts\"><code>private handleError&lt;T&gt;(operation = \"operation\", result?: T) &#123;\r\n    return (error: any): Observable&lt;T&gt; => &#123;\r\n        console.log(operation + \" failed: \" + error);\r\n        return of(result as T);\r\n    &#125;\r\n&#125;</code></pre>\r\n\r\n  <p>If something goes wrong now the error will be logged on the console. In addition the method will return a safe\r\n    value, that will keep the application running. The next step is to import <code\r\n     >catchError</code> and add it to the\r\n    get method.</p>\r\n\r\n    <pre class=\"language-ts\"><code>import &#123; catchError, map, tap &#125; from \"rxjs/operators\";</code></pre>\r\n\r\n  <pre class=\"language-ts\"><code>getLectures(): Observable&lt;Lecture[]&gt; &#123;\r\n    return this.http.get&lt;Lecture[]&gt;(this.lectureUrl)\r\n      .pipe(catchError(this.handleError(\"getLectures\", [])));\r\n&#125;</code></pre>\r\n\r\n  <p class=\"ui info message\"><code>get</code>\r\n    <br />Retrieve information.\r\n  </p>\r\n\r\n  <p>We also need to change the getter method for the single lecture:</p>\r\n\r\n  <pre class=\"language-ts\"><code>getLecture(id: number): Observable&lt;Lecture&gt; &#123;\r\n    const url = `$&#123;this.lectureUrl&#125;/$&#123;id&#125;`;\r\n    return this.http.get&lt;Lecture&gt;(url)\r\n      .pipe(catchError(this.handleError&lt;Lecture&gt;(\r\n      `getLecture id=$&#123;id&#125;`))\r\n      );\r\n&#125;</code></pre>\r\n\r\n  <p>The <code>const url</code> is defined as :baseURL/:id so that the url is returned\r\n    with id and is retrieved from\r\n    the\r\n    server with <code>http.get()</code>.</p>\r\n  <p>With these steps the class mock-lectures.ts is useless now. You are safe to delete the class and also its import\r\n    to lecture.service.ts.</p>\r\n\r\n  <h4>Change Lecture Details</h4>\r\n  <p>We want to be able to change something in the details of a lecture. In the detail view we can display our lecture\r\n    in a form, but we need to write the changes on the server, if we want to have them permanent. We need to prepare a\r\n    function in <b>lecture.service.ts</b>.</p>\r\n\r\n    <pre class=\"language-ts\"><code>import &#123; HttpHeaders &#125; from \"@angular/common/http\";\r\n\r\nconst httpOptions = &#123;\r\n  headers: new HttpHeaders(&#123;\"Content-Type\": \"application/json\"&#125;)\r\n&#125;</code></pre>\r\n\r\n<pre class=\"language-ts\"><code>updateLecture(lecture: Lecture): Observable&lt;any&gt; &#123;\r\n  return this.http.put(this.lectureUrl, lecture, httpOptions)\r\n    .pipe(catchError(this.handleError&#123;any&#125;(\"updateLecture\"));)\r\n&#125;</code></pre>\r\n\r\n  <p class=\"ui info message\"><code>put</code>\r\n    <br />Store an entity at a URI. PUT can create a new entity or update an existing one.\r\n  </p>\r\n</div>\r\n<div *ngIf=\"theorySmall\" style=\"margin-top: 20px;\" class=\"ui message\">\r\n  <p>The method <code>HttpClient.put()</code> needs three parameters: </p>\r\n  <ul>\r\n    <li>URL: the url has not changed. The Web-API knows what lecture to update, because of the id</li>\r\n    <li>the data that should be updated</li>\r\n    <li>options: the Web-API expects a special header in the storage requirements of HTTP. This header is defined in the\r\n      LectureService as the constant <code>httpOptions</code>.</li>\r\n  </ul>\r\n</div>\r\n\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\">\r\n  <p>Use the method from the service now to write a <code>save()</code> method in\r\n    <b>lecture-details.component.ts</b>.\r\n  </p>\r\n\r\n  <pre class=\"language-ts\"><code>save(): void &#123;\r\n    this.lectureService.updateLecture(this.lecture)\r\n      .subscribe(() => this.goBack());\r\n&#125;</code></pre>\r\n\r\n  <p>Afterwards you can add the button in <b>lecture-details.component.html</b> with the click-event-binding and check\r\n    if all input fields are filled.</p>\r\n\r\n    <pre class=\"language-html\"><code>&lt;button class=\"ui primary button\" (click)=\"save()\"&gt;Save&lt;&#47;button&gt;\r\n&lt;p style=\"color:red\" *ngIf=\"!lecture.name || !lecture.room || !lecture.day || !lecture.time.hours || !lecture.time.minutes || !lecture.building || !lecture.floor\"&gt;\r\n  Please check again, if you filled all input fields correctly!\r\n&lt;&#47;p&gt;</code></pre>\r\n</div>\r\n\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\">\r\n  <h4>Add a new Lecture</h4>\r\n  <p>First we need a new component for the input form:</p>\r\n  <pre class=\"language-bash command-line\"><code>ng g component lecture-add</code></pre>\r\n  <p>Afterwards we copy the input form from lecture-details.component.html and make the neccessary changes.</p>\r\n  <p>Every time you see something like <code>[(ngModel)]=\"lecture.name\"</code> replace\r\n    it\r\n    with something like\r\n    <code>#lectureName</code>.</p>\r\n  <p class=\"ui info message\">\r\n    Element Reference: Direct access to a DOM-element. Creates a local variable something that provides access to the\r\n    element instance in data-binding and event-binding expressions in the current template. Syntax:<br />\r\n    <code>#something</code>\r\n  </p>\r\n  <p>All of them should look like this example: </p>\r\n\r\n  <pre class=\"language-html\"><code>&lt;input #lectureName placeholder=\"Name\" &#47;&gt;</code></pre>\r\n\r\n  <p><b>Important:</b> Delete the <code>*ngIf=\"lecture\"</code> at the beginning!\r\n    Otherwise this component won't\r\n    display anything.</p>\r\n  <p>Call the button below \"Add\" and delete the function, we need to write one first.\r\n  </p>\r\n  <p>In a next step add the component to the routing and to the navigation:</p>\r\n  <p><b>app-routing.module.ts</b></p>\r\n\r\n  <pre class=\"language-ts\"><code>import &#123; LectureAddComponent &#125; from \"./lecture-add/lecture-add.component\";\r\n\r\nconst routes: Routes = [\r\n    // Other entries, add below:\r\n    &#123; path: \"lecture-add\", component: LectureAddComponent &#125;\r\n];</code></pre>\r\n\r\n  <p><b>app.component.html</b></p>\r\n\r\n  <pre class=\"language-html\"><code>&lt;div class=\"ui three item menu\"&gt;\r\n    &lt;!-- Other entries, add below: --&gt;\r\n    &lt;a class=\"item\" routerLink=\"/lecture-add\" routerLinkActive=\"active\">\r\n      Add\r\n    &lt;&#47;a&gt;\r\n&lt;&#47;div&gt;</code></pre>\r\n\r\n  <p>There are also some things we can take over from the details component and the timetable and insert it into\r\n    <b>lecture-add.component.ts</b>,\r\n    so that it looks like this:</p>\r\n<pre class=\"language-ts\"><code>import &#123; LectureService &#125; from \"../shared/lecture.service\";\r\nimport &#123; Lecture &#125; from \"../shared/lecture\";\r\nimport &#123; Location &#125; from \"@angular/common\";</code></pre>\r\n\r\n  <pre class=\"language-ts\"><code>export class LectureAddComponent implements OnInit &#123;\r\n    lectures: Lecture[];\r\n\r\n    constructor(\r\n      private lectureService: LectureService,\r\n      private location: Location\r\n    ) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n      this.getLectures();\r\n    &#125;\r\n\r\n    getLectures(): void &#123;\r\n      this.lectureService.getLectures()\r\n        .subscribe(lectures => this.lectures = lectures);\r\n    &#125;\r\n\r\n    goBack(): void &#123;\r\n      this.location.back();\r\n    &#125;\r\n&#125;</code></pre>\r\n\r\n  <p>Write the <code>addLecture</code> method in the <b>lecture.service.ts</b> now:</p>\r\n    <pre class=\"language-ts\"><code>addLecture(lecture: Lecture): Observable&lt;Lecture&gt; &#123;\r\n      return this.http.post&lt;Lecture&gt;(this.lectureUrl, lecture, httpOptions)\r\n        .pipe(catchError(this.handleError&lt;Lecture&gt;(\"addLecture\"))\r\n      );\r\n&#125;</code></pre>\r\n\r\n  <p class=\"ui info message\"><code>post</code>\r\n    <br/>Often POST is used to create a\r\n    new entity, but it can also be used to update an entity.\r\n  </p>\r\n  <p>We can use it again in the <b>lecture-add.component.ts</b>:</p>\r\n\r\n  <pre class=\"language-ts\"><code>add(name: string, building: string, floor: string, room: string, day: string, hours: number, minutes: number, department?: string): void &#123;\r\n    let time = &#123;hours, minutes&#125;;\r\n    if(!name || !room || !day || !time || !building || !floor) &#123;\r\n      this.fieldsEmpty = true;\r\n      return;\r\n    &#125;\r\n\r\n    this.lectureService.addLecture(&#123;name, building, floor, room, day, time, department&#125; as Lecture)\r\n      .subscribe(lecture => &#123;\r\n        this.lectures.push(lecture);\r\n        this.goBack();\r\n      &#125;);\r\n&#125;</code></pre>\r\n\r\n  <p>We will get name, room and the other values from the form we have in the HTML. We will combine minutes and hours\r\n    to a time object, because <code>Lecture</code> expects a <code\r\n     >Time</code> object. With the if statement we check\r\n    if one of them has no value. This can happen if the user didn't type a name for example. therefore we need this\r\n    <code>Boolean</code>. We are going to ask in the HTML later if it's true or false\r\n    and print a message to complete the\r\n    form. But first we need to initialise it in <b>lecture-add.component.ts</b>.</p>\r\n\r\n    <pre class=\"language-ts\"><code>fieldsEmpty: boolean = false;</code></pre>\r\n\r\n  <p>The rest of the function you should already recognize. We use the function from the service and subscribe it. With\r\n    <code>push</code> we add it to the array.</p>\r\n  <p>Last step is to complete the <b>lecture-add.component.html</b>.</p>\r\n\r\n  <pre class=\"language-html\"><code>&lt;button class=\"ui primary button\" (click)=\"add(\r\n    lectureName.value,\r\n    lectureBuilding.value,\r\n    lectureFloor.value,\r\n    lectureRoom.value,\r\n    lectureDay.value,\r\n    lectureHours.value,\r\n    lectureMinutes.value,\r\n    lectureDepartment.value)\"&gt;Add&lt;&#47;button&gt;\r\n  \r\n&lt;p style=\"color:red\" *ngIf=\"fieldsEmpty===true\"&gt;\r\n    Please check again, if you filled all input fields correctly!&lt;&#47;p&gt;\r\n  \r\n&lt;button class=\"ui button\" (click)=\"goBack()\"&gt;Go Back&lt;&#47;button&gt;</code></pre>\r\n\r\n</div>\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\">\r\n  <h4>Delete Lectures</h4>\r\n  <p>Same procedure again. Prepare a function in <b>lecture-service.ts</b>.</p>\r\n\r\n  <pre class=\"language-ts\"><code>deleteLecture(lecture: Lecture | number): Observable&lt;Lecture&gt; &#123;\r\n    const id = typeof lecture === \"number\" ? lecture : lecture.id;\r\n    const url = `$&#123;this.lectureUrl&#125;/$&#123;id&#125;`;\r\n    return this.http.delete&lt;Lecture&gt;(url, httpOptions)\r\n      .pipe(catchError(this.handleError&lt;Lecture&gt;(\"deleteLecture\"))\r\n    );\r\n&#125;</code></pre>\r\n\r\n  <p>Use it in <b>timetable.component.ts</b>:</p>\r\n\r\n  <pre class=\"language-ts\"><code>delete(lecture: Lecture): void &#123;\r\n    this.lectures = this.lectures.filter(l => l !== lecture);\r\n    this.lectureService.deleteLecture(lecture).subscribe();\r\n&#125;</code></pre>\r\n\r\n  <p>And there should be a function to delete all lectures with one click:</p>\r\n\r\n  <pre class=\"language-ts\"><code>deleteAll(): void &#123;\r\n    for(let lecture of this.lectures) &#123;\r\n      this.delete(lecture);\r\n    &#125;\r\n&#125;</code></pre>\r\n\r\n  <p>Since we provided the functions, we can add them to new buttons now. We just need to keep them in a\r\n    <code>div</code>\r\n    to check if the <code>lectures</code> already have data, otherwise we will have a\r\n    timing problem at this point.</p>\r\n\r\n    <pre class=\"language-html\"><code>&lt;div *ngIf=\"lectures\"&gt;\r\n    &lt;button class=\"ui primary button\" routerLink=\"&#47;\r\n      lecture-add\"&gt;Add Lecture&lt;&#47;button&gt;\r\n    &lt;button class=\"ui button\" (click)=\"deleteAll()\" *ngIf=\"lectures.length&gt;0\"&gt;\r\n      Delete All&lt;&#47;button&gt;\r\n    &lt;div *ngIf=\"lectures.length&gt;0\" style=\"padding: 15px;\"&gt;\r\n      &lt;div class=\"ui middle aligned divided list\"&gt;\r\n        &lt;div *ngFor=\"let l of lectures\" class=\"item\"&gt;\r\n          &lt;a class=\"app-lecture-item item\" [lecture]=\"l\"\r\n            routerLink=\"&#47;lecture-details&#47;<span>{{</span>l.id<span>}}</span> style=\"margin: 10px; padding:10px\"&gt;&lt;&#47;a&gt;\r\n          &lt;button (click)=\"delete(l)\" class=\"ui button\"&gt;Delete&lt;&#47;button&gt;\r\n        &lt;&#47;div&gt;\r\n      &lt;&#47;div&gt;\r\n    &lt;&#47;div&gt;\r\n  \r\n    &lt;div *ngIf=\"lectures.length==0\" style=\"padding: 15px;\"&gt;\r\n      &lt;p&gt;No Items in the Timetable!&lt;&#47;p&gt;\r\n    &lt;&#47;div&gt;\r\n&lt;&#47;div&gt;</code></pre>\r\n\r\n  <p>Now that we have all functions which we wanted to edit the timetable, we are ready to finalize the application. </p>\r\n\r\n  <h4>Visualization of the Construction:</h4>\r\n  <p><img class=\"ui image big centered\" src=\"assets/img/App-Building-9.png\"></p>\r\n  <div class=\"ui success message\">\r\n    <h4>Summary</h4>\r\n    <ul>\r\n      <li>You learned about http, http-module and observables.</li>\r\n      <li>You added all dependencies to use HTTP.</li>\r\n      <li>You refactored the service to load data from a web API.</li>\r\n      <li>You configured the In-Memory Web API.</li>\r\n      <li>You learned about the methods <code>post()</code>, <code>put()</code> and <code>delete()</code>\r\n        and applied them.</li>\r\n      <li>You added the functions add, edit, delete and delete all to the application.</li>\r\n    </ul>\r\n  </div>\r\n  <iframe style=\"margin-top:20px; margin-bottom:20px; width:100%; height: 500px\"\r\n    src=\"https://stackblitz.com/edit/wheretogo-step-7?embed=1&file=src/app/timetable/timetable.component.ts&hideNavigation=1\"></iframe>\r\n\r\n<h3 id=\"toc_further_references\">Further references</h3>\r\n<div class=\"ui warning message\">\r\n    <p>Official documentation:</p>\r\n    <ul>\r\n    <li>Angular: <a href=\"https://angular.io/guide/http\" target=\"_blank\">HttpClient</a></li>\r\n    </ul>\r\n    <p>Advanced concepts:</p>\r\n    <ul>\r\n        <li>Wikipedia: <a href=\"https://en.wikipedia.org/wiki/Create,_read,_update_and_delete\" target=\"_blank\">CRUD</a></li>\r\n        <li>Wikipedia: <a href=\"https://en.wikipedia.org/wiki/Representational_state_transfer\" target=\"_blank\">REST</a></li>\r\n    </ul>\r\n    <p>REST-Tools:</p>\r\n    <ul>\r\n        <li><a href=\"https://swagger.io/\" target=\"_blank\">Swagger</a></li>\r\n        <li><a href=\"https://www.getpostman.com/\" target=\"_blank\">Postman</a></li>\r\n    </ul>\r\n</div>\r\n\r\n  <div class=\"ui center aligned segment\" style=\"width: 50%; margin: 0 auto\">\r\n    <h4>Your Progress:</h4>\r\n    <mat-progress-bar style=\"margin-bottom:20px;\" mode=\"determinate\" value=\"85\"></mat-progress-bar>\r\n  </div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/project-overview/project-overview.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project-overview/project-overview.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 id=\"headline\">Project Overview</h2>\r\n<div class=\"ui compact menu\" id=\"header_content\">\r\n    <div class=\"ui simple dropdown item\">\r\n    Content\r\n    <i class=\"dropdown icon\"></i>\r\n    <div class=\"menu\">\r\n      <div class=\"item\"><a href=\"#toc_goals\">Goals</a></div>\r\n      <div class=\"item\"><a href=\"#toc_task\">Task</a></div>\r\n      <div class=\"item\"><a href=\"#toc_layout\">Layout</a></div>\r\n      <div class=\"item\"><a href=\"#toc_outline\">Outline</a></div>\r\n      <div class=\"item\"><a href=\"#toc_further_references\">Further references</a></div>\r\n    </div>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"start_content\">\r\n  <h3 id=\"toc_goals\">What am I able to do after this Tutorial?</h3>\r\n  <p>Probably the most interesting question. Afterwards you should have a solid grasp about the following concepts in Angular:</p>\r\n  <ul>\r\n    <li>Create an application with reusable <a href=\"https://angular.io/guide/glossary#component\" target=\"_blank\">components</a>.</li>\r\n    <li>Show a list of data items by using built-in Angular <a href=\"https://angular.io/guide/glossary#directive\" target=\"_blank\">directives</a>.</li>\r\n    <li>Use directives to show and hide items.</li>\r\n    <li>Create, read, update and delete data blocks.</li>\r\n    <li>Create <a href=\"https://angular.io/guide/glossary#template-driven-forms\" target=\"_blank\">forms</a> to submit user input.</li>\r\n    <li>Use one-way and two-way data <a href=\"https://angular.io/guide/glossary#binding\" target=\"_blank\">binding</a> to synchronize views with the backend logic.</li>\r\n    <li>Bind methods to events, like a button click.</li>\r\n    <li>Use <a href=\"https://angular.io/guide/glossary#router\" target=\"_blank\">routing</a> to navigate through components and their <a href=\"https://angular.io/guide/glossary#view\" target=\"_blank\">views</a>.</li>\r\n    <li>Format data by using <a href=\"https://angular.io/guide/glossary#pipe\" target=\"_blank\">pipes</a>.</li>\r\n    <li>Use a <a href=\"https://angular.io/guide/glossary#service\" target=\"_blank\">service</a> to encapsulate your business logic and functionality.</li>\r\n  </ul>\r\n</div>\r\n\r\n<div>\r\n  <h3 id=\"toc_task\">What is this project about?</h3>\r\n  <p>Every student might know the problem. It's a new semester, you have a lot of lectures and you never know which room to go next.\r\n  Wouldn't it be nice to have an app that shows you where to go at first sight by just opening it?</p>\r\n  <div class=\"ui info message\">\r\n    <h5>User Story</h5>\r\n    <p>As a <strong>student</strong><br />\r\n      I want to <strong>have a dashboard that shows me the room of my next upcoming lecture</strong>, <br />\r\n      to <strong>see where to go next at first sight.</strong></p>\r\n  </div>\r\n  <p>So this is basically the whole idea. On the start page we will display the next lecture of the day.<br>\r\n  We used the format of a user story as it best describes the requirements and wishes from the user's point of view. This approach is common in the software development process to gather the user's expectation apart from any technical detail.<br>\r\n  Following from that, we will have to manage the lecture data backlog.\r\n  It will be possible to view all lectures in a timetable, to create new ones, update existing lectures or delete them.\r\n  </p>\r\n\r\n  <h3 id=\"toc_layout\">How should this app look like?</h3>\r\n  <p>When you start the app you will see the next lecture you have to go to on the \"Home-Screen\". Above the Home-Screen you can find the navigation bar. There, it is possible to go back to the Home-Screen immediately at all times through clicking <em>&gt; Home</em>.</p>\r\n  <img class=\"ui centered large image\" src=\"assets/img/Home.png\">\r\n\r\n  <p>When you click on <em>&gt; Timetable</em> you will get to the list of lectures you have. Here you can see that every lecture can be deleted (<em>&gt; Delete</em>).\r\n  You can also delete all lectures with one click (<em>&gt; Delete All</em>). Furthermore you can click the button <em>&gt; Add</em> to create a new lecture entry.\r\n  With a click on one lecture you will get to the details of this specific lecture and you can change them.\r\n  </p>\r\n  <img class=\"ui centered large image\" src=\"assets/img/Timetable.png\">\r\n\r\n  <p>So here you can change some details and save them (<em>&gt; Save</em>). Then you go back to the Timetable and see the updated list of\r\n    lectures (<em>&gt; Go Back</em>).</p>\r\n  <img class=\"ui centered large image\" src=\"assets/img/Details.png\">\r\n\r\n  <p>The last point in the menu is <em>&gt; Add</em>. From there, or with the button <em>&gt; Add Lecture</em> in the <em>&gt; Timetable</em> view you can get to the <em>&gt; Add</em> view.\r\n  There you can add a totally new lecture by making some input and choosing options from the drop-down menues.</p>\r\n  <img class=\"ui centered large image\" src=\"assets/img/Add.png\">\r\n  \r\n  <p>Once again we used a proofen method from the software development tool box: A wireframe. The wireframe enables us to have a early visual prototype of our conceptual design and to reach a common understanding about the fundamental elements on the web page.</p>\r\n</div>\r\n\r\n<h3 id=\"toc_outline\">What steps follow to proceed?</h3>\r\n<p>You will learn the basic concepts of Angular. For every concept like components, routing, service and so on, you will have an own chapter with theoretical parts (<span class=\"ui message\" style=\"padding: 2px\">light-grey background</span>) and practical parts (instructions on white background). \r\nEvery chapter will bring you closer to the introduced app.\r\nAt the beginning of every chapter you will find a user story (<span class=\"ui info message\" style=\"padding: 2px\">light-blue background</span>) about what you want to achieve and at the end of every chapter you will find the list of things you've learned (<span class=\"ui success message\" style=\"padding: 2px\">light-green background</span>), the visualization of the components and how they are arranged, the current code and how it looks.</p>\r\n\r\n  <div class=\"ui four column grid\">\r\n    <div class=\"column\">\r\n      <div class=\"ui fluid image\">\r\n        <div class=\"ui black ribbon label\">\r\n          Theory\r\n        </div>\r\n        <img src=\"assets/img/Text-Theory.png\">\r\n      </div>\r\n    </div>\r\n    <div class=\"column\">\r\n      <div class=\"ui fluid image\">\r\n        <div class=\"ui black ribbon label\">\r\n          Instructions\r\n        </div>\r\n        <img src=\"assets/img/Text-Instructions.png\">\r\n      </div>\r\n    </div>\r\n    <div class=\"column\">\r\n      <div class=\"ui fluid image\">\r\n        <div class=\"ui black ribbon label\">\r\n          User Story\r\n        </div>\r\n        <img src=\"assets/img/Text-User-Story.png\">\r\n      </div>\r\n    </div>\r\n    <div class=\"column\">\r\n      <div class=\"ui fluid image\">\r\n        <div class=\"ui black ribbon label\">\r\n          Summary\r\n        </div>\r\n        <img src=\"assets/img/Text-Summary.png\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <p>The current code is displayed in an embedded online code editor named <a href=\"https://stackblitz.com\" target=\"_blank\">Stackblitz</a>.\r\n    At the end of every chapter you can explore the code of the whole project in this online editor.</p>\r\n  <ol>\r\n    <li>With \"open in a new tab\" you can open the Stackblitz editor in a new tab.</li>\r\n    <li>This is the tab card of the currently opened class or file in the editor.</li>\r\n    <li>With a click on this icon you get the file structure of the project and you can open all other files in the embedded editor.</li>\r\n    <li>You can switch the displayed content in the embedded code editor. You can display editor and preview side by side or only the editor or only the preview.</li>\r\n    <li>You can search in the whole project. You will get a search bar when clicking on the magnifier icon.</li>\r\n  </ol>\r\n    <img style=\"margin-bottom:15px; width: 80%;\" class=\"ui centered image\" src=\"assets/img/Stackblitz.png\">\r\n    <p>Let me summarize: you can use the embedded editor like every code editor you know. It is based on Visual Studio Code. You can make changes\r\n      and you will see the results immediately or you can just look through the code. None of your changes are permanent, so play with the code as you like.\r\n    </p>\r\n\r\n<div>\r\n  <h5>Finished App</h5>\r\n  <p>Feel free to try it out:</p>\r\n  <iframe style=\"width:100%; height: 750px;\"\r\n    src=\"https://stackblitz.com/edit/wheretogo-step-8?embed=1&file=src/app/app.component.ts&hideExplorer=1&hideNavigation=1&view=preview\"></iframe>\r\n</div>\r\n\r\n<h3 id=\"toc_further_references\">Further references</h3>\r\n<div class=\"ui warning message\">\r\n    <ul>\r\n      <li><a href=\"https://en.wikipedia.org/wiki/Requirement\" target=\"_blank\">Requirement</a></li>\r\n      <li><a href=\"https://en.wikipedia.org/wiki/Software_prototyping\" target=\"_blank\">Software prototyping</a></li>\r\n      <li><a href=\"https://en.wikipedia.org/wiki/Website_wireframe\" target=\"_blank\">Website wireframe</a></li>\r\n      <li><a href=\"https://en.wikipedia.org/wiki/User_story\" target=\"_blank\">User story</a></li>\r\n      <li><a href=\"https://angularplayground.it/\" target=\"_blank\">Angular Playground</a>: An open-source tool for building Angular components, directives and pipes in isolation</li>\r\n      <li><a href=\"https://angular.io/start\" target=\"_blank\">Getting Started with Angular: Your First App</a></li>\r\n    </ul>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reusable-components/reusable-components.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reusable-components/reusable-components.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Reusable Components</h2>\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\" class=\"ui info message\">\r\n  <h5>User Story</h5>\r\n  <p>As a <b>programer</b><br />\r\n    I want to <b>have the details view seperated from the list</b>, <br />\r\n    to <b> make it reusable</b>.</p>\r\n</div>\r\n<div *ngIf=\"praxis\">\r\n  <h4>Generate Details Component</h4>\r\n  <p>The lecture details should be reusable, that's why they will have an extra component from now on. Just cut out the\r\n    HTML code about the details from <b>timetable.component.html</b>. It is the whole ui form. Generate the component\r\n    and paste it in <b>lecture-details.component.html</b>.</p>\r\n<pre class=\"command-line language-bash\"><code>ng g component lecture-details</code></pre>\r\n  <p>If we want to use the details component not only for a selected item but also for every lecture item, we need to\r\n    change <code>selectedLecture</code> to <code\r\n     >lecture</code> again.</p>\r\n\r\n  <p>The lecture property in <b>lecture-details.component.ts</b> must be an input property which is commented on by\r\n    the\r\n    <code>@Input()</code>-decorator, as it binds the external <code\r\n     >LectureItemComponent</code> to it.</p>\r\n      <p>Insert this right above the empty constructor:</p>\r\n\r\n    <pre class=\"language-ts\"><code>@Input() lecture: Lecture;</code></pre>\r\n\r\n  <p>This results in making these imports:</p>\r\n    <pre class=\"language-ts\"><code>import &#123; Component, OnInit, Input &#125; from \"@angular/core\";\r\nimport &#123; Lecture &#125; from \"../shared/lecture\";</code></pre>\r\n\r\n  <p>And put this in the <b>timetable.component.hmtl</b>:</p>\r\n\r\n  <pre class=\"language-html\"><code>&lt;app-lecture-details [lecture]=\"selectedLecture\"&gt;&lt;&#47;app-lecture-details&gt;</code></pre>\r\n</div>\r\n\r\n<div *ngIf=\"theorySmall\" style=\"margin-top: 20px;\" class=\"ui message\">\r\n  <p>If you have components that have a main and a detail view, you should seperate them for better maintenance. In this\r\n    expamle with the list of lectures, the component receives a lecture object through its lecture property and\r\n    indicates it. Now every time the user selects a lecture from the list, it will be displayed in the details\r\n    component.</p>\r\n  <p>With the selector <code>app-lecture-details</code>\r\n    the component can be displayed.</p>\r\n  <p><code>[lecture]=\"selectedLecture\"</code> creates a\r\n    one-way-binding from the <code\r\n     >selectedLecture</code> property\r\n    of the <code>TimetableComponent</code> to the <code\r\n     >lecture</code> property of the target element,\r\n    which is\r\n    assigned to the <code>lecture</code> property of the\r\n    <code>LectureDetailsComponent</code>.</p>\r\n  <p>If the user clicks on an item of that list, the <code\r\n     >selectedLecture</code> changes. This updates the\r\n    <code>lecture</code>\r\n    because of the property-binding and the <code\r\n     >LectureDetailsComponent</code> displayes the chosen object.</p>\r\n  <p>In this section we only made \"inside changes\". That means that you can't see any difference in the user interface.\r\n    We\r\n    seperated the list and the details-view. Now a development of both components is possible, without any need to\r\n    change the other one. The details-component is now reusable.</p>\r\n</div>\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\">\r\n  <h4>Visualization of the Construction:</h4>\r\n  <p><img class=\"ui image large centered\" src=\"assets/img/App-Building-6.png\"></p>\r\n  <div class=\"ui success message\">\r\n    <h4>Summary</h4>\r\n    <ul>\r\n      <li>You generated a reusable, seperate component for the details-view.</li>\r\n      <li>You used the <code>@Input</code>-decorator to make the property available for\r\n        the property binding.</li>\r\n      <li>You made the property binding for the selected lecture.</li>\r\n    </ul>\r\n  </div>\r\n  <iframe style=\"margin-top:20px; margin-bottom:20px; width:100%; height: 500px\"\r\n    src=\"https://stackblitz.com/edit/wheretogo-step-4?embed=1&file=src/app/lecture-details/lecture-details.component.html&hideNavigation=1\"></iframe>\r\n\r\n  <div class=\"ui center aligned segment\" style=\"width: 50%; margin: 0 auto\">\r\n    <h4>Your Progress:</h4>\r\n    <mat-progress-bar style=\"margin-bottom:20px;\" mode=\"determinate\" value=\"40\"></mat-progress-bar>\r\n  </div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/routing/routing.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routing/routing.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Routing</h2>\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\" class=\"ui info message\">\r\n  <h5>User Story</h5>\r\n  <p>As a <b>user</b><br />\r\n    I want to <b>navigate through the views</b>, <br />\r\n    to <b> have the start page and the timetable accessable via navigation bar and the details via click on a lecture in the timetable</b>.</p>\r\n</div>\r\n<div *ngIf=\"theoryLarge\" style=\"margin-bottom: 20px;\" class=\"ui message\">\r\n  <h4>What is Routing?</h4>\r\n  <p>Angular provides something called <code>Router</code> for the navigation from one\r\n    view to another. The\r\n    <code>Router</code> is loading different parts of the application. All views are\r\n    available for the user via URLs.\r\n    We will use clickable links for the navigation. These could be navigation items or list items. Angular is for\r\n    developing Single-Page-Applications. That means that the application is just one single HTML page and the content is\r\n    loaded asynchronously. The loading is usually no \"hard\" reloading. Things like linking the components or going forward\r\n    and backwards are challenging now, but HTML5 History API brings the technical basic for this. It's possible to\r\n    change the browser history via JavaScript without reloading the web page. It looks like a normal web page but it's\r\n    a single page. The <code>Router</code> interacts with this HTML5 History API and\r\n    uses URLs to identify the\r\n    individual states. You will need three steps to get there:<br />\r\n  </p>\r\n  <ul>\r\n    <li>Assign an URL to a component.</li>\r\n    <li>Import the Routing-Module into the application.</li>\r\n    <li>Set where the components should be loaded into the template.</li>\r\n  </ul>\r\n</div>\r\n\r\n<h4>Routing Module</h4>\r\n<div *ngIf=\"praxis\">\r\n  <p>If we don't want to arrange the components one below the other, we need a navigation logic to route between\r\n    components. If you answered the question about routing during the creation of the project with (Y),\r\n    you will already have the file <b>app-routing.module.ts</b> in your project folder. If not, generate it now:</p>\r\n  <pre class=\"language-bash command-line\"><code\r\n     >ng generate module app-routing --flat --module=app</code></pre>\r\n</div>\r\n\r\n<div *ngIf=\"theorySmall\" style=\"margin-top: 20px;\" class=\"ui message\">\r\n  <p>Routes tell the router which view to display when the user clicks on a link or inserts an URL in the address bar of\r\n    the browser.\r\n    A typical Angular route has two properties:\r\n  </p>\r\n  <ul>\r\n    <li><code>path</code>: a string, that matches with the URL in the address bar of the\r\n      browser</li>\r\n    <li><code>component</code>: the component that the router should create when\r\n      navigating to this route</li>\r\n  </ul>\r\n</div>\r\n\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\">\r\n  <p>First we want to have a default route. When the browser is reloading, this route is displayed by default. So we\r\n    are going to type this into the <b>app-routing.module.ts</b> into <code\r\n     >const routes: Routes = []</code>:</p>\r\n    <pre class=\"language-ts\"><code>&#123; path: \"\", redirectTo: \"/where-to-go\", pathMatch: \"full\" &#125;,</code></pre>\r\n\r\n  <p>Also insert the other needed routes at the same location:</p>\r\n\r\n  <pre class=\"language-ts\"><code>&#123; path: \"timetable\", component: TimetableComponent &#125;,\r\n&#123; path: \"where-to-go\", component: WhereToGoComponent &#125;</code></pre>\r\n\r\n  <p>For that, we need to import <code>TimetableComponent</code> and <code\r\n     >WhereToGoComponent</code> now.</p>\r\n\r\n    <pre class=\"language-ts\"><code>import &#123; TimetableComponent &#125; from \"./timetable/timetable.component\";\r\nimport &#123; WhereToGoComponent &#125; from \"./where-to-go/where-to-go.component\";</code></pre>\r\n</div>\r\n\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\">\r\n  <h4>Create a Navigation</h4>\r\n  <p>Next we can delete the <code>&lt;app-where-to-go&gt;</code> and <code\r\n     >&lt;app-timetable&gt;</code> from the\r\n    <b>app.component.html</b>\r\n    and just leave the title and the <code>&lt;router-outlet&gt;</code>. These\r\n    components will only be parts of the route\r\n    now.</p>\r\n  <p>The <code>&lt;router-outlet&gt;</code> indicates that the routed views are\r\n    displayed here.</p>\r\n  <p>Now we want to create the navigation. Right now we have the start page ('where-to-go') and the timetable. We tell\r\n    the router with the <code>routerLink</code> which component to show and with the\r\n    directive\r\n    <code>routerLinkActive</code>\r\n    the active item in the navigation will be highlighted. Our code in the <b>app.component.html</b> should look like\r\n    this:</p>\r\n\r\n    <pre class=\"language-html\"><code>&lt;div style=\"text-align:center\"&gt;\r\n  &lt;h1 class=\"ui header\" style=\"margin: 30px\"&gt;\r\n    Welcome to <span>{{</span> title <span>}}</span>!&lt;&#47;h1&gt;\r\n  &lt;div class=\"ui two item menu\"&gt;\r\n    &lt;a class=\"item\" routerLink=\"&#47;where-to-go\" routerLinkActive=\"active\"&gt;\r\n      Home&lt;&#47;a&gt;\r\n    &lt;a class=\"item\" routerLink=\"&#47;timetable\" routerLinkActive=\"active\"&gt;\r\n      Timetable&lt;&#47;a&gt;\r\n  &lt;&#47;div&gt;\r\n  &lt;router-outlet&gt;&lt;&#47;router-outlet&gt;\r\n&lt;&#47;div&gt;</code></pre>\r\n</div>\r\n\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\">\r\n  <h4>Visualization of the Construction:</h4>\r\n  <p><img class=\"ui image large centered\" src=\"assets/img/App-Building-7.png\"></p>\r\n</div>\r\n<h4>Details in own View</h4>\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\">\r\n\r\n  <p>The lecture details should be in an own view now, not beneath the timetable. Delete\r\n    <code\r\n     >&lt;app-lecture-details [lecture]=\"selectedLecture\"&gt;&lt;/app-lecture-details&gt;</code>\r\n    from the <b>timetable.component.html</b>. We need an own route for them in the <b>app-routing.module.ts</b>:</p>\r\n\r\n    <pre class=\"language-ts\"><code>&#123; path: \"lecture-details/:id\", component: LectureDetailsComponent &#125;</code></pre>\r\n\r\n  <p>For that, we need to import <code>LectureDetailsComponent</code> now.</p>\r\n\r\n  <pre class=\"language-ts\"><code>import &#123; LectureDetailsComponent &#125; from \"./lecture-details/lecture-details.component\";</code></pre>\r\n\r\n  <p>And in the <b>timetable.component.html</b> where we iterate with a for-loop through the lectures we insert the\r\n    routerlink for the lecture details with the id of the clicked one:</p>\r\n\r\n    <pre class=\"language-html\"><code>&lt;a class=\"app-lecture-item item\" [lecture]=\"l\" routerLink=\"/lecture-details/<span>{{</span>l.id<span>}}</span> style=\"margin: 10px; padding: 10px\"&gt;&lt;&#47;a&gt;</code></pre>\r\n\r\n  <p>When you click on the first lecture you will see this in the address bar of your browser:\r\n    <img style=\"margin-bottom:15px;\" class=\"ui centered medium image\" src=\"assets/img/Browser-Navigates-To-Id.png\">\r\n    But you won't see the details view. First we need to change some things. Delete <code\r\n     >selectedLecture</code> and\r\n    the <code>onSelect()</code> method from the <b>timetable.component.ts</b>. Because\r\n    of the routing you won't need\r\n    it anymore.\r\n  </p>\r\n</div>\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\">\r\n  <p>Before that, the parent <code>LectureItemComponent</code> property (<code\r\n     >lecture</code>) sets the\r\n    <code>LectureDetailsComponent</code>\r\n    property (<code>lecture</code>), and the <code\r\n     >LectureDetailsComponent</code> component displays the lecture. Now\r\n    the router creates the <code>LectureDetailsComponent</code> as a response to an URL\r\n    like /lecture-detail/1.</p>\r\n</div>\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\">\r\n  <p>In <b>lecture-details.component.ts</b> we need to import the following and insert it as parameters in the\r\n    constructor:</p>\r\n\r\n    <pre class=\"language-ts\"><code>import &#123; ActivatedRoute &#125; from \"@angular/router\";\r\nimport &#123; LectureService &#125; from \"../shared/lecture.service\";\r\nimport &#123; Location &#125; from \"@angular/common\";</code></pre>\r\n\r\n<pre class=\"language-ts\"><code>constructor(\r\n  private route: ActivatedRoute,\r\n  private lectureService: LectureService,\r\n  private location: Location\r\n) &#123; \r\n&#125;</code></pre>\r\n\r\n</div>\r\n<div *ngIf=\"theorySmall\" style=\"margin-top: 20px;\" class=\"ui message\">\r\n  <p>You will need the following things to pick a lecture by its id.</p>\r\n  <p>The <code>ActivatedRoute</code> contains information about the route to this\r\n    instance of the\r\n    <code>LectureDetailsComponent</code>.\r\n    This component is interested in the route's bag of parameters extracted from the URL. The\r\n    <code>LectureService</code>\r\n    gets the lecture data from the server and here it's used to display the lecture view. The <code\r\n     >Location</code> is\r\n    an Angular service to interact with the browser. We are going to use this for a function to go back to the last\r\n    location.</p>\r\n</div>\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\">\r\n  <p>In the <b>lecture-details.component.ts</b> we want to have a method that gets us one lecture by its ID and since\r\n    we use a service class we need to define the method in <b>lecture.service.ts</b>:</p>\r\n\r\n    <pre class=\"language-ts\"><code>getLecture(id: number): Observable&lt;Lecture&gt; &#123;\r\n    return of(LECTURES.find(lecture => lecture.id === id));\r\n&#125;</code></pre>\r\n\r\n  <p>Now we can use it in <b>lecture-details.component.ts</b> like this:</p>\r\n\r\n  <pre class =\"language-ts\"><code>getLecture(): void &#123;\r\n    const id = +this.route.snapshot.paramMap.get(\"id\");\r\n    this.lectureService.getLecture(id)\r\n    .subscribe(lecture => this.lecture = lecture);\r\n&#125;</code></pre>\r\n\r\n</div>\r\n<div *ngIf=\"theorySmall\" style=\"margin-top: 20px;\" class=\"ui message\">\r\n  <p><code>route.snapshot</code> is a static image of the route information, taken shortly\r\n    after the component was created.\r\n    <code>paramMap</code> is a dictionary of route parameter values extracted from the\r\n    URL. The <code>id</code> key\r\n    returns the id of the lecture to fetch. As route parameters are strings the + JavaScript-operator converts them to\r\n    a number, because the lecture id is one.</p>\r\n</div>\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\">\r\n  <p>In the next step we just need to add<code> void </code>as return parameter of the\r\n    lifecycle-hook\r\n    <code>ngOnInit()</code>\r\n    in <b>lecture-details.component.ts</b> and call the <code>getLecture()</code>\r\n    method:</p>\r\n    \r\n    <pre class=\"language-ts\"><code>ngOnInit(): void &#123;\r\nthis.getLecture();\r\n&#125;</code></pre>\r\n\r\n  <h4>Go Back Button</h4>\r\n  <p>As already planned, in addition to the navigation we want to have a button that brings us back to the component we\r\n    visited before. That's what we needed the <code>location</code> for. Add to\r\n    <b>lecture-details.component.ts</b>:</p>\r\n\r\n    <pre class=\"language-ts\"><code>goBack(): void &#123;\r\n    this.location.back();\r\n&#125;</code></pre>\r\n\r\n  <p>Last step is to add a button for this and bind it to the method in <b>lecture-details.component.html</b>.</p>\r\n\r\n  <pre class=\"language-html\"><code>&lt;button class=\"ui button\" (click)=\"goBack()\"&gt;Go Back&lt;&#47;button&gt;</code></pre>\r\n</div>\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\">\r\n  <h4>Visualization of the Construction:</h4>\r\n  <p><img class=\"ui image big centered\" src=\"assets/img/App-Building-8.png\"></p>\r\n  <div class=\"ui success message\">\r\n    <h4>Summary</h4>\r\n    <ul>\r\n      <li>You learned about routing.</li>\r\n      <li>You added the Angular router to make a proper navigation.</li>\r\n      <li>You added a navigation to the <code >AppComponent</code>.</li>\r\n      <li>You defined paths, a default path and paths including parameters like the lecture id.</li>\r\n      <li>The details component got its own view.</li>\r\n      <li>You added there a go back function and button to go back to the last location in the browser history.</li>\r\n    </ul>\r\n  </div>\r\n  <iframe style=\"margin-top:20px; margin-bottom:20px; width:100%; height: 500px\"\r\n    src=\"https://stackblitz.com/edit/wheretogo-step-6?embed=1&file=src/app/lecture-details/lecture-details.component.ts&hideNavigation=1\"></iframe>\r\n\r\n<h3 id=\"toc_further_references\">Further references</h3>\r\n<div class=\"ui warning message\">\r\n    <p>Official documentation:</p>\r\n    <ul>\r\n    <li>Angular: <a href=\"https://angular.io/guide/router\" target=\"_blank\">Routing & navigation</a></li>\r\n    </ul>\r\n</div>\r\n\r\n    <div class=\"ui center aligned segment\" style=\"width: 50%; margin: 0 auto\">\r\n      <h4>Your Progress:</h4>\r\n      <mat-progress-bar style=\"margin-bottom:20px;\" mode=\"determinate\" value=\"65\"></mat-progress-bar>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Services</h2>\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\" class=\"ui info message\">\r\n  <h5>User Story</h5>\r\n  <p>As a <b>programer</b><br />\r\n    I want to <b>use a service</b>, <br />\r\n    to <b> not manage my data in the components anymore</b>.</p>\r\n</div>\r\n<div *ngIf=\"theoryLarge\" style=\"margin-bottom: 20px;\" class=\"ui message\">\r\n  <h4>What is a Service?</h4>\r\n  <p>Every good application should have its logic in a service not in the components. A service is one of the main\r\n    concepts of Angular. If you are already experienced with object-orientated programing languages, you may know the\r\n    MVC model. The service is like the controller. A service is a function or class that provides the functionality for\r\n    other functions or classes. It has two main tasks:</p>\r\n  <ul>\r\n    <li>Encapsulation of the application logic</li>\r\n    <li>Save the data, that is needed by one or more components of the application</li>\r\n  </ul>\r\n  <p>The concept \"Inversion of Control (IoC)\" and the pattern \"Dependency Injection\" can help us. If you want to use a\r\n    class at any point in the application, you could initialise the class at this point. But this solution is confusing\r\n    and has high maintenance. For example if you change just little things in the constructor of the class, you might\r\n    have to make changes everywhere in your code. This can be avoided by giving the responsibility of generating\r\n    dependencies to a higher authority. You are not allowed to use the keyword <code\r\n     >new</code> to create a dependency.\r\n    You will get the dependencies from a higher authority instead. The responsibility of generating an object is\r\n    reversed. IoC can be realised with different patterns, Angular uses dependency injection.\r\n  </p>\r\n  <p>Angular uses constructor injection: <br />\r\n    <code>constructor(myDependency: MyDependencyType) &#123; &#125;</code> <br />\r\n    To use a service like this we need to give it the decorator <code\r\n     >@Injectable()</code>. Another possibility is to\r\n    register the service in the <code>providers</code> array of the <code\r\n     >AppModule</code>, but here we will use the\r\n    other way.\r\n  </p>\r\n</div>\r\n<h4>Generate a Service</h4>\r\n<div *ngIf=\"theorySmall\" style=\"margin-bottom: 20px;\" class=\"ui message\">\r\n\r\n  <p>At the moment all the data is saved in the components. That is not the way it should be. The job of a component is\r\n    to present data, however the direct data access is the job of a service.</p>\r\n  <p>In the next step we want to create a <code>LectureService</code> that all other\r\n    classes in the application can\r\n    use to get\r\n    the data of the lectures. We use Angular's dependency injection to inject the service into the\r\n    <code>LectureItemComponent</code>.\r\n  </p>\r\n</div>\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\">\r\n  <pre class=\"language-bash command-line\"><code>ng g service shared/lecture</code></pre>\r\n</div>\r\n<div *ngIf=\"theorySmall\" style=\"margin-top: 20px;\" class=\"ui message\">\r\n  <p>The service class uses the <code>@Injectable()</code>-decorator and therefore\r\n    imports <code>Injectable</code>. This\r\n    service class now provides an injectable service. The decorator accepts a metadata object for the service.</p>\r\n  <p>If you use a service for accessing the data, from now on you can change your implementation without touching the\r\n    components.</p>\r\n</div>\r\n\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\">\r\n  <p>We are going to need this function in the class <b>LectureService</b> in <b>lecture.service.ts</b> to get the lecture data. For now we'll still use\r\n    the\r\n    mock-data.</p>\r\n\r\n    <pre class=\"language-ts\"><code>getLectures(): Lecture[] &#123;\r\n  return LECTURES;\r\n&#125;</code></pre>\r\n\r\n  <p>Your Visual Studio Code or you should import <code>Lecture</code> and <code\r\n     >LECTURES</code> now.</p>\r\n\r\n     <pre class=\"language-ts\"><code>import &#123; Lecture &#125; from \"../shared/lecture\";\r\nimport &#123; LECTURES &#125; from \"../shared/mock-lectures\";</code></pre>\r\n\r\n</div>\r\n<h4>Inject the Service</h4>\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\">\r\n  <p>We are going to add a parameter of type <code>LectureService</code> to the\r\n    constructor of the\r\n    <b>timetable.component.ts</b>:</p>\r\n\r\n    <pre class=\"language-ts\"><code>constructor(private lectureService: LectureService) &#123; &#125;</code></pre>\r\n</div>\r\n<div *ngIf=\"theorySmall\" style=\"margin-top: 20px;\" class=\"ui message\">\r\n  <p>This added parameter <code>lectureService</code> also defines a property of the\r\n    service class as well as it\r\n    identifies it as an injection. With the dependency injection we set the parameter <code\r\n     >lectureService</code> to the\r\n    singleton instance of the <code>LectureService</code>. The singleton pattern is a\r\n    software design pattern which\r\n    ensures that exactly one object exists in a class.</p>\r\n</div>\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\">\r\n  <p>Now replace the <code>lecture</code> propterty in <b>timetable.component.ts</b> and\r\n    import the\r\n    <code>LectureService</code>\r\n    if it wasn't imported automatically by adding the parameter in the constructor before.</p>\r\n\r\n    <pre class=\"language-ts\"><code>import &#123; LectureService &#125; from \"../shared/lecture.service\";\r\nimport &#123; Lecture &#125; from \"../shared/lecture\";</code></pre>\r\n\r\n<pre class=\"language-ts\"><code>lectures: Lecture[];</code></pre>\r\n\r\n  <p>Next we are going to use the method of the service class to get the lectures into our <code\r\n     >lecture</code> array.\r\n  </p>\r\n\r\n  <pre class=\"language-ts\"><code>getLectures(): void &#123;\r\n    this.lectures = this.lectureSerivce.getLectures();\r\n&#125;</code></pre>\r\n\r\n  <p>In the lifecycle hook <code>ngOnInit()</code> the method is called and executed\r\n    when loading the browser.</p>\r\n\r\n    <pre class=\"language-ts\"><code>ngOnInit() &#123;\r\n    this.getLectures();\r\n&#125;</code></pre>\r\n\r\n</div>\r\n<h4>Observable Data</h4>\r\n<div *ngIf=\"theorySmall\" style=\"margin-top: 20px;\" class=\"ui message\">\r\n  <p>The service method <code>getLectures()</code> now has a synchronous signature which\r\n    means that the service can\r\n    fetch data synchronously. This is just working because we fetch mock-data right now. If we have a real app with\r\n    real data this won't work at all. Fetching data from a remote server is an asynchronous operation. In the \"real\"\r\n    world the service has to wait for the respond of the server and the method cannot return immediately.</p>\r\n</div>\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\">\r\n  <p><code>LectureService.getLectures()</code> needs to have an asynchronous signature,\r\n    therefore we will return an\r\n    <code>Observable</code>.\r\n    We need to import in <b>lecture.service.ts</b>:</p>\r\n\r\n  <pre class=\"language-ts\"><code>import &#123; Observable, of &#125; from \"rxjs\";</code></pre>\r\n\r\n  <p>And replace the method with this code:</p>\r\n\r\n  <pre class=\"language-ts\"><code>getLectures(): Observable&lt;Lecture[]&gt; &#123;\r\n  return of(LECTURES);\r\n&#125;</code></pre>\r\n\r\n  <p>We also need to replace the method in <b>timetable.component.ts</b> now.</p>\r\n\r\n  <pre class=\"language-ts\"><code>getLectures(): void &#123;\r\n  this.lectureService.getLectures()\r\n  .subscribe(lectures => this.lectures = lectures);\r\n&#125;</code></pre>\r\n</div>\r\n<div *ngIf=\"theorySmall\" style=\"margin-top: 20px;\" class=\"ui message\">\r\n  <p><code>Observable.subscribe()</code> makes a huge\r\n    difference. Before we had a synchronous assignment of the array\r\n    of lectures to the <code>lectures</code> property\r\n    and this assignment wanted back the data immediately. Now we wait\r\n    for the <code>Observable</code> to return the array\r\n    of lectures, even if this happens after only a view minutes. Then\r\n    <code>subscribe()</code> passes the emitted array to\r\n    the callback, which sets the component's lecture property.\r\n    You will learn more about observable data in the chapter <a routerLink=\"/http\">HTTP</a>.\r\n  </p>\r\n</div>\r\n<div *ngIf=\"praxis\" style=\"margin-top: 20px;\">\r\n  <h4>Visualization of the Construction:</h4>\r\n  (No changes here)\r\n  <p><img class=\"ui image large centered\" src=\"assets/img/App-Building-6.png\"></p>\r\n\r\n  <div class=\"ui success message\">\r\n    <h4>Summary</h4>\r\n    <ul>\r\n      <li>You learned about services.</li>\r\n      <li>You generated a service and performed constructor injection.</li>\r\n      <li>You made the signature of the methods asynchronous.</li>\r\n    </ul>\r\n  </div>\r\n  <iframe style=\"margin-top:20px; margin-bottom:20px; width:100%; height: 500px\"\r\n    src=\"https://stackblitz.com/edit/wheretogo-step-5?embed=1&file=src/app/timetable/timetable.component.ts&hideNavigation=1\"></iframe>\r\n\r\n<h3 id=\"toc_further_references\">Further references</h3>\r\n<div class=\"ui warning message\">\r\n    <p>Official documentation:</p>\r\n    <ul>\r\n    <li>Angular: <a href=\"https://angular.io/guide/architecture-services\" target=\"_blank\">Introduction to services and dependency injection</a></li>\r\n    <li>Angular: <a href=\"https://angular.io/guide/observables\" target=\"_blank\">Observables</a></li>\r\n    <li>Angular: <a href=\"https://angular.io/guide/observables-in-angular\" target=\"_blank\">Observables in Angular</a></li>\r\n    </ul>\r\n    <p>Advanced concepts:</p>\r\n    <ul>\r\n        <li>Wikipedia: <a href=\"https://en.wikipedia.org/wiki/Dependency_injection\" target=\"_blank\">Dependency injection</a></li>\r\n        <li>Wikipedia: <a href=\"https://en.wikipedia.org/wiki/Reactive_programming\" target=\"_blank\">Reactive programming</a></li>\r\n    </ul>\r\n</div>\r\n\r\n  <div class=\"ui center aligned segment\" style=\"width: 50%; margin: 0 auto\">\r\n    <h4>Your Progress:</h4>\r\n    <mat-progress-bar style=\"margin-bottom:20px;\" mode=\"determinate\" value=\"50\"></mat-progress-bar>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/typescript/typescript.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/typescript/typescript.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 id=\"headline\">TypeScript Introduction:</h2>\r\n<div class=\"ui compact menu\" id=\"header_content\">\r\n        <div class=\"ui simple dropdown item\">\r\n        Content\r\n        <i class=\"dropdown icon\"></i>\r\n        <div class=\"menu\">\r\n          <div class=\"item\"><a href=\"#toc_general\">General usage</a></div>\r\n          <div class=\"item\"><a href=\"#toc_basic_types\">Basic Types</a></div>\r\n          <div class=\"item\"><a href=\"#toc_functions\">Functions</a></div>\r\n          <div class=\"item\"><a href=\"#toc_classes\">Classes</a></div>\r\n          <div class=\"item\"><a href=\"#toc_interfaces\">Interfaces</a></div>\r\n          <div class=\"item\"><a href=\"#toc_decorators\">Decorators</a></div>\r\n          <div class=\"item\"><a href=\"#toc_further_references\">Further references</a></div>\r\n        </div>\r\n        </div>\r\n    </div>\r\n    \r\n<div class=\"language-typescript\" id=\"start_content\">\r\n    <p><a href=\"https://www.typescriptlang.org/\" target=\"_blank\">TypeScript</a> is an open-source programming language developed by Microsoft. It is a syntactical superset of JavaScript and therefore only expands JavaScript, which means that every JavaScript program is also valid TypeScript and you can write as much JavaScript in your TypeScript document as you want.\r\n    </p>\r\n    <p>TypeScript is based on <a href=\"https://www.ecma-international.org/ecma-262/6.0/index.html\" target=\"_blank\">ECMAScript 6</a> proposals (partly taken over and standardized in JavaScript) and it comes with a much stronger type system, as you may know from programming languages like Java and C#.</p>\r\n    <p>Bonus: TypeScript can be transpiled to pure JavaScript and thus enables its use in web frontend development.</p>\r\n\r\n    <h3 id=\"toc_general\">1. General usage</h3>\r\n    <p>The Angular CLI already installs TypScript for you. Apart from that, normally you install TypeScript once again by using npm:</p>\r\n    <pre class=\"command-line language-bash\" data-user=\"user\" data-host=\"localhost\"><code>npm install -g typescript</code></pre>\r\n    <p>And check your installed version with:</p>\r\n    <pre class=\"command-line language-bash\" data-user=\"user\" data-host=\"localhost\"><code>tsc -v</code></pre>\r\n    <p>\r\n    If you want to play around with TypeScript apart from Angular you simply write your TypeScript code into a <code class=\"language-bash\">.ts</code> file and then use the TypeScript compiler <code class=\"language-bash\">tsc</code> to transpile into pure JavaScript. With the <code class=\"language-bash\">--target</code> or <code class=\"language-bash\">-t</code>option to can choose your desired ECMA/JavaScript version.\r\n    </p>\r\n    <pre class=\"command-line language-bash\" data-user=\"user\" data-host=\"localhost\"><code>tsc &lt;your_ts_file&gt;.ts</code></pre>\r\n    Now your ready to run your generated JavaScript file with Node.js:\r\n    <pre class=\"command-line language-bash\" data-user=\"user\" data-host=\"localhost\"><code>node &lt;your_js_file&gt;.js</code></pre>\r\n\r\n    <h3 id=\"toc_basic_types\">2. Basic Types</h3>\r\n    <p>When you declare and initialise a variable, it has always the same strucuture:</p>\r\n    <pre><code>let name: type = value;</code></pre>\r\n\r\n    <h5>Number</h5>\r\n    <p>As in JavaScript all numbers are floating point values:</p>\r\n\t<pre><code>let age: number = 5;\r\nlet pi: number = 3.14;</code></pre>\r\n\r\n\t<h5>String</h5>\r\n\t<pre><code>let firstname: string = \"Max\";\r\nlet lastname: string = 'Mustermann';</code></pre>\r\n\r\n\t<br/><p>With template strings expressions can be embedded directly into the string:</p>\r\n\t<pre><code>let output: string = `$&#123;firstname&#125; is $&#123;age&#125; years old.`;</code></pre>\r\n\r\n    <h5>Boolean</h5>\r\n\t<pre><code>let workingHard: boolean = true;</code></pre>\r\n\r\n    <h5>Array</h5>\r\n\t<pre><code>let fibonacci: Array&lt;number&gt; = [0, 1, 1, 2, 3, 5, 8, 13];\r\nlet fibonacci2: number[] = [0, 1, 1, 2, 3, 5, 8, ,13];</code></pre>\r\n\r\n    <h5>Object</h5>\r\n    Object represents the non-primitive type (anything apart from number, string, boolean, symbol, null or undefined).\r\n\r\n    <h5>Enum</h5>\r\n    <p>An enum gives proper names to a set of numeric values. By default enums begin at 0 and and count on, but you can set values manually for each member.</p>\r\n    <pre><code>enum Day &#123;Mon, Tue, Wed, Thu, Fri, Sat, Sun&#125;\r\nlet d: Day = Day.Mon;</code></pre>\r\n\r\n    <h5>Any</h5>\r\n    <p> You can always use the fallback value <code>any</code> if you don't know which data type you will get back.</p>\r\n    <pre><code>let differentValueTypes: any[] = [5, &#123; firstname: \"Max Mustermann\" &#125;, function() &#123;\r\n    console.warn(\"Nothing inside.\");\r\n&#125;];</code></pre>\r\n\r\n    <h5>Tuple</h5>\r\n    <p>You can express the example above also as a fixed-length array with known, but different, types:</p>\r\n    <pre><code>let differentValueTypes: [number, object, object] = [5, &#123; firstname: \"Max Mustermann\" &#125;, function() &#123;\r\n    console.warn(\"Nothing inside.\");\r\n&#125;];</code></pre>\r\n\r\n    <h5>Union type</h5>\r\n    <p>If a value can be one of several types you can use a vertical bar to separate each acceptable type:</p>\r\n    <pre><code>let id: string | number;</code></pre>\r\n\r\n    <h3 id=\"toc_functions\">3. Functions</h3>\r\n    Functions are a key part in each TypeScript application and work pretty much like in JavaScript except for the added types:\r\n    <pre><code>//Named function\r\nfunction print(message: string): void &#123;\r\n    console.log(message);\r\n&#125;\r\n// Anonymous function\r\nlet printFunc = function(message: string): void &#123; console.log(message); &#125;;</code></pre>\r\n\r\n    <h5>Optional, default and rest parameters</h5>\r\n    <p>Furthermore parameters can be marked with <code>?</code> as optional, can have a default value if none is provided or may exist in a number that is not known beforehand:</p>\r\n    <pre><code>function (firstName?: string, lastName = \"Not provided\", ...middleNames: string[]) &#123;\r\n    return firstName + \" \" + middleNames.join(\" \") + lastName;\r\n&#125;</code></pre>\r\n\r\n    <h5>Overload</h5>\r\n    <p>JavaScript enables functions to return different typed values dependending on which and how many parameters were passed into it. To still allow type checking in TypeScript you can supply a list of multiple function types as overloads:</p>\r\n    <pre><code>function saveFile(file: string): boolean;\r\nfunction saveFile(file: File): void;\r\nfunction saveFile(file): any &#123;\r\n    // Check with which input we are working\r\n    if (typeof file == \"string\") &#123;\r\n        // Try to find file by its path or create new one\r\n        // Write file to disk\r\n        // Return if newly created or not\r\n    &#125;\r\n    if (typeof file == \"File\") &#123;\r\n        // Write file to disk\r\n    &#125;\r\n&#125;</code></pre>\r\n\r\n    <h3 id=\"toc_classes\">4. Classes</h3>\r\n    The general syntax looks and works familiar if you compare it to Java. A simple example class Animal with the properties <code>age</code>, <code>name</code> and <code>owner</code>, the method <code>changeOwner</code> and a <code>constructor</code> looks like this:\r\n    <pre><code>class Animal &#123;\r\n    name: string;\r\n    age: number;\r\n    owner: string;\r\n\r\n    constructor(name: string, age: number, owner: string) &#123;\r\n        this.name = name;\r\n        this.age = age;\r\n        this.owner = owner;\r\n    &#125;\r\n\r\n    changeOwner(newOwner: string) &#123;\r\n        this.owner = newOwner;\r\n    &#125;\r\n&#125;\r\n\r\nlet myAnimal = new Animal(\"dog\", \"2\", \"max mustermann\");\r\n</code></pre>\r\n\r\n    <p>Member properties of the class are accessed through prepending <code>this.</code>. An instance of the class is created through using <code>new</code>, which calls our previously defined constructor.</p>\r\n\r\n    <p>The use of <code>public</code> on constructor arguments is a shorthand to automatically creates these properties:</p>\r\n\r\n    <pre><code>class Animal &#123;\r\n    constructor(public name: string, public age: number, public owner: string) &#123;\r\n    &#125;\r\n&#125;</code></pre>\r\n\r\n    <p>A notable difference to other programing languages: Only <strong>one</strong> constructor per class is possible!</p>\r\n\r\n    <h5>Inheritance</h5>\r\n    <p>Also known from object-oriented programing, with the keyword  <code>extends</code> an existing class can be extended to create a new one:</p>\r\n\r\n    <pre><code>class Cat extends Animal &#123; \r\n    constructor(name: string, age: number, owner: string) &#123;\r\n        super(name, age, owner);\r\n    &#125;\r\n\r\n    changeOwner(newOwner = \"I am my own king\") &#123;\r\n        console.log(\"I will be always free.\");\r\n        super.changeOwner(newOwner);\r\n    &#125;\r\n&#125;</code></pre>\r\n\r\n    <p>You can use the methods and constructors of the base class with  <code>super</code>. The methods can be overwritten. If a derived class (Cat) is instantiated, you automatically have the attributes and methods of the parent classes (Animal), too.</p>\r\n\r\n    <h5>Modifiers</h5>\r\n    <p>Access to methods and properties can be controlled through the typical modifiers:</p>\r\n    <ul>\r\n        <li><code>public</code>: Default value; free access to the declared members throughout our program.</li>\r\n        <li><code>private</code>: Declared members can only be accessed from within the class; no access from outside.</li>\r\n        <li><code>protected</code>: Much like <code>private</code>, but members declared protected are also accessible within derived classes.</li>\r\n    </ul>\r\n\r\n    <pre><code>class Animal &#123;\r\n    public name: string;\r\n    protected age: number;\r\n    protected owner: string;\r\n\r\n    private changeOwner(newOwner = \"I am my own king\") &#123;\r\n        console.log(\"I will be always free.\");\r\n        super.changeOwner(newOwner);\r\n    &#125;\r\n&#125;</code></pre>\r\n\r\n    <h5>Accessors</h5>\r\n    <p>To intercept the call to members of an object and control how members are accessed and modified, while retaining the ease of the <code>object.member</code> access, its possible to use <code>get</code> and <code>set</code>:</p>\r\n\r\n    <pre><code>class Person &#123;\r\n    private _name: string;\r\n    \r\n    get name(): string &#123;\r\n        return this._name.toLowerCase();\r\n    &#125;\r\n\r\n    set name(newName: string): void &#123;\r\n        if(newName) &#123;\r\n            throw new Error(\"Name can not be empty or null!\");\r\n        &#125;\r\n        this._name = newName;\r\n    &#125;\r\n&#125;</code></pre>\r\n\r\n    <h5>Static properties</h5>\r\n    <p>Apart from instance members of a class, its also possible to add <code>static</code> members, which are visibile on the class itself and not on a particular instance:</p>\r\n\r\n    <pre><code>class Animal &#123;\r\n    static counter: number = 0;\r\n\r\n    constructor(name: string, age: number, owner: string) &#123;\r\n        this.name = name;\r\n        this.age = age;\r\n        this.owner = owner;\r\n\r\n        Animal.counter++;\r\n    &#125;\r\n&#125;</code></pre>\r\n\r\n    <h5>Abstract classes</h5>\r\n    <p>It's even possible to define base classes, which can not be instantiated directly, but do already contain some implementation logic. Instead only from these base classes derived classes, which have to implement all abstract methods, can be instantiated.</p>\r\n\r\n<pre><code>abstract class Animal &#123;\r\n    abstract move(): void;\r\n    print() : void &#123;\r\n        console.log(\"Animal has number \" + Animal.counter);\r\n    &#125;\r\n&#125;</code></pre>\r\n\r\n    <div class=\"ui warning message\">\r\n        Be aware that JavaScript uses the prototype-chain under the hood to build up the object-oriented class hierarchies. This approach works different then the object-oriented approach in, for instance, Java. The newly introduced <code>class</code> and other related keywords are only syntactic sugar above this concept.<br>\r\n        A deeper understanding is not needed in our tutorial, but to thoroughly grasp JavaScript one should address this issue:\r\n        <ul>\r\n            <li><a href=\"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes\" target=\"_blank\">MDN: Object prototypes</a></li>\r\n            <li><a href=\"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS\" target=\"_blank\">MDN: Object-oriented JavaScript for beginners</a></li>\r\n            <li><a href=\"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics\" target=\"_blank\">MDN: JavaScript object basics</a></li>\r\n            <li><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain\" target=\"_blank\">MDN: Inheritance and the prototype chain</a></li>\r\n        </ul>\r\n    </div>\r\n    <h3 id=\"toc_interfaces\">5. Interfaces</h3>\r\n    <p>Type checking in TypeScript looks only at the <i>shape</i> the values have (cf. <a href=\"https://en.wikipedia.org/wiki/Duck_typing\" target=\"_blank\">duck typing</a>). Consequentially interfaces are naming these types and define a contract within your code which typed values must be at least included to fulfill this contract (additional properties are allowed).</p>\r\n    <pre><code>function printID(identifiedObj: &#123;id: string&#125;) &#123;\r\n    console.log(identifiedObj.id);\r\n&#125;</code></pre>\r\n    <p>Here the type checker tests for each object passed in as parameter if it has at least a property called <code>id</code> of type <code>string</code>.<br>\r\n    We can now express this requirement as an interface, too:</p>\r\n<pre><code>interface IdentifiedValue &#123;\r\n    id: string;\r\n&#125;\r\n\r\nfunction printID(identifiedObj: IdentifiedValue) &#123;\r\n    console.log(identifiedObj.id);\r\n&#125;</code></pre>\r\n\r\n    <h5>Optional and readonly properties</h5>\r\n    <p>Optional properties have a  <code>?</code> behind their name, e.g. <code>owner?: string;</code>, and are not required.</p>\r\n  \r\n    <pre><code>interface Contact &#123;\r\n    firstname: string;\r\n    lastname: string;\r\n    age?: number | string;\r\n&#125;</code></pre>\r\n\r\n    <p>Furthermore properties can defined to be not modifiable after the object was created:</p>\r\n    <pre><code>interface Contact &#123;\r\n    readonly id: string;\r\n    firstname: string;\r\n    lastname: string;\r\n&#125;</code></pre>\r\n\r\n    <h5>Indexable types</h5>\r\n    <p>Interfaces can also be defined by an indexable key (cf. dictionary). For instance the interface determines the index signature to index through the object and the return type for all elements of the array.</p>\r\n    \r\n    <pre><code>interface StringArray &#123;\r\n    [index: number]: string;\r\n&#125;\r\n\r\nlet myStringArray: StringArray;\r\nmyStringArray = [\"Max\", \"Manuela\"];\r\n\r\nlet myString: string = myStringArray[1];\r\n</code></pre>\r\n\r\n    <h5>Function types</h5>\r\n    <p>Interfaces are even capable to describe function signatures. Therefore we define the parameter list and the return type:</p>\r\n\r\n    <pre><code>interface EqualsFunc &#123;\r\n(anObject: object, secondObject: object): boolean\r\n&#125;</code></pre>\r\n\r\n    <h5>Class types</h5>\r\n    <p>A common use case is to enforce a class to meet a defined set of named and typed values. The keyword to implement such an interface is <code>implements</code>.</p>\r\n    <pre><code>\r\ninterface File &#123; \r\n    path: string;\r\n&#125;\r\n\r\nclass BinaryFile implements File &#123;\r\n    path: string;\r\n    encoding: string;\r\n&#125;</code></pre>\r\n\r\n    <h5>Extending Interfaces</h5>\r\n    <p>Last but not least its possible for an interface to extend another interface with new properties and take over the existing members:</p>\r\n    <pre><code>interface List &#123;\r\n    next(): object;\r\n&#125;\r\n\r\ninterface LinkedList extends List &#123;\r\n    previous(): object;\r\n&#125;</code></pre>\r\n\r\n    <h3 id=\"toc_decorators\">6. Decorators</h3>\r\n\r\n    <pre><code>@Component(&#123;\r\n    // Configuration object\r\n&#125;)\r\nclass myComponent &#123; &#125;</code></pre>\r\n\r\n    <p>With decorators metadata and additional or modifying features can be annotated to classes and class members. Especially the Angular framework makes heavy use of this technique to mark classes as a components and modules and to configure them. Be aware that this feature is still experimental in TypeScript and may change in future releases.<br>\r\n    Expressions are added with <code>@expression</code>, where <code>expression</code> is a function called at runtime with information about the decorated declaration.</p>\r\n</div>\r\n\r\n<div class=\"ui message\" style=\"margin-top: 30px; margin-bottom: 30px;\">\r\n    <p>Now that you know all these things, you are ready for a bigger project. Feel free to come back any time, if you\r\n        want to look up something.</p>\r\n</div>\r\n\r\n<h3 id=\"toc_further_references\">Further references</h3>\r\n  <p class=\"ui info message\">To help you with all the keywords, concepts and syntax:<br>\r\n    <a href=\"https://github.com/iLoveCodingOrg/javascript-cheatsheet/raw/master/js-cheatsheet.pdf\" download=\"js_cheat_sheet\" target=\"_blank\"><strong>JavaScript Cheat Sheet</strong></a>\r\n  </p>\r\n  <div class=\"ui warning message\">\r\n    <p><strong>Official documentation:</strong></p>\r\n    <ul>\r\n        <li><a href=\"https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html\" target=\"_blank\">TypeScript in 5 minutes</a></li>\r\n        <li><a href=\"https://www.typescriptlang.org/docs/handbook/basic-types.html\" target=\"_blank\">TypeScript: Basic Types</a></li>\r\n        <li><a href=\"https://www.typescriptlang.org/docs/handbook/variable-declarations.html\" target=\"_blank\">TypeScript: Variable Declarations</a></li>\r\n        <li><a href=\"https://www.typescriptlang.org/docs/handbook/interfaces.html\" target=\"_blank\">TypeScript: Interfaces</a></li>\r\n        <li><a href=\"https://www.typescriptlang.org/docs/handbook/classes.html\" target=\"_blank\">TypeScript: Classes</a></li>\r\n        <li><a href=\"https://www.typescriptlang.org/docs/handbook/functions.html\" target=\"_blank\">TypeScript: Functions</a></li>\r\n        <li><a href=\"https://www.typescriptlang.org/docs/handbook/decorators.html\" target=\"_blank\">TypeScript: Decorators</a></li>\r\n        <li><a href=\"https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html\" target=\"_blank\">TypeScript: Do's and Don'ts</a></li>\r\n    </ul>\r\n    <p><strong>Advanced concepts:</strong></p>\r\n    <ul>\r\n        <li><a href=\"https://en.wikipedia.org/wiki/Source-to-source_compiler\" target=\"_blank\">Wikipedia: Transpiler</a></li>\r\n        <li><a href=\"https://www.typescriptlang.org/docs/handbook/compiler-options.html\" target=\"_blank\">TypeScript: Compiler Options</a></li>\r\n        <li><a href=\"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html\" target=\"_blank\">TypeScript: tsconfig.json</a></li>\r\n        <li>To review your basics in JS: <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript\" target=\"_blank\">MDN web docs &gt; JavaScript</a></li>\r\n        <li>What is linting and why to use it?: <a href=\"https://en.wikipedia.org/wiki/Lint_(software)\" target=\"_blank\">Wikipedia &gt; lint (software)</a></li>\r\n        <li><a href=\"https://eslint.org/\" target=\"_blank\">ESLint for JavaScript</a></li>\r\n    </ul>\r\n  </div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.about = false;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.aboutFunc = function () {
        this.about = true;
        return this.about;
    };
    AboutComponent.prototype.hideAbout = function () {
        this.about = false;
        return this.about;
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _environment_environment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environment/environment.component */ "./src/app/environment/environment.component.ts");
/* harmony import */ var _first_app_first_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./first-app/first-app.component */ "./src/app/first-app/first-app.component.ts");
/* harmony import */ var _typescript_typescript_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./typescript/typescript.component */ "./src/app/typescript/typescript.component.ts");
/* harmony import */ var _project_overview_project_overview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project-overview/project-overview.component */ "./src/app/project-overview/project-overview.component.ts");
/* harmony import */ var _application_application_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./application/application.component */ "./src/app/application/application.component.ts");
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _components_formmodules_directives_components_formmodules_directives_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components-formmodules-directives/components-formmodules-directives.component */ "./src/app/components-formmodules-directives/components-formmodules-directives.component.ts");
/* harmony import */ var _reusable_components_reusable_components_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reusable-components/reusable-components.component */ "./src/app/reusable-components/reusable-components.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _routing_routing_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./routing/routing.component */ "./src/app/routing/routing.component.ts");
/* harmony import */ var _http_http_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./http/http.component */ "./src/app/http/http.component.ts");
/* harmony import */ var _finish_app_finish_app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./finish-app/finish-app.component */ "./src/app/finish-app/finish-app.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");

















var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'environment', component: _environment_environment_component__WEBPACK_IMPORTED_MODULE_4__["EnvironmentComponent"], runGuardsAndResolvers: 'always' },
    { path: 'first-app', component: _first_app_first_app_component__WEBPACK_IMPORTED_MODULE_5__["FirstAppComponent"] },
    { path: 'typescript', component: _typescript_typescript_component__WEBPACK_IMPORTED_MODULE_6__["TypescriptComponent"] },
    { path: 'project-overview', component: _project_overview_project_overview_component__WEBPACK_IMPORTED_MODULE_7__["ProjectOverviewComponent"] },
    { path: 'application', component: _application_application_component__WEBPACK_IMPORTED_MODULE_8__["ApplicationComponent"] },
    { path: 'components', component: _components_components_component__WEBPACK_IMPORTED_MODULE_9__["ComponentsComponent"] },
    { path: 'components-formmodules-directives', component: _components_formmodules_directives_components_formmodules_directives_component__WEBPACK_IMPORTED_MODULE_10__["ComponentsFormmodulesDirectivesComponent"] },
    { path: 'reusable-components', component: _reusable_components_reusable_components_component__WEBPACK_IMPORTED_MODULE_11__["ReusableComponentsComponent"] },
    { path: 'services', component: _services_services_component__WEBPACK_IMPORTED_MODULE_12__["ServicesComponent"] },
    { path: 'routing', component: _routing_routing_component__WEBPACK_IMPORTED_MODULE_13__["RoutingComponent"] },
    { path: 'http', component: _http_http_component__WEBPACK_IMPORTED_MODULE_14__["HttpComponent"] },
    { path: 'finish-app', component: _finish_app_finish_app_component__WEBPACK_IMPORTED_MODULE_15__["FinishAppComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { onSameUrlNavigation: "reload" })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _prism_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../prism.js */ "./src/prism.js");
/* harmony import */ var _prism_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_prism_js__WEBPACK_IMPORTED_MODULE_4__);





var AppComponent = /** @class */ (function () {
    function AppComponent(router, location) {
        this.router = router;
        this.location = location;
        this.title = 'Learn Angular!';
        this.hideBackButton = false;
        this.hideNextButton = false;
        this.routerLinks = ["/home", "/environment", "/first-app", "/typescript", "/project-overview",
            "/application", "/components", "/components-formmodules-directives", "/reusable-components",
            "/services", "/routing", "/http", "/finish-app"];
    }
    AppComponent.prototype.ngOnInit = function () {
        _prism_js__WEBPACK_IMPORTED_MODULE_4__["manual"] = true;
    };
    AppComponent.prototype.onActivate = function () {
        window.scroll(0, 0);
    };
    AppComponent.prototype.getHideNextButton = function () {
        this.routerLink = this.router.url;
        if (this.routerLink === this.routerLinks[0] || this.routerLink === this.routerLinks[this.routerLinks.length - 1]) {
            this.hideNextButton = true;
        }
        else
            this.hideNextButton = false;
        return this.hideNextButton;
    };
    AppComponent.prototype.getHideBackButton = function () {
        this.routerLink = this.router.url;
        if (this.routerLink === this.routerLinks[0]) {
            this.hideBackButton = true;
        }
        else
            this.hideBackButton = false;
        return this.hideBackButton;
    };
    AppComponent.prototype.getNext = function () {
        var e_1, _a;
        this.routerLink = this.router.url;
        var counter = -1;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.routerLinks), _c = _b.next(); !_c.done; _c = _b.next()) {
                var r = _c.value;
                counter++;
                if (this.routerLink === r) {
                    this.routerLink = this.routerLinks[counter + 1];
                    break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this.routerLink;
    };
    AppComponent.prototype.getLast = function () {
        var e_2, _a;
        this.routerLink = this.router.url;
        var counter = -1;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.routerLinks), _c = _b.next(); !_c.done; _c = _b.next()) {
                var r = _c.value;
                counter++;
                if (this.routerLink === r) {
                    this.routerLink = this.routerLinks[counter - 1];
                    break;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return this.routerLink;
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _environment_environment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./environment/environment.component */ "./src/app/environment/environment.component.ts");
/* harmony import */ var _first_app_first_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./first-app/first-app.component */ "./src/app/first-app/first-app.component.ts");
/* harmony import */ var _typescript_typescript_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./typescript/typescript.component */ "./src/app/typescript/typescript.component.ts");
/* harmony import */ var _project_overview_project_overview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./project-overview/project-overview.component */ "./src/app/project-overview/project-overview.component.ts");
/* harmony import */ var _application_application_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./application/application.component */ "./src/app/application/application.component.ts");
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _components_formmodules_directives_components_formmodules_directives_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components-formmodules-directives/components-formmodules-directives.component */ "./src/app/components-formmodules-directives/components-formmodules-directives.component.ts");
/* harmony import */ var _reusable_components_reusable_components_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reusable-components/reusable-components.component */ "./src/app/reusable-components/reusable-components.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _routing_routing_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./routing/routing.component */ "./src/app/routing/routing.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _http_http_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./http/http.component */ "./src/app/http/http.component.ts");
/* harmony import */ var _finish_app_finish_app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./finish-app/finish-app.component */ "./src/app/finish-app/finish-app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _environment_environment_component__WEBPACK_IMPORTED_MODULE_6__["EnvironmentComponent"],
                _first_app_first_app_component__WEBPACK_IMPORTED_MODULE_7__["FirstAppComponent"],
                _typescript_typescript_component__WEBPACK_IMPORTED_MODULE_8__["TypescriptComponent"],
                _project_overview_project_overview_component__WEBPACK_IMPORTED_MODULE_9__["ProjectOverviewComponent"],
                _application_application_component__WEBPACK_IMPORTED_MODULE_10__["ApplicationComponent"],
                _components_components_component__WEBPACK_IMPORTED_MODULE_11__["ComponentsComponent"],
                _components_formmodules_directives_components_formmodules_directives_component__WEBPACK_IMPORTED_MODULE_12__["ComponentsFormmodulesDirectivesComponent"],
                _reusable_components_reusable_components_component__WEBPACK_IMPORTED_MODULE_13__["ReusableComponentsComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_14__["ServicesComponent"],
                _routing_routing_component__WEBPACK_IMPORTED_MODULE_15__["RoutingComponent"],
                _http_http_component__WEBPACK_IMPORTED_MODULE_17__["HttpComponent"],
                _finish_app_finish_app_component__WEBPACK_IMPORTED_MODULE_18__["FinishAppComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_22__["AboutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__["NgbModule"]
            ],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_19__["APP_BASE_HREF"], useValue: '/' },
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_19__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_19__["HashLocationStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/application/application.component.ts":
/*!******************************************************!*\
  !*** ./src/app/application/application.component.ts ***!
  \******************************************************/
/*! exports provided: ApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationComponent", function() { return ApplicationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_modi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/modi.service */ "./src/app/shared/modi.service.ts");
/* harmony import */ var _prism_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../prism.js */ "./src/prism.js");
/* harmony import */ var _prism_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prism_js__WEBPACK_IMPORTED_MODULE_3__);




var ApplicationComponent = /** @class */ (function () {
    function ApplicationComponent(service) {
        this.service = service;
    }
    ApplicationComponent.prototype.ngOnInit = function () {
        this.getModus();
        this.theorySmall = this.modus.theorySmall;
        this.theoryLarge = this.modus.theoryLarge;
        this.praxis = this.modus.praxis;
    };
    ApplicationComponent.prototype.ngAfterViewInit = function () {
        _prism_js__WEBPACK_IMPORTED_MODULE_3__["highlightAll"]();
    };
    ApplicationComponent.prototype.getModus = function () {
        var _this = this;
        this.service.getModus()
            .subscribe(function (modus) { return _this.modus = modus; });
    };
    ApplicationComponent.prototype.copy = function (text) {
        navigator.clipboard.writeText(text);
    };
    ApplicationComponent.ctorParameters = function () { return [
        { type: _shared_modi_service__WEBPACK_IMPORTED_MODULE_2__["ModiService"] }
    ]; };
    ApplicationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-application',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./application.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/application/application.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_modi_service__WEBPACK_IMPORTED_MODULE_2__["ModiService"]])
    ], ApplicationComponent);
    return ApplicationComponent;
}());



/***/ }),

/***/ "./src/app/components-formmodules-directives/components-formmodules-directives.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/components-formmodules-directives/components-formmodules-directives.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ComponentsFormmodulesDirectivesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsFormmodulesDirectivesComponent", function() { return ComponentsFormmodulesDirectivesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_modi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/modi.service */ "./src/app/shared/modi.service.ts");
/* harmony import */ var _prism_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../prism.js */ "./src/prism.js");
/* harmony import */ var _prism_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prism_js__WEBPACK_IMPORTED_MODULE_3__);




var ComponentsFormmodulesDirectivesComponent = /** @class */ (function () {
    function ComponentsFormmodulesDirectivesComponent(service) {
        this.service = service;
    }
    ComponentsFormmodulesDirectivesComponent.prototype.ngOnInit = function () {
        this.getModus();
        this.theorySmall = this.modus.theorySmall;
        this.theoryLarge = this.modus.theoryLarge;
        this.praxis = this.modus.praxis;
    };
    ComponentsFormmodulesDirectivesComponent.prototype.ngAfterViewInit = function () {
        _prism_js__WEBPACK_IMPORTED_MODULE_3__["highlightAll"]();
    };
    ComponentsFormmodulesDirectivesComponent.prototype.getModus = function () {
        var _this = this;
        this.service.getModus()
            .subscribe(function (modus) { return _this.modus = modus; });
        console.log(this.modus);
    };
    ComponentsFormmodulesDirectivesComponent.ctorParameters = function () { return [
        { type: _shared_modi_service__WEBPACK_IMPORTED_MODULE_2__["ModiService"] }
    ]; };
    ComponentsFormmodulesDirectivesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-components-formmodules-directives',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./components-formmodules-directives.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components-formmodules-directives/components-formmodules-directives.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_modi_service__WEBPACK_IMPORTED_MODULE_2__["ModiService"]])
    ], ComponentsFormmodulesDirectivesComponent);
    return ComponentsFormmodulesDirectivesComponent;
}());



/***/ }),

/***/ "./src/app/components/components.component.ts":
/*!****************************************************!*\
  !*** ./src/app/components/components.component.ts ***!
  \****************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_modi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/modi.service */ "./src/app/shared/modi.service.ts");
/* harmony import */ var _prism_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../prism.js */ "./src/prism.js");
/* harmony import */ var _prism_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prism_js__WEBPACK_IMPORTED_MODULE_3__);




var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent(service) {
        this.service = service;
        this.today = Date.now();
    }
    ComponentsComponent.prototype.ngOnInit = function () {
        this.getModus();
        this.theorySmall = this.modus.theorySmall;
        this.theoryLarge = this.modus.theoryLarge;
        this.praxis = this.modus.praxis;
    };
    ComponentsComponent.prototype.ngAfterViewInit = function () {
        _prism_js__WEBPACK_IMPORTED_MODULE_3__["highlightAll"]();
    };
    ComponentsComponent.prototype.getModus = function () {
        var _this = this;
        this.service.getModus()
            .subscribe(function (modus) { return _this.modus = modus; });
    };
    ComponentsComponent.ctorParameters = function () { return [
        { type: _shared_modi_service__WEBPACK_IMPORTED_MODULE_2__["ModiService"] }
    ]; };
    ComponentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-components',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./components.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_modi_service__WEBPACK_IMPORTED_MODULE_2__["ModiService"]])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "./src/app/environment/environment.component.ts":
/*!******************************************************!*\
  !*** ./src/app/environment/environment.component.ts ***!
  \******************************************************/
/*! exports provided: EnvironmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvironmentComponent", function() { return EnvironmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_modi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/modi.service */ "./src/app/shared/modi.service.ts");
/* harmony import */ var _prism_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../prism.js */ "./src/prism.js");
/* harmony import */ var _prism_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prism_js__WEBPACK_IMPORTED_MODULE_3__);




var EnvironmentComponent = /** @class */ (function () {
    function EnvironmentComponent(service) {
        this.service = service;
    }
    EnvironmentComponent.prototype.ngOnInit = function () {
        this.getModus();
        this.theorySmall = this.modus.theorySmall;
        this.theoryLarge = this.modus.theoryLarge;
        this.praxis = this.modus.praxis;
    };
    EnvironmentComponent.prototype.ngAfterViewInit = function () {
        _prism_js__WEBPACK_IMPORTED_MODULE_3__["highlightAll"]();
    };
    EnvironmentComponent.prototype.getModus = function () {
        var _this = this;
        this.service.getModus()
            .subscribe(function (modus) { return _this.modus = modus; });
    };
    EnvironmentComponent.ctorParameters = function () { return [
        { type: _shared_modi_service__WEBPACK_IMPORTED_MODULE_2__["ModiService"] }
    ]; };
    EnvironmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-environment',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./environment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/environment/environment.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_modi_service__WEBPACK_IMPORTED_MODULE_2__["ModiService"]])
    ], EnvironmentComponent);
    return EnvironmentComponent;
}());



/***/ }),

/***/ "./src/app/finish-app/finish-app.component.ts":
/*!****************************************************!*\
  !*** ./src/app/finish-app/finish-app.component.ts ***!
  \****************************************************/
/*! exports provided: FinishAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinishAppComponent", function() { return FinishAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_modi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/modi.service */ "./src/app/shared/modi.service.ts");
/* harmony import */ var _prism_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../prism.js */ "./src/prism.js");
/* harmony import */ var _prism_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prism_js__WEBPACK_IMPORTED_MODULE_3__);




var FinishAppComponent = /** @class */ (function () {
    function FinishAppComponent(service) {
        this.service = service;
    }
    FinishAppComponent.prototype.ngOnInit = function () {
        this.getModus();
        this.theorySmall = this.modus.theorySmall;
        this.theoryLarge = this.modus.theoryLarge;
        this.praxis = this.modus.praxis;
    };
    FinishAppComponent.prototype.ngAfterViewInit = function () {
        _prism_js__WEBPACK_IMPORTED_MODULE_3__["highlightAll"]();
    };
    FinishAppComponent.prototype.getModus = function () {
        var _this = this;
        this.service.getModus()
            .subscribe(function (modus) { return _this.modus = modus; });
    };
    FinishAppComponent.ctorParameters = function () { return [
        { type: _shared_modi_service__WEBPACK_IMPORTED_MODULE_2__["ModiService"] }
    ]; };
    FinishAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-finish-app',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./finish-app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/finish-app/finish-app.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_modi_service__WEBPACK_IMPORTED_MODULE_2__["ModiService"]])
    ], FinishAppComponent);
    return FinishAppComponent;
}());



/***/ }),

/***/ "./src/app/first-app/first-app.component.ts":
/*!**************************************************!*\
  !*** ./src/app/first-app/first-app.component.ts ***!
  \**************************************************/
/*! exports provided: FirstAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstAppComponent", function() { return FirstAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_modi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/modi.service */ "./src/app/shared/modi.service.ts");
/* harmony import */ var _prism_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../prism.js */ "./src/prism.js");
/* harmony import */ var _prism_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prism_js__WEBPACK_IMPORTED_MODULE_3__);




var FirstAppComponent = /** @class */ (function () {
    function FirstAppComponent(service) {
        this.service = service;
    }
    FirstAppComponent.prototype.ngOnInit = function () {
        this.getModus();
        this.theorySmall = this.modus.theorySmall;
        this.theoryLarge = this.modus.theoryLarge;
        this.praxis = this.modus.praxis;
    };
    FirstAppComponent.prototype.ngAfterViewInit = function () {
        _prism_js__WEBPACK_IMPORTED_MODULE_3__["highlightAll"]();
    };
    FirstAppComponent.prototype.getModus = function () {
        var _this = this;
        this.service.getModus()
            .subscribe(function (modus) { return _this.modus = modus; });
    };
    FirstAppComponent.ctorParameters = function () { return [
        { type: _shared_modi_service__WEBPACK_IMPORTED_MODULE_2__["ModiService"] }
    ]; };
    FirstAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-first-app',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./first-app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/first-app/first-app.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_modi_service__WEBPACK_IMPORTED_MODULE_2__["ModiService"]])
    ], FirstAppComponent);
    return FirstAppComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_modi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/modi.service */ "./src/app/shared/modi.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(service) {
        this.service = service;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getModi();
    };
    HomeComponent.prototype.getModi = function () {
        var _this = this;
        this.service.getModi()
            .subscribe(function (modi) { return _this.modi = modi; });
    };
    HomeComponent.prototype.theorist = function () {
        var _this = this;
        this.service.setModus(this.modi[0])
            .subscribe(function (modus) { return _this.modus = modus; });
    };
    HomeComponent.prototype.practitioner = function () {
        var _this = this;
        this.service.setModus(this.modi[1])
            .subscribe(function (modus) { return _this.modus = modus; });
    };
    HomeComponent.prototype.both = function () {
        var _this = this;
        this.service.setModus(this.modi[2])
            .subscribe(function (modus) { return _this.modus = modus; });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _shared_modi_service__WEBPACK_IMPORTED_MODULE_2__["ModiService"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_modi_service__WEBPACK_IMPORTED_MODULE_2__["ModiService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http/http.component.ts":
/*!****************************************!*\
  !*** ./src/app/http/http.component.ts ***!
  \****************************************/
/*! exports provided: HttpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpComponent", function() { return HttpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_modi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/modi.service */ "./src/app/shared/modi.service.ts");
/* harmony import */ var _prism_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../prism.js */ "./src/prism.js");
/* harmony import */ var _prism_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prism_js__WEBPACK_IMPORTED_MODULE_3__);




var HttpComponent = /** @class */ (function () {
    function HttpComponent(service) {
        this.service = service;
    }
    HttpComponent.prototype.ngOnInit = function () {
        this.getModus();
        this.theorySmall = this.modus.theorySmall;
        this.theoryLarge = this.modus.theoryLarge;
        this.praxis = this.modus.praxis;
    };
    HttpComponent.prototype.ngAfterViewInit = function () {
        _prism_js__WEBPACK_IMPORTED_MODULE_3__["highlightAll"]();
    };
    HttpComponent.prototype.getModus = function () {
        var _this = this;
        this.service.getModus()
            .subscribe(function (modus) { return _this.modus = modus; });
    };
    HttpComponent.ctorParameters = function () { return [
        { type: _shared_modi_service__WEBPACK_IMPORTED_MODULE_2__["ModiService"] }
    ]; };
    HttpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-http',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./http.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/http/http.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_modi_service__WEBPACK_IMPORTED_MODULE_2__["ModiService"]])
    ], HttpComponent);
    return HttpComponent;
}());



/***/ }),

/***/ "./src/app/project-overview/project-overview.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/project-overview/project-overview.component.ts ***!
  \****************************************************************/
/*! exports provided: ProjectOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectOverviewComponent", function() { return ProjectOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_modi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/modi.service */ "./src/app/shared/modi.service.ts");



var ProjectOverviewComponent = /** @class */ (function () {
    function ProjectOverviewComponent(service) {
        this.service = service;
    }
    ProjectOverviewComponent.prototype.ngOnInit = function () {
        this.getModus();
        this.theorySmall = this.modus.theorySmall;
        this.theoryLarge = this.modus.theoryLarge;
        this.praxis = this.modus.praxis;
    };
    ProjectOverviewComponent.prototype.getModus = function () {
        var _this = this;
        this.service.getModus()
            .subscribe(function (modus) { return _this.modus = modus; });
    };
    ProjectOverviewComponent.ctorParameters = function () { return [
        { type: _shared_modi_service__WEBPACK_IMPORTED_MODULE_2__["ModiService"] }
    ]; };
    ProjectOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-overview',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-overview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/project-overview/project-overview.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_modi_service__WEBPACK_IMPORTED_MODULE_2__["ModiService"]])
    ], ProjectOverviewComponent);
    return ProjectOverviewComponent;
}());



/***/ }),

/***/ "./src/app/reusable-components/reusable-components.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/reusable-components/reusable-components.component.ts ***!
  \**********************************************************************/
/*! exports provided: ReusableComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReusableComponentsComponent", function() { return ReusableComponentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_modi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/modi.service */ "./src/app/shared/modi.service.ts");
/* harmony import */ var _prism_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../prism.js */ "./src/prism.js");
/* harmony import */ var _prism_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prism_js__WEBPACK_IMPORTED_MODULE_3__);




var ReusableComponentsComponent = /** @class */ (function () {
    function ReusableComponentsComponent(service) {
        this.service = service;
    }
    ReusableComponentsComponent.prototype.ngOnInit = function () {
        this.getModus();
        this.theorySmall = this.modus.theorySmall;
        this.theoryLarge = this.modus.theoryLarge;
        this.praxis = this.modus.praxis;
    };
    ReusableComponentsComponent.prototype.ngAfterViewInit = function () {
        _prism_js__WEBPACK_IMPORTED_MODULE_3__["highlightAll"]();
    };
    ReusableComponentsComponent.prototype.getModus = function () {
        var _this = this;
        this.service.getModus()
            .subscribe(function (modus) { return _this.modus = modus; });
    };
    ReusableComponentsComponent.ctorParameters = function () { return [
        { type: _shared_modi_service__WEBPACK_IMPORTED_MODULE_2__["ModiService"] }
    ]; };
    ReusableComponentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reusable-components',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reusable-components.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reusable-components/reusable-components.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_modi_service__WEBPACK_IMPORTED_MODULE_2__["ModiService"]])
    ], ReusableComponentsComponent);
    return ReusableComponentsComponent;
}());



/***/ }),

/***/ "./src/app/routing/routing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/routing/routing.component.ts ***!
  \**********************************************/
/*! exports provided: RoutingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingComponent", function() { return RoutingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_modi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/modi.service */ "./src/app/shared/modi.service.ts");
/* harmony import */ var _prism_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../prism.js */ "./src/prism.js");
/* harmony import */ var _prism_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prism_js__WEBPACK_IMPORTED_MODULE_3__);




var RoutingComponent = /** @class */ (function () {
    function RoutingComponent(service) {
        this.service = service;
    }
    RoutingComponent.prototype.ngOnInit = function () {
        this.getModus();
        this.theorySmall = this.modus.theorySmall;
        this.theoryLarge = this.modus.theoryLarge;
        this.praxis = this.modus.praxis;
    };
    RoutingComponent.prototype.ngAfterViewInit = function () {
        _prism_js__WEBPACK_IMPORTED_MODULE_3__["highlightAll"]();
    };
    RoutingComponent.prototype.getModus = function () {
        var _this = this;
        this.service.getModus()
            .subscribe(function (modus) { return _this.modus = modus; });
    };
    RoutingComponent.ctorParameters = function () { return [
        { type: _shared_modi_service__WEBPACK_IMPORTED_MODULE_2__["ModiService"] }
    ]; };
    RoutingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-routing',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./routing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/routing/routing.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_modi_service__WEBPACK_IMPORTED_MODULE_2__["ModiService"]])
    ], RoutingComponent);
    return RoutingComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_modi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/modi.service */ "./src/app/shared/modi.service.ts");
/* harmony import */ var _prism_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../prism.js */ "./src/prism.js");
/* harmony import */ var _prism_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prism_js__WEBPACK_IMPORTED_MODULE_3__);




var ServicesComponent = /** @class */ (function () {
    function ServicesComponent(service) {
        this.service = service;
    }
    ServicesComponent.prototype.ngOnInit = function () {
        this.getModus();
        this.theorySmall = this.modus.theorySmall;
        this.theoryLarge = this.modus.theoryLarge;
        this.praxis = this.modus.praxis;
    };
    ServicesComponent.prototype.ngAfterViewInit = function () {
        _prism_js__WEBPACK_IMPORTED_MODULE_3__["highlightAll"]();
    };
    ServicesComponent.prototype.getModus = function () {
        var _this = this;
        this.service.getModus()
            .subscribe(function (modus) { return _this.modus = modus; });
    };
    ServicesComponent.ctorParameters = function () { return [
        { type: _shared_modi_service__WEBPACK_IMPORTED_MODULE_2__["ModiService"] }
    ]; };
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./services.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_modi_service__WEBPACK_IMPORTED_MODULE_2__["ModiService"]])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/shared/modi.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/modi.service.ts ***!
  \****************************************/
/*! exports provided: ModiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModiService", function() { return ModiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modi */ "./src/app/shared/modi.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var ModiService = /** @class */ (function () {
    function ModiService() {
        this.currentModus = { name: "default", theorySmall: true, theoryLarge: true, praxis: true };
    }
    ModiService.prototype.getModi = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_modi__WEBPACK_IMPORTED_MODULE_2__["MODI"]);
    };
    ModiService.prototype.getModus = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.currentModus);
    };
    ModiService.prototype.setModus = function (modus) {
        this.currentModus = modus;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.currentModus);
    };
    ModiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModiService);
    return ModiService;
}());



/***/ }),

/***/ "./src/app/shared/modi.ts":
/*!********************************!*\
  !*** ./src/app/shared/modi.ts ***!
  \********************************/
/*! exports provided: MODI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODI", function() { return MODI; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var MODI = [
    {
        name: 'theorist',
        theorySmall: true,
        theoryLarge: true,
        praxis: false
    },
    {
        name: 'practitioner',
        theorySmall: false,
        theoryLarge: false,
        praxis: true
    },
    {
        name: 'both',
        theorySmall: true,
        theoryLarge: true,
        praxis: true
    }
];


/***/ }),

/***/ "./src/app/typescript/typescript.component.ts":
/*!****************************************************!*\
  !*** ./src/app/typescript/typescript.component.ts ***!
  \****************************************************/
/*! exports provided: TypescriptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypescriptComponent", function() { return TypescriptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_modi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/modi.service */ "./src/app/shared/modi.service.ts");
/* harmony import */ var _prism_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../prism.js */ "./src/prism.js");
/* harmony import */ var _prism_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prism_js__WEBPACK_IMPORTED_MODULE_3__);




var TypescriptComponent = /** @class */ (function () {
    function TypescriptComponent(service) {
        this.service = service;
    }
    TypescriptComponent.prototype.ngOnInit = function () {
        this.getModus();
        this.theorySmall = this.modus.theorySmall;
        this.theoryLarge = this.modus.theoryLarge;
        this.praxis = this.modus.praxis;
    };
    TypescriptComponent.prototype.ngAfterViewInit = function () {
        _prism_js__WEBPACK_IMPORTED_MODULE_3__["highlightAll"]();
    };
    TypescriptComponent.prototype.getModus = function () {
        var _this = this;
        this.service.getModus()
            .subscribe(function (modus) { return _this.modus = modus; });
    };
    TypescriptComponent.ctorParameters = function () { return [
        { type: _shared_modi_service__WEBPACK_IMPORTED_MODULE_2__["ModiService"] }
    ]; };
    TypescriptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-typescript',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./typescript.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/typescript/typescript.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_modi_service__WEBPACK_IMPORTED_MODULE_2__["ModiService"]])
    ], TypescriptComponent);
    return TypescriptComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/prism.js":
/*!**********************!*\
  !*** ./src/prism.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* PrismJS 1.17.1
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+bash+diff+git+less+http+javadoclike+markdown+json+js-templates+typescript+jsdoc+scss+js-extras+jsx+sass&plugins=line-numbers+command-line */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(u){var c=/\blang(?:uage)?-([\w-]+)\b/i,a=0;var _={manual:u.Prism&&u.Prism.manual,disableWorkerMessageHandler:u.Prism&&u.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof L?new L(e.type,_.util.encode(e.content),e.alias):Array.isArray(e)?e.map(_.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++a}),e.__id},clone:function n(e,r){var t,a,i=_.util.type(e);switch(r=r||{},i){case"Object":if(a=_.util.objId(e),r[a])return r[a];for(var o in t={},r[a]=t,e)e.hasOwnProperty(o)&&(t[o]=n(e[o],r));return t;case"Array":return a=_.util.objId(e),r[a]?r[a]:(t=[],r[a]=t,e.forEach(function(e,a){t[a]=n(e,r)}),t);default:return e}}},languages:{extend:function(e,a){var n=_.util.clone(_.languages[e]);for(var r in a)n[r]=a[r];return n},insertBefore:function(n,e,a,r){var t=(r=r||_.languages)[n],i={};for(var o in t)if(t.hasOwnProperty(o)){if(o==e)for(var l in a)a.hasOwnProperty(l)&&(i[l]=a[l]);a.hasOwnProperty(o)||(i[o]=t[o])}var s=r[n];return r[n]=i,_.languages.DFS(_.languages,function(e,a){a===s&&e!=n&&(this[e]=i)}),i},DFS:function e(a,n,r,t){t=t||{};var i=_.util.objId;for(var o in a)if(a.hasOwnProperty(o)){n.call(a,o,a[o],r||o);var l=a[o],s=_.util.type(l);"Object"!==s||t[i(l)]?"Array"!==s||t[i(l)]||(t[i(l)]=!0,e(l,n,o,t)):(t[i(l)]=!0,e(l,n,null,t))}}},plugins:{},highlightAll:function(e,a){_.highlightAllUnder(document,e,a)},highlightAllUnder:function(e,a,n){var r={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};_.hooks.run("before-highlightall",r);for(var t,i=e.querySelectorAll(r.selector),o=0;t=i[o++];)_.highlightElement(t,!0===a,r.callback)},highlightElement:function(e,a,n){var r=function(e){for(;e&&!c.test(e.className);)e=e.parentNode;return e?(e.className.match(c)||[,"none"])[1].toLowerCase():"none"}(e),t=_.languages[r];e.className=e.className.replace(c,"").replace(/\s+/g," ")+" language-"+r;var i=e.parentNode;i&&"pre"===i.nodeName.toLowerCase()&&(i.className=i.className.replace(c,"").replace(/\s+/g," ")+" language-"+r);var o={element:e,language:r,grammar:t,code:e.textContent};function l(e){o.highlightedCode=e,_.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,_.hooks.run("after-highlight",o),_.hooks.run("complete",o),n&&n.call(o.element)}if(_.hooks.run("before-sanity-check",o),!o.code)return _.hooks.run("complete",o),void(n&&n.call(o.element));if(_.hooks.run("before-highlight",o),o.grammar)if(a&&u.Worker){var s=new Worker(_.filename);s.onmessage=function(e){l(e.data)},s.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else l(_.highlight(o.code,o.grammar,o.language));else l(_.util.encode(o.code))},highlight:function(e,a,n){var r={code:e,grammar:a,language:n};return _.hooks.run("before-tokenize",r),r.tokens=_.tokenize(r.code,r.grammar),_.hooks.run("after-tokenize",r),L.stringify(_.util.encode(r.tokens),r.language)},matchGrammar:function(e,a,n,r,t,i,o){for(var l in n)if(n.hasOwnProperty(l)&&n[l]){var s=n[l];s=Array.isArray(s)?s:[s];for(var u=0;u<s.length;++u){if(o&&o==l+","+u)return;var c=s[u],g=c.inside,f=!!c.lookbehind,h=!!c.greedy,d=0,m=c.alias;if(h&&!c.pattern.global){var p=c.pattern.toString().match(/[imsuy]*$/)[0];c.pattern=RegExp(c.pattern.source,p+"g")}c=c.pattern||c;for(var y=r,v=t;y<a.length;v+=a[y].length,++y){var k=a[y];if(a.length>e.length)return;if(!(k instanceof L)){if(h&&y!=a.length-1){if(c.lastIndex=v,!(x=c.exec(e)))break;for(var b=x.index+(f&&x[1]?x[1].length:0),w=x.index+x[0].length,A=y,P=v,O=a.length;A<O&&(P<w||!a[A].type&&!a[A-1].greedy);++A)(P+=a[A].length)<=b&&(++y,v=P);if(a[y]instanceof L)continue;j=A-y,k=e.slice(v,P),x.index-=v}else{c.lastIndex=0;var x=c.exec(k),j=1}if(x){f&&(d=x[1]?x[1].length:0);w=(b=x.index+d)+(x=x[0].slice(d)).length;var N=k.slice(0,b),S=k.slice(w),C=[y,j];N&&(++y,v+=N.length,C.push(N));var E=new L(l,g?_.tokenize(x,g):x,m,x,h);if(C.push(E),S&&C.push(S),Array.prototype.splice.apply(a,C),1!=j&&_.matchGrammar(e,a,n,y,v,!0,l+","+u),i)break}else if(i)break}}}}},tokenize:function(e,a){var n=[e],r=a.rest;if(r){for(var t in r)a[t]=r[t];delete a.rest}return _.matchGrammar(e,n,a,0,0,!1),n},hooks:{all:{},add:function(e,a){var n=_.hooks.all;n[e]=n[e]||[],n[e].push(a)},run:function(e,a){var n=_.hooks.all[e];if(n&&n.length)for(var r,t=0;r=n[t++];)r(a)}},Token:L};function L(e,a,n,r,t){this.type=e,this.content=a,this.alias=n,this.length=0|(r||"").length,this.greedy=!!t}if(u.Prism=_,L.stringify=function(e,a){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(e){return L.stringify(e,a)}).join("");var n={type:e.type,content:L.stringify(e.content,a),tag:"span",classes:["token",e.type],attributes:{},language:a};if(e.alias){var r=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(n.classes,r)}_.hooks.run("wrap",n);var t=Object.keys(n.attributes).map(function(e){return e+'="'+(n.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+(t?" "+t:"")+">"+n.content+"</"+n.tag+">"},!u.document)return u.addEventListener&&(_.disableWorkerMessageHandler||u.addEventListener("message",function(e){var a=JSON.parse(e.data),n=a.language,r=a.code,t=a.immediateClose;u.postMessage(_.highlight(r,_.languages[n],n)),t&&u.close()},!1)),_;var e=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();if(e&&(_.filename=e.src,e.hasAttribute("data-manual")&&(_.manual=!0)),!_.manual){function n(){_.manual||_.highlightAll()}"loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n):window.setTimeout(n,16):document.addEventListener("DOMContentLoaded",n)}return _}(_self); true&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(a,e){var s={};s["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[e]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};n["language-"+e]={pattern:/[\s\S]+/,inside:Prism.languages[e]};var i={};i[a]={pattern:RegExp("(<__[\\s\\S]*?>)(?:<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\s*|[\\s\\S])*?(?=<\\/__>)".replace(/__/g,a),"i"),lookbehind:!0,greedy:!0,inside:n},Prism.languages.insertBefore("markup","cdata",i)}}),Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup;
!function(s){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var e=s.languages.markup;e&&(e.tag.addInlined("style","css"),s.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:e.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:s.languages.css}},alias:"language-css"}},e.tag))}(Prism);
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};
Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.js=Prism.languages.javascript;
!function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b\w+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:n},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0},{pattern:/(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/,greedy:!0,inside:n}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:n.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}};for(var a=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],r=n.variable[1].inside,s=0;s<a.length;s++)r[a[s]]=e.languages.bash[a[s]];e.languages.shell=e.languages.bash}(Prism);
!function(d){d.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d+.*$/m]};var r={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(r).forEach(function(e){var n=r[e],a=[];/^\w+$/.test(e)||a.push(/\w+/.exec(e)[0]),"diff"===e&&a.push("bold"),d.languages.diff[e]={pattern:RegExp("^(?:["+n+"].*(?:\r\n?|\n|(?![\\s\\S])))+","m"),alias:a}}),Object.defineProperty(d.languages.diff,"PREFIXES",{value:r})}(Prism);
Prism.languages.git={comment:/^#.*/m,deleted:/^[-–].*/m,inserted:/^\+.*/m,string:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,command:{pattern:/^.*\$ git .*$/m,inside:{parameter:/\s--?\w+/m}},coord:/^@@.*@@$/m,commit_sha1:/^commit \w{40}$/m};
Prism.languages.less=Prism.languages.extend("css",{comment:[/\/\*[\s\S]*?\*\//,{pattern:/(^|[^\\])\/\/.*/,lookbehind:!0}],atrule:{pattern:/@[\w-]+?(?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};])*?(?=\s*\{)/,inside:{punctuation:/[:()]/}},selector:{pattern:/(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@])*?(?=\s*\{)/,inside:{variable:/@+[\w-]+/}},property:/(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,operator:/[+\-*\/]/}),Prism.languages.insertBefore("less","property",{variable:[{pattern:/@[\w-]+\s*:/,inside:{punctuation:/:/}},/@@?[\w-]+/],"mixin-usage":{pattern:/([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,lookbehind:!0,alias:"function"}});
!function(t){t.languages.http={"request-line":{pattern:/^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m,inside:{property:/^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,"attr-name":/:\w+/}},"response-status":{pattern:/^HTTP\/1.[01] \d+.*/m,inside:{property:{pattern:/(^HTTP\/1.[01] )\d+.*/i,lookbehind:!0}}},"header-name":{pattern:/^[\w-]+:(?=.)/m,alias:"keyword"}};var a,e,n,i=t.languages,s={"application/javascript":i.javascript,"application/json":i.json||i.javascript,"application/xml":i.xml,"text/xml":i.xml,"text/html":i.html,"text/css":i.css},p={"application/json":!0,"application/xml":!0};for(var r in s)if(s[r]){a=a||{};var T=p[r]?(void 0,n=(e=r).replace(/^[a-z]+\//,""),"(?:"+e+"|\\w+/(?:[\\w.-]+\\+)+"+n+"(?![+\\w.-]))"):r;a[r]={pattern:RegExp("(content-type:\\s*"+T+"[\\s\\S]*?)(?:\\r?\\n|\\r){2}[\\s\\S]*","i"),lookbehind:!0,inside:{rest:s[r]}}}a&&t.languages.insertBefore("http","header-name",a)}(Prism);
!function(p){var a=p.languages.javadoclike={parameter:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(a,"addSupport",{value:function(a,e){"string"==typeof a&&(a=[a]),a.forEach(function(a){!function(a,e){var n="doc-comment",t=p.languages[a];if(t){var r=t[n];if(!r){var i={"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,alias:"comment"}};r=(t=p.languages.insertBefore(a,"comment",i))[n]}if(r instanceof RegExp&&(r=t[n]={pattern:r}),Array.isArray(r))for(var o=0,s=r.length;o<s;o++)r[o]instanceof RegExp&&(r[o]={pattern:r[o]}),e(r[o]);else e(r)}}(a,function(a){a.inside||(a.inside={}),a.inside.rest=e})})}}),a.addSupport(["java","javascript","php"],a)}(Prism);
!function(d){function n(n,e){return n=n.replace(/<inner>/g,"(?:\\\\.|[^\\\\\\n\r]|(?:\r?\n|\r)(?!\r?\n|\r))"),e&&(n=n+"|"+n.replace(/_/g,"\\*")),RegExp("((?:^|[^\\\\])(?:\\\\{2})*)(?:"+n+")")}var e="(?:\\\\.|``.+?``|`[^`\r\\n]+`|[^\\\\|\r\\n`])+",t="\\|?__(?:\\|__)+\\|?(?:(?:\r?\n|\r)|$)".replace(/__/g,e),a="\\|?[ \t]*:?-{3,}:?[ \t]*(?:\\|[ \t]*:?-{3,}:?[ \t]*)+\\|?(?:\r?\n|\r)";d.languages.markdown=d.languages.extend("markup",{}),d.languages.insertBefore("markdown","prolog",{blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+t+a+"(?:"+t+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+t+a+")(?:"+t+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(e),inside:d.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+t+")"+a+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+t+"$"),inside:{"table-header":{pattern:RegExp(e),alias:"important",inside:d.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/(^[ \t]*(?:\r?\n|\r))(?: {4}|\t).+(?:(?:\r?\n|\r)(?: {4}|\t).+)*/m,lookbehind:!0,alias:"keyword"},{pattern:/``.+?``|`[^`\r\n]+`/,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\r?\n|\r))[\s\S]+?(?=(?:\r?\n|\r)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\r?\n|\r)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#+.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:n("__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__",!0),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:n("_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_",!0),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:n("(~~?)(?:(?!~)<inner>)+?\\2",!1),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},url:{pattern:n('!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[\t ]+"(?:\\\\.|[^"\\\\])*")?\\)| ?\\[(?:(?!\\])<inner>)+\\])',!1),lookbehind:!0,greedy:!0,inside:{variable:{pattern:/(\[)[^\]]+(?=\]$)/,lookbehind:!0},content:{pattern:/(^!?\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},string:{pattern:/"(?:\\.|[^"\\])*"(?=\)$)/}}}}),["url","bold","italic","strike"].forEach(function(e){["url","bold","italic","strike"].forEach(function(n){e!==n&&(d.languages.markdown[e].inside.content.inside[n]=d.languages.markdown[n])})}),d.hooks.add("after-tokenize",function(n){"markdown"!==n.language&&"md"!==n.language||!function n(e){if(e&&"string"!=typeof e)for(var t=0,a=e.length;t<a;t++){var i=e[t];if("code"===i.type){var r=i.content[1],o=i.content[3];if(r&&o&&"code-language"===r.type&&"code-block"===o.type&&"string"==typeof r.content){var l="language-"+r.content.trim().split(/\s+/)[0].toLowerCase();o.alias?"string"==typeof o.alias?o.alias=[o.alias,l]:o.alias.push(l):o.alias=[l]}}else n(i.content)}}(n.tokens)}),d.hooks.add("wrap",function(n){if("code-block"===n.type){for(var e="",t=0,a=n.classes.length;t<a;t++){var i=n.classes[t],r=/language-(.+)/.exec(i);if(r){e=r[1];break}}var o=d.languages[e];if(o){var l=n.content.replace(/&lt;/g,"<").replace(/&amp;/g,"&");n.content=d.highlight(l,o,e)}else if(e&&"none"!==e&&d.plugins.autoloader){var s="md-"+(new Date).valueOf()+"-"+Math.floor(1e16*Math.random());n.attributes.id=s,d.plugins.autoloader.loadLanguages(e,function(){var n=document.getElementById(s);n&&(n.innerHTML=d.highlight(n.textContent,d.languages[e],e))})}}}),d.languages.md=d.languages.markdown}(Prism);
Prism.languages.json={property:{pattern:/"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,greedy:!0},string:{pattern:/"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,greedy:!0},comment:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,number:/-?\d+\.?\d*(e[+-]?\d+)?/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:true|false)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};
!function(u){var e=u.languages.javascript["template-string"],n=e.pattern.source,a=e.inside.interpolation,i=a.inside["interpolation-punctuation"],r=a.pattern.source;function t(e,t){if(u.languages[e])return{pattern:RegExp("((?:"+t+")\\s*)"+n),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:e}}}}function o(e,t,n){var r={code:e,grammar:t,language:n};return u.hooks.run("before-tokenize",r),r.tokens=u.tokenize(r.code,r.grammar),u.hooks.run("after-tokenize",r),r.tokens}function d(e){var t={};t["interpolation-punctuation"]=i;var n=u.tokenize(e,t);if(3===n.length){var r=[1,1];r.push.apply(r,o(n[1],u.languages.javascript,"javascript")),n.splice.apply(n,r)}return new u.Token("interpolation",n,a.alias,e)}function c(a,e,i){var t=u.tokenize(a,{interpolation:{pattern:RegExp(r),lookbehind:!0}}),f=0,y={},n=o(t.map(function(e){if("string"==typeof e)return e;for(var t,n=e.content;-1!==a.indexOf((r=f++,t="___"+i.toUpperCase()+"_"+r+"___")););return y[t]=n,t;var r}).join(""),e,i),v=Object.keys(y);return f=0,function e(t){for(var n=0;n<t.length;n++){if(f>=v.length)return;var r=t[n];if("string"==typeof r||"string"==typeof r.content){var a=v[f],i="string"==typeof r?r:r.content,o=i.indexOf(a);if(-1!==o){++f;var s=i.substring(0,o),p=d(y[a]),l=i.substring(o+a.length),g=[];if(s&&g.push(s),g.push(p),l){var u=[l];e(u),g.push.apply(g,u)}"string"==typeof r?(t.splice.apply(t,[n,1].concat(g)),n+=g.length-1):r.content=g}}else{var c=r.content;Array.isArray(c)?e(c):e([c])}}}(n),new u.Token(i,n,"language-"+i,a)}u.languages.javascript["template-string"]=[t("css","\\b(?:styled(?:\\([^)]*\\))?(?:\\s*\\.\\s*\\w+(?:\\([^)]*\\))*)*|css(?:\\s*\\.\\s*(?:global|resolve))?|createGlobalStyle|keyframes)"),t("html","\\bhtml|\\.\\s*(?:inner|outer)HTML\\s*\\+?="),t("svg","\\bsvg"),t("markdown","\\b(?:md|markdown)"),t("graphql","\\b(?:gql|graphql(?:\\s*\\.\\s*experimental)?)"),e].filter(Boolean);var s={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};function f(e){return"string"==typeof e?e:Array.isArray(e)?e.map(f).join(""):f(e.content)}u.hooks.add("after-tokenize",function(e){e.language in s&&!function e(t){for(var n=0,r=t.length;n<r;n++){var a=t[n];if("string"!=typeof a){var i=a.content;if(Array.isArray(i))if("template-string"===a.type){var o=i[1];if(3===i.length&&"string"!=typeof o&&"embedded-code"===o.type){var s=f(o),p=o.alias,l=Array.isArray(p)?p[0]:p,g=u.languages[l];if(!g)continue;i[1]=c(s,g,l)}}else e(i);else"string"!=typeof i&&e([i])}}}(e.tokens)})}(Prism);
Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/}),Prism.languages.ts=Prism.languages.typescript;
!function(a){var e=a.languages.javascript,n="{(?:[^{}]|{(?:[^{}]|{[^{}]*})*})+}",s="(@(?:param|arg|argument|property)\\s+(?:"+n+"\\s+)?)";a.languages.jsdoc=a.languages.extend("javadoclike",{parameter:{pattern:RegExp(s+"[$\\w\\xA0-\\uFFFF.]+(?=\\s|$)"),lookbehind:!0,inside:{punctuation:/\./}}}),a.languages.insertBefore("jsdoc","keyword",{"optional-parameter":{pattern:RegExp(s+"\\[[$\\w\\xA0-\\uFFFF.]+(?:=[^[\\]]+)?\\](?=\\s|$)"),lookbehind:!0,inside:{parameter:{pattern:/(^\[)[$\w\xA0-\uFFFF\.]+/,lookbehind:!0,inside:{punctuation:/\./}},code:{pattern:/(=)[\s\S]*(?=\]$)/,lookbehind:!0,inside:e,alias:"language-javascript"},punctuation:/[=[\]]/}},"class-name":[{pattern:RegExp("(@[a-z]+\\s+)"+n),lookbehind:!0,inside:{punctuation:/[.,:?=<>|{}()[\]]/}},{pattern:/(@(?:augments|extends|class|interface|memberof!?|this)\s+)[A-Z]\w*(?:\.[A-Z]\w*)*/,lookbehind:!0,inside:{punctuation:/\./}}],example:{pattern:/(@example\s+)[^@]+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,lookbehind:!0,inside:{code:{pattern:/^(\s*(?:\*\s*)?).+$/m,lookbehind:!0,inside:e,alias:"language-javascript"}}}}),a.languages.javadoclike.addSupport("javascript",a.languages.jsdoc)}(Prism);
Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,{pattern:/( +)(?:from|through)(?= )/,lookbehind:!0}]}),Prism.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),Prism.languages.insertBefore("scss","function",{placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:true|false)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,lookbehind:!0}}),Prism.languages.scss.atrule.inside.rest=Prism.languages.scss;
!function(a){a.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+a.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),a.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+a.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),a.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:(?:Uint|Int)(?:8|16|32)|Uint8Clamped|Float(?:32|64))?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|(?:Weak)?(?:Set|Map)|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]}),a.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),a.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),a.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:/(\.\s*)#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*/,lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|location|navigator|performance|(?:local|session)Storage|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var e=["function","function-variable","method","method-variable","property-access"],t=0;t<e.length;t++){var n=e[t],r=a.languages.javascript[n];"RegExp"===a.util.type(r)&&(r=a.languages.javascript[n]={pattern:r});var s=r.inside||{};(r.inside=s)["maybe-class-name"]=/^[A-Z][\s\S]*/}}(Prism);
!function(i){var t=i.util.clone(i.languages.javascript);i.languages.jsx=i.languages.extend("markup",t),i.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i,i.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,i.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i,i.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,i.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},i.languages.jsx.tag),i.languages.insertBefore("inside","attr-value",{script:{pattern:/=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:i.languages.jsx},alias:"language-javascript"}},i.languages.jsx.tag);var o=function(t){return t?"string"==typeof t?t:"string"==typeof t.content?t.content:t.content.map(o).join(""):""},p=function(t){for(var n=[],e=0;e<t.length;e++){var a=t[e],s=!1;if("string"!=typeof a&&("tag"===a.type&&a.content[0]&&"tag"===a.content[0].type?"</"===a.content[0].content[0].content?0<n.length&&n[n.length-1].tagName===o(a.content[0].content[1])&&n.pop():"/>"===a.content[a.content.length-1].content||n.push({tagName:o(a.content[0].content[1]),openedBraces:0}):0<n.length&&"punctuation"===a.type&&"{"===a.content?n[n.length-1].openedBraces++:0<n.length&&0<n[n.length-1].openedBraces&&"punctuation"===a.type&&"}"===a.content?n[n.length-1].openedBraces--:s=!0),(s||"string"==typeof a)&&0<n.length&&0===n[n.length-1].openedBraces){var g=o(a);e<t.length-1&&("string"==typeof t[e+1]||"plain-text"===t[e+1].type)&&(g+=o(t[e+1]),t.splice(e+1,1)),0<e&&("string"==typeof t[e-1]||"plain-text"===t[e-1].type)&&(g=o(t[e-1])+g,t.splice(e-1,1),e--),t[e]=new i.Token("plain-text",g,null,g)}a.content&&"string"!=typeof a.content&&p(a.content)}};i.hooks.add("after-tokenize",function(t){"jsx"!==t.language&&"tsx"!==t.language||p(t.tokens)})}(Prism);
!function(e){e.languages.sass=e.languages.extend("css",{comment:{pattern:/^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,lookbehind:!0}}),e.languages.insertBefore("sass","atrule",{"atrule-line":{pattern:/^(?:[ \t]*)[@+=].+/m,inside:{atrule:/(?:@[\w-]+|[+=])/m}}}),delete e.languages.sass.atrule;var t=/\$[-\w]+|#\{\$[-\w]+\}/,a=[/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,{pattern:/(\s+)-(?=\s)/,lookbehind:!0}];e.languages.insertBefore("sass","property",{"variable-line":{pattern:/^[ \t]*\$.+/m,inside:{punctuation:/:/,variable:t,operator:a}},"property-line":{pattern:/^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,inside:{property:[/[^:\s]+(?=\s*:)/,{pattern:/(:)[^:\s]+/,lookbehind:!0}],punctuation:/:/,variable:t,operator:a,important:e.languages.sass.important}}}),delete e.languages.sass.property,delete e.languages.sass.important,e.languages.insertBefore("sass","punctuation",{selector:{pattern:/([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,lookbehind:!0}})}(Prism);
!function(){if("undefined"!=typeof self&&self.Prism&&self.document){var l="line-numbers",c=/\n(?!$)/g,m=function(e){var t=a(e)["white-space"];if("pre-wrap"===t||"pre-line"===t){var n=e.querySelector("code"),r=e.querySelector(".line-numbers-rows"),s=e.querySelector(".line-numbers-sizer"),i=n.textContent.split(c);s||((s=document.createElement("span")).className="line-numbers-sizer",n.appendChild(s)),s.style.display="block",i.forEach(function(e,t){s.textContent=e||"\n";var n=s.getBoundingClientRect().height;r.children[t].style.height=n+"px"}),s.textContent="",s.style.display="none"}},a=function(e){return e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null};window.addEventListener("resize",function(){Array.prototype.forEach.call(document.querySelectorAll("pre."+l),m)}),Prism.hooks.add("complete",function(e){if(e.code){var t=e.element,n=t.parentNode;if(n&&/pre/i.test(n.nodeName)&&!t.querySelector(".line-numbers-rows")){for(var r=!1,s=/(?:^|\s)line-numbers(?:\s|$)/,i=t;i;i=i.parentNode)if(s.test(i.className)){r=!0;break}if(r){t.className=t.className.replace(s," "),s.test(n.className)||(n.className+=" line-numbers");var l,a=e.code.match(c),o=a?a.length+1:1,u=new Array(o+1).join("<span></span>");(l=document.createElement("span")).setAttribute("aria-hidden","true"),l.className="line-numbers-rows",l.innerHTML=u,n.hasAttribute("data-start")&&(n.style.counterReset="linenumber "+(parseInt(n.getAttribute("data-start"),10)-1)),e.element.appendChild(l),m(n),Prism.hooks.run("line-numbers",e)}}}}),Prism.hooks.add("line-numbers",function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0}),Prism.plugins.lineNumbers={getLine:function(e,t){if("PRE"===e.tagName&&e.classList.contains(l)){var n=e.querySelector(".line-numbers-rows"),r=parseInt(e.getAttribute("data-start"),10)||1,s=r+(n.children.length-1);t<r&&(t=r),s<t&&(t=s);var i=t-r;return n.children[i]}}}}}();
!function(){if("undefined"!=typeof self&&self.Prism&&self.document){var u=/(?:^|\s)command-line(?:\s|$)/;Prism.hooks.add("before-highlight",function(e){var t=e.vars=e.vars||{},a=t["command-line"]=t["command-line"]||{};if(!a.complete&&e.code){var n=e.element.parentNode;if(n&&/pre/i.test(n.nodeName)&&(u.test(n.className)||u.test(e.element.className)))if(e.element.querySelector(".command-line-prompt"))a.complete=!0;else{var r=e.code.split("\n");a.numberOfLines=r.length;var s=a.outputLines=[],o=n.getAttribute("data-output"),i=n.getAttribute("data-filter-output");if(o||""===o){o=o.split(",");for(var l=0;l<o.length;l++){var m=o[l].split("-"),p=parseInt(m[0],10),d=2===m.length?parseInt(m[1],10):p;if(!isNaN(p)&&!isNaN(d)){p<1&&(p=1),d>r.length&&(d=r.length),d--;for(var c=--p;c<=d;c++)s[c]=r[c],r[c]=""}}}else if(i)for(l=0;l<r.length;l++)0===r[l].indexOf(i)&&(s[l]=r[l].slice(i.length),r[l]="");e.code=r.join("\n")}else a.complete=!0}else a.complete=!0}),Prism.hooks.add("before-insert",function(e){var t=e.vars=e.vars||{},a=t["command-line"]=t["command-line"]||{};if(!a.complete){for(var n=e.highlightedCode.split("\n"),r=0,s=(a.outputLines||[]).length;r<s;r++)a.outputLines.hasOwnProperty(r)&&(n[r]=a.outputLines[r]);e.highlightedCode=n.join("\n")}}),Prism.hooks.add("complete",function(e){var t=e.vars=e.vars||{},a=t["command-line"]=t["command-line"]||{};if(!a.complete){var n=e.element.parentNode;u.test(e.element.className)&&(e.element.className=e.element.className.replace(u," ")),u.test(n.className)||(n.className+=" command-line");var r=function(e,t){return(n.getAttribute(e)||t).replace(/"/g,"&quot")},s=new Array((a.numberOfLines||0)+1),o=r("data-prompt","");if(""!==o)s=s.join('<span data-prompt="'+o+'"></span>');else{var i=r("data-user","user"),l=r("data-host","localhost");s=s.join('<span data-user="'+i+'" data-host="'+l+'"></span>')}var m=document.createElement("span");m.className="command-line-prompt",m.innerHTML=s;for(var p=0,d=(a.outputLines||[]).length;p<d;p++)if(a.outputLines.hasOwnProperty(p)){var c=m.children[p];c.removeAttribute("data-user"),c.removeAttribute("data-host"),c.removeAttribute("data-prompt")}e.element.insertBefore(m,e.element.firstChild),a.complete=!0}})}}();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\GitRepositories\angular_lernapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
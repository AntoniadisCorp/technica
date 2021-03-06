/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({

    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/animations': "npm:@angular/animations/bundles/animations.umd.min.js",
      '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.min.js',
      '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.min.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
      '@ng-bootstrap/ng-bootstrap': 'npm:@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js',
      '@angular/material':         'npm:@angular/material/bundles/material.umd.min.js',
       /* CDK ANGULAR GOOGLE JAVASCRIPT */
      '@angular/cdk/platform':    'npm:@angular/cdk/bundles/cdk-platform.umd.js',
      '@angular/cdk/a11y':        'npm:@angular/cdk/bundles/cdk-a11y.umd.js',
      '@angular/cdk/coercion':        'npm:@angular/cdk/bundles/cdk-coercion.umd.js',
      '@angular/cdk/keycodes':        'npm:@angular/cdk/bundles/cdk-keycodes.umd.js',
      '@angular/cdk/rxjs':        'npm:@angular/cdk/bundles/cdk-rxjs.umd.js',
      '@angular/cdk/bidi':        'npm:@angular/cdk/bundles/cdk-bidi.umd.js',
      '@angular/cdk/observers':        'npm:@angular/cdk/bundles/cdk-observers.umd.js',
      '@angular/cdk/overlay':        'npm:@angular/cdk/bundles/cdk-overlay.umd.js',
      '@angular/cdk/scrolling':        'npm:@angular/cdk/bundles/cdk-scrolling.umd.js',
      '@angular/cdk/stepper':        'npm:@angular/cdk/bundles/cdk-stepper.umd.js',
      '@angular/cdk/table':        'npm:@angular/cdk/bundles/cdk-table.umd.js',
      '@angular/cdk/collections':        'npm:@angular/cdk/bundles/cdk-collections.umd.js',
      '@angular/cdk/portal':        'npm:@angular/cdk/bundles/cdk-portal.umd.js',
      
      '@agm/core':                 'npm:@agm/core/core.umd.js',
      'angular-bootstrap-md':      'npm:angular-bootstrap-md/bundles/angular-bootstrap-md.umd.min.js', // 
      
       // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
      'angular2-fontawesome':      'npm:angular2-fontawesome',
      'hammerjs':                  'npm:@types/hammerjs',
      'ng2-recaptcha':             'npm:ng2-recaptcha',

      // further angular bundles
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      },
      'angular2-fontawesome': {
        defaultExtension: 'js'
      },
      'ng2-recaptcha': {
        defaultExtension: 'js'
      }

    }
    });
})(this);
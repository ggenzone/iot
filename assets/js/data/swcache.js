const resource = [
    /* --- CSS --- */
    '/iot/assets/css/style.css',

    /* --- PWA --- */
    '/iot/app.js',
    '/iot/sw.js',

    /* --- HTML --- */
    '/iot/index.html',
    '/iot/404.html',

    
        '/iot/sensores/',
    
        '/iot/glosario/',
    
        '/iot/recursos/',
    
        '/iot/archives/',
    
        '/iot/about/',
    

    /* --- Favicons & compressed JS --- */
    
    
        '/iot/assets/img/favicons/android-chrome-192x192.png',
        '/iot/assets/img/favicons/android-chrome-512x512.png',
        '/iot/assets/img/favicons/apple-touch-icon.png',
        '/iot/assets/img/favicons/favicon-16x16.png',
        '/iot/assets/img/favicons/favicon-32x32.png',
        '/iot/assets/img/favicons/favicon.ico',
        '/iot/assets/img/favicons/favicon_package_v0.16.zip',
        '/iot/assets/img/favicons/mstile-150x150.png',
        '/iot/assets/img/favicons/safari-pinned-tab.svg',
        '/iot/assets/js/dist/categories.min.js',
        '/iot/assets/js/dist/commons.min.js',
        '/iot/assets/js/dist/home.min.js',
        '/iot/assets/js/dist/misc.min.js',
        '/iot/assets/js/dist/page.min.js',
        '/iot/assets/js/dist/post.min.js',
        '/iot/assets/js/dist/pvreport.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
    

    '',

    

    'fonts.gstatic.com',
    'fonts.googleapis.com',
    'cdn.jsdelivr.net',
    'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
    
];


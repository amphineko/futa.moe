const WebFontLoader = require('webfontloader')

WebFontLoader.load({
    custom: {
        families: ['Open Sans'],
        urls: [
            require('./assets/fonts/open-sans-v17-latin.css')
        ]
    }
})
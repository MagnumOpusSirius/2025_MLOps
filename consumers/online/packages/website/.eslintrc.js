const path = require('path');

module.exports = {
    extends: [
        'react-app'
    ],
    plugins: ['header'],
    rules: {
        'header/header': [2, path.join(__dirname, '..', '..', '..', '..', 'configuration', 'header.js')],
    }
};

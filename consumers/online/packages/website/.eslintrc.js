const path = require('path');

module.exports = {
    extends: [
        'react-app'
    ],
    plugins: ['header'],
    rules: {
        'header/header': "off",
    }
};

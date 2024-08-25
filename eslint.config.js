const complexityPlugin = require('eslint-plugin-complexity');

module.exports = {
    plugins: {
        complexity: complexityPlugin
    },
    ignores: [
        ".vscode/**/*", 
        ".nuxt/**/*", 
        "assets/**/*",
        "coverage/**/*",
        "node_modules/**/*", 
        "test/**/*",
        "static/**/*",
    ],
    "rules": {
        "complexity": [ "warn", { "max": 0 } ]
    }, 
};
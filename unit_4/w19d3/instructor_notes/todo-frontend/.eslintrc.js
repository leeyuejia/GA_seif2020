module.exports = {
    'env': {
        'commonjs': true,
        'es6': true,
        'node': true,
        'jquery': true,
        'jest': true,
    },
    'extends': [
        'eslint:recommended',
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
        'window': true
    },
    'parserOptions': {
        'sourceType': 'module',
        'ecmaVersion': 2018
    },
    'rules': {
        'indent': ['warn', 4],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['warn', 'single'],
        'semi': ['warn', 'always'],
        'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
        'comma-dangle': ['warn', {
            'arrays': 'only-multiline',
            'objects': 'only-multiline',
            'imports': 'only-multiline',
            'exports': 'only-multiline',
        }],
        'space-before-function-paren': 'warn',
        'object-curly-spacing': ['warn', 'always'],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-indent': [2, 4, { checkAttributes: true, indentLogicalExpressions: true }],
        'react/jsx-max-props-per-line': [2, { maximum: 2, when: 'always' }]
    }
};

module.exports = {
    type: 'object',
    dynamicDefaults: {
        createdAt: 'datetime',
        updatedAt: 'datetime',
    },
    required: ['username', 'password'],
    properties: {
        username: {
            type: 'string',
            maxLength: 256
        },
        password: {
            type: 'string'
        },
        createdAt: {
            type: 'string',
            format: 'date-time',
        },
        updatedAt: {
            type: 'string',
            format: 'date-time',
        }
    }
};
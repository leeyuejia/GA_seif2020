module.exports = {
    type: 'object',
    required: ['title', 'entry'],
    properties: {
        title: {
            type: 'string',
            minLength: 10,
        },
        entry: {
            type: 'string',
            minLength: 10,
        },
        isShipBroken: {
            type: 'boolean',
            default: false,
        },
        date: {
            type: 'string',
            format: 'date-time',
        }
    }
};
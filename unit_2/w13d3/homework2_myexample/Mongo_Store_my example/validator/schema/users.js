module.exports = {
    type: 'object',
    required: ['username', 'password'],
    properties : {
        username: {
            type: 'string'
        },
        password : {
            type: 'string'
        },
        createdAt : {
            type: 'string',
            format: 'date-time'
        },
        updatedAt : {
            type: 'string',
            format: 'date-time' // <-- to format the date 
        },
    }
}

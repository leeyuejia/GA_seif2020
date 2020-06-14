module.exports = {
    formatOkResponse (res, data) {
        res.status(200)
            .json({
                status: 'ok',
                data,
            });
    },
    formatErrorResponse (res, error) {
        console.log(error.message);
        res.status(error.status || 500)
            .json({
                status: 'error',
                data: error.data || error.message,
                message: error.message,
            });
    }
};
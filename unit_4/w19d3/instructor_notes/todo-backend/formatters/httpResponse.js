const HTTP_STATUS_CODES = {
    OK: 200,
};

module.exports = {
    formatOkResponse (res, payload) {
        res.status(HTTP_STATUS_CODES.OK)
            .json({
                status: 'ok',
                data: payload,
            });
    }
};
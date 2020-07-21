const executeApiCall = async (method, url, body) => {
    const payload = {};
    if (body) payload.body = JSON.stringify(body);

    const response = await fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        ...payload
    });

    return await response.json();
};

export default {
    get (url) {
        return executeApiCall('GET', url);
    },
    post (url, payload) {
        return executeApiCall('POST', url, payload);
    },
    delete (url) {
        return executeApiCall('DELETE', url);
    },
    update (url, payload) {
        return executeApiCall('PUT', url, payload);
    }
};

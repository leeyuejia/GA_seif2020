const getCreateLogForm = () => $('#create-log-form');
const buildPayload = formElement => {
    return formElement.serializeArray()
        .reduce((result, { name, value }) => {
            return {
                ... result,
                [name]: value
            };
        }, {});
};
const formatCasing = word => {
    let formattedWord = word.replace('.', '');
    return formattedWord[0].toUpperCase() + formattedWord.slice(1);
};
const clearErrorMessages = () => $('.error-message').remove();

const buildErrorMessageElement = message => {
    return $('<small>')
        .addClass(['text-danger', 'error-message'])
        .text(message);
};

$(() => {
    getCreateLogForm().on('submit', async e => {
        e.preventDefault();
        clearErrorMessages();
        const payload = buildPayload(getCreateLogForm());
        $.ajax({
            url: '/new',
            method: 'POST',
            data: payload,
        })
            .done(() => {
                window.location.href = '/';
            })
            .catch(response => {
                if (response.status !== 400) {
                    const $errorMessage = buildErrorMessageElement(response.responseJSON.data);
                    const $errorMessageContainer = $('<div>').append($errorMessage);
                    $('.btn-secondary').after($errorMessageContainer);
                }
                response.responseJSON.data.forEach(err => {
                    const { dataPath, message } = err;
                    const key = formatCasing(dataPath);
                    const errorMessage = `${key} ${message}`;
                    const $errorMessage = buildErrorMessageElement(errorMessage);
                    $(dataPath).append($errorMessage);
                });
            });
    });
});
$(() => {

    const $addItem = (event) => {
        //Takes the value of input
        const inputItem = $('#input-box').val();
        //Prevents event from default refreshing
        event.preventDefault();
        //Resets the input area to default state
        $(event.currentTarget).trigger('reset');
        // functions to make the item append to the "to-do-list"
        toDoItem(inputItem);
    }
    const $alert = (event) => {
        const answer = confirm('Are you sure you want to remove?')
        const confirmItem = $(event.currentTarget)
        if (answer === true) {
            confirmItem.parent().remove()
        }
    };

    const $removeItem = (event) => {
        let historyItem = $(event.currentTarget);
        $('#history').append(historyItem.parent());
        historyItem.parent().attr('class', 'history-item');
        historyItem.attr('class', 'remove-button').text('REMOVE');
        $('.remove-button').on('click', $alert)
    }
    const $completeItem = (event) => {
        let completedItem = $(event.currentTarget)
        $('#completed').append(completedItem.parent());
        completedItem.parent().attr('class', 'done-item');
        completedItem.attr('class', 'shelved-button').text('SHELVED');
        $('.shelved-button').on('click', $removeItem)
    }

    const toDoItem = (inputItem) => {
        let newList = $('<div>').addClass('to-do-item').append($('<h3>').text(inputItem))
        $('#to-do-list').append(newList)
        newList.append(`<button class='complete-button'>COMPLETE</button>`)
        $('.complete-button').on('click', $completeItem)
    }

    $('form').on('submit', $addItem)
})


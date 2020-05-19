const addCrew = ()=> {

    $('.add-crew').on("click", (event) => {
        event.preventDefault()
        $('.numberofcrew').append('<input type="text" name="crew" class="crew" placeholder="rank and name">')
    })
    return false
};

const minusCrew = () => {
    $('.minus-crew').on("click", (event)=> {
        event.preventDefault()
        const allcrew = $('.crew')
        allcrew.eq(allcrew.length -1).remove()
    })
    return false;
}

$(() => {
    addCrew();
    minusCrew();


})
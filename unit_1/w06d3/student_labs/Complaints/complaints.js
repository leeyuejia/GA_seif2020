console.log('hi')
$(() => {
    //Created five summit button
    let descriptorArray = ['Brooklyn', 'Manhattan', 'Queens', 'Bronx', 'Staten Island']
    for (let i = 0; i < descriptorArray.length; i++) {
        const $summitButton = $('<input>').attr('type', 'submit').attr('value', descriptorArray[i]).addClass('summit')
        $('form').append($summitButton);
    };

    //App token from 311 service

    // Then retrieved this data and use then() to manipulate 
    function searchResultDisplay(data, num) {
        let result = $('<div>').addClass("container3")
        let eachDescriptor = $('<li>').addClass('descriptor').text(data[num].descriptor)
        let eachbutton = $('<li>').addClass('police').text("WHAT DID THE POLICE DO?")
        let eachResolution = $('<div>').addClass("modal").text(data[num].resolution_description)
        $('.container').append(result)
        result.append(eachDescriptor)
        result.append(eachbutton)
        result.append(eachResolution)
    }

    $('input').on('click', (event) => {
        $('.container').empty();
        event.preventDefault();
        console.log(event.currentTarget, "+", event.currentTarget.value)
        const promiseBrookyn = $.ajax({
            url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json",
            type: "GET",
            data: {
                "$limit": $('#input-box').val(),
                "$$app_token": "jGzM9B4V0wB67Xpg7he93zTTi",
                agency: "NYPD",
                borough: $(event.currentTarget).val().toUpperCase()
            }
        })
        promiseBrookyn.then(data => {
            for (let i = 0; i < ($('#input-box').val()); i++) {
                searchResultDisplay(data, i);
            }
            // on click, the result should display a div of the current event target's resolution. 
            $('.police').on('click', (event) => {
                $(event.currentTarget).next().css('display', 'inline-block')
            });
        }
        )
    })

})
// // https://www.moogleapi.com/api/v1/characters
//     $('input').on('click', (event) => {
//         event.preventDefault()
//         const promisefinal = $.ajax({
//             url: "https://www.moogleapi.com/api/v1/characters",
//             type: "GET",
//             data: {
//                 origin:"Final Fantasy 01"
//             }
//         })
//         promisefinal.then(data => {
//             $('.column1').empty();
//             let ff7 = data.filter(el => el.origin === "Final Fantasy 07")
//             for (let i = 0; i < ($('#input-box').val()); i++) 
//             $('.column1').append($('<img>').attr('src',ff7[i].picture))
//         }
//         )
//     })
// })
// promiseBrookyn.then((data) => {
//   alert("Retrieved " + data.length + " records from the dataset!");
//   console.log(data);

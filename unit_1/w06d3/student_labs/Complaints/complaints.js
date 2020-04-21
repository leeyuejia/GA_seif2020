console.log('hi')
$(() => {
//Created five summit button
let descriptorArray = ['Brooklyn', 'Manhattan','Queens', 'Bronx', 'Staten Island']
for (let i= 0; i <descriptorArray.length; i++) {
    const $summitButton = $('<input>').attr('type','submit').attr('value',descriptorArray[i]).addClass('summit')
    $('form').append($summitButton);
};

//App token from 311 service
               
// Then retrieved this data and use then() to manipulate 

$('input').on ('click', (event) => {
    event.preventDefault();
    console.log(event.currentTarget , "+" ,event.currentTarget.value)
    const promiseBrookyn = $.ajax({
        url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json",
        type: "GET",
        data: {
          "$limit" : $('#input-box').val(),
          "$$app_token" : "jGzM9B4V0wB67Xpg7he93zTTi",
          agency: "NYPD",
          borough: $(event.currentTarget).val().toUpperCase()
        }
    })
    promiseBrookyn.then(data => {
        for (let i = 0; i < ($('#input-box').val()); i++) {
            console.log($(event.currentTarget).val().toUpperCase())
            console.log(data[i].descriptor)
        // const item = $('<h2>').text(data.descriptor)
        // $('.column1').append(item)
        }}
    )
})
// promiseBrookyn.then((data) => {
//   alert("Retrieved " + data.length + " records from the dataset!");
//   console.log(data);
// });
})
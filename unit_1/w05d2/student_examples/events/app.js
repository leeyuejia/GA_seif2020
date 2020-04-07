console.log('app.js');

const contacts = [
    { name: "Megatron", address: "Cybertron" },
    { name: "Some guy", address: "Some street" },
    { name: "Grace Hopper", address: "Arlington, Virginia" },
    { name: "Ching Shih", address: "The High Seas" },
    { name: "Slimer", address: "The Library" },
    { name: "Umbra", address: "The Void" },
    { name: "Hypatia", address: "The Neoplatonic school at Alexandria" },
    { name: "Matt Huntington", address: "Remote" },
    { name: "Ronald McDonald", address: "Casa del McDonalds" },
    { name: "Jem", address: "Starlight Music" }
  ];

const createTable = ()=> {
    const $table = $('<table>').addClass('table')
    $table.html('<thead><tr><th>name</th><th>Location</th></tr></thead>')
    $('.container').append($table)
    const $row = $('<td>').text (contacts.name)
}

$(() => {
createTable()
});

// array of contacts data
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

// loop thru the contacts
// for (let contact of contacts) {
//     console.log(contact)
// }

const buildTable = () => {

    // <table class="table">
    //   <thead class="thead-dark">
    //     <tr>
    //       <th>Name</th>
    //       <th>Location</th>
    //     </tr>
    //   </thead>
    // </table>

    const $infoTable = $('<table>').addClass('table');
    $infoTable.html(
        `<thead class="thead-dark">
          <tr>
            <th>Name</th>
            <th>Location</th>
          </tr>
        </thead>`
      );

    for (let contact of contacts) {
        // <tr>
        //   <td>Mark</td>
        //   <td>Otto</td>
        // </tr>
        const $infoRow = $('<tr>');
        const $nameCell = $('<td>').addClass('name').text(contact.name);
        const $addressCell = $('<td>').addClass('address').text(contact.address);
        $infoRow.append($nameCell, $addressCell);
        $infoTable.append($infoRow);
    }

    $('.container').append($infoTable);
}

const emptyAndBuildTable = () => {
  $('.container').empty();
  buildTable();
}

const addData = (name, address) => {
  contacts.push({ name: name, address: address })
  emptyAndBuildTable();
}

const removeData = (name) => {
    let removeContact = contacts.findIndex((contact)=>{
        return contact.name === name;
    });
    contacts.splice(removeContact, 1);
    emptyAndBuildTable();
}


$(() => {
    // run this code on load
    buildTable();
    addData("Henry", "Singapore");
    removeData("Henry");
})
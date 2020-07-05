const displayRegions = (regions) => {
  console.log(regions);

  let formGroup = $('.form-group');
  regions.forEach((region) => {
    console.log(region);
    let formCheckDiv = $('<div>').addClass("form-check form-check-inline");
    let formCheckInput = $('<input>').addClass("form-check-input").attr("type", "checkbox").attr("name", "regionCheckbox").attr("value",region.name);
    let formCheckLabel = $('<label>').addClass("form-check-label").attr("for","regionCheckbox").text(region.name);
    formCheckDiv.append(formCheckInput);
    formCheckDiv.append(formCheckLabel);
    formGroup.append(formCheckDiv);
  });

}

const filterDataByRegions = (displayData, selectedRegions) => {

    let newDisplayData = {};

    // if(selectedRegions.indexOf("west")) {
    //     newDisplayData.west = displayData.west;
    // }

    // selectedRegions.forEach(region => {
    //     for (let prop in displayData) {
    //         newDisplayData[prop][region] = displayData[prop][region];
    //     }
    // })

    selectedRegions.forEach(region => {
        newDisplayData[region] = displayData[region];
    })

    return newDisplayData;
}

let selectedRegions = [];
let displayData = null;

$(()=>{
  console.log("jquery works");

  $.ajax({
     url:'https://api.data.gov.sg/v1/environment/psi?date=2019-10-05'
  }).then(
          (data)=>{
              console.log(data);
              displayRegions(data.region_metadata);
              displayData = data.items[0].readings.psi_twenty_four_hourly;
              $('#data').text(JSON.stringify(displayData, null, '\t'));
          },
          ()=>{
              console.log('bad request');
          }
    );

  $("form").on("submit", (e) => {
    console.log("form submit");

    // clear the array
    selectedRegions = [];

    $("input:checkbox[name=regionCheckbox]:checked").each(function(){
        selectedRegions.push($(this).val());
    });
    console.log("selectedRegions", selectedRegions);

    let newDisplayData = filterDataByRegions(displayData, selectedRegions);

    $('#data').empty();
    $('#data').text(JSON.stringify(newDisplayData, null, '\t'));

    e.preventDefault();
  })

})
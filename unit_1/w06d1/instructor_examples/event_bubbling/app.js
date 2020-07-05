console.log('app.js');

// $(() => {
//   $(".outside").on("click", event => {
//     console.log("outside is clicked..");
//     //console.log('OUTSIDE target is: ', event.target);
//     //console.log('OUTSIDE currentTarget is: ', event.currentTarget);

//     $(event.currentTarget).toggleClass("black");
//     // return false;
//   });

//   $(".inside").on("click", event => {
//     console.log("inside is clicked..");
//     //console.log('INSIDE target is: ', event.target);
//     //console.log('INSIDE currentTarget is: ', event.currentTarget);
//     $(event.currentTarget).toggleClass("black");
//     // return false;
//   });

//   $("body").on("click", () => {
//     console.log("body is clicked..");
//     //event.stopPropagation();
//     console.log("BODY target is: ", event.target);
//     console.log("BODY currentTarget is: ", event.currentTarget);
//     $(event.currentTarget).toggleClass("black");
//     // return false;
//   });
// });

$(() => {
    // $(".outside").on("click", event => {
    //   console.log("OUTSIDE target is: ", event.target);
    //   console.log("OUTSIDE currentTarget is: ", event.currentTarget);
    //   // $(event.currentTarget).css("background-color", "black");
    //   // return false;
    // });

    // $(".inside").on("click", event => {
    //   console.log("INSIDE target is: ", event.target);
    //   console.log("INSIDE currentTarget is: ", event.currentTarget);
    //   // return false;
    // });

    // $("body").on("click", () => {
    //   console.log("BODY target is: ", event.target);
    //   console.log("BODY currentTarget is: ", event.currentTarget);
    // });

    $('a').click((event) => {
        console.log(event.button);
        console.log('Nope.');
        event.preventDefault();
    });
    $('button').mousedown(event => {
        console.log(event.button);
    });
});

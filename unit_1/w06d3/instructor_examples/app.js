// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen',
//     success: (data) => {
//         console.log(data);
//         $.ajax({
//             url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=1917',
//             success: (data) => {
//                 console.log(data);
//                 $.ajax({
//                     url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=Titanic',
//                     success: (data) => {
//                         console.log(data);
//                     },
//                     error: () => {

//                     }
//                 });
//             },
//             error: () => {

//             }
//         });
//     },
//     error: () => {
//         console.log('bad request');
//     }
// });

let app = {
    banners: ['Test1', 'Test2', 'Test3'],
    navigation: {
        width: 100,
        height: 100,
        text: 'Show me the money'
    }
};

// $(() => {
//     $('form').on('submit', (event) => {
//         event.preventDefault();

//         const promiseForzen = $.ajax({
//             url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=' + $('#input-box').val()
//         });
//         promiseForzen.then(data => {
//             $('#title').html(data.Title);
//             $('#year').html(data.Year);
//             $('#rated').html(data.Rated);
//         }).catch(error => {
//             console.log('bad request', error);
//         });
//     });

//     // const promise1917 = $.ajax({
//     //     url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=1917'
//     // });

//     // const promiseTitanic = $.ajax({
//     //     url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=Titanic'
//     // });

//     // let result = [];
//     // promiseForzen.then((data) => {
//     //     console.log(data);
//     //     result.push(data);
//     //     return promise1917;
//     // }).then(data => {
//     //     console.log(data);
//     //     result.push(data);
//     //     return promiseTitanic;
//     // }).then(data => {
//     //     console.log(data);
//     //     result.push(data);
//     //     console.log(`result is ${JSON.stringify(result, null, 2)} in then cb`);
//     //     return data;
//     // }).catch(error => {
//     //     console.log('bad request', error);
//     // });

//     // console.log(`result is ${result} outside then cb`);


// });

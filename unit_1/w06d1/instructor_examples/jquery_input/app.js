$(() => {

    const list = [];

    const render = () => {
        console.log("list:", list);

        // $('ul').empty();
        // list.forEach((item) => {
        //     console.log(item);

        //     $('ul').append($('<li>').text(item));
        // });
        let newLi = $('<li>').text(list[list.length-1]);
        $('ul').append(newLi);

        newLi.on('click', (ev) => {
            console.log("li is clicked..");
            $(ev.currentTarget).toggleClass("done");
        })
    }

    $('form').on('submit', (ev) => {
      ev.preventDefault();
      // console.log('clicked');
      const inputValue = $('#input-box').val();
      console.log( inputValue );
      list.push(inputValue);

      $(ev.currentTarget).trigger('reset');

      render();

      let urlWithInput = "http://www.omdbapi.com/?apikey=53aa2cd6&t=" + inputValue;

      $.ajax({
            url:urlWithInput
        }).then(
            (data)=>{
                console.log(data);
                $('#title').text(data.Title);
                $('#year').text(data.Year);
                $('#rated').text(data.Rated);

                // $('.container').append($('<img>').attr("src", data.Poster));


$('.card-columns').append($('<div>').addClass("card").html("<div class='card-header'><h4 class='my-0 font-weight-normal'>"+data.Title+"</h4></div><div class='card-body'><img class='img-responsive' style='width:100%' src='"+data.Poster+"'><ul class='list-unstyled mt-3 mb-4'><li>Year:"+data.Year+"</li><li>Rated:"+data.Rated+"</li><li>Email support</li><li>Help center access</li></ul><button type='button' class='btn btn-lg btn-block btn-outline-primary'>Buy movie tickets!</button></div>"));


            },
            ()=>{
                console.log('bad request');
            }
        );
    });


    // $.ajax({
    //     url:'http://www.omdbapi.com/?apikey=53asdasdaa2cd6&t=Frozen',
    //     success: (data)=>{
    //         console.log("ajax is successful");
    //         console.log(data);
    //     },
    //     error: (data)=>{
    //         console.log('bad request');
    //         console.log(data);
    //     }
    // });





});
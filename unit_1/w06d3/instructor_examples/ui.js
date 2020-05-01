

$(()=> {
    console.log(app);
    app.banners.forEach(banner => {
        $('body').append($('<h3>').text(banner));
    });
});
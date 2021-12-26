// $(".content").hide()
// $('.bt').removeClass('card')

// function menu(id){
//     $(".menu").hide();

//     $(`#${id}2`).show()
//     $('.bt').removeClass('card')
//     $(`#${id}`).addClass("card")
    
// }


app.get('/nota', (req, res) => {
    res.sendFile(path.join(__dirname, './nota.pug'))
})


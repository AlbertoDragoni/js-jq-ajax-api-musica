$(document).ready(function(){

    var source = $("#cards-template").html();
    var templateCard = Handlebars.compile(source);

    $.ajax({
        url: "https://flynn.boolean.careers/exercises/api/array/music",
        method: "GET",
        success: function (data) {
            var albums = data.response;
            console.log(albums);
            for (var i = 0; i < albums.length; i++) {
                var album = albums[i];
                console.log(album);
                var albumTemplate = {
                    albumCover: album.poster,
                    titoloDisco: album.title,
                    autore: album.author,
                    anno: album.year
                };
                var cardAlbum = templateCard(albumTemplate);
                $('.container-cards').append(cardAlbum);
            }


        },
        error: function(){

        }

    });












});

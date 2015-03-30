$(function () {
    'use strict';

    var blueImpVideos = []

    // Load videos from Youtube Playlist.
    $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/playlistItems',
        data: {
            format: 'json',
            part: 'snippet',
            maxResults: 10,
            playlistId: 'PL4A0CFFF50A8993AD',
            key: 'AIzaSyBPvS0Svzi2ibyFlxZfHcp0orZZfHB0ZP4' // HCB
        }
    }).done(function (result) {
        var videosContainer = $('#videos-gallery');
        var html = [];
        // Add the demo images as links with thumbnails to the page:
        $.each(result.items, function (index, video) {
            var videoUrl = "https://www.youtube.com/watch?v=" + video.snippet.resourceId.videoId;
            html.push('<li><a href="' + video.snippet.title + '">');
            html.push('<iframe width="420" height="315" src="https://www.youtube.com/embed/' + video.snippet.resourceId.videoId + '" frameborder="0" allowfullscreen="" style="width: 100%;"></iframe>');
            html.push('</a>');
            html.push('<h3><a href="' + videoUrl + '">' + video.snippet.title + '</h3>');
            html.push('</a></li>');
            videosContainer.html(html.join(''));
        });
    });

});
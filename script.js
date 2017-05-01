$(document).ready(function() {

 $('button').on('click', function() {
   var search = $('#search').val();
     searchReddit(search);
     console.log(search);
  });


  function searchReddit(subReddit) {
    $.get('http://www.reddit.com/r/' + subReddit + '.json').done(function(response){

      console.log(response.data.children[0].data);

        response.data.children.forEach(function(x) {
        var title = x.data.title;
        var url = x.data.url;
        var thumb = x.data.thumbnail;
        var author = x.data.author;


        //
        // var thumbnail = response.data.children[x].data.thumbnail;



        $('body').append('<div>' + title + '</div>');
        $('body').append('<img src=' + thumb + '>');
        $('body').append('<p><a href=' + url + '</a></p>');
        $('body').append('<p>' + 'Author:' + ' ' + author + '</p>');

      });

  });
}
});

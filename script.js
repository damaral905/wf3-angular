$(function(){   /* apres modification on a rajouter un id  toggleDisplay */
    $('#toggleDisplay').click(function(e) {
    e.preventDefault();
    $('form').toggleClass('displayed');
    });

});

/* $(function(){  (avant modification)
    $('main button').click(function(e) {
    e.preventDefault();
    $('form').toggleClass('displayed');
    }); */

/* test */
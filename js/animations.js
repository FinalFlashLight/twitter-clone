$(document).ready(function(){
  console.log('doc-ready');
  var realname = 'Ryan';
  var username = '@halfes';
  $('#profile-summary > .content').append('<p>' + realname + '</p>');

  //extend when click on tweet compose
  $('.tweet-compose').on('click', function(){
    $('#tweet-controls').css('display', 'block');
    $('.tweet-compose').css('height', '5em')
  });

  //tweet composing
  $('.tweet-compose').on('keyup', function(){
    $('#char-count').text(function(){
      var num = 140 - $('.tweet-compose').val().length;
      if(num < 0){
        $('#tweet-submit').prop('disabled', true);
      }
      else{
        $('#tweet-submit').prop('disabled', false);
      }
      if(num <= 10){
        $('#char-count').css('color', 'red');
        return num;
      }
      else
        $('#char-count').css('color', '#999');
        return num;
    });
  }); //end of tweet composing

  //tweet submit button/making new tweets
  $('#tweet-submit').on('click', function(){
    //if theres content, make a tweet
    if($('.tweet-compose').val().length > 0){
      var content = $('.tweet-compose').val();
      console.log('making a tweet ' + content);
      $('#stream').prepend('<div class="tweet">'
      + '<div class="content">'
        + '<img class="avatar" src="img/alagoon.jpg" />'
        + '<strong class="fullname">' + realname +'</strong><span class="username">'+ username + '</span>'
        + '<p class="tweet-text">'+ content + '</p>'
        + '<div class="tweet-actions">'
          + '<ul>'
            + '<li><span class="icon action-reply"></span> Reply</li>'
            + '<li><span class="icon action-retweet"></span> Retweet</li>'
            + '<li><span class="icon action-favorite"></span> Favorite</li>'
            + '<li><span class="icon action-more"></span> More</li>'
          + '</ul>'
        + '</div>'
        + '<div class="stats">'
          + '<div class="retweets">'
            + '<p class="num-retweets">30</p>'
            + '<p>RETWEETS</p>'
          + '</div>'
          +'<div class="favorites">'
            + '+<p class="num-favorites">6</p>'
            + '<p>FAVORITES</p>'
          + '</div>'
          + '<div class="users-interact">'
            + '<div>'
              + '<img src="img/vklimenko.jpg" />'
              + '<img src="img/funwatercat.jpg" />'
            + '</div>'
          + '</div>'
          + '<div class="time">'
            + new Date()
          + '</div>'
        + '</div>');
    };
  }); //end of submit button/creating a tweet

  //hovering a tweet
  $('.tweet').hover(function(){
    //reveal .tweet-actions
    $(this).find('.tweet-actions').css('display', 'block');

  },
  function(){
    //hide .tweet-actions
    $(this).find('.tweet-actions').css('display', 'none');

  }
  );
  //clicking a tweet
  $('.tweet').on('click', function(event){
    var dispStats = $(this).find('.stats').css('display');
    if(dispStats === 'none'){
      $(this).find('.stats').fadeIn();
      $(this).find('.reply').fadeIn();
    }
    else{
      $(this).find('.stats').css('display', 'none');
      $(this).find('.reply').css('display', 'none');
    }
  });
}); //end of document ready

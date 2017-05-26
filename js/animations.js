$(document).ready(function(){
  $('.tweet-compose').on('click', function(){
    $('#tweet-controls').css('display', 'block');
    $('.tweet-compose').css('height', '5em')
  });
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


  });
});

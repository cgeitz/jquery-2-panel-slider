$( document ).ready(function() {
  //variables
  var 
      $first  = $("#first"),
      $third  = $("#third");

  //homepage sliding panels
  $first.click(function() {
    if( $first.css('z-index' ) == "1" ){ 
      $first.animate({
        left : "+=50%"
      });
      $first.css('z-index', '10');
    }
    else{ 
      $first.animate({
        left : "0"},function() {
          $first.css('z-index', '1');
      });
    }
  });
  $third.click(function() {
    if( $third.css('z-index' ) == "1" ){ 
      $third.animate({
        right : "+=50%"
      });
      $third.css('z-index', '10');
    }
    else{ 
      $third.animate({
        right : "0"
      });
      $third.css('z-index', '1');
    }
  });

 });
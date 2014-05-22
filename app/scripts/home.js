
var $container = $('.container');

(function() {

  window.scrollTo( 0, 0 );

  addItem( {id:'firstImage', image:'' } );

  var $firstImage = $('#firstImage');

  // var packery = new Packery( document.getElementById('projects') ,{gutter:20, transitionDuration:'0s'});

  // packery.on( 'layoutComplete', function() {
  //   $( ".container .item" ).each(function( index ) {
  //     TweenLite.to( $(this), .4, {delay:.06 * index, opacity:1, scale:1 , ease:Quad.easeInOut } );
  //   });
  // } );
  //
  // packery.layout();

  $(".main").onepage_scroll({
     sectionContainer: "section",
     responsiveFallback: 600,
     loop: false,
     pagination: false,
     easing: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
     animationTime: 800,
  });

  handleResize($( window ).width(), $( window ).height() );

  $(document).foundation();

  $( window ).resize(function() {
    handleResize($( window ).width(), $( window ).height() );
  });


  showElements();
  // initialisePushState();

  $(document).on('click', 'a', function (event) {

    event.preventDefault();

    var targetID = event.target.href.split('#')[1];
    var dataSection = $(event.target).data('section');

    $(".main").moveTo(dataSection);

    $('.top-bar-section li').each(function(index, value) {
      $(value).find('a').css({'border-bottom':'2px solid transparent','color':'#666'});
    });

    if(dataSection === 1){ return; }

    $(event.target).css({'border-bottom':'2px solid #222',  'color':'#222'});

    if(dataSection === 4){
       $('#projects-nav').css({'border-bottom':'2px solid #222','color':'#222'});
    }

    currentSection = targetID;

    // setPushState( {title:targetID, href:targetID} );
    // scrollToSection( targetID, 600, null );
  });

})();


var currentSection = 'intro';

function scrollToSection(section, time, callback) {

  var diff = 90;
  var ease = 'easeInOutQuart';

  if( time === 0.5 ){
    ease = 'linear';
  }

  if( section === 'work' ){  diff = 0; }
  else if ( section === 'about' ){ diff = 70 }
  else if ( section === 'projects' ){ diff = 0 }

  $( '#' + section).velocity("scroll", {  duration:time,
                                          easing:ease, offset:-diff,
                                          complete: onComplete(callback)
                                        });

  function onComplete(callback) {
    if (callback && typeof(callback) === "function") {
      callback();
    }
  }
}

function showElements() {

  $('.intro').css( { 'visibility': 'visible'} );
  $('.about').css( { 'visibility': 'visible'} );
  $('.lab').css( { 'visibility': 'visible'} );
  $('#intro').css( { 'visibility': 'visible'} );
  $('#about').css( { 'visibility': 'visible'} );
  $('#lab').css( { 'visibility': 'visible'} );

}

function handleResize(w, h) {

  var centerValue = ( (h / 2) - 130 );

  // $('.intro').css( { 'height': (h ) + 'px' , 'padding-top': (centerValue +100)+ 'px'} );
  // $('.about').css( { 'height': (h ) + 'px' , 'padding-top': centerValue + 'px'} );
  // $('.lab').css( { 'height': (h ) + 'px' , 'padding-top': centerValue + 'px'} );

  // scrollToSection( currentSection, 0.5 ,null );
}

function addItem(data) {
  var contentString = '<div id=' + data.id + ' class="item w4 h4" style="background-position: center center; background-image: url(' + data.image + ');"><h1>Hello World</h1></div>';
  $container.prepend(contentString);
}

function initialisePushState() {

  if (typeof history.pushState === 'undefined') {
    console.log('fail');
  }
  else {
    console.log('HTML5 History API available');
  }

}

function setPushState(state) {
   history.pushState(state.title, state.title, state.href);
}

addEvent(window, 'popstate', function (event) {
  var data = event.state;
  console.log('popstate', event);
  console.log(event.state || { url: "unknown", name: "undefined", location: "undefined" });
});

addEvent(window, 'hashchange', function (event) {
  console.log('hashchange', event);
});

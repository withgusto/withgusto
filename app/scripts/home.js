
function appendRandomSizedItems( container ) {
  var frag = document.createDocumentFragment();
  for ( var i=0; i < 35; i++ ) {
    var item = document.createElement('div');
    item.className = 'item';
    var w = Math.floor( Math.random() * Math.random() * 180 ) + 20;
    var h = Math.floor( Math.random() * Math.random() * 180 ) + 20;
    item.style.width  = w + 'px';
    item.style.height = h + 'px';
    frag.appendChild( item );
  }

  container.appendChild( frag );
}

var $container = $('.container');

(function() {

  addItem( {id:'firstImage', image:'../../images/beyond1.jpg' } );

  var $firstImage = $('#firstImage');

  var ex4 = document.getElementById('work');
  var packery = new Packery( ex4 ,{gutter:20, transitionDuration:'0s'});

  packery.on( 'layoutComplete', function() {
    $( ".container .item" ).each(function( index ) {
      TweenLite.to( $(this), .4, {delay:.06 * index, opacity:1, scale:1 , ease:Quad.easeInOut } );
    });
  } );

  packery.layout();

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

    setPushState( {title:targetID, href:targetID} );

    scrollToSection( targetID );

  });

})();

function scrollToSection(section) {
  var diff = 100;
  if( section === 'work' ){  diff = 0; }

  $( '#' + section).velocity("scroll", { duration:400, ease:'easeOutQuad', offset:-diff } );
}

function showElements() {
  $('.intro').css( { 'visibility': 'visible'} );
  $('.about').css( { 'visibility': 'visible'} );
}

function handleResize(w, h) {

  var centerValue = ( (h / 2) - 140 )+ 'px';

  $('.intro').css( { 'height': (h ) + 'px' , 'padding-top': centerValue } );
  $('.about').css( { 'height': (h ) + 'px' , 'padding-top': centerValue } );
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

////= require require-js
//= require foundation.min
//= require packery/packery

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

  var ex4 = document.getElementById('ex4');
  var packery = new Packery( ex4 ,{gutter:20, transitionDuration:'0s'});

  packery.on( 'layoutComplete', function() {
    $( ".container .item" ).each(function( index ) {
      TweenLite.to( $(this), .4, {delay:.06 * index, opacity:1, scale:1 , ease:Quad.easeInOut } );
    });
  } );

  packery.layout();
  Foundation.init();

})();

function addItem(data) {
  var contentString = '<div id=' + data.id + ' class="item w4 h4" style="background-position: center center; background-image: url(' + data.image + ');"><h1>Hello World</h1></div>';
  $container.prepend(contentString);
}

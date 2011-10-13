( function( $ ) {
  
  //Bind to the BC init event, which tells us that our DOM and device is ready to be interacted with.
  $( bc ).bind( "init", init );
  
  //Any initialization code should go in here
  function init() {
    //Fetch our data from the App Cloud studio.  Log into the studio and create a new content feed to get your ID.
    bc.core.getData( "4e97051b1f199842cd01bd80", render  );
  }
  
  /**
   * Update the DOM with new HTML generated from the data.
   */
  function render( data ) {
    var html = "";
    for( var i=0, len=data.length; i < len; i++ ) {
      html += "<li><a href='#'>" + data[i].summary + "</a></li>";
    }
    
    //Need to refresh the listview after we update the HTML
    $( ".schedule-container" ).html( html )
                              .listview( "refresh" );
  }
  
})( jQuery );


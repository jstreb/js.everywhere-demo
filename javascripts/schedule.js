( function( $ ) {
  
  /** A global private variable to keep the current data.*/
  var _data;
  
  //Bind to the BC init event, which tells us that our DOM and device is ready to be interacted with.
  $( bc ).bind( "init", init );
  
  //Any initialization code should go in here
  function init() {
    //Fetch our data from the App Cloud studio.  Log into the studio and create a new content feed to get your ID.
    bc.core.getData( "4e97051b1f199842cd01bd80", render  );
    
    //Setup any of event listeners that we need.
    registerEventListeners();
  }
  
  /**
   * Update the DOM with new HTML generated from the data.
   */
  function render( data ) {
    var html = "";
    
    //store the data for future use
    _data = data;
    
    //Need to refresh the listview after we update the HTML
    $( ".schedule-container" ).html( Mark.up( bc.templates.scheduleList, { "results": data } ) )
                              .listview( "refresh" );
  }
  
  /**
   * All of our event listeners.
   */
  function registerEventListeners() {
    //Register as a delegate since the HTML is built dynamically.
    $( "body" ).delegate( "li", "tap", handleListTap );
  }
  
  /**
   * Handles the list tap by populating the details page and transitioning to it.
   */
  function handleListTap( evt ) {
    var detailData
      , htmlSnippet;
    
    //Get the data for the presentation.
    detailData =  _data[ $( evt.currentTarget ).index() ];
    
    //Create the HTML markup using the templates.
    htmlSnippet = Mark.up( bc.templates.scheduleDetailPage, detailData );
    
    //Set the inner HTMl of the details container.
    $( ".detail-container" ).html( htmlSnippet );
    
  }
  
})( jQuery );


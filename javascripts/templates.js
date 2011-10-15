bc.templates = bc.templates || {};

( function( templates ) {
  
  //The schedule templates
  templates.scheduleList = "{{results}}{{if start-time|newTime}}<li data-role='list-divider'>{{start-time}}</li>{{/if}}<li><a href='#details'>{{summary}}</a></li>{{/results}}";
  
  //The detail page of the schedule template
  templates.scheduleDetailPage = "<h3>{{summary}}</h3><p>{{description}}</p>";
  
})( bc.templates );
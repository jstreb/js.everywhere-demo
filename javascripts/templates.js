bc.templates = bc.templates || {};

( function( templates ) {
  
  //The schedule templates
  templates.scheduleList = "{{results}}<li><a href='#details'>{{summary}}</a></li>{{/results}}";
  
  //The detail page of the schedule template
  templates.scheduleDetailPage = "<h3>{{summary}}</h3><p>{{description}}</p>";
  
})( bc.templates );
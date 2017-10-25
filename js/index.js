$(document).ready(function() {
  $("button").click(function(){
    var searchTerm = $("#searchTerm").val();
    var url="https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search="+searchTerm;    
    $.getJSON(url).done(function( json ) { 
      var html="";
        for(var i=0;i <json[1].length;i++)
          {            
            html+="<a href='"+json[3][i]+"' target='blank'><div class='box'>"+"<h1>"+json[1][i]+"</h1>"+"<p>"+json[2][i]+"</p></div></a>";                
          }
      $("#results").html(html);
  })
  .fail(function( jqxhr, textStatus, error ) {
    var err = textStatus + ", " + error;
    console.log( "Request Failed: " + err );
});
});
});
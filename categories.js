
$( document ).delegate("#cat", "pageinit", function() {
   
   var jqxhr = $.getJSON('http://api.ent.nokia.com/1.x/'+localStorage.country+'/mixes/groups?domain=music&itempsperpage=20&startindex=0&app_id='+localStorage.appid+'&callback=?', null, null,'application/vnd.nokia.ent.radiogroups+json')
   .done(function(result) {
      console.log(result.data);

      
      var list = $("#catList").listview();
      $(result.data.items).each(function(index){
         $(list).append('<li><a href="index.html#mixgroup" onclick="sessionStorage.mixGroupId=' + this.id+ '">'    
           + this.name + '</a></li>');
      });

      $("#catList").listview('refresh');
   })
   .fail(function() { console.log( "error" ); });
});
